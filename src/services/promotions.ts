import apiClient, { buildQuery, PaginatedParams } from './apiClient';

export interface Promotion {
  id: number;
  title: string;
  slug?: string;
  excerpt?: string;
}

export async function listPromotions(params: PaginatedParams = {}) {
  const q = buildQuery(params);
  return apiClient.request<Promotion[]>(`/api/promotions${q}`);
}

export async function getPromotion(id: string | number) {
  return apiClient.request<Promotion>(`/api/promotions/${id}`);
}

export async function getPromotionBySlug(slug: string) {
  return apiClient.request<Promotion>(`/api/promotions/slug/${encodeURIComponent(slug)}`);
}
