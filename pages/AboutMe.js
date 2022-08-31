import Links from "../components/Links"
import Image from "next/image"
import profilePic from '../public/me.jpg'
import Head from "next/head"
import fs from 'fs/promises'
import path from 'path'
function AboutMe({aboutMe,locale,Titles}) {
  
  return (
    <div className="page">
      <Head>
        <title>About Me</title>
        <meta name="description" content="Everything About Ahmet Emre Karaca" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      {Titles.filter(p=>p.locale === locale).map((title,i)=>(
          <h1 key={i} className="title">{title.aboutMeTitle}</h1>
        ))}
      <Image src={profilePic} alt='Picture of Ahmet'/>
      
        <div className="aboutMe">
        {aboutMe.filter(p=>p.locale === locale).map((Aboutme,i)=>(
          <p className="textTopic" key={i}><i>{Aboutme.title1}</i></p>
        ))}
        {aboutMe.filter(p=>p.locale === locale).map((Aboutme,i)=>(
          <p className="aboutMeText"key={i}>{Aboutme.text1}</p>
        ))}
        {aboutMe.filter(p=>p.locale === locale).map((Aboutme,i)=>(
          <p className="aboutMeText"key={i}>{Aboutme.text2}</p>
        ))}
        {aboutMe.filter(p=>p.locale === locale).map((Aboutme,i)=>(
          <p className="aboutMeText"key={i}>{Aboutme.text3}</p>
        ))}
         {aboutMe.filter(p=>p.locale === locale).map((Aboutme,i)=>(
          <p className="textTopic"key={i}><i>{Aboutme.title2}</i></p>
        ))}
        {aboutMe.filter(p=>p.locale === locale).map((Aboutme,i)=>(
          <p className="aboutMeText"key={i}>{Aboutme.text4}</p>
        ))}
        {aboutMe.filter(p=>p.locale === locale).map((Aboutme,i)=>(
          <p className="textTopic"key={i}><i>{Aboutme.title3}</i></p>
        ))}
        {aboutMe.filter(p=>p.locale === locale).map((Aboutme,i)=>(
          <p className="aboutMeText"key={i}>{Aboutme.text5}</p>
        ))}
        </div>
      
      <Links page={'aboutMe'} locale={locale}/>
    </div>
  )
}

export default AboutMe

export async function getStaticProps({locale}){
  
  const filePath = path.join(process.cwd(), 'backend-data.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  return {
          props:
      {aboutMe: data.aboutMe, locale , Titles:data.titles } 
          
          
        }
}