import '../css/Details.css'

export default function Details({ pokemon }) {
  return (
    <div className="container-details">
      <div>
        <span className='details-name'>{pokemon.name}</span>
      </div>
      <div>
        <img src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name} />
      </div>
      <div>

      </div>
    </div>
  )
}