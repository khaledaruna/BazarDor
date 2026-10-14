import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";

import ProductContent from "@/components/products/ProductContent";
import ScrollUp from "@/components/products/ScrollUp";
import { getProductBySlug } from "@/lib/api";
import { auth } from "@/lib/auth";

export const instant = false;

interface ProductDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const { slug } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(
      `/signin?redirect=${encodeURIComponent(
        `/product/${slug}`,
      )}&reason=protected`,
    );
  }

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bazar-bg">
      <ScrollUp slug={slug} />

      <div className="mx-auto w-full max-w-[1120px] px-4 py-6 lg:px-0">
        <ProductContent product={product} />
      </div>
    </main>
  );
};

export default ProductDetailsPage;