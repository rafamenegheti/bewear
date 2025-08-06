import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { productVariantTable } from "@/db/schema";

interface Props {
  variants: (typeof productVariantTable.$inferSelect)[];
  selectedVariantSlug: string;
}

const VariantsSelecor = ({ variants, selectedVariantSlug }: Props) => {
  return (
    <div className="flex items-center gap-4">
      {variants.map((variant) => (
        <Link
          href={`/product-variant/${variant.slug}`}
          key={variant.id}
          className={
            selectedVariantSlug === variant.slug
              ? "border-primary rounded-xl border-2"
              : ""
          }
        >
          <Image
            width={68}
            height={68}
            src={variant.imageUrl}
            alt={variant.name}
            className="rounded-xl"
          />
        </Link>
      ))}
    </div>
  );
};

export default VariantsSelecor;
