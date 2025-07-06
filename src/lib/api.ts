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
  return await res.json();
}
