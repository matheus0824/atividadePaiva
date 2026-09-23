import LoadingSpiner from "@/components/loadingSpiner";

export default function Loading() {
    return (
        <>
            <div className="conteiner">
                <div className="flex">
                    <LoadingSpiner/>
                    <h2>Carregando <span>...</span></h2>
                </div>  
            </div>
        </>
    );
}