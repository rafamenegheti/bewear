import Image from "next/image";

import { Header } from "@/components/common/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignInForm from "./components/sign-in-form";
import SignUpForm from "./components/sign-up-form";

const Authentication = () => {
  return (
    <>
      <Header />

      <main className="from-background to-muted/20 min-h-screen bg-gradient-to-br">
        {/* Mobile Layout */}
        <div className="flex w-full flex-col gap-6 p-5 lg:hidden">
          <Tabs defaultValue="sign-in">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="sign-in">Entrar</TabsTrigger>
              <TabsTrigger value="sign-up">Criar conta</TabsTrigger>
            </TabsList>
            <TabsContent value="sign-in">
              <SignInForm />
            </TabsContent>
            <TabsContent value="sign-up">
              <SignUpForm />
            </TabsContent>
          </Tabs>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:min-h-screen">
          {/* Left Column - Branding */}
          <div className="bg-primary flex flex-1 items-center justify-center p-12">
            <div className="text-primary-foreground max-w-md text-center">
              <div className="mb-8">
                <Image
                  src="/logo.svg"
                  alt="BEWEAR"
                  width={150}
                  height={39}
                  className="mx-auto invert"
                />
              </div>
              <h1 className="mb-4 text-3xl font-bold">Vista-se com Estilo</h1>
              <p className="text-lg opacity-90">
                Descubra nossa coleção exclusiva de roupas e acessórios para
                todos os momentos. Faça parte da comunidade BEWEAR.
              </p>
              <div className="mt-8 space-y-4 text-sm opacity-75">
                <div className="flex items-center justify-center gap-2">
                  <span>✨</span>
                  <span>Produtos de alta qualidade</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>🚚</span>
                  <span>Entrega rápida e segura</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>↩️</span>
                  <span>Troca fácil em 30 dias</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Authentication Forms */}
          <div className="flex flex-1 items-center justify-center p-12">
            <div className="w-full max-w-md">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold">Bem-vindo de volta</h2>
                <p className="text-muted-foreground mt-2">
                  Entre na sua conta ou crie uma nova
                </p>
              </div>

              <Tabs defaultValue="sign-in" className="w-full">
                <TabsList className="mb-8 grid w-full grid-cols-2">
                  <TabsTrigger value="sign-in" className="text-sm">
                    Entrar
                  </TabsTrigger>
                  <TabsTrigger value="sign-up" className="text-sm">
                    Criar conta
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="sign-in">
                  <SignInForm />
                </TabsContent>
                <TabsContent value="sign-up">
                  <SignUpForm />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Authentication;
