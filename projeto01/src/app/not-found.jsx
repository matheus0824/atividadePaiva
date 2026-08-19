import Link from "next/link";
import NotFoundBuddy from "@/components/not-found-buddy"


export default function NotFound(){
    return(
        <>
        <div className="container">
            <div className="flex">
                  <h2>COnteudo não encontrado</h2>
            <p>Erro 404</p>
            <NotFoundBuddy className="face"/>
            <Link href={"/"}>voltar</Link>
            </div>
           
        </div>
           
        </>
    )
}