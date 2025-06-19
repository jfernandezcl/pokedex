import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Details from "./Details";

export default function PokemonDetail() {
  const { name } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        if (!response.ok) {
          throw new Error("Pokémon no encontrado");
        }
        const data = await response.json();

        const responseDescription = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${name}`
        );
        if (!responseDescription.ok) {
          throw new Error("Pokémon no encontrado");
        }
        const dataDescription = await responseDescription.json();

        const formattedData = {
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          types: data.types.map((typeInfo) => typeInfo.type.name),
          image: data.sprites.other.home.front_default,
          images: data.sprites.other.home.front_shiny,
          description:
            dataDescription.flavor_text_entries[0].flavor_text.replace(
              /\f/g,
              ""
            ),
        };
        setSelectedPokemon(formattedData);
        setError(null);
      } catch (error) {
        setSelectedPokemon(null);
        setError(error.message);
      }
    };
    if (name) {
      fetchPokemon();
    }
  }, [name]);

  return (
    <div>
      {error && <p>{error}</p>}
      {selectedPokemon ? (
        <Details pokemon={selectedPokemon} />
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
}
