'use client';

import { useState, useEffect } from 'react';
import CardReceita from '@/components/cardReceitas';

export default function ReceitasPage() {
  const [listaReceitas, setListaReceitas] = useState([]);
  const [msgErro, setMsgErro] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((res) => res.json())
      .then((data) => {
        setListaReceitas(data.recipes);
        setMsgErro('');
      })
      .catch((e) => setMsgErro(e.message));
  }, []);

  return (
    <main style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '24px', textAlign: 'center' }}>Lista de Receitas</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '20px'
      }}>
        {listaReceitas.map((receita) => (
          <CardReceita key={receita.id} receita={receita} />
        ))}
      </div>
    </main>
  );
}