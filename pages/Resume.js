import Links from "../components/Links"
import fs from 'fs/promises'
import path from 'path'
import Head from "next/head"
function Resume({Education,Skills}) {
  return (
    
    <div className="resumePage">
      <Head>
        <title>My Resume</title>
        <meta name="description" content="Ahmet Emre Karaca's Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>My Resume</h1>
      <button disabled className="downloadButton">Download My Resume</button>
      <div className="summary">
        <p><b>Summary:</b> 24 years old. Living in Turkey. Frontend, UI/UX developer. I prefer Next.js, React.js, MongoDB and Vercel to build websites.</p>

      </div>
      <h2>Skills</h2>
      <div className="skillList">
        {Skills.map((skill)=>(
          <div className="skills" >
          <li className="liTitle" key={skill.skillName}><h4>{skill.skillName}</h4> </li>
          {skill.skillLevel.map((level)=>(<li className="liLevel" key={level.id}>{level.description}</li>))}
          </div>
        ))}
      </div>
      <div >
      <h2>Education History</h2>
      <ul className="education">
        {Education.map((schools)=>(
          <li  key={schools.schoolName}>{schools.schoolName}  - {schools.department} - {schools.time}</li>
        ))}
      </ul>
      </div>
      <Links/>
    </div>
  )
}

export default Resume

export async function getStaticProps(){
  const filePath = path.join(process.cwd(), 'backend-data.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  return {props:{Education: data.Education , Skills: data.Skills }}
}

