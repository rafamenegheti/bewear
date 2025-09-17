import { eq } from "drizzle-orm";
import Image from "next/image";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/common/breadcrumb";
import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";
import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";

import ProductActions from "./components/product-actions";
import VariantsSelecor from "./components/variant-selector";

interface Props {
  params: Promise<{ slug: string }>;
}

const ProductPage = async ({ params }: Props) => {
  const { slug } = await params;
  const productVariant = await db.query.productVariantTable.findFirst({
    where: eq(productVariantTable.slug, slug),
    with: {
      product: {
        with: {
          variants: true,
          category: true,
        },
      },
    },
  });

  if (!productVariant) {
    return notFound();
  }

  const likelyProducts = await db.query.productTable.findMany({
    where: eq(productTable.categoryId, productVariant.product.categoryId),
    with: {
      variants: true,
    },
  });

  const breadcrumbItems = [
    { label: "Início", href: "/" },
    {
      label: productVariant.product.category?.name || "Categoria",
      href: `/category/${productVariant.product.category?.slug}`,
    },
    { label: productVariant.product.name },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-5 py-4 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        {/* Mobile Layout */}
        <div className="flex flex-col space-y-6 lg:hidden">
          <Image
            src={productVariant.imageUrl}
            alt={productVariant.name}
            sizes="100vw"
            height={0}
            width={0}
            className="h-auto w-full object-cover"
          />

          <div className="px-5">
            <VariantsSelecor
              variants={productVariant.product.variants}
              selectedVariantSlug={productVariant.slug}
            />
          </div>

          <div className="px-5">
            <h1 className="text-lg font-semibold">
              {productVariant.product.name}
            </h1>
            <h2 className="text-muted-foreground text-sm">
              {productVariant.name}
            </h2>
            <p className="text-lg font-semibold">
              {formatCentsToBRL(productVariant.priceInCents)}
            </p>
          </div>

          <ProductActions productVariantId={productVariant.id} />

          <div className="px-5">
            <p className="text-sm">{productVariant.product.description}</p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="mx-auto hidden max-w-7xl px-5 py-8 lg:block lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Column - Product Image */}
            <div className="space-y-6">
              <div className="sticky top-24">
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src={productVariant.imageUrl}
                    alt={productVariant.name}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    height={0}
                    width={0}
                    className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="mt-6">
                  <VariantsSelecor
                    variants={productVariant.product.variants}
                    selectedVariantSlug={productVariant.slug}
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Product Details */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold">
                  {productVariant.product.name}
                </h1>
                <h2 className="text-muted-foreground text-lg">
                  {productVariant.name}
                </h2>
                <p className="text-2xl font-bold">
                  {formatCentsToBRL(productVariant.priceInCents)}
                </p>
              </div>

              <div className="space-y-6">
                <ProductActions productVariantId={productVariant.id} />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Descrição</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {productVariant.product.description}
                </p>
              </div>

              {/* Additional Product Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Informações do Produto
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Material:</span>
                    <span>100% Algodão</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cuidados:</span>
                    <span>Lavar à máquina</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Origem:</span>
                    <span>Nacional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ProductList products={likelyProducts} title="Talvez você goste" />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProductPage;
