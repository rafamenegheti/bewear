import Image from "next/image";
import Link from "next/link";

import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";
import { cn } from "@/lib/utils";

interface Props {
  product: typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  };
  texteContainerClassname?: string;
}

const ProductItem = ({ product, texteContainerClassname }: Props) => {
  const firstVariant = product.variants[0];

  return (
    <Link
      href={`/product-variant/${firstVariant.slug}`}
      className="group flex flex-col gap-4 transition-transform hover:scale-105"
    >
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src={firstVariant.imageUrl}
          alt={firstVariant.name}
          sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 350px"
          height={0}
          width={0}
          className="h-auto w-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
      </div>
      <div
        className={cn(
          "flex max-w-[200px] flex-col gap-1 lg:max-w-none",
          texteContainerClassname,
        )}
      >
        <h3 className="truncate text-sm font-medium lg:text-base">
          {product.name}
        </h3>
        <p className="text-muted-foreground truncate text-xs font-medium lg:text-sm">
          {product.description}
        </p>
        <p className="truncate text-sm font-semibold lg:text-lg">
          {formatCentsToBRL(firstVariant.priceInCents)}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
