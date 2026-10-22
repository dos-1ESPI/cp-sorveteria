import { useState } from "react";
import Filtro from "../components/Filtro";
import Tamanhos from "../components/Tamanhos";
import CardapioProdutos from "../components/CardapioProdutos";
import NavBar from "../components/NavBar";

export default function Produtos() {
  const [filtro, setFiltro] = useState("Todos");
  const [busca, setBusca] = useState("");

  return (
    <main>
      <Filtro
        filtro={filtro}
        setFiltro={setFiltro}
        busca={busca}
        setBusca={setBusca}
      />
      <Tamanhos />
      <CardapioProdutos filtro={filtro} busca={busca} />
    </main>
  );
}