import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArticleList from './pages/ArticleList';
import ArticleDetail from './pages/ArticleDetail';
import NewArticle from './pages/NewArticle';
import type { Article } from './types/article';
import { getStoredArticles, saveArticles } from './services/storage';

function App() {
  // 1. Initialisation de l'état avec les articles du localStorage
  const [articles, setArticles] = useState<Article[]>(() => {
    return getStoredArticles();
  });

  // 2. useEffect : Sauvegarder dans le localStorage dès que la liste change
  useEffect(() => {
    saveArticles(articles);
  }, [articles]);

  // --- LES OPÉRATIONS MÉTIER ---

  // A. Ajouter un article
  const handleAddArticle = (newArticleData: Omit<Article, 'id' | 'createdAt'>) => {
    const newArticle: Article = {
      ...newArticleData,
      id: Date.now(), // Génère un identifiant unique basé sur l'heure actuelle
      createdAt: new Date().toISOString().split('T')[0], // Date du jour au format YYYY-MM-DD
    };

    // On produit un NOUVEL état (règle d'or de React : ne jamais modifier directement le tableau)
    setArticles((prevArticles) => [newArticle, ...prevArticles]);
  };

  // B. Supprimer un article
  const handleDeleteArticle = (id: string | number) => {
    const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cet article ?");
    if (isConfirmed) {
      setArticles((prevArticles) => prevArticles.filter((article) => article.id !== id));
    }
  };

  // C. Modifier un article existant
  const handleUpdateArticle = (updatedArticle: Article) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === updatedArticle.id ? updatedArticle : article
      )
    );
  };

  return (
    <BrowserRouter>
      <Header />

      <main style={{ minHeight: '70vh', padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home articles={articles} />} />
          {/* On passera les articles en "props" aux pages qui en ont besoin */}
          <Route path="/articles" element={<ArticleList articles={articles} onDelete={handleDeleteArticle} />} />
          <Route path="/articles/:id" element={<ArticleDetail articles={articles} />} />
          <Route path="/new" element={<NewArticle onAdd={handleAddArticle} />} />
          <Route 
           path="/articles/:id" 
           element={<ArticleDetail articles={articles} onUpdate={handleUpdateArticle} />} 
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;