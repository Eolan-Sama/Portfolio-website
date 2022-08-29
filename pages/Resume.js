import Links from "../components/Links"
import fs from 'fs/promises'
import path from 'path'
function Resume({Education,Skills}) {
  return (
    <div className="resumePage">
      <div>
      <h1>Education History</h1>
      <ul>
        {Education.map((schools)=>(
          <li key={schools.schoolName}>{schools.schoolName}  - {schools.department} - {schools.time}</li>
        ))}
      </ul>
      </div>
      <h1>Skills</h1>
      <div className="skillList">
        {Skills.map((skill)=>(
          <div className="skills" >
          <li className="liTitle" key={skill.skillName}><h4>{skill.skillName}</h4> </li>
          {skill.skillLevel.map((level)=>(<li className="liLevel" key={level.id}>{level.description}</li>))}
          </div>
        ))}
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

