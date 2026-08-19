import Image from "next/image";
import styles from "./page.module.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {

  await sleep(3500);

  throw new Error("Erro simulado!");

  return (
  <>
     <div className="conteiner-pai">

        <div>
          <h2 className="box01">Convert More Leads</h2>
        </div>

        <div >
            <h3 className="box02">Create custom leading pages with Unbonce
              that convert more visitors than any website-no coding required
            </h3>
        </div>    
        
      <div>
            <img className="profissional" src="/imagens/Profissional.png" />
        </div>
    </div>
  </>
  );
}
