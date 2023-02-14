import Link from "next/link"
import './pokemonCard.css'

const getPokemonInfo = (name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then( res => res.json())
}

function PokemonCard({pokemon}) {

  const { name } = pokemon
  // const pokemonInfo = await getPokemonInfo(name)

  return (
    <Link href={`/pokemons/${pokemon.name}`} className='PokemonCard'>
      {/* <img src={`${pokemonInfo.sprites.front_default}`} alt={pokemonInfo.name} /> */}
      <div className="name">{pokemon.name}</div>
    </Link>
  )
}

export default PokemonCard