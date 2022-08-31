import Links from "../../components/Links"
import fs from 'fs/promises'
import path from 'path'
import Head from "next/head"
import Image from "next/image"
function Projects({projectList}) {
  return (
    <div className="page">
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Ahmet Emre Karaca's Projects" />
        <link rel="icon" href="/logo.svg" />
      </Head>
    <h1 className="title">Projects</h1>
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
      <Links page={'project'}/>
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