import { ArrowRight, Award, Building2, Calendar, CheckCircle, Target, TrendingUp, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';

interface CorporativoPageProps {
  onNavigate: (page: string) => void;
}

export function CorporativoPage({ onNavigate }: CorporativoPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[--neutral] to-[--primary] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Turismo Corporativo</h1>
            <p className="text-xl mb-8 text-gray-100">
              Soluções personalizadas para empresas que buscam excelência em viagens corporativas, 
              eventos, convenções e programas de incentivo.
            </p>
            <Button
              onClick={() => onNavigate('contato')}
              size="lg"
              className="bg-[--accent] text-[--neutral] hover:bg-yellow-400 rounded-full px-8"
            >
              Solicitar Proposta
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2>Nossos Serviços Corporativos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas para atender todas as necessidades de viagens da sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[--primary] rounded-full flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3>Gestão de Viagens</h3>
              <p className="text-gray-600">
                Gerenciamento completo das viagens corporativas da sua empresa com relatórios detalhados e controle de custos.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[--secondary] rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3>Eventos e Convenções</h3>
              <p className="text-gray-600">
                Organização completa de eventos corporativos, desde pequenas reuniões até grandes convenções internacionais.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[--accent] rounded-full flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-[--neutral]" />
              </div>
              <h3>Viagens de Incentivo</h3>
              <p className="text-gray-600">
                Programas de incentivo personalizados para motivar e recompensar equipes de alta performance.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[--primary] rounded-full flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3>Treinamentos e Workshops</h3>
              <p className="text-gray-600">
                Organização de viagens para treinamentos, capacitações e workshops em qualquer destino.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[--secondary] rounded-full flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3>Feiras e Exposições</h3>
              <p className="text-gray-600">
                Suporte completo para participação em feiras e eventos comerciais nacionais e internacionais.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[--accent] rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-[--neutral]" />
              </div>
              <h3>Consultoria em Viagens</h3>
              <p className="text-gray-600">
                Assessoria especializada para otimizar custos e melhorar a política de viagens da sua empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Por Que Escolher a Stella Braga?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[--secondary] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Atendimento Personalizado 24/7</h4>
                    <p className="text-gray-600">
                      Equipe dedicada disponível a qualquer hora para atender as necessidades da sua empresa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[--secondary] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Economia e Controle de Custos</h4>
                    <p className="text-gray-600">
                      Negociação de tarifas especiais e relatórios detalhados para melhor controle financeiro.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[--secondary] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Tecnologia e Integração</h4>
                    <p className="text-gray-600">
                      Plataforma online integrada para reservas, aprovações e gestão de viagens.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[--secondary] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Experiência Comprovada</h4>
                    <p className="text-gray-600">
                      Mais de 15 anos atendendo empresas de pequeno, médio e grande porte.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[--secondary] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Suporte em Emergências</h4>
                    <p className="text-gray-600">
                      Assistência imediata em caso de imprevistos durante as viagens.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1642522029686-5485ea7e6042?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzYwNjMzMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Corporate Travel"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[--primary] to-[--secondary] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Pronto para Otimizar as Viagens da Sua Empresa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Entre em contato e descubra como podemos ajudar sua empresa a economizar e melhorar a gestão de viagens.
          </p>
          <Button
            onClick={() => onNavigate('contato')}
            size="lg"
            className="bg-[--accent] text-[--neutral] hover:bg-yellow-400 rounded-full px-8"
          >
            Solicitar Proposta Corporativa
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
