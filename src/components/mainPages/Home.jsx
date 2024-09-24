import About from "../About"
import Curtain from "../Curtain"
import Footer from "../Footer"
import Header from "../Header"
import Hero from "../Hero"
import Packages from "../Packages"
import TuskersInfo from "../TuskersInfo"


const Home = () => {
  return (
    <div id="home">
      <Curtain/>
        <Header/>
        <Hero/>
        <About />
        <Packages />
        <TuskersInfo />
        <Footer />
    </div>
  )
    
    
}

export default Home