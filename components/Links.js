import Link from "next/link";
import {motion} from "framer-motion"
import Image from "next/image";
import trIcon from '../public/trIcon.png'
import enIcon from '../public/enIcon.png'
import { useRouter } from "next/router";
const ReturnButton = ({isPage,lang}) =>{
  
  if (isPage=='main'){return;}
    
  else{
  return<div className="links-part2">
  <Link href='/'>
  <a className="card">
    <h2>{lang} &rarr;</h2>
  </a>
    </Link>
    </div>}
}

const Links = ({page,locale}) => {
  console.log(locale)
  if (locale==='en-US') {
    return(<motion.div className="grid">
    <div className='links-part1'>
    <Link href="/AboutMe">
      <a className="card">
        
        <h2>About Me &rarr;</h2>
      </a>
    </Link>

    <Link href="/Resume">
      <a className="card">
        <h2>Resume &rarr;</h2>
      </a>
    </Link>

    <Link href="/Projects">
      <a className="card">
        <h2>Projects &rarr;</h2>
      </a>
    </Link>

    <Link href="/Contact">
      <a className="card">
        <h2>Contact Me &rarr;</h2>
      </a>
    </Link>
    </div>
    <div>
    <ReturnButton isPage={page} lang='Main Page'/>
    </div>
    <div className='lang-buttons'>
      <Link href='/' locale="tr-TR">
        <a className="langButton"><Image src={trIcon} alt='Change Language to Turkish' width={20} height={20}/></a>
      </Link>
      <Link href='/' locale="en-US">
        <a className="langButton"><Image src={enIcon} alt='Change Language to English' width={20} height={20}/></a>
      </Link>
    </div>
  </motion.div>
);
  }
  if (locale==='tr-TR') {
    return(<motion.div className="grid">
    <div className='links-part1'>
    <Link href="/AboutMe">
      <a className="card">
        
        <h2>Hakkımda &rarr;</h2>
      </a>
    </Link>

    <Link href="/Resume">
      <a className="card">
        <h2>Cv'im &rarr;</h2>
      </a>
    </Link>

    <Link href="/Projects">
      <a className="card">
        <h2>Projelerim &rarr;</h2>
      </a>
    </Link>

    <Link href="/Contact">
      <a className="card">
        <h2>İletişim &rarr;</h2>
      </a>
    </Link>
    </div>
    <div>
    <ReturnButton isPage={page} lang='Ana Sayfa'/>
    </div>
    <div className='lang-buttons'>
      <Link href='/' locale="tr-TR">
        <a className="langButton"><Image src={trIcon} alt='Change Language to Turkish' width={20} height={20}/></a>
      </Link>
      <Link href='/' locale="en-US">
        <a className="langButton"><Image src={enIcon} alt='Change Language to English' width={20} height={20}/></a>
      </Link>
    </div>
  </motion.div>
);
  }
}
  export default Links

  