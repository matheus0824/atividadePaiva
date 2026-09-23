import CardProduto from "@/components/CardProduto";
import "./produtos.css";

export default function Produtos() {

    const listaProdutos = [
        { id: 1, titulo: "Notebook ideapad gaming", descricao: "Um notebook gamer para seus melhores jogos", imagem: "./img/ideapad.png", preco: 3999.00 },
        { id: 2, titulo: "Monitor", descricao: "Acompanha HDR e IPS", imagem: "./img/monitor.jpg", preco: 987.20 },
        { id: 3, titulo: "Mouse MX Logitech", descricao: "O melhor que a tecnologia tem", imagem: "./img/mouse.png", preco: 678.83 },
        { id: 3, titulo: "Mousepad Logitech", descricao: "O melhor que tem no mercado", imagem: "./img/mousepad.png", preco: 120.83 },
    ];

    return (
        <>
            <div className="conteiner">
                <div className="card-conteiner">
                    {listaProdutos.map((produto) => {
                        return <CardProduto
                            key={produto.id}
                            titulo={produto.titulo}
                            descricao={produto.descricao}
                            imagem={produto.imagem}
                            preco={produto.preco} />

                    })}
                </div>
            </div>
        </>
    )
}