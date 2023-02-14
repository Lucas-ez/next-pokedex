import PokemonCard from "../pokemonCard/PokemonCard"
import './pokemonList.css'

function PokemonList({pokemons}) {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => 
      <div key={pokemon.id + pokemon.name}>
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      </div>
      )}
    </div>
  )
}

export default PokemonList