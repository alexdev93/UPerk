/* eslint-disable @typescript-eslint/no-explicit-any */

const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL ||
  "https://graceful-bubble-4a6d1d121b.strapiapp.com/api";

export async function fetchFromStrapi(
  endpoint: string,
  options = {},
  retry = 1
): Promise<any> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // 10s

  try {
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
    return res.data || res;
  } catch (err: any) {
    if (err.name === "AbortError" && retry > 0) {
      console.warn("🔁 Retrying fetch due to AbortError...");
      return fetchFromStrapi(endpoint, options, retry - 1);
    }
    console.error("❌ Failed to fetch from Strapi:", err);
    throw err;
  }
}
