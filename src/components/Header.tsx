import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: '1rem', background: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
      <h2>Mon Blog Manager</h2>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        {/* On utilise 'to' au lieu de 'href' avec React Router */}
        <Link to="/">Accueil</Link>
        <Link to="/articles">Tous les articles</Link>
        <Link to="/new">Créer un article</Link>
      </nav>
    </header>
  );
}