'use client'
import { SearchBar, PokemonList } from '@/components'
import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function PokemonListPage() {

  const [pokemonList, setPokemonList] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then( res => res.json())
      .then( data => {
        setPokemonList(data.results)
      })
  }, [])

  return (
    <main className='page'>
      <div className={styles.container}>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput}/>
        <PokemonList pokemons={pokemonList} filter={searchInput}/>
      </div>
    </main>
  )
}
