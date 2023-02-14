const getPokemonInfo = (name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then( res => res.json())
}

export default async function page({ params }) {
  const { name } = params
  const pokemonInfo = await getPokemonInfo(name)

  return (
    <div className='page'>
      <img src={`${pokemonInfo.sprites.front_default}`} alt={pokemonInfo.name} />
      <h4>
        {pokemonInfo.name}
      </h4>
    </div>
  )
}