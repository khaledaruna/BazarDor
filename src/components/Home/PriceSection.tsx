import type { Product } from "@/types/product";
import ProductGrid from "./ProductCard";

interface PriceSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
}

export default function PriceSection({
  title,
  subtitle,
  products,
}: PriceSectionProps) {
  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="mt-2 text-gray-600">{subtitle}</p>
      </div>

      <ProductGrid products={products} />
    </section>
  );
}