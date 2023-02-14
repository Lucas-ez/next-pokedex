'use client'
import { SearchBar, PokemonList } from '@/components'
import { useEffect, useState } from 'react'

export default function PokemonListPage() {

  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then( res => res.json())
      .then( data => {
        setPokemonList(data.results)
      })
  }, [])

  return (
    <main className='page'>
      <SearchBar />
      <PokemonList pokemons={pokemonList}/>
    </main>
  )
}
