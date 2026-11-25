import type { Article } from '../types/article';
import { initialArticles } from '../data/mockArticles';

const STORAGE_KEY = 'blog_manager_articles';

// 1. Charger les articles depuis le localStorage (ou utiliser les mock data si vide)
export const getStoredArticles = (): Article[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialArticles));
      return initialArticles;
    }
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : initialArticles;
  } catch (error) {
    console.error('Erreur de lecture du localStorage', error);
    return initialArticles;
  }
};

// 2. Sauvegarder les articles dans le localStorage
export const saveArticles = (articles: Article[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  } catch (error) {
    console.error("Erreur d'écriture dans le localStorage", error);
  }
};