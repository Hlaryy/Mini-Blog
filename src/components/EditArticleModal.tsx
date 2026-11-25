import { useState, FormEvent } from 'react';
import type { Article } from '../types/article';

interface EditArticleModalProps {
  article: Article;
  onClose: () => void;
  onUpdate: (updatedArticle: Article) => void;
}

export default function EditArticleModal({ article, onClose, onUpdate }: EditArticleModalProps) {
  const [title, setTitle] = useState(article.title);
  const [category, setCategory] = useState(article.category);
  const [author, setAuthor] = useState(article.author);
  const [content, setContent] = useState(article.content);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !category.trim() || !content.trim() || !author.trim()) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    const updated: Article = {
      ...article,
      title,
      category,
      author,
      content,
    };

    onUpdate(updated);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        background: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}>
        <h2>Modifier l'article</h2>

        {error && (
          <div style={{ background: '#ffe6e6', color: '#cc0000', padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.3rem', fontWeight: 'bold' }}>Titre :</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.3rem', fontWeight: 'bold' }}>Catégorie :</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.3rem', fontWeight: 'bold' }}>Auteur :</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.3rem', fontWeight: 'bold' }}>Contenu :</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <button
              type="button"
              onClick={onClose}
              style={{ background: '#ccc', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '4px', cursor: 'pointer' }}
            >
              Annuler
            </button>
            <button
              type="submit"
              style={{ background: '#0066cc', color: 'white', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}