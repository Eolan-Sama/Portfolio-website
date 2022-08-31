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
      <div className="welcome">
      <h1>WELCOME</h1>
      <p>24, Turkey, Frontend Developer</p>
      <p>Wanna learn more about me? Start clicking buttons !</p>
      </div>
      <Links page={'main'}/>
      
    </div>
  )
}
export default Home