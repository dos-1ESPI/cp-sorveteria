import flavor from '../assets/flavor.jpg'

const NossaHistoria = () => {
    return (
        <section className="bg-[#FFF7EE] text-[#3A1F17]">
            <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <img
                    src={flavor}
                    alt="Fachada da sorveteria Nuvem Gelato com a vitrine de sabores"
                    className="w-full aspect-square object-cover rounded-3xl max-w-sm"
                />

                <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-[#C8415C]">Nossa história</p>
                    <h2 className="text-4xl font-bold mt-3">Feito à mão, sem pressa.</h2>

                    <p className="mt-5 text-[#3A1F17]/80 leading-relaxed">
                        A Nuvem nasceu de uma vontade simples: fazer o sorvete que a gente gostaria de tomar.
                        Leite fresco, frutas de produtores locais e muito teste até acertar o ponto.
                    </p>
                    <p className="mt-4 text-[#3A1F17]/80 leading-relaxed">
                        Toda manhã a máquina liga cedo para a vitrine estar cheia quando você chegar.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                        <div className="border-t-2 border-[#3A1F17] pt-3">
                            <h3 className="font-bold">Fresco</h3>
                            <p className="text-sm text-[#3A1F17]/70 mt-1">Produção diária, em pequenos lotes.</p>
                        </div>
                        <div className="border-t-2 border-[#3A1F17] pt-3">
                            <h3 className="font-bold">Local</h3>
                            <p className="text-sm text-[#3A1F17]/70 mt-1">Frutas de produtores da região.</p>
                        </div>
                        <div className="border-t-2 border-[#3A1F17] pt-3">
                            <h3 className="font-bold">Pra todos</h3>
                            <p className="text-sm text-[#3A1F17]/70 mt-1">Opções veganas e zero açúcar.</p>
                        </div>
                    </div>

                    <a href="#" className="inline-block mt-8 text-sm font-bold text-[#C8415C] underline underline-offset-4 hover:text-[#B03650]">
                        Conheça nossa história
                    </a>
                </div>
            </div>
        </section>
    )
}

export default NossaHistoria