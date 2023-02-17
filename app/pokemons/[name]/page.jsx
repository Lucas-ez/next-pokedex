import styles from './page.module.css'
import Link from 'next/link'

const getPokemonInfo = (name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then( res => res.json())
}

const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

export default async function page({ params }) {
  const { name } = params
  const pokemonInfo = await getPokemonInfo(name)

  return (
    <div className='page'>
      <div className={styles.container}>
        <section className={styles.section_top}>
          <Link href={'/pokemons'}>
            <h4>{'⬅'}</h4>
          </Link>
          <h4>{pokemonInfo.name}</h4>
          <div>
            {pokemonInfo.types.map(type => (
              <span key={type.type.name} 
              style={{
                backgroundColor: colours[type.type.name],
                padding: '0.4rem',
                borderRadius: '4px',
                textTransform: 'uppercase',
                color: 'white',
                marginLeft: '.4rem',
              }}>
                {type.type.name}
              </span>
            ))}
          </div>
        </section>
        <section className={styles.section_middle}>
          <div>
            <img src={`${pokemonInfo.sprites.front_default}`} alt={pokemonInfo.name} />
          </div>
          <div className={styles.stats}>
            {pokemonInfo.stats.map(stat => (
              <span key={stat.stat.name}>
                <span>{stat.stat.name}:</span>
                <span> {stat.base_stat}</span>
              </span>
            ))}
          </div>
        </section>
        <section className={styles.section_bottom}>
          <img src={`${pokemonInfo.sprites.front_default}`} alt={pokemonInfo.name + '-front_default'} />
          <img src={`${pokemonInfo.sprites.back_default}`} alt={pokemonInfo.name + '-back_default'} />
          <img src={`${pokemonInfo.sprites.front_shiny}`} alt={pokemonInfo.name + '-front_shiny'} />
          <img src={`${pokemonInfo.sprites.back_shiny}`} alt={pokemonInfo.name + '-back_shiny'} />
        </section>
      </div>
    </div>
  )
}