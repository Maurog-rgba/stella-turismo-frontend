import apiClient, { buildQuery, PaginatedParams } from './apiClient';

export interface PostSummary {
  id: number;
  title: string;
  slug?: string;
  excerpt?: string;
  categories?: { id: number; name: string }[];
}

export async function listPosts(params: PaginatedParams = {}) {
  const q = buildQuery(params);
  return apiClient.request<PostSummary[]>(`/api/blog${q}`);
}

export async function recentPosts() {
  return apiClient.request<PostSummary[]>(`/api/blog/recent`);
}

export async function postsByAuthor(authorId: string | number, params: PaginatedParams = {}) {
  const q = buildQuery(params);
  return apiClient.request<PostSummary[]>(`/api/blog/author/${authorId}${q}`);
}

export async function postsByCategory(categoryId: string | number, params: PaginatedParams = {}) {
  const q = buildQuery(params);
  return apiClient.request<PostSummary[]>(`/api/blog/category/${categoryId}${q}`);
}

export async function listCategories(params: PaginatedParams = {}) {
  const q = buildQuery(params);
  return apiClient.request<any[]>(`/api/blog/categories${q}`);
}

export async function getPost(id: string | number) {
  return apiClient.request<PostSummary>(`/api/blog/${id}`);
}

export async function getPostBySlug(slug: string) {
  return apiClient.request<PostSummary>(`/api/blog/slug/${encodeURIComponent(slug)}`);
}
