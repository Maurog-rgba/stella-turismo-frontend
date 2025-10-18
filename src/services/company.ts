import apiClient from './apiClient';

export async function getCompany() {
  return apiClient.request<any>(`/api/company`);
}

export async function getCompanyBasic() {
  return apiClient.request<any>(`/api/company/basic`);
}

export async function getCompanyContact() {
  return apiClient.request<any>(`/api/company/contact`);
}

export async function getCompanySettings() {
  return apiClient.request<any>(`/api/company/settings`);
}
