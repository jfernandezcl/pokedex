import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Details from "./Details";





export default function PokemonDetail() {
  const { name } = useParams()
  const [selectedPokemon, setSelectedPokemon] = useState()
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if (!response.ok) {
          throw new Error('Pokémon no encontrado')
        }
        const data = await response.json()
        setSelectedPokemon(data)
        setError(null)
      } catch {
        setSelectedPokemon(null)
        setError(error.message)
      }
    }
    if (name) {
      fetchPokemon()
    }

  }, [name])



  return (
    <div>
      {error && <p>{error}</p>}
      {selectedPokemon ? <Details pokemon={selectedPokemon} /> : !error && <p>Loading...</p>}
    </div>
  )

}



/*if (loading) {
  return (
    <div className="container-spinner">
      <div className="spinner"></div>
    </div>
  )
}

if (!pokemon) {
  return <div>Pokémon not found</div>
}*/