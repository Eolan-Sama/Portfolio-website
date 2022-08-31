import Link from "next/link";
import {motion} from "framer-motion"

const ReturnButton = ({isPage}) =>{
  console.log(isPage)
  if (isPage=='main'){return;}
    
  else{
  return<div className="links-part2">
  <Link href="/">
  <a className="card">
    <h2>Return &rarr;</h2>
  </a>
    </Link>
    </div>}
}


const Links = ({page}) => (
    <motion.div className="grid">
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
          <h2>Contact &rarr;</h2>
        </a>
      </Link>
      </div>
      <ReturnButton isPage={page}/>
      
    </motion.div>
  );

  export default Links