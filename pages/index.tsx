import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/common/NavBar'
import HomeVideo from '../components/home/HomeVideo'
import Greetings from '../components/home/Greetings'
import Biography from '../components/home/Biography'
import Music from '../components/home/Music'
import Calendar from '../components/home/Calendar'
import Multimedia from '../components/home/Multimedia'
import Contact from '../components/home/Contact'
import Store from '../components/home/Store'
import metaImg from '../public/nina-lobo.jpg';
const Home: NextPage = () => {
  return (
    <>
      <Head>

        <title>Niña Lobo</title>
        <meta name="title" content="Niña Lobo" />
        <meta name="description" content="Niña Lobo es una jauría de lobas, un quinteto de indie-alternativo en Montevideo, Uruguay." />


        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Niña Lobo" />
        <meta property="og:description" content="Niña Lobo es una jauría de lobas, un quinteto de indie-alternativo en Montevideo, Uruguay." />
        <meta property="og:image" content="https://imgur.com/opPPUF6.jpg" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Niña Lobo" />
        <meta property="twitter:description" content="Niña Lobo es una jauría de lobas, un quinteto de indie-alternativo en Montevideo, Uruguay." />
        <meta property="twitter:image" content="https://imgur.com/opPPUF6.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <div className="container">

        <main>
          <Greetings />
          <Biography />
          <Music />
          <Calendar />
          <Multimedia />
          <Store />
          <Contact />

        </main>

        {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
      </div>
    </>
  )
}

export default Home
