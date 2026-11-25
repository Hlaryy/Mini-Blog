import type { Article } from './types/article';

export const initialArticles: Article[] = [
  {
    id: 1,
    title: 'Mon premier pas avec React et TypeScript',
    category: 'Développement',
    content: "Aujourd'hui, j'ai découvert comment typer mes composants React avec TypeScript. C'est un vrai plus pour éviter les bugs de type !",
    author: 'Princess Hilary',
    createdAt: '2026-11-01',
  },
  {
    id: 2,
    title: 'Pourquoi utiliser le LocalStorage ?',
    category: 'Architecture',
    content: 'Le localStorage permet de garder les données de notre blog même après un rafraîchissement de la page, le tout sans backend.',
    author: 'Princess Hilary',
    createdAt: '2026-11-05',
  },
];