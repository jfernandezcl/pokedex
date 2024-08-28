import '../css/Details.css'

export default function Details({ pokemon }) {

  function letter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <div className="container-details">
      <div>
        <span className='details-name'>{letter(pokemon.name)}</span>
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