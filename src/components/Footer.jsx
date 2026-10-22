import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#3A1F17] text-white">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="font-bold text-xl">Nuvem Gelato</h2>
                        <p className="text-sm text-white/70 mt-2">Até a próxima colherada!</p>
                    </div>

                    <nav className="flex flex-col gap-2">
                        <h3 className="font-bold text-sm mb-1">Navegue</h3>
                        <a href="#" className="text-sm text-white/70 hover:text-white">Cardápio</a>
                        <a href="#" className="text-sm text-white/70 hover:text-white">Monte seu pote</a>
                        <a href="#" className="text-sm text-white/70 hover:text-white">Encomendas</a>
                        <a href="#" className="text-sm text-white/70 hover:text-white">Sobre</a>
                    </nav>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-sm mb-1">Contato</h3>
                        <p className="text-sm text-white/70">Av. Paulista 123</p>
                        <p className="text-sm text-white/70">WhatsApp: 11 99999-9999</p>
                        <p className="text-sm text-white/70">Instagram: @NuvemGelato</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-sm mb-3">Receba os sabores novos antes de todo mundo</h3>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="seu@email.com"
                                className="flex-1 min-w-0 rounded-full px-4 py-2 text-sm text-black bg-white"
                            />
                            <button className="rounded-full px-5 py-2 text-sm font-bold bg-[#C8415C] hover:bg-[#B03650]">
                                Assinar
                            </button>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col md:flex-row justify-between gap-2 mt-10 pt-6 border-t border-white/10 text-xs text-[#FFF7EE]/60">
                    <p>&copy; 2026 Nuvem Gelato · CNPJ 12.345.678/9012-34</p>
                    <p>Feito com carinho e muito sorvete</p>
                </section>
            </div>
        </footer>
    )
}

export default Footer