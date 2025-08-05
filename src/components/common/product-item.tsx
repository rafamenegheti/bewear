import Image from "next/image";
import Link from "next/link";

import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";

interface Props {
  product: typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  };
}

const ProductItem = ({ product }: Props) => {
  const firstVariant = product.variants[0];
  console.log({ firstVariant });

  return (
    <Link href={"/"} className="flex flex-col gap-4">
      <Image
        src={
          "https://fsc-projects-static.s3.us-east-1.amazonaws.com/BEWEAR/products/Acesso%CC%81rios/1/78f9fa3b_c793_472a_b183_e32495033da2.jpg"
        }
        alt={firstVariant.name}
        width={200}
        height={200}
        className="rounded-3xl"
      />
      <div className="flex max-w-[200px] flex-col gap-1">
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
