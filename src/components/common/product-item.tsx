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
  console.log({ firstVariant });

  return (
    <Link href={"/"} className="flex flex-col gap-4">
      <Image
        src={firstVariant.imageUrl}
        alt={firstVariant.name}
        sizes="100vw"
        height={0}
        width={0}
        className="h-auto w-full rounded-3xl"
      />
      <div
        className={cn(
          "flex max-w-[200px] flex-col gap-1",
          texteContainerClassname,
        )}
      >
        <p className="truncate text-sm font-medium">{product.name}</p>
        <p className="text-sx text-muted-foreground truncate font-medium">
          {product.description}
        </p>
        <p className="truncate text-sm font-semibold">
          {formatCentsToBRL(firstVariant.priceInCents)}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
