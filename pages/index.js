import Head from 'next/head'
import Links from "./../components/Links"
import fs from 'fs/promises'
import path from 'path'
const Home = ({locale,welcome}) => {
  
  return (
    <div className="main-page">
      <Head>
        <title>Ahmet Emre Karaca</title>
        <meta name="description" content="Ahmet Emre Karaca Portfolio Website" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="welcome">
      {welcome.filter(p=>p.locale === locale).map((welcome,i)=>(
          <h1 className="welcomeTitle" key={i}>{welcome.welcomeText1}</h1>
        ))}
        <div className="main-midtext">
      {welcome.filter(p=>p.locale === locale).map((welcome,i)=>(
          <p key={i}>{welcome.welcomeText2}</p>
        ))}
      {welcome.filter(p=>p.locale === locale).map((welcome,i)=>(
          <p key={i}>{welcome.welcomeText3}</p>
        ))}
        </div>
      </div>
      <Links page={'main'} locale={locale}/>
      
    </div>
  )
}
export default Home
export async function getStaticProps({locale}){
  
  const filePath = path.join(process.cwd(), 'backend-data.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  return {
          props:
      { locale, welcome:data.welcome } 
          
          
        }
}