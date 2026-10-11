"use client";

import type { Product } from "@/types/product";
import { formatBengaliNumber, formatPrice } from "@/lib/format";

export default function PriceTicker({
  products,
}: {
  products: Product[];
}) {
  const items = [...products, ...products];

  return (
    <div className="overflow-hidden border-y border-amber-200 bg-amber-50 py-3">
      <div className="ticker-track flex w-max gap-10 whitespace-nowrap">
        {items.map((product, index) => (
          <span
            key={`${product.id}-${index}`}
            className="text-sm font-medium text-gray-800"
          >
            🛒 {product.name} · {formatPrice(product.today)} ·{" "}
            {product.change > 0
              ? "▲"
              : product.change < 0
                ? "▼"
                : "—"}{" "}
            {formatBengaliNumber(Math.abs(product.change))}%
          </span>
        ))}
      </div>
    </div>
  );
}