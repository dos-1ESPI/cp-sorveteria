import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import SaboresSemana from "../components/SaboresSemana";
import MontePote from "../components/MontePote";
import Footer from '../components/Footer'
import NossaHistoria from '../components/NossaHistoria'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <SaboresSemana/>
      <MontePote/>
      <NossaHistoria/>
      <Footer/>
    </div>
  )
}

export default Home
