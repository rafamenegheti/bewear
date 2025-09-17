import { desc } from "drizzle-orm";
import Image from "next/image";

import CategorySelector from "@/components/common/category-selector";
import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import HeroSection from "@/components/common/hero-section";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";
import { productTable } from "@/db/schema";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });

  const newlyCreatedProducts = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    with: {
      variants: true,
    },
  });

  const categories = await db.query.categoryTable.findMany({});

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection
          imageSrc="/banner-01.png"
          imageAlt="Leve uma vida com estilo"
          title="Vista-se com Estilo"
          subtitle="Descubra nossa coleção exclusiva de roupas e acessórios para todos os momentos"
          ctaText="Explorar Produtos"
          ctaLink="#produtos"
        />

        {/* Main Content */}
        <div className="mx-auto max-w-7xl space-y-12 px-5 lg:space-y-16 lg:px-8">
          <div id="produtos">
            <ProductList products={products} title="Mais vendidos" />
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <CategorySelector categories={categories} />
            </div>
          </div>

          <section className="relative">
            <div className="overflow-hidden rounded-none lg:rounded-3xl">
              <Image
                src={"/banner-02.png"}
                alt="Novos produtos chegando"
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto w-full"
                quality={100}
              />
            </div>
          </section>

          <ProductList products={newlyCreatedProducts} title="Novos produtos" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
