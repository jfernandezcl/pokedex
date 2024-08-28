import '../css/Details.css'

export default function Details({ pokemon }) {

  function letter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <div className="container-details">
      <div>
        <span className='details-name'>{letter(pokemon.name)}</span>
        <span className='details-id'>{pokemon.id}</span>
      </div>
      <div>
        <img src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name} />
      </div>
      <div>
        <span>Type: {pokemon.types.join(' / ')}</span>
      </div>
      <div>
        <span>H {pokemon.height}</span>
        <span>W {pokemon.weight}</span>
      </div>
    </div>
  )
}