const Footer = () => {
  return (
    <footer className="bg-accent mt-16">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-lg font-bold">BEWEAR</h3>
              <p className="text-muted-foreground mt-2 text-sm">
                Moda de qualidade para todos os estilos. Descubra as últimas
                tendências e vista-se com confiança.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Links Rápidos</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-foreground transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a
                  href="/category/masculino"
                  className="hover:text-foreground transition-colors"
                >
                  Masculino
                </a>
              </li>
              <li>
                <a
                  href="/category/feminino"
                  className="hover:text-foreground transition-colors"
                >
                  Feminino
                </a>
              </li>
              <li>
                <a
                  href="/category/acessorios"
                  className="hover:text-foreground transition-colors"
                >
                  Acessórios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Contato</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>contato@bewear.com</li>
              <li>(11) 9999-9999</li>
              <li>
                São Paulo, SP
                <br />
                Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-8 lg:mt-12 lg:pt-8">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-xs font-medium">© 2025 Copyright BEWEAR</p>
            <p className="text-muted-foreground text-xs font-medium">
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
