import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import SaboresSemana from "../components/SaboresSemana";
import MontePote from "../components/MontePote";
import Footer from '../components/Footer'
import NossaHistoria from '../components/NossaHistoria'
import Orcamento from '../components/Orcamento'
import PasseAqui from '../components/PasseAqui'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <SaboresSemana/>
      <MontePote/>
      <NossaHistoria/>
      <Orcamento/>
      <PasseAqui/>
      <Footer/>
    </div>
  )
}

export default Home
