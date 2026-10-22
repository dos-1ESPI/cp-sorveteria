import { Link } from "react-router-dom";
import morango from "../assets/morango.jpg";
import cookies from "../assets/cookies.jpg";
import baunilhaChocolate from "../assets/baunilha-chocolate.jpg";
import doceDeLeite from "../assets/doce-de-leite.jpg";

const sabores = [
    {
        nome: "Morango com chocolate",
        descricao: "Morango fresco com lascas de chocolate meio amargo.",
        selo: "Clássico",
        imagem: morango,
        alt: "Pote com duas bolas de sorvete de morango com pedaços de chocolate",
    },
    {
        nome: "Chocolate com cookies",
        descricao: "Cremoso, com pedaços de biscoito de chocolate.",
        selo: "Novo",
        imagem: cookies,
        alt: "Casquinha de sorvete de chocolate com pedaços de biscoito",
    },
    {
        nome: "Baunilha e chocolate",
        descricao: "Massa macia de baunilha com chocolate intenso.",
        selo: "Clássico",
        imagem: baunilhaChocolate,
        alt: "Casquinha de sorvete cremoso de baunilha e chocolate",
    },
    {
        nome: "Doce de leite",
        descricao: "Doce de leite caseiro com calda caramelizada.",
        selo: "Favorito",
        imagem: doceDeLeite,
        alt: "Casquinha de sorvete de doce de leite com calda escorrendo",
    },
];

// Cor do selo de acordo com o tipo
const coresSelo = {
    Novo: "bg-morango text-white",
    Clássico: "bg-casquinha text-chocolate",
    Favorito: "bg-pistache text-chocolate",
};

export default function SaboresSemana() {
    return (
        <section id="sabores" className="bg-white font-sans">
            <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
                {/* Cabeçalho da seção */}
                <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-morango">
                            Sabores da semana
                        </p>
                        <h2 className="font-display text-3xl font-bold text-chocolate md:text-4xl">
                            Saiu da máquina agora
                        </h2>
                    </div>
                    <Link
                        to="/produtos"
                        className="text-sm font-semibold text-morango underline underline-offset-4 hover:brightness-110"
                    >
                        Ver todos os sabores
                    </Link>
                </div>

                {/* Cards */}
                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {sabores.map((sabor) => (
                        <li
                            key={sabor.nome}
                            className="group rounded-3xl bg-baunilha p-3 transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="overflow-hidden rounded-2xl">
                                <img
                                    src={sabor.imagem}
                                    alt={sabor.alt}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="px-2 pb-3 pt-4">
                                <span
                                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${coresSelo[sabor.selo]}`}
                                >
                                    {sabor.selo}
                                </span>
                                <h3 className="mt-3 font-display text-lg font-semibold text-chocolate">
                                    {sabor.nome}
                                </h3>
                                <p className="mt-1 text-sm text-chocolate/70">{sabor.descricao}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}