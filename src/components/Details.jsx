import '../css/Details.css'

export default function Details({ pokemon }) {

  function letter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  console.log(pokemon)
  return (
    <div>

      <div className="container-pokemon">
        <div>
          <span className='pokemon-name'>{letter(pokemon.name)}</span>
          <span className='pokemon-id'>{pokemon.id}</span>
        </div>
        <div>
          <img className='pokemon-images' src={pokemon.image}
            alt={pokemon.name} />
        </div>
        <div>
          <span>Type: {pokemon.types.join(' / ')}</span>
        </div>
        <div className='pokemon-size'>
          <span>Height {pokemon.height}</span>
          <span>Weight {pokemon.weight}</span>
        </div>
      </div>

      <div className='container-details'>
        <span>Information: {pokemon.description}</span>
      </div>

    </div>



  )

}
