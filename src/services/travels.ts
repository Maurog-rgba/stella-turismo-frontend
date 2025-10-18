import apiClient, { buildQuery, PaginatedParams } from './apiClient';

export interface TravelSummary {
  id: number;
  title: string;
  slug?: string;
  excerpt?: string;
  price?: number;
  thumbnail?: string;
}

export interface TravelDetail extends TravelSummary {
  gallery?: string[];
  itinerary?: any;
  seller?: any;
}

export async function listTravels(params: PaginatedParams = {}) {
  const q = buildQuery(params);
  return apiClient.request<TravelDetail[]>(`/api/travels${q}`);
}

export async function listTravelsOptimized(params: PaginatedParams = {}) {
  const q = buildQuery(params);
  return apiClient.request<TravelSummary[]>(`/api/travels/list${q}`);
}

export async function listOnlyTravels(params: PaginatedParams = {}) {
  const q = buildQuery(params);
  return apiClient.request<TravelSummary[]>(`/api/travels/travels${q}`);
}

export async function listGroups(params: PaginatedParams = {}) {
  const q = buildQuery(params);
  return apiClient.request<TravelSummary[]>(`/api/travels/groups${q}`);
}

export async function listBlocks(params: PaginatedParams = {}) {
  const q = buildQuery(params);
  return apiClient.request<TravelSummary[]>(`/api/travels/blocks${q}`);
}

export async function getTypes() {
  return apiClient.request<any>(`/api/travels/types`);
}

export async function getTransports() {
  return apiClient.request<any>(`/api/travels/transports`);
}

export async function getByType(typeId: string | number, params: PaginatedParams = {}) {
  const q = buildQuery(params);
  return apiClient.request<TravelSummary[]>(`/api/travels/type/${typeId}${q}`);
}

export async function getByTransport(transport: string, params: PaginatedParams = {}) {
  const q = buildQuery(params);
  return apiClient.request<TravelSummary[]>(`/api/travels/transport/${transport}${q}`);
}

export async function getByRegion(region: string, params: PaginatedParams = {}) {
  const q = buildQuery(params);
  return apiClient.request<TravelSummary[]>(`/api/travels/region/${region}${q}`);
}

export async function getBySeller(sellerId: string | number, params: PaginatedParams = {}) {
  const q = buildQuery(params);
  return apiClient.request<TravelSummary[]>(`/api/travels/seller/${sellerId}${q}`);
}

export async function getTravel(id: string | number) {
  return apiClient.request<TravelDetail>(`/api/travels/${id}`);
}
