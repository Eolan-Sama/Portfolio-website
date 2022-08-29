import Image from "next/image"
import Link from "next/link"
import Links from "../components/Links"


function Contact() {
  return (
    <div className="contactPage">
      <h1>Contact Me</h1>
        <div className="iconLinks">
          <a className='icons' href='https://www.instagram.com/deathswit/'><Image src='/InstaLogo.png' width='30' height='30' alt="Instagram"/></a>
          <a className='icons' href='https://discordapp.com/users/142912132134993920'><Image src='/DiscordLogo.png' width='30' height='30' alt="Discord"/></a>
          <a className='icons' href='https://twitter.com/deathswit'><Image src='/TwitterLogo.png' width='30' height='30' alt="Twitter"/></a>
          <a className='icons' href="mailto:ahmetemre_k@hotmail.com"><Image src='/MailLogo.png' width='30' height='30' alt="Mail"/></a>
        </div>
      <Links/>
    </div>
    
  )
}

export default Contact