import { Link } from "react-router-dom";

export const filtros = ["Todos", "Clássicos", "Novos", "Favoritos"];

export default function Filtro({ filtro, setFiltro, busca, setBusca }) {
    return (
        <section className="bg-baunilha font-sans">
            <div className="mx-auto max-w-6xl px-4 pt-8 md:px-6 md:pt-12">
                {/* Breadcrumb */}
                <nav aria-label="Você está em" className="text-sm text-chocolate/70">
                    <Link to="/" className="hover:text-morango">Home</Link>
                    <span className="mx-1">/</span>
                    <span aria-current="page">Cardápio</span>
                </nav>

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-morango">
                    Nossos produtos
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-chocolate md:text-5xl">
                    O que tem na vitrine hoje
                </h1>
                <p className="mt-4 max-w-xl leading-relaxed text-chocolate/80">
                    A vitrine muda toda semana, mas os clássicos estão sempre aqui. Peça
                    no balcão, pelo WhatsApp ou pelo delivery.
                </p>

                {/* Filtros */}
                <div role="group" aria-label="Filtrar produtos" className="mt-8 flex flex-wrap gap-2">
                    {filtros.map((item) => {
                        const ativo = filtro === item;
                        return (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setFiltro(item)}
                                aria-pressed={ativo}
                                className={`rounded-full border-2 border-chocolate px-4 py-1.5 text-sm font-medium transition ${ativo
                                        ? "bg-chocolate text-baunilha"
                                        : "text-chocolate hover:bg-chocolate/10"
                                    }`}
                            >
                                {item}
                            </button>
                        );
                    })}
                </div>

                {/* Busca */}
                <label className="mt-5 flex w-full max-w-xs items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm text-chocolate focus-within:ring-2 focus-within:ring-morango">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <circle cx="11" cy="11" r="7" />
                        <path d="m20 20-3.5-3.5" />
                    </svg>
                    <span className="sr-only">Buscar sabor</span>
                    <input
                        type="search"
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        placeholder="Buscar sabor"
                        className="w-full bg-transparent outline-none placeholder:text-chocolate/50"
                    />
                </label>
            </div>
        </section>
    );
}