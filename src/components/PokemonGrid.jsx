// organizar y mostrar todas las tarjetas en una cuadrícula
import PokemonCard from "./PokemonCard";
import '../css/PokemonGrid.css'

export default function PokemonGrid({ pokemons }) {
  return (
    <div className="pokemon-cuadricula">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}