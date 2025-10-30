import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#333] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* COLUNA 1 - LOGO E DESCRIÇÃO */}
          <div className="flex flex-col">
            <img
              src="/logo.png"
              alt="Stella Braga Turismo"
              className="w-[220px] mb-6"
            />
            <p className="text-sm leading-relaxed text-gray-400 mb-8">
              Viagens nacionais e internacionais, cooperativas ou a lazer, excursões terrestres,
              pacotes aéreos, marítimos e fluviais, tudo com excelente custo-benefício.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com" },
                { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com" },
                { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com" },
              ].map(({ icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-gray-600 flex items-center justify-center rounded hover:bg-[--accent] hover:text-white transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* COLUNA 2 - SERVIÇOS */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6 tracking-wide">SERVIÇOS</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Assessoria Emissão Passaporte",
                "Assessoria Emissão Visto",
                "Pacotes de viagem",
                "Passagens aéreas",
                "Hotéis, Resorts e outros",
                "Cruzeiros Marítimos",
                "Traslados e transportes",
                "Aluguel de veículos",
                "Ingressos e shows",
                "Eventos corporativos",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 hover:text-[--accent] transition">
                  <span className="text-[--accent]">›</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3 - LINKS ÚTEIS */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6 tracking-wide">LINKS ÚTEIS</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", page: "home" },
                { label: "Grupos e Bloqueios", page: "grupos" },
                { label: "Sobre", page: "sobre" },
                { label: "Galeria de Fotos", page: "galeria" },
                { label: "Blog", page: "blog" },
                { label: "Contato", page: "contato" },
              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="hover:text-[--accent] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[--accent]">›</span> {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 4 - CONTATO */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6 tracking-wide">FALE CONOSCO</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[--accent] flex-shrink-0" />
                <p>
                  Rua Padre Doutor Ramon Ortiz, 2326<br />
                  Morada dos Nobres
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[--accent]" />
                <a href="tel:+5512981390430" className="hover:text-[--accent]">
                  (12) 98139-0430
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[--accent]" />
                <a
                  href="mailto:contato@stellaturismo.com.br"
                  className="hover:text-[--accent]"
                >
                  contato@stellaturismo.com.br
                </a>
              </li>
              <li className="pt-2">
                <img
                  src="https://cadastur.turismo.gov.br/img/logo-cadastur.svg"
                  alt="Cadastur"
                  className="mt-4 w-[150px]"
                />
              </li>
              <li>
                <p className="text-xs text-gray-400">
                  CNPJ 57.253.705/0001-38<br />Stella Braga Turismo
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* LINHA INFERIOR */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            Copyright © {new Date().getFullYear()}{" "}
            <span className="text-[--accent] hover:underline cursor-pointer">
              Stella Braga turismo
            </span>. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-4 md:mt-0">
            Desenvolvido por{" "}
            <a
              href="https://visiontaubate.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--accent] hover:underline"
            >
              VisionTaubaté
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
