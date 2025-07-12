const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL ||
  "https://graceful-bubble-4a6d1d121b.strapiapp.com/api";

export const fetchFromStrapi = async (
  endpoint: string,
  options?: RequestInit & { next?: { revalidate?: number } }
) => {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache", // default ISR
    ...options,
  });

  if (!res.ok) throw new Error("Failed to fetch from Strapi");

  const json = await res.json();
  return json.data;
};
