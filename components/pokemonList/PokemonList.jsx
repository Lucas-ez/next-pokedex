'use client'
import PokemonCard from "../pokemonCard/PokemonCard"
import './pokemonList.css'

function PokemonList({pokemons, filter}) {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => 
        (pokemon.name.includes(filter.toLowerCase())) 
          ?
            <div key={pokemon.id + pokemon.name}>
              <PokemonCard key={pokemon.id} pokemon={pokemon}/>
            </div>
          :
            null
      )}
    </div>
  )
}

export default PokemonList