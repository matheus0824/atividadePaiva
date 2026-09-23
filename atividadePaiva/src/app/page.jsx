import Image from "next/image";
import './home.css';
import BannerCta from "@/components/bannerCTA";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {

  // await sleep(3500);
  // throw new Error("Erro Simulado !!!");

  return (
    <>
      <main>
        <section>
          <div className="box">
            <h1>Titulo</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi voluptatibus ullam excepturi, possimus ipsa eligendi reiciendis libero, delectus, natus totam error aliquam animi. Labore harum dolore optio minima dolorum odio.</p>
            <button>Começar</button>
          </div>
          <div className="png">
            <img src="/img/Darth-Vader.webp" alt="" />
          </div>
        </section>
        <BannerCta />
      </main>
    </>
  );
}