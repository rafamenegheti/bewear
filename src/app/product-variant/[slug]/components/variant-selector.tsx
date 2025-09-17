import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { productVariantTable } from "@/db/schema";

interface Props {
  variants: (typeof productVariantTable.$inferSelect)[];
  selectedVariantSlug: string;
}

const VariantsSelecor = ({ variants, selectedVariantSlug }: Props) => {
  if (variants.length <= 1) return null;

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium lg:text-base">
        Variações disponíveis
      </h3>
      <div className="flex flex-wrap items-center gap-3 lg:gap-4">
        {variants.map((variant) => (
          <Link
            href={`/product-variant/${variant.slug}`}
            key={variant.id}
            className={`group relative overflow-hidden rounded-xl transition-all duration-200 hover:scale-105 ${
              selectedVariantSlug === variant.slug
                ? "ring-primary ring-2 ring-offset-2"
                : "ring-border hover:ring-primary/50 ring-1 hover:ring-2"
            }`}
          >
            <Image
              width={68}
              height={68}
              src={variant.imageUrl}
              alt={variant.name}
              className="h-16 w-16 object-cover transition-transform duration-200 group-hover:scale-110 lg:h-20 lg:w-20"
            />
            {selectedVariantSlug === variant.slug && (
              <div className="bg-primary/10 absolute inset-0 flex items-center justify-center">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
              </div>
            )}
          </Link>
        ))}
      </div>
      {variants.length > 0 && (
        <p className="text-muted-foreground text-xs lg:text-sm">
          {variants.find((v) => v.slug === selectedVariantSlug)?.name ||
            "Variação selecionada"}
        </p>
      )}
    </div>
  );
};

export default VariantsSelecor;
