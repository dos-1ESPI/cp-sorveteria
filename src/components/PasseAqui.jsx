import mapa from '../assets/mapa.jpg'

const OndeEstamos = () => {
    return (
        <section className="bg-[#FFF7EE] text-[#3A1F17]">
            <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <p className="text-xs font-bold uppercase text-[#C8415C]">Onde estamos</p>
                    <h2 className="text-3xl font-bold mt-2">Passa aqui pra provar</h2>

                    <ul className="mt-6 space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#C8415C]"></span>
                            Av. Paulista, 123 - Bela Vista, São Paulo
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#C8415C]"></span>
                            Terça a domingo · 13h às 22h
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#C8415C]"></span>
                            WhatsApp 11 99999-9999
                        </li>
                    </ul>

                    <a
                        href="https://maps.google.com/?q=Av.+Paulista+123+São+Paulo"
                        target="_blank"
                        className="inline-block mt-6 border-2 border-[#3A1F17] rounded-full px-5 py-2 text-sm font-bold"
                    >
                        Como chegar
                    </a>
                </div>

                <img src={mapa} alt="Mapa com a localização da Nuvem Gelato" className="w-full rounded-3xl" />
            </div>
        </section>
    )
}

export default OndeEstamos