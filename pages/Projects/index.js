import Links from "../../components/Links"
import fs from 'fs/promises'
import path from 'path'
import Head from "next/head"
import Image from "next/image"
function Projects({projectList,locale,Titles}) {
  return (
    <div className="projectPage">
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Ahmet Emre Karaca's Projects" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      {Titles.filter(p=>p.locale === locale).map((title, i)=>( 
          <h1 className='title'key={i}>{title.projectsTitle}</h1>))}
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
      <Links page={'project'} locale={locale}/>
    </div>
  )
}

export default Projects

export async function getStaticProps({locale}){
  const filePath = path.join(process.cwd(),'backend-data.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  return {props:{projectList: data.projectList,locale,Titles:data.titles}}
}