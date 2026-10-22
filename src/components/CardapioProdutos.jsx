import cookies from "../assets/cookies.jpg";
import baunilhaChocolate from "../assets/baunilha-chocolate.jpg";
import doceDeLeite from "../assets/doce-de-leite.jpg";
import picoleManga from "../assets/picole-manga.jpg";
import picoleMorango from "../assets/picole-framboesa.jpg";
import picoleChocolate from "../assets/picole-chocolate.jpg";
import milkshakeFruitloops from "../assets/milkshake-fruitloops.png";
import milkshakeChocolate from "../assets/milkshake-chocolate.png";
import milkshakePretzel from "../assets/milkshake-pretzel.png";

const categorias = [
    {
        titulo: "Casquinhas",
        subtitulo: "Massa cremosa na casquinha crocante. Preço por porção de 1 bola.",
        itens: [
            { nome: "Chocolate com cookies", descricao: "Cremoso, com pedaços de biscoito de chocolate.", selo: "Novo", preco: 12, imagem: cookies },
            { nome: "Baunilha e chocolate", descricao: "Massa macia de baunilha com chocolate intenso.", selo: "Clássico", preco: 12, imagem: baunilhaChocolate },
            { nome: "Doce de leite", descricao: "Doce de leite caseiro com calda caramelizada.", selo: "Favorito", preco: 12, imagem: doceDeLeite },
        ],
    },
    {
        titulo: "Picolés",
        subtitulo: "Feitos em forminhas pequenas, todo dia.",
        itens: [
            { nome: "Picolé de manga", descricao: "Base de fruta, refrescante.", selo: "Novo", preco: 9, imagem: picoleManga },
            { nome: "Picolé de morango", descricao: "Com pedaços da fruta.", selo: "Clássico", preco: 9, imagem: picoleMorango },
            { nome: "Picolé de chocolate", descricao: "Recheio cremoso e cobertura crocante.", selo: "Favorito", preco: 9, imagem: picoleChocolate },
        ],
    },
    {
        titulo: "Milkshakes",
        subtitulo: "Batidos na hora com o sorvete da casa. 400 ml.",
        itens: [
            { nome: "Milkshake de morango", descricao: "Com chantilly, donut e cereal colorido.", selo: "Novo", preco: 22, imagem: milkshakeFruitloops },
            { nome: "Milkshake de chocolate", descricao: "Com calda de chocolate e pretzels.", selo: "Favorito", preco: 22, imagem: milkshakeChocolate },
            { nome: "Milkshake de café", descricao: "Café gelado com calda de chocolate.", selo: "Clássico", preco: 22, imagem: milkshakePretzel },
        ],
    },
];

// Filtro (plural) -> selo do produto (singular)
const seloDoFiltro = { Clássicos: "Clássico", Novos: "Novo", Favoritos: "Favorito" };

const coresSelo = {
    Novo: "bg-morango text-white",
    Clássico: "bg-casquinha text-chocolate",
    Favorito: "bg-pistache text-chocolate",
};

// Remove acentos e deixa minúsculo, para "cafe" achar "café"
const normalizar = (texto) =>
    texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const formatarPreco = (valor) =>
    valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function CardapioProdutos({ filtro = "Todos", busca = "" }) {
    const termo = normalizar(busca.trim());

    const visiveis = categorias
        .map((categoria) => ({
            ...categoria,
            itens: categoria.itens.filter((item) => {
                const passaFiltro = filtro === "Todos" || item.selo === seloDoFiltro[filtro];
                const passaBusca = normalizar(item.nome).includes(termo);
                return passaFiltro && passaBusca;
            }),
        }))
        .filter((categoria) => categoria.itens.length > 0);

    return (
        <div className="bg-baunilha font-sans">
            <div className="mx-auto max-w-6xl px-4 pb-16 md:px-6 md:pb-24">
                {visiveis.length === 0 && (
                    <p className="py-16 text-center text-chocolate/70">
                        Nenhum sabor encontrado. Tente outro filtro ou busca.
                    </p>
                )}

                {visiveis.map((categoria) => (
                    <section key={categoria.titulo} className="mt-12 first:mt-0">
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-chocolate/15 pb-4">
                            <h2 className="font-display text-2xl font-bold text-chocolate md:text-3xl">
                                {categoria.titulo}
                            </h2>
                            <p className="text-sm text-chocolate/70">{categoria.subtitulo}</p>
                        </div>

                        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {categoria.itens.map((item) => (
                                <li key={item.nome} className="flex flex-col rounded-3xl bg-white p-3">
                                    <div className="aspect-4/3 overflow-hidden rounded-2xl">
                                        <img
                                            src={item.imagem}
                                            alt={item.nome}
                                            loading="lazy"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-1 flex-col px-2 pt-4">
                                        <span className={`self-start rounded-full px-3 py-1 text-xs font-semibold ${coresSelo[item.selo]}`}>
                                            {item.selo}
                                        </span>
                                        <h3 className="mt-3 font-display text-lg font-semibold text-chocolate">
                                            {item.nome}
                                        </h3>
                                        <p className="mb-4 mt-1 text-sm text-chocolate/70">{item.descricao}</p>

                                        <div className="mt-auto flex items-center justify-between border-t border-chocolate/10 pb-1 pt-4">
                                            <span className="font-display text-lg font-semibold text-chocolate">
                                                {formatarPreco(item.preco)}
                                            </span>
                                            <button
                                                type="button"
                                                aria-label={`Adicionar ${item.nome}`}
                                                className="flex h-9 w-9 items-center justify-center rounded-full bg-morango text-xl text-white transition hover:brightness-110"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </div>
    );
}