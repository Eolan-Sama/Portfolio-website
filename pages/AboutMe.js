import Links from "../components/Links"
import Image from "next/image"
import profilePic from '../public/me.jpg'
import * as fs from 'fs/promises'
import path from 'path'
function AboutMe({aboutMe}) {
  
  return (
    <div className="page">
      <Image src={profilePic} alt='Picture of Ahmet'/>
      <div className="aboutMe">
      <ul>
      {aboutMe.map((Me) => (
        <p>{Me.text}</p>
      ))}
    </ul>
      </div>
      <Links/>
    </div>
  )
}

export default AboutMe

export async function getStaticProps(context){
  const filePath = path.join(process.cwd(), 'backend-data.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  return{props:{
    aboutMe: data.aboutMe

  }}
}