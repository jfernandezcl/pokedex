import { useEffect } from "react";
import { usePokemon } from "../hooks/usePokemon";
import PokemonGrid from "./PokemonGrid";

export default function PokemonList() {
  const { currentPokemons, currentPage, setCurrentPage, totalPages } = usePokemon()


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <PokemonGrid pokemons={currentPokemons} />
      <div>
        {currentPage > 1 && (
          <button onClick={() => paginate(currentPage - 1)}>Página anterior</button>
        )}

        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}

        {currentPage > 1 && (
          <button onClick={() => paginate(currentPage + 1)}>Página siguiente</button>
        )}
      </div>
    </div>
  )
}