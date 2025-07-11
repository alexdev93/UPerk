// lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export async function fetchFromStrapi(endpoint: string, options = {}) {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`Strapi fetch error: ${res.statusText}`);
  }

  const data = await res.json();

  if (data.error) {
    throw new Error(`Strapi error: ${data.error.message}`);
  }
  return data;
}
