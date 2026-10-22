import React from 'react'

const Orcamento = () => {
    return (
        <section className="bg-[#FFF7EE] px-6 py-10">
            <div className="max-w-6xl mx-auto bg-[#C8415C] text-white rounded-3xl p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <p className="text-xs font-semibold uppercase">Encomendas e festas</p>
                    <h2 className="text-3xl font-bold mt-2 max-w-sm">Sua festa merece sobremesa gelada.</h2>
                    <p className="text-sm mt-3 max-w-md">
                        Potes de 1 e 2 litros, carrinho de sorvete para eventos e sabores sob medida para o seu dia.
                        Encomende com 48h de antecedência.
                    </p>
                </div>

                <button className="bg-white text-[#C8415C] text-sm font-bold rounded-full px-5 py-2 hover:bg-pink-100">
                    Pedir orçamento
                </button>
            </div>
        </section>
    )
}

export default Orcamento