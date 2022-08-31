import Image from "next/image"
import Links from "../components/Links"
import Head from "next/head"
import fs from 'fs/promises'
import path from 'path'
function Contact({contact,contactBtnTxt,locale,Titles}) {
  return (
    <div className="contactPage">
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact Me via Buttons" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="contactButtonTitle">
      {Titles.filter(p=>p.locale === locale).map((title,i)=>(
          <h1 key={i} className="title">{title.contactMeTitle}</h1>
        ))}
      </div>
      <ul className="contactUl">
        {contact.filter(p=>p.locale === locale).map((contactText, i)=>( 
          <li key={i}>{contactText.description}</li>
        ))}
      </ul>
      <div className="contactButtonTitle">
      {contactBtnTxt.filter(p=>p.locale === locale).map((BtnTxt,i)=>(
          <h3 key={i} >{BtnTxt.description}</h3>
        ))}
      </div>
        <div className="iconLinks">
          <a className='icons' href='https://www.instagram.com/deathswit/'><Image src='/InstaLogo.png' width='30' height='30' alt="Instagram"/></a>
          <a className='icons' href='https://discordapp.com/users/142912132134993920'><Image src='/DiscordLogo.png' width='30' height='30' alt="Discord"/></a>
          <a className='icons' href='https://twitter.com/deathswit'><Image src='/TwitterLogo.png' width='30' height='30' alt="Twitter"/></a>
          <a className='icons' href="mailto:ahmetemre_k@hotmail.com"><Image src='/MailLogo.png' width='30' height='30' alt="Mail"/></a>
        </div>
      <Links page={'contact'} locale={locale}/>
    </div>
    
  )
}

export default Contact

export async function getStaticProps({locale}){
  
  const filePath = path.join(process.cwd(), 'backend-data.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  return {
          props:
      {contact: data.contact, contactBtnTxt: data.contactbuttontext,locale,
        Titles:data.titles} 
          
          
        }}