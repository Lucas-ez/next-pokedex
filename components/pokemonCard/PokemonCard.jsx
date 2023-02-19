'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import './pokemonCard.css'

const getPokemonInfo = (name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then( res => res.json())
}

function PokemonCard({pokemon}) {

  const { name } = pokemon
  const [pokemonInfo, setPokemonInfo] = useState(null)

  useEffect(()=> {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then( res => res.json())
      .then( data => setPokemonInfo(data))
  }, [name])

  return (
    <Link href={`/pokemons/${pokemon.name}`} className='PokemonCard'>
      {
        !pokemonInfo ? 
        <div></div> :
        <img src={`${pokemonInfo.sprites.front_default}`} alt={pokemonInfo.name} />
      }
      <span className="name">{pokemon.name}</span>
    </Link>
  )
}

export default PokemonCard