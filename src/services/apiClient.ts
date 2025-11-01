import { environment } from '../environments';

export interface PaginatedParams {
	per_page?: number;
	page?: number;
}

const DEFAULT_BASE = environment.apiBaseUrl || "http://localhost:8000";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
	const url = path.startsWith("http") ? path : `${DEFAULT_BASE}${path}`;
	const res = await fetch(url, init);
	if (!res.ok) {
		const text = await res.text().catch(() => "");
		throw new Error(`Request failed ${res.status} ${res.statusText} ${text}`);
	}
	return (await res.json()) as T;
}

export function buildQuery(params: Record<string, any> = {}) {
	const q = new URLSearchParams();
	Object.entries(params).forEach(([k, v]) => {
		if (v !== undefined && v !== null) q.set(k, String(v));
	});
	return q.toString() ? `?${q.toString()}` : "";
}

export default { request, buildQuery };
