import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Link className={styles.start_btn} href={'/pokemons'}>Start</Link>
    </main>
  )
}