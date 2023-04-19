import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maderafi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         <Image src="/MadeIn.png" alt="Vercel Logo" width={300} height={200} />🪑
        </h1>

   
      </main>

      <footer className={styles.footer}>
       
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/ColorMetta.png" alt="Vercel Logo" width={45} height={60} />
          </span>
      
      </footer>
    </div>
  )
}
