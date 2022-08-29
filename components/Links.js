import Link from "next/link";
import {motion} from "framer-motion"

const Links = () => (
    <motion.div className="grid">
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
    </motion.div>
  );

  export default Links