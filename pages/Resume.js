import Links from "../components/Links"
import fs from 'fs/promises'
import path from 'path'
import Head from "next/head"

function Resume({Education,Skills,locale,Titles}) {
  
  return (
    
    <div className="resumePage">
      <Head>
        <title>My Resume</title>
        <meta name="description" content="Ahmet Emre Karaca's Resume" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      
      {Titles.filter(p=>p.locale === locale).map((title,i)=>(
          <h1 key={i} className="title">{title.resumeTitle}</h1>
        ))}
      {/*<button disabled className="downloadButton">Download My Resume</button>*/}
      <div className="summary">
      {Titles.filter(p=>p.locale === locale).map((title,i)=>(
          <p key={i}><b>{title.Summary}</b>&nbsp;{title.resumeSummary}</p>
        ))}
      </div>
      <h2>Skills</h2>
      <div className="skillList">
        {Skills.map((skill,i)=>(
          <div className="skills" >
          <li className="liTitle" key={skill.id}><h4>{skill.skillName}</h4> </li>
          {skill.skillLevel.filter(p=>p.locale === locale).map((level,i)=>(<li className="liLevel" key={i}>{level.description}</li>))}
          </div>
        ))}
      </div>
      <div >
      <h2>Education History</h2>
      <ul className="education">
        {Education.filter(p=>p.locale === locale).map((schools, i)=>( 
          <li  key={i}>{schools.schoolName}  - {schools.department} - {schools.time}</li>
        ))}
      </ul>
      </div>
      <Links page={'resume'} locale={locale}/>
    </div>
  )
}

export default Resume

export async function getStaticProps({locale}){
  
  const filePath = path.join(process.cwd(), 'backend-data.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  return {
          props:
      {Education: data.Education, Skills: data.Skills,locale, Titles:data.titles } 
          
          
        }
}
