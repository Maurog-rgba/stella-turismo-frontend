import { Users, Calendar, Hotel, Plane, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

interface GruposPageProps {
  onNavigate: (page: string) => void;
}

export function GruposPage({ onNavigate }: GruposPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[--primary] to-[--secondary] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Grupos e Bloqueios</h1>
            <p className="text-xl mb-8 text-gray-100">
              Organizamos viagens em grupo para qualquer ocasião e bloqueios de hotel com condições especiais. 
              Perfeito para famílias, amigos, eventos e empresas.
            </p>
            <Button
              onClick={() => onNavigate('contato')}
              size="lg"
              className="bg-[--accent] text-[--neutral] hover:bg-yellow-400 rounded-full px-8"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2>Nossos Serviços para Grupos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos pacotes completos e personalizados para grupos de todos os tamanhos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[--primary] to-[--secondary] p-8 rounded-2xl text-white">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white mb-4">Viagens em Grupo</h3>
              <p className="text-gray-100 mb-6">
                Organizamos viagens completas para grupos de amigos, famílias, associações, 
                clubes e muito mais. Com itinerários personalizados e atenção aos mínimos detalhes.
              </p>
              <ul className="space-y-2 text-sm text-gray-100">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Grupos a partir de 10 pessoas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Roteiros personalizados</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Guia acompanhante em português</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Preços especiais para grupos</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[--neutral] to-[--primary] p-8 rounded-2xl text-white">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Hotel className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white mb-4">Bloqueios de Hotel</h3>
              <p className="text-gray-100 mb-6">
                Bloqueamos quartos em hotéis com as melhores tarifas para eventos, casamentos, 
                formaturas e outras ocasiões especiais.
              </p>
              <ul className="space-y-2 text-sm text-gray-100">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Melhores hotéis e resorts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Tarifas negociadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Flexibilidade nas reservas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Suporte completo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2>Ocasiões Perfeitas para Grupos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Qualquer que seja a ocasião, temos a solução perfeita para seu grupo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[--primary] rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="mb-2">Viagens em Família</h4>
              <p className="text-gray-600 text-sm">
                Reúna toda a família para uma viagem inesquecível com roteiros que agradam todas as idades.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[--secondary] rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h4 className="mb-2">Formaturas</h4>
              <p className="text-gray-600 text-sm">
                Celebre essa conquista com uma viagem memorável. Pacotes especiais para formandos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[--accent] rounded-full flex items-center justify-center mb-4">
                <Hotel className="w-6 h-6 text-[--neutral]" />
              </div>
              <h4 className="mb-2">Casamentos</h4>
              <p className="text-gray-600 text-sm">
                Bloqueios de hotel para convidados e lua de mel dos sonhos para os noivos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[--primary] rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="mb-2">Grupos de Amigos</h4>
              <p className="text-gray-600 text-sm">
                Aventuras com os amigos em destinos incríveis com muita diversão garantida.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[--secondary] rounded-full flex items-center justify-center mb-4">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <h4 className="mb-2">Excursões</h4>
              <p className="text-gray-600 text-sm">
                Excursões organizadas para destinos nacionais e internacionais com tudo incluso.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[--accent] rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-[--neutral]" />
              </div>
              <h4 className="mb-2">Eventos Especiais</h4>
              <p className="text-gray-600 text-sm">
                Aniversários, bodas, reuniões familiares e qualquer ocasião especial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2>Vantagens de Viajar em Grupo</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[--primary] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-2">Preços Especiais</h4>
              <p className="text-gray-600 text-sm">
                Descontos exclusivos para grupos que viajam juntos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[--secondary] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-2">Facilidades</h4>
              <p className="text-gray-600 text-sm">
                Toda a organização por nossa conta, você só precisa aproveitar
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[--accent] rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-[--neutral]" />
              </div>
              <h4 className="mb-2">Acompanhamento</h4>
              <p className="text-gray-600 text-sm">
                Guia acompanhante em todos os passeios do grupo
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[--primary] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-2">Segurança</h4>
              <p className="text-gray-600 text-sm">
                Suporte completo durante toda a viagem
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[--primary] to-[--secondary] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Pronto para Organizar sua Viagem em Grupo?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Entre em contato conosco e receba um orçamento personalizado para seu grupo.
          </p>
          <Button
            onClick={() => onNavigate('contato')}
            size="lg"
            className="bg-[--accent] text-[--neutral] hover:bg-yellow-400 rounded-full px-8"
          >
            Solicitar Orçamento para Grupo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
