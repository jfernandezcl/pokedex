import { useEffect, useState } from "react";

export const usePokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(20);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const responses = await Promise.all(
        Array.from({ length: 150 }, (_, i) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
        )
      );

      const data = await Promise.all(responses.map((res) => res.json()));
      const formattedData = data.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types.map((typeInfo) => typeInfo.type.name),
        image: pokemon.sprites.other.home.front_default,
      }));
      setPokemons(formattedData);
      setFilteredPokemons(formattedData);
      setLoading(false);
    };

    fetchPokemons();
  }, []);

  const filterPokemons = (query) => {
    if (!query) {
      setFilteredPokemons(pokemons);
    } else {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPokemons(filtered);
    }
  };

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = filteredPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  return {
    pokemons,
    currentPokemons,
    filterPokemons,
    currentPage,
    setCurrentPage,
    totalPages: Math.ceil(filteredPokemons.length / pokemonsPerPage),
    loading,
  };
};
