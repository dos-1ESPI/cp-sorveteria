import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import SaboresSemana from "../components/SaboresSemana";
import MontePote from "../components/MontePote";
import Footer from '../components/Footer'
import NossaHistoria from '../components/NossaHistoria'
import Orcamento from '../components/Orcamento'
import PasseAqui from '../components/PasseAqui'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <div>
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
