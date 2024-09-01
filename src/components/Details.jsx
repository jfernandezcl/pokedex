import '../css/Details.css'

export default function Details({ pokemon }) {

  function letter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (

    <>
      <div className='pokemon-header'>
        <span className='pokemon-name'>{letter(pokemon.name)}</span>
        <span className='pokemon-id'>{pokemon.id}</span>
      </div>

      <div className='container-primary'>
        <div>
          <img className='pokemon-images'
            src={pokemon.image}
            alt={pokemon.name} />
        </div>

        <div className='container-details'>
          <span>{pokemon.description}</span>
          <span>Type: {pokemon.types.join(' / ')}</span>
          <span>Height {pokemon.height}</span>
          <span>Weight {pokemon.weight}</span>
        </div>

      </div>
    </>




  )

}
