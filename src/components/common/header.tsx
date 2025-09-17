"use client";
import { LogInIcon, LogOutIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Cart } from "./cart";

export const Header = () => {
  const { data: session } = authClient.useSession();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="BEWEAR"
            width={100}
            height={26.14}
            className="lg:w-[120px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Início
          </Link>
          <Link
            href="/category/masculino"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Masculino
          </Link>
          <Link
            href="/category/feminino"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Feminino
          </Link>
          <Link
            href="/category/acessorios"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Acessórios
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop User Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            {session?.user ? (
              <>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session?.user?.image as string} />
                    <AvatarFallback className="text-xs">
                      {session?.user?.name?.split(" ")?.[0]?.[0]}
                      {session?.user?.name?.split(" ")?.[1]?.[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden xl:block">
                    <p className="text-sm font-medium">{session?.user?.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {session?.user?.email}
                    </p>
                  </div>
                </div>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  onClick={() => authClient.signOut()}
                  className="hidden xl:flex"
                >
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  Sair
                </Button>
                <Button
                  variant={"outline"}
                  size={"icon"}
                  onClick={() => authClient.signOut()}
                  className="xl:hidden"
                >
                  <LogOutIcon className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <Button asChild variant={"outline"}>
                <Link href={"/authentication"}>
                  <LogInIcon className="mr-2 h-4 w-4" />
                  Entrar
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"outline"} size={"icon"} className="lg:hidden">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="space-y-4 pt-4">
                {session?.user ? (
                  <>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={session?.user?.image as string} />
                          <AvatarFallback>
                            {session?.user?.name?.split(" ")?.[0]?.[0]}
                            {session?.user?.name?.split(" ")?.[1]?.[0]}
                          </AvatarFallback>
                        </Avatar>

                        <div>
                          <h3 className="font-semibold">
                            {session?.user?.name}
                          </h3>
                          <span className="text-muted-foreground block text-xs">
                            {session?.user?.email}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant={"outline"}
                        size={"icon"}
                        onClick={() => authClient.signOut()}
                      >
                        <LogOutIcon />
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold">Olá, faça login!</h2>
                    <Button size={"icon"} asChild variant={"outline"}>
                      <Link href={"/authentication"}>
                        <LogInIcon />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
          <Cart />
        </div>
      </div>
    </header>
  );
};
