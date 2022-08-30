import Head from 'next/head'
import Image from 'next/image'

import Links from "./../components/Links"
const Home = () => {
  return (
    <div className="main-page">
      <Head>
        <title>Ahmet Emre Karaca</title>
        <meta name="description" content="Ahmet Emre Karaca Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Welcome Page
      <Links/>
      
    </div>
  )
}
export default Home