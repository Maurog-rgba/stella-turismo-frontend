import { Facebook, Instagram, Mail, MapPin, Phone, Youtube, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[--neutral] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Sobre a Empresa */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[--accent] rounded-full flex items-center justify-center">
                <span className="text-[--neutral] font-bold text-xl">SB</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg">Stella Braga</span>
                <span className="text-sm text-gray-300">Turismo</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Realizando sonhos e criando memórias inesquecíveis há mais de 15 anos. Sua agência de confiança para experiências únicas de viagem.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[--primary] rounded-full flex items-center justify-center hover:bg-[--secondary] transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[--primary] rounded-full flex items-center justify-center hover:bg-[--secondary] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[--primary] rounded-full flex items-center justify-center hover:bg-[--secondary] transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="text-gray-300 hover:text-[--accent] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  → Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('viagens')} 
                  className="text-gray-300 hover:text-[--accent] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  → Viagens
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('grupos')} 
                  className="text-gray-300 hover:text-[--accent] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  → Grupos e Bloqueios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('corporativo')} 
                  className="text-gray-300 hover:text-[--accent] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  → Corporativo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('galeria')} 
                  className="text-gray-300 hover:text-[--accent] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  → Galeria
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('blog')} 
                  className="text-gray-300 hover:text-[--accent] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  → Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('sobre')} 
                  className="text-gray-300 hover:text-[--accent] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  → Quem Somos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contato')} 
                  className="text-gray-300 hover:text-[--accent] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  → Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Nossos Serviços</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[--accent] mt-1">•</span>
                <span>Pacotes Nacionais</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[--accent] mt-1">•</span>
                <span>Pacotes Internacionais</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[--accent] mt-1">•</span>
                <span>Viagens em Grupo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[--accent] mt-1">•</span>
                <span>Bloqueios de Hotel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[--accent] mt-1">•</span>
                <span>Turismo Corporativo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[--accent] mt-1">•</span>
                <span>Eventos e Convenções</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[--accent] mt-1">•</span>
                <span>Assessoria Completa</span>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Entre em Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[--accent]" />
                <div>
                  <p className="text-sm leading-relaxed">
                    Rua Exemplo, 123<br />
                    Centro - São Paulo, SP<br />
                    CEP: 01000-000
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-[--accent]" />
                <a 
                  href="tel:+5511999999999" 
                  className="text-gray-300 hover:text-[--accent] transition-colors duration-300"
                >
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-[--accent]" />
                <a 
                  href="mailto:contato@stellabraga.com.br" 
                  className="text-gray-300 hover:text-[--accent] transition-colors duration-300 text-sm"
                >
                  contato@stellabraga.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-[--accent]" />
                <div className="text-sm">
                  <p>Seg - Sex: 9h às 18h</p>
                  <p>Sáb: 9h às 13h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Stella Braga Turismo. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-xs">
              <button className="hover:text-[--accent] transition-colors">
                Política de Privacidade
              </button>
              <button className="hover:text-[--accent] transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
