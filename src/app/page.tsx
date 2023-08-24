import Image from 'next/image'
import styles from './page.module.css'
import ReadFilesCHComponent from '@/components/readFilesCH'

export default function Home() {
  return (
    <main className={styles.main}>
      
      <ReadFilesCHComponent></ReadFilesCHComponent>
     

      
    </main>
  )
}
