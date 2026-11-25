import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Article } from '../types/article';
import EditArticleModal from '../components/EditArticleModal';

interface ArticleDetailProps {
  articles: Article[];
  onUpdate: (updatedArticle: Article) => void;
}

export default function ArticleDetail({ articles, onUpdate }: ArticleDetailProps) {
  // Récupération de l'ID depuis l'URL
  const { id } = useParams<{ id: string }>();

  // État local pour afficher ou masquer la modale de modification
  const [isEditing, setIsEditing] = useState(false);

  // Recherche de l'article correspondant à l'ID
  const article = articles.find((a) => String(a.id) === String(id));

  if (!article) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>Article introuvable</h2>
        <p>L'article que vous cherchez n'existe pas ou a été supprimé.</p>
        <Link to="/articles">Retour à la liste des articles</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Lien de retour */}
      <Link to="/articles" style={{ color: '#0066cc', textDecoration: 'none', marginBottom: '1rem', display: 'inline-block' }}>
        &larr; Retour aux articles
      </Link>

      <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #ccc' }}>
        {/* En-tête de l'article : Catégorie, Date, Auteur + Bouton Modifier */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ background: '#e2e8f0', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.9rem' }}>
            {article.category}
          </span>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#666', fontSize: '0.9rem' }}>Publié le {article.createdAt} par {article.author}</span>
            
            {/* Bouton pour ouvrir la modale de modification */}
            <button
              onClick={() => setIsEditing(true)}
              style={{
                background: '#d69e2e',
                color: 'white',
                border: 'none',
                padding: '0.4rem 0.8rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Modifier
            </button>
          </div>
        </div>

        {/* Titre */}
        <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{article.title}</h1>

        {/* Contenu complet */}
        <div style={{ lineHeight: '1.6', color: '#333', whiteSpace: 'pre-line' }}>
          {article.content}
        </div>
      </div>

      {/* Affichage conditionnel de la modale de modification */}
      {isEditing && (
        <EditArticleModal
          article={article}
          onClose={() => setIsEditing(false)}
          onUpdate={onUpdate}
        />
      )}
    </div>
  );
}