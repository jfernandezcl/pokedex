import { useParams } from "react-router-dom";
import { usePokemon } from "../hooks/usePokemon";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import '../css/PokemonList.css'




export default function PokemonDetail() {
  const { name } = useParams()
  const { pokemons, loading } = usePokemon()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    if (pokemons.length > 0) {
      const foundPokemon = pokemons.find(p => p.name.toLowerCase() === name.toLowerCase())
      setPokemon(foundPokemon || null)
    }
  }, [name, pokemons])

  if (loading) {
    return (
      <div className="container-spinner">
        <div className="spinner"></div>
      </div>
    )
  }

  if (!pokemon) {
    return <div>Pokémon not found</div>
  }

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
    </div>
  )

}