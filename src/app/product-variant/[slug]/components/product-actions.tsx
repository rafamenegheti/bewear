"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import AddToCartButton from "./add-to-cart-button";

interface ProductActionsProps {
  productVariantId: string;
}

const ProductActions = ({ productVariantId }: ProductActionsProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="space-y-6">
      {/* Quantity Selector */}
      <div className="px-5 lg:px-0">
        <div className="space-y-4">
          <h3 className="font-medium">Quantidade</h3>
          <div className="bg-background flex w-[120px] items-center justify-between rounded-lg border">
            <Button
              size="icon"
              variant="ghost"
              onClick={handleDecrement}
              className="hover:bg-muted"
            >
              <MinusIcon className="h-4 w-4" />
            </Button>
            <span className="font-medium">{quantity}</span>
            <Button
              size="icon"
              variant="ghost"
              onClick={handleIncrement}
              className="hover:bg-muted"
            >
              <PlusIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col space-y-4 px-5 lg:px-0">
        <AddToCartButton
          productVariantId={productVariantId}
          quantity={quantity}
        />
        <Button className="rounded-full" size="lg" variant="default">
          Comprar agora
        </Button>
      </div>

      {/* Desktop: Additional Features */}
      <div className="hidden space-y-4 px-5 lg:block lg:px-0">
        <div className="text-muted-foreground flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span>Em estoque</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            <span>Entrega rápida</span>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span>🚚</span>
            <span>Frete grátis acima de R$ 200</span>
          </div>
          <div className="flex items-center gap-2">
            <span>↩️</span>
            <span>Troca grátis em 30 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🔒</span>
            <span>Compra 100% segura</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductActions;
