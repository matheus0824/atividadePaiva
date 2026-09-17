'use client';

import { useState, useEffect } from "react";

// Transformando em um Custom Hook (nome iniciado com 'use')
export function useDados() {
  const [lista, setLista] = useState([]);
  const [msgErro, setMsgErro] = useState("");

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=5')
      .then(res => res.json())
      .then(data => {
        setLista(data.users);
        setMsgErro("");
      })
      .catch(e => setMsgErro(e.message));
  }, []);

  return { lista, msgErro };
}