import "./bannerCTA.css";
import BB from "@/components/btnBB-8"
export default function BannerCta() {
    return (
        <>
            <section className="ConteinerFluid">
                <BB/>
                <button type="button" className="buttonCta">Comprar Produtos</button>
                <p className="textoCta">Adquira e seja sua melhor vrsão</p>
            </section>
        </>
    )
}