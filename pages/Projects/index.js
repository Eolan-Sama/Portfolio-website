import Links from "../../components/Links"
import fs from 'fs/promises'
import path from 'path'
import Link from "next/link"
import Image from "next/image"
function Projects({projectList}) {
  return (
    <div className="page">
    <h1>Projects</h1>
      <div className="projectList">
        {projectList.map((projects)=>(
          <div  key={projects.id}>
            <div className={"projectCard"}>
            <a href={projects.link}>{projects.title}</a>
            <a href={projects.link}>
              <Image src={projects.img} alt={projects.title} width='150' height='120' />
              </a>
              </div>
            </div>
        ))}
      </div>
      <Links/>
    </div>
  )
}

export default Projects

export async function getStaticProps(){
  const filePath = path.join(process.cwd(),'backend-data.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  return {props:{projectList: data.projectList}}
}