import Link from "next/link";

import { categoryTable } from "@/db/schema";

import { Button } from "../ui/button";

interface Props {
  categories: (typeof categoryTable.$inferSelect)[];
}

const CategorySelector = ({ categories }: Props) => {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-[#F4EFFF] to-[#E8D5FF] p-6 lg:p-8">
      <div className="mb-4 text-center lg:mb-6">
        <h2 className="text-lg font-semibold text-gray-800 lg:text-xl">
          Explore nossas categorias
        </h2>
        <p className="text-sm text-gray-600 lg:text-base">
          Descubra produtos incríveis para todos os estilos
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 2xl:grid-cols-6">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={"ghost"}
            className="h-auto rounded-full bg-white py-3 text-xs font-semibold shadow-sm transition-all hover:scale-105 hover:shadow-md lg:py-4 lg:text-sm"
            asChild
          >
            <Link href={`/category/${category.slug}`}>{category.name}</Link>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default CategorySelector;
