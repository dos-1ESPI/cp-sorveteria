import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
}

