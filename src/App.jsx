import { useState } from "react"
import About from "./components/About/About"
import Campus from "./components/Campus/Campus"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import { Hero } from "./components/Hero/Hero"
import Navbar from "./components/navbar/NAvbar"
import Programs from "./components/Programs/Programs"
import Testimoials from "./components/Testimoials/Testimoials"
import Title from "./components/Title/Title"
import Video from "./components/Video/Video"

const App = () => {

  const [playState, setPlayState] = useState(false)


  return (
    <div>

      <Navbar/>

      <Hero/>

      <div id="container">
        <Title subTitle='Our Program' title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonials' title='What Student Says'/>
        <Testimoials/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
    
      <Video playState={playState}  setPlayState={setPlayState} />
    </div>
  )
}

export default App