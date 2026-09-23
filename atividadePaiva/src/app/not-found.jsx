import Link from "next/link";
import NotFoundBuddy from "@/components/not-found-body";

export default function NotFound() {
    return (
        <>
            <div className="conteiner">
                <div className="flex">
                    <Link href={"/"}>Voltar</Link>
                    <NotFoundBuddy className="mascote" />
                </div>
            </div>
        </>
    )
}