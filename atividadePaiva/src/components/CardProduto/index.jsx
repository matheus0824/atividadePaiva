import "./cardProduto.css"

export default function CardProduto({ titulo, descricao, preco, imagem }) {
    return (
        <div className="card-wrap">
            <h2> {titulo} </h2>
            <p> {descricao} </p>
            <img src={imagem} alt="Foto_Card" />
            <p>Preço: <b>{preco}</b></p>
        </div>
    )
}