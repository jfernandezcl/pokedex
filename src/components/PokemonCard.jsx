import { useNavigate } from 'react-router-dom'
import '../css/PokemonCard.css'

function letter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
} // Para la primera letra mayúscula


export default function PokemonCard({ pokemon }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/pokemon/${pokemon.name.toLowerCase()}`)
  }
  return (
    <div className="container-card" onClick={handleClick}>
      <div className='card-pokemon'>
        <img className='card-imagen' src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className='container-title'>
        <span className='card-id'>{pokemon.id}</span>
        <span className='card-name'>{letter(pokemon.name)}</span>
        <span className='card-type'>Type: {pokemon.types.join(' / ')}</span>
      </div>
      <div className='container-info'>
        <span className='card-size'>H {pokemon.height}</span>
        <span className='card-size'>W {pokemon.weight}</span>
      </div>
    </div>
  )
}

