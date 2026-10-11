import type {
  ApiResponse,
  Category,
  Product,
} from "@/types/product";

const API_URL =
  process.env.BAZARDOR_API_URL ??
  "https://api.api-store.workers.dev/api/bazardor";

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(
      `API request failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.json() as Promise<T>;
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetchJson<ApiResponse<Product[]>>(
    `${API_URL}/products`,
  );

  return response.value;
}

export async function getProductBySlug(
  slug: string,
): Promise<Product | undefined> {
  const products = await getProducts();

  return products.find((product) => product.slug === slug);
}

export async function getProductsByCategory(
  categorySlug: string,
): Promise<Product[]> {
  const url = new URL(`${API_URL}/products`);
  url.searchParams.set("category", categorySlug);

  const response = await fetchJson<ApiResponse<Product[]>>(
    url.toString(),
  );

  return response.value;
}

export async function getCategories(): Promise<Category[]> {
  const response = await fetchJson<ApiResponse<Category[]>>(
    `${API_URL}/categories`,
  );

  return response.value;
}

export async function getCategoryBySlug(
  slug: string,
): Promise<Category | undefined> {
  const categories = await getCategories();

  return categories.find((category) => category.slug === slug);
}