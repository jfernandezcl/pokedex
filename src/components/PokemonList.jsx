import { useEffect } from "react";
import PokemonGrid from "./PokemonGrid";
import "../css/PokemonList.css";

export default function PokemonList({
  pokemons,
  currentPage,
  setCurrentPage,
  totalPages,
  loading,
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {loading ? (
        <div className="container-spinner">
          <div className="spinner"></div>
        </div>
      ) : (
        <PokemonGrid pokemons={pokemons} />
      )}
      <div className="container-pages">
        <div>
          {currentPage > 1 && (
            <button
              className="button-pages"
              onClick={() => paginate(currentPage - 1)}
            >
              Previous page
            </button>
          )}

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              className={`button-pages ${
                currentPage === index + 1 ? "active-page" : ""
              }`}
              key={index}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          {currentPage > 1 && (
            <button
              className="button-pages"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage >= totalPages}
            >
              Next page
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
