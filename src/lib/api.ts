const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL ||
  "https://graceful-bubble-4a6d1d121b.strapiapp.com/api";
  
export async function fetchFromStrapi(endpoint: string, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // 10s timeout

  const response = await fetch(`${API_URL}/${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    signal: controller.signal,
    ...options,
  });

  clearTimeout(timeout);

  if (!response.ok) {
    throw new Error(`Fetch error: ${response.statusText}`);
  }

  const res = await response.json();
  const data = res.data || res;

  if (data.error) {
    throw new Error(`Strapi error: ${data.error.message}`);
  }

  return data;
}
