import Link from 'next/link';

export default function CardReceita({ receita }) {
  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      overflow: 'hidden',
      padding: '26px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <img 
        src={receita.image} 
        alt={receita.name} 
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }}
      />
      <h3 style={{ fontSize: '1.1rem', margin: '8px 0', textAlign: 'center' }}>{receita.name}</h3>
      <Link 
        href={`/receitas/${receita.id}`}
        style={{
          padding: '8px 16px',
          backgroundColor: '#2563eb',
          color: '#fff',
          borderRadius: '4px',
          textDecoration: 'none',
          fontSize: '0.9rem',
          fontWeight: '500'
        }}
      >
        Saiba mais
      </Link>
    </div>
  );
}