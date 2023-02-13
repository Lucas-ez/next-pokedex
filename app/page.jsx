import styles from './page.module.css'
import { SearchBar, PokemonsList } from '@/components'

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchBar />
      <PokemonsList />
    </main>
  )
}
