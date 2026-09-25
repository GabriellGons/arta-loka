import { error } from '@sveltejs/kit';
import { articles, getArticleById, getRelatedArticles, getCategoryLabel } from '$lib/data/news';

export function load({ params }) {
  const article = getArticleById(params.id);

  if (!article) {
    throw error(404, {
      message: 'Berita yang Anda cari tidak ditemukan.'
    });
  }

  const relatedArticles = getRelatedArticles(params.id, 3);
  const categoryLabel = getCategoryLabel(article.categoryId);

  return {
    article,
    relatedArticles,
    categoryLabel
  };
}

export function entries() {
  return articles.map(a => ({ id: String(a.id) }));
}
