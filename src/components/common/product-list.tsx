"use client";

import { productTable, productVariantTable } from "@/db/schema";

import ProductItem from "./product-item";

interface Props {
  title: string;
  products: (typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  })[];
}

const ProductList = ({ title, products }: Props) => {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold lg:text-2xl">{title}</h2>

      {/* Mobile: Horizontal scroll */}
      <div className="flex w-full gap-4 overflow-x-auto lg:hidden [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 xl:grid-cols-3 2xl:grid-cols-4">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            texteContainerClassname="max-w-full"
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;

// [&::-webkit-scrollbar]:hidden
