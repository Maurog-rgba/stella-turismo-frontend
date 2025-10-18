import apiClient, { buildQuery, PaginatedParams } from './apiClient';

export interface AlbumSummary {
  id: number;
  title: string;
  cover?: string;
}

export interface AlbumDetail extends AlbumSummary {
  photos: string[];
}

export async function listAlbums(params: PaginatedParams = {}) {
  const q = buildQuery(params);
  return apiClient.request<AlbumDetail[]>(`/api/albums${q}`);
}

export async function listAlbumsOptimized(params: PaginatedParams = {}) {
  const q = buildQuery(params);
  return apiClient.request<AlbumSummary[]>(`/api/albums/list${q}`);
}

export async function getAlbum(id: string | number) {
  return apiClient.request<AlbumDetail>(`/api/albums/${id}`);
}
