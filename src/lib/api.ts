// lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export async function fetchFromStrapi(endpoint: string, options = {}) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Fetch error: ${response.statusText}`);
  }

  const res = await response.json();
  const data = res.data || res; // Handle both data and direct response formats

  if (data.error) {
    throw new Error(`Strapi error: ${data.error.message}`);
  }
  return data;
}
