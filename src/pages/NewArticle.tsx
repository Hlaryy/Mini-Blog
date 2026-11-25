import { useState, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import type { Article } from '../types/article';

// 1. Contrat des props attendues par ce composant
interface NewArticleProps {
  onAdd: (newArticleData: Omit<Article, 'id' | 'createdAt'>) => void;
}

export default function NewArticle({ onAdd }: NewArticleProps) {
  // États locaux pour chaque champ du formulaire
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  
  // État pour afficher une erreur visuelle si des champs sont vides
  const [error, setError] = useState('');

  // Hook de navigation pour rediriger l'utilisateur après la soumission
  const navigate = useNavigate();

  // Fonction exécutée lors de la soumission du formulaire
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Empêche le rechargement par défaut de la page HTML

    // Validation des champs obligatoires
    if (!title.trim() || !category.trim() || !content.trim() || !author.trim()) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    // Si tout est valide, on appelle la fonction onAdd transmise par App.tsx
    onAdd({
      title,
      category,
      author,
      content,
    });

    // Redirection automatique vers la page de la liste des articles
    navigate('/articles');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <Link to="/articles" style={{ color: '#0066cc', textDecoration: 'none', marginBottom: '1rem', display: 'inline-block' }}>
        &larr; Retour aux articles
      </Link>

      <h1>Créer un nouvel article</h1>

      {/* Affichage de l'erreur si elle existe */}
      {error && (
        <div style={{ background: '#ffe6e6', color: '#cc0000', padding: '0.8rem', borderRadius: '4px', marginBottom: '1rem' }}>
          {error}
        </div>
      )}

      {/* Formulaire */}
      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #ccc' }}>
        {/* Champ Titre */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Titre :</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '0.7rem', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Titre de l'article..."
          />
        </div>

        {/* Champ Catégorie */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Catégorie :</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ width: '100%', padding: '0.7rem', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Ex: React, TypeScript, Web..."
          />
        </div>

        {/* Champ Auteur */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Auteur :</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{ width: '100%', padding: '0.7rem', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Votre nom..."
          />
        </div>

        {/* Champ Contenu */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Contenu :</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            style={{ width: '100%', padding: '0.7rem', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Rédigez votre article ici..."
          />
        </div>

        {/* Bouton de soumission */}
        <button
          type="submit"
          style={{
            background: '#0066cc',
            color: 'white',
            border: 'none',
            padding: '0.8rem 1.5rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            width: '100%',
          }}
        >
          Publier l'article
        </button>
      </form>
    </div>
  );
}