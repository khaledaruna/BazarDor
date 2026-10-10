const BASE_URL = "https://api.api-store.workers.dev/api/bazardor";

export const getProducts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Products fetch error:", error);
    return [];
  }
};

export const getCategories = async () => {
  try {
    const res = await fetch(`${BASE_URL}/categories`);
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Categories fetch error:", error);
    return [];
  }
};