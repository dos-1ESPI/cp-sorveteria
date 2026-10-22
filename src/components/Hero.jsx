import { Link } from "react-router-dom";
import sorvete from "../assets/sorvete-hero.png";

const destaques = [
    { titulo: "24", texto: "sabores na vitrine" },
    { titulo: "Ter–Dom", texto: "13h às 22h" },
    { titulo: "Delivery", texto: "no seu bairro" },
];

export default function Hero() {
    return (
        <section className="bg-baunilha font-sans">
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 md:grid-cols-2 md:px-6 md:py-20">
                {/* Texto */}
                <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-morango">
                        Sorveteria artesanal
                    </p>

                    <h1 className="font-display text-4xl font-bold leading-tight text-chocolate sm:text-5xl lg:text-6xl">
                        Sorvete feito todo dia,{" "}
                        <span className="text-morango">pertinho</span> de você.
                    </h1>

                    <p className="mt-6 max-w-md text-chocolate/80 leading-relaxed">
                        Ingredientes de verdade, frutas da estação e receitas que a gente
                        testa até ficar do jeito certo. Passe aqui ou peça sem sair de casa.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            to="/produtos"
                            className="rounded-full bg-morango px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                        >
                            Ver cardápio
                        </Link>
                        <a
                            href="https://wa.me/55NUMERO"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border-2 border-chocolate px-6 py-3 text-sm font-semibold text-chocolate transition hover:bg-chocolate hover:text-baunilha"
                        >
                            Pedir pelo WhatsApp
                        </a>
                    </div>

                    <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
                        {destaques.map((item) => (
                            <div key={item.titulo}>
                                <dt className="font-display text-xl font-semibold text-chocolate">
                                    {item.titulo}
                                </dt>
                                <dd className="text-sm text-chocolate/70">{item.texto}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Imagem */}
                <div className="relative overflow-hidden rounded-4xl bg-morango/25 aspect-square md:aspect-4/4">
                    {/* Círculos decorativos */}
                    <span className="absolute -left-10 bottom-6 h-40 w-40 rounded-full bg-white/30" />
                    <span className="absolute right-8 top-8 h-24 w-24 rounded-full bg-white/40" />

                    <img
                        src={sorvete}
                        alt="Casquinha com duas bolas de sorvete de creme e pedaços de chocolate"
                        className="relative mx-auto h-full w-auto object-contain py-8 drop-shadow-xl"
                    />

                    {/* Selos */}
                    <span className="absolute left-5 top-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-chocolate shadow">
                        <span className="h-2 w-2 rounded-full bg-emerald-600" />
                        Feito hoje de manhã
                    </span>
                    <span className="absolute bottom-6 right-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-chocolate shadow">
                        <span className="h-2 w-2 rounded-full bg-morango" />
                        Novo: Baunilha Kinder Bueno
                    </span>
                </div>
            </div>
        </section>
    );
}