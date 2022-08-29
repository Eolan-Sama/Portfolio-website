
import "../styles/styles.css";
import "../styles/transition.css";
import TransitionEffect from "../components/TransitionEffect";
function MyApp({ Component, pageProps }) {
  return <div className="app-container">
            <TransitionEffect>
              <Component {...pageProps} />
              </TransitionEffect>
          </div>
          
  }

export default MyApp
