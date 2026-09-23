import "./sobre.css";
import FundoAnimado from "@/components/fundoAnimado";

export default function SobrePage() {
    return (
        <main className="sobre-page">
            <FundoAnimado />

            <section className="sobre-conteudo">
                <div className="sobre-texto">
                    <span className="sobre-kicker">Sobre nós</span>
                    <h1>Funciona Pessoall</h1>
                    <p className="sobre-copy">
                        Criamos experiências digitais com identidade, velocidade e impacto.
                    </p>
                </div>

                <aside className="sobre-card">
                    <span className="sobre-card__numero">01</span>
                    <span className="sobre-card__titulo">Design com propósito</span>
                </aside>
            </section>
        </main>
    );
}