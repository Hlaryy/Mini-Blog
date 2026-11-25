# Blog Manager

## Overview
**Blog Manager** is a Single-Page Application (SPA) built with **React**, **TypeScript**, and **React Router v6** for an academic web development project (Code2Work). It allows users to create, read, search/filter, update, and delete blog articles with persistent data stored in browser `localStorage`.

## Features
- **Home Page (`/`)**: Quick navigation to browse articles or publish a new one.
- **Article List & Search (`/articles`)**: Displays all articles in card format with live search/filtering by title or category.
- **Article Detail View (`/articles/:id`)**: Shows the full article content, metadata (category, publication date, author), and navigation back to the list.
- **Create Article (`/new`)**: Form to publish a new article with title, category, author, and content.
- **Edit Article Modal**: In-place modal dialog to update an existing article's fields and save changes.
- **Delete Confirmation**: Confirmation prompt before removing an article, with state and `localStorage` synchronization.

## Tech Stack
- **React** (with `useState` for state management)
- **TypeScript** (strict interface typing and type-only imports)
- **React Router DOM** (v6 client-side routing)
- **Vite** (development server and bundler)
- **Browser `localStorage`** (client-side persistence)

## Project Structure
```text
Mini-Blog/
├── captures/
│   ├── b1.png
│   ├── b2.png
│   ├── b3.png
│   ├── b4.png
│   ├── b5.png
│   ├── b6.png
│   ├── b7.png
│   └── b8.png
├── src/
│   ├── components/
│   │   ├── ArticleCard.tsx
│   │   ├── EditArticleModal.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── pages/
│   │   ├── ArticleDetail.tsx
│   │   ├── ArticleList.tsx
│   │   ├── Home.tsx
│   │   └── NewArticle.tsx
│   ├── types/
│   │   └── article.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── README.md