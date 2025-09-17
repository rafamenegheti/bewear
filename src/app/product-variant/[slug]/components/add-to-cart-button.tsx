"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

import { addProductToCart } from "@/actions/add-cart-product";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

interface AddToCartButtonProps {
  productVariantId: string;
  quantity: number;
}

const AddToCartButton = ({
  productVariantId,
  quantity,
}: AddToCartButtonProps) => {
  const { data: session } = authClient.useSession();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["addProductToCart", productVariantId, quantity],
    mutationFn: () =>
      addProductToCart({
        productVariantId,
        quantity,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Produto adicionado à sacola!");
    },
    onError: (error) => {
      console.error("Error adding product to cart:", error);

      // Check if it's an authentication error
      if (error instanceof Error && error.message === "Unauthorized") {
        toast.error(
          "Você precisa estar logado para adicionar produtos à sacola.",
        );
        return;
      }

      toast.error("Erro ao adicionar produto à sacola. Tente novamente.");
    },
  });

  // If user is not logged in, show login button
  if (!session?.user) {
    return (
      <Button
        className="rounded-full transition-all duration-200 hover:scale-[1.02]"
        size="lg"
        variant="outline"
        asChild
      >
        <Link href="/authentication">Fazer login para comprar</Link>
      </Button>
    );
  }

  return (
    <Button
      className="rounded-full transition-all duration-200 hover:scale-[1.02]"
      size="lg"
      variant="outline"
      disabled={isPending}
      onClick={() => mutate()}
    >
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Adicionando...
        </>
      ) : (
        "Adicionar à sacola"
      )}
    </Button>
  );
};

export default AddToCartButton;
