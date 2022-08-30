import Image from "next/image"
import Link from "next/link"
import Links from "../components/Links"


function Contact() {
  return (
    <div className="contactPage">
      <h2>If you think that...</h2>
      <ul>
        <li>We can work together</li>
        <li>I can make a website for you</li>
        <li>You want to tell me something</li>
        <li>You want to give me feedback about my website</li>
      </ul>
      <h3>You Can Contact Me From One of These Buttons Anytime</h3>
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