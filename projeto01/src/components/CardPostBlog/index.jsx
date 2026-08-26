import "./CardPostBlog.css"

export default function CardNoticia({titulo, descricao, imagem}){
    return(
        <div className="card-wrap">
            <h2> {titulo} </h2>
            <p> {descricao}</p>
            <img src= {"/imagens/" + imagem} alt="" />
        </div>
    )
}