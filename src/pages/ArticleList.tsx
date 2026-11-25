import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Article } from '../types/article';
import ArticleCard from '../components/ArticleCard';

// 1. Contrat des props attendues par la page de liste
interface ArticleListProps {
  articles: Article[];
  onDelete: (id: string | number) => void;
}

export default function ArticleList({ articles, onDelete }: ArticleListProps) {
  // État local pour gérer ce que l'utilisateur tape dans la barre de recherche
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrage en temps réel des articles par titre ou catégorie
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h1>Liste des articles</h1>

      {/* Barre de recherche */}
      <div style={{ marginBottom: '1.5rem' }}>
        <input
          type="text"
          placeholder="Rechercher par titre ou catégorie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '0.7rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        />
      </div>

      {/* Gestion des différents cas d'affichages (États vides ou liste) */}
      {articles.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', background: '#f9f9f9', borderRadius: '8px' }}>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1rem' }}>
            Aucun article pour le moment. Le blog est vide !
          </p>
          <Link
            to="/new"
            style={{
              background: '#0066cc',
              color: 'white',
              padding: '0.7rem 1.2rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Créer le premier article
          </Link>
        </div>
      ) : filteredArticles.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666', padding: '2rem' }}>
          Aucun article ne correspond à votre recherche.
        </p>
      ) : (
        /* Boucle map pour transformer chaque article filtré en une <ArticleCard /> */
        <div>
          {filteredArticles.map((article) => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              onDelete={onDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
}