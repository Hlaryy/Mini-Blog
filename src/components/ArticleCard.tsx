import { Link } from 'react-router-dom';
import type { Article } from '../types/article';

// 1. Contrat des props attendues par la carte
interface ArticleCardProps {
  article: Article;
  onDelete: (id: string | number) => void;
}

export default function ArticleCard({ article, onDelete }: ArticleCardProps) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      padding: '1rem', 
      marginBottom: '1rem',
      background: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      {/* Catégorie et Date */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>
        <span style={{ background: '#e2e8f0', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
          {article.category}
        </span>
        <span>{article.createdAt}</span>
      </div>

      {/* Titre */}
      <h3 style={{ margin: '0.5rem 0' }}>{article.title}</h3>

      {/* Auteur */}
      <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#444' }}>Par {article.author}</p>

      {/* Extrait du contenu (on tronque à 100 caractères si trop long) */}
      <p style={{ color: '#333', margin: '1rem 0' }}>
        {article.content.length > 100 
          ? article.content.substring(0, 100) + '...' 
          : article.content}
      </p>

      {/* Actions de la carte */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
        {/* Lien vers la page de détail */}
        <Link 
          to={`/articles/${article.id}`} 
          style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Lire la suite &rarr;
        </Link>

        {/* Bouton de suppression qui déclenche la fonction transmise depuis le parent */}
        <button 
          onClick={() => onDelete(article.id)}
          style={{ 
            background: '#ff4d4d', 
            color: 'white', 
            border: 'none', 
            padding: '0.4rem 0.8rem', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}