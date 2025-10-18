import apiClient, { buildQuery, PaginatedParams } from './apiClient';

export interface Banner {
  id: number;
  title?: string;
  image?: string;
  active?: boolean;
  sort?: number;
}

export async function listBanners(params: PaginatedParams = {}) {
  const q = buildQuery(params);
  return apiClient.request<Banner[]>(`/api/banners${q}`);
}

export async function listActiveBanners(params: PaginatedParams = {}) {
  const q = buildQuery(params);
  return apiClient.request<Banner[]>(`/api/banners/active${q}`);
}

export async function getBanner(id: string | number) {
  return apiClient.request<Banner>(`/api/banners/${id}`);
}
