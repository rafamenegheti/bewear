"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";

const formSchema = z
  .object({
    name: z.string("Nome inválido.").trim().min(1, "Nome inválido."),
    email: z.email("Email inválido."),
    password: z.string("Senha inválida.").min(8, "Senha inválido."),
    passwordConfirmation: z.string("Senha inválida.").min(8, "Senha inválida."),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirmation;
    },
    {
      error: "As senha não coincidem",
      path: ["passwordConfirmation"],
    },
  );

type FormValues = z.infer<typeof formSchema>;

const SignUpForm = () => {
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  async function onSubmit(values: FormValues) {
    await authClient.signUp.email({
      name: values.name, // required
      email: values.email, // required
      password: values.password, // required
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
        onError: (error) => {
          if (error.error.code === "USER_ALREADY_EXISTS") {
            toast.error("Usuário já existe");
            form.setError("email", {
              message: "Email já cadastrado",
            });
          }
          toast.error(error.error.message);
        },
      },
    });
  }

  return (
    <Card className="border-none shadow-lg lg:border lg:shadow-md">
      <CardHeader className="space-y-1 text-center lg:text-left">
        <CardTitle className="text-xl lg:text-2xl">Criar conta</CardTitle>
        <CardDescription className="text-sm lg:text-base">
          Crie uma conta e comece a explorar nossa coleção
        </CardDescription>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <CardContent className="grid gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Nome completo
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu nome completo"
                      {...field}
                      className="focus:ring-primary/20 h-11 transition-all focus:ring-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="seu@email.com"
                      {...field}
                      className="focus:ring-primary/20 h-11 transition-all focus:ring-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Senha</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Mínimo 8 caracteres"
                        {...field}
                        type="password"
                        className="focus:ring-primary/20 h-11 transition-all focus:ring-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passwordConfirmation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Confirmar senha
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Confirme sua senha"
                        {...field}
                        type="password"
                        className="focus:ring-primary/20 h-11 transition-all focus:ring-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="text-muted-foreground text-xs">
              <p>
                Ao criar uma conta, você aceita nossos{" "}
                <button
                  type="button"
                  className="text-primary hover:underline"
                  onClick={() => toast.info("Termos em desenvolvimento")}
                >
                  Termos de Serviço
                </button>{" "}
                e{" "}
                <button
                  type="button"
                  className="text-primary hover:underline"
                  onClick={() => toast.info("Política em desenvolvimento")}
                >
                  Política de Privacidade
                </button>
                .
              </p>
            </div>
          </CardContent>

          <CardFooter className="pt-0">
            <Button
              type="submit"
              className="h-11 w-full rounded-lg transition-all hover:scale-[1.02]"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Criando conta..." : "Criar conta"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default SignUpForm;
