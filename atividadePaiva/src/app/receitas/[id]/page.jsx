"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ReceitasDetalhe() {
  const params = useParams();
  const [receita, setReceita] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${params.id}`)
      .then((res) => res.json())
      .then((data) => setReceita(data));
  }, [params.id]);

  if (!receita) return <p>Carregando...</p>;

  return (
    <main style={{ padding: "50px"}}>
      <Link href="/receitas">Voltar</Link>

      <h1 style={{}}>{receita.name}</h1>

      <img src={receita.image} alt={receita.name} width={300} />

      <ul>
        <li><strong>Dificuldade:</strong> {receita.difficulty}</li>
        <li><strong>Culinária:</strong> {receita.cuisine}</li>
        <li><strong>Tempo de Preparo:</strong> {receita.prepTimeMinutes} min</li>
        <li><strong>Tempo de Cozimento:</strong> {receita.cookTimeMinutes} min</li>
        <li><strong>Rendimento:</strong> {receita.servings} porções</li>
        <li><strong>Calorias:</strong> {receita.caloriesPerServing} kcal</li>
        <li><strong>Nota:</strong> ⭐ {receita.rating}</li>
      </ul>

      <h3>Ingredientes:</h3>
      <ul>
        {receita.ingredients?.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <h3>Modo de Preparo:</h3>
      <ol>
        {receita.instructions?.map((inst, i) => (
          <li key={i}>{inst}</li>
        ))}
      </ol>
    </main>
  );
}