import PokemonList from "./PokemonList";
import '../css/Home.css'
import SearchBar from "./SearchBar";
import { usePokemon } from "../hooks/usePokemon";


export default function Home() {
  const { currentPokemons, currentPage, setCurrentPage, totalPages, loading, filterPokemons } = usePokemon()


  return (
    <>
      <div className="home-title">
        <h1>Welcome to the Pokédex</h1>
      </div>
      <div className="home-search">
        <SearchBar onSearch={filterPokemons} />
      </div>
      <div className="container-home">
        <PokemonList
          pokemons={currentPokemons}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          loading={loading} />
      </div>
    </>
  )
}