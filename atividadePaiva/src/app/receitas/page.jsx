'use client';
import Receitas from "@/components/cardsreceitas"
import { useState, useEffect } from "react";

export function receitas() {
  const [lista, setListaReceitas] = useState([]);
  const [msgErro, setMsgErro] = useState("");

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(data => {
        setListaReceitas(data.recipes);
        setMsgErro("");
      })
      .catch(e => setMsgErro(e.message));
  }, []);

return (
        <main>
            <h1>Pagina de Usuários</h1>
            {msgErro != "" && <p>Erro:{msgErro}</p>}
          

          return 
          </main>
    )
}