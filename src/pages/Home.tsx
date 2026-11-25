import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1a202c' }}>
        Bienvenue sur Blog Manager 🚀
      </h1>
      
      <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.6', marginBottom: '2rem' }}>
        La plateforme idéale pour les étudiants et jeunes professionnels pour partager 
        leurs apprentissages, leurs expériences et leurs projets tech au quotidien.
      </p>

      {/* Carte de présentation / Appel à l'action */}
      <div style={{ 
        background: '#fff', 
        padding: '2rem', 
        borderRadius: '8px', 
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        marginBottom: '2rem'
      }}>
        <h2>Qu'allez-vous découvrir ?</h2>
        <p style={{ color: '#666', margin: '1rem 0' }}>
          Explorez les articles rédigés par la communauté, lisez les détails de chaque projet, 
          ou publiez vos propres retours d'expérience en toute simplicité grâce à notre interface intuitive.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
          <Link 
            to="/articles" 
            style={{ 
              background: '#0066cc', 
              color: 'white', 
              padding: '0.8rem 1.5rem', 
              borderRadius: '4px', 
              textDecoration: 'none', 
              fontWeight: 'bold' 
            }}
          >
            Voir les articles
          </Link>

          <Link 
            to="/new" 
            style={{ 
              background: '#2f855a', 
              color: 'white', 
              padding: '0.8rem 1.5rem', 
              borderRadius: '4px', 
              textDecoration: 'none', 
              fontWeight: 'bold' 
            }}
          >
            Écrire un article
          </Link>
        </div>
      </div>
    </div>
  );
}