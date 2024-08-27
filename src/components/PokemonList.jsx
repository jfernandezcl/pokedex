// Utilizar el hook personalizado
// Organizar la barra de busqueda y cuadrícula
import PokemonGrid from "./PokemonGrid";

export default function PokemonList({ pokemons }) {

  return (
    <div>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}