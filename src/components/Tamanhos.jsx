const tamanhos = [
    { nome: "Casquinha", detalhe: " até 2 bolas", preco: "R$ 19" },
    { nome: "Picolé", detalhe: "1 sabor", preco: "R$ 14" },
    { nome: "Milkshake", detalhe: "1 sabor batido com leite", preco: "R$ 26" },
];

export default function Tamanhos() {
    return (
        <section className="bg-baunilha px-4 py-12 font-sans md:px-6 md:py-16">
            <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-4xl bg-chocolate p-6 md:p-10 lg:grid-cols-[1fr_3fr]">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-baunilha/70">
                        Tamanhos
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-baunilha">
                        Escolha como quer o seu
                    </h2>
                </div>

                <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {tamanhos.map((tamanho) => (
                        <li
                            key={tamanho.nome}
                            className="rounded-2xl bg-white/10 px-4 py-6 text-center"
                        >
                            <h3 className="font-display text-lg font-semibold text-baunilha">
                                {tamanho.nome}
                            </h3>
                            <p className="mt-1 text-xs text-baunilha/70">{tamanho.detalhe}</p>
                            <p className="mt-3 font-display text-xl font-semibold text-casquinha">
                                {tamanho.preco}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}