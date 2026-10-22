import { Link } from "react-router-dom";

const passos = [
    {
        titulo: "Escolha o tamanho",
        descricao: "Do copinho para uma pausa rápida ao pote para dividir (ou não).",
        opcoes: ["Copinho", "Casquinha", "Pote"],
    },
    {
        titulo: "Escolha os sabores",
        descricao: "Até 3 sabores da vitrine. Na dúvida, a gente deixa provar.",
        opcoes: ["Clássicos", "Frutas", "Veganos"],
    },
    {
        titulo: "Finalize",
        descricao: "Caldas e toppings para deixar do seu jeito.",
        opcoes: ["Brigadeiro", "Paçoca", "Frutas"],
    },
];

export default function MontePote() {
    return (
        <section id="monte-seu-pote" className="bg-baunilha px-4 py-12 font-sans md:px-6 md:py-16">
            <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-pistache px-6 py-12 md:px-12 md:py-16">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-chocolate">
                        Monte seu pote
                    </p>
                    <h2 className="font-display text-3xl font-bold text-chocolate md:text-4xl">
                        Do seu jeito, em 3 passos
                    </h2>

                    {/* Passos */}
                    <ol className="mt-10 grid gap-6 md:grid-cols-3">
                        {passos.map((passo, index) => (
                            <li key={passo.titulo} className="rounded-3xl bg-baunilha p-6 md:p-8">
                                <span
                                    aria-hidden="true"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-chocolate font-display font-semibold text-baunilha"
                                >
                                    {index + 1}
                                </span>

                                <h3 className="mt-5 font-display text-xl font-semibold text-chocolate">
                                    {passo.titulo}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-chocolate/70">
                                    {passo.descricao}
                                </p>

                                <ul className="mt-5 flex flex-wrap gap-2">
                                    {passo.opcoes.map((opcao) => (
                                        <li
                                            key={opcao}
                                            className="rounded-full bg-white px-3 py-1 text-xs font-medium text-chocolate"
                                        >
                                            {opcao}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>

                    <Link
                        to="/monte-seu-pote"
                        className="mt-8 inline-block rounded-full bg-chocolate px-6 py-3 text-sm font-semibold text-baunilha transition hover:brightness-125"
                    >
                        Montar meu pote
                    </Link>
                </div>
            </div>
        </section>
    );
}