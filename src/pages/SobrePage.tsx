import { Award, Globe, Heart, Target, TrendingUp, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';

export function SobrePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[--primary] to-[--secondary] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Quem Somos</h1>
            <p className="text-xl text-gray-100">
              Transformando sonhos em realidade há mais de 15 anos. Somos apaixonados por criar experiências de viagem inesquecíveis.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Nossa História</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  A <span className="text-[--primary] font-semibold">Stella Braga Turismo</span> nasceu em 2010 
                  do sonho de proporcionar experiências de viagem autênticas e memoráveis. Fundada por Stella Braga, 
                  uma profissional apaixonada por turismo e com vasta experiência no setor, nossa agência começou 
                  pequena, mas com grandes ambições.
                </p>
                <p>
                  Ao longo dos anos, crescemos não apenas em tamanho, mas em expertise e qualidade de serviço. 
                  Cada viagem que organizamos é cuidadosamente planejada, considerando os desejos e necessidades 
                  únicas de nossos clientes. Nossa dedicação à excelência nos rendeu a confiança de milhares de 
                  viajantes e empresas.
                </p>
                <p>
                  Hoje, somos reconhecidos como uma das principais agências de turismo da região, oferecendo 
                  desde pacotes personalizados para famílias até soluções corporativas completas. Nossa missão 
                  permanece a mesma: transformar sonhos em realidade e criar memórias que duram para sempre.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1708246118550-dd746a0b43e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZ2VuY3klMjB0ZWFtfGVufDF8fHx8MTc2MDU1NTE3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Nossa equipe"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-[--primary] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Missão</h3>
              <p className="text-gray-600">
                Proporcionar experiências de viagem excepcionais, superando as expectativas de nossos clientes 
                com atendimento personalizado e soluções inovadoras.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-[--secondary] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como a agência de turismo mais confiável e inovadora, conectando pessoas 
                a destinos incríveis ao redor do mundo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-[--accent] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[--neutral]" />
              </div>
              <h3 className="mb-4">Valores</h3>
              <p className="text-gray-600">
                Paixão por viajar, comprometimento com a excelência, integridade em todas as relações, 
                e respeito pela diversidade cultural.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Differentials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2>Nossos Diferenciais</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              O que nos torna únicos no mercado de turismo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[--primary] rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="mb-2">Atendimento Personalizado</h4>
                <p className="text-gray-600 text-sm">
                  Cada cliente é único. Por isso, desenvolvemos roteiros sob medida que atendem 
                  exatamente suas expectativas e necessidades.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[--secondary] rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="mb-2">Equipe Experiente</h4>
                <p className="text-gray-600 text-sm">
                  Profissionais altamente qualificados com conhecimento profundo dos destinos 
                  e anos de experiência no mercado.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[--accent] rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-[--neutral]" />
              </div>
              <div>
                <h4 className="mb-2">Parcerias Globais</h4>
                <p className="text-gray-600 text-sm">
                  Parcerias estratégicas com os melhores fornecedores mundiais, garantindo 
                  qualidade e preços competitivos.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[--primary] rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="mb-2">Melhores Preços</h4>
                <p className="text-gray-600 text-sm">
                  Negociamos constantemente para oferecer as melhores tarifas sem comprometer 
                  a qualidade dos serviços.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[--secondary] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="mb-2">Suporte Completo</h4>
                <p className="text-gray-600 text-sm">
                  Acompanhamento antes, durante e depois da viagem. Estamos sempre ao seu lado 
                  para garantir tranquilidade.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[--accent] rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-[--neutral]" />
              </div>
              <div>
                <h4 className="mb-2">Certificações e Prêmios</h4>
                <p className="text-gray-600 text-sm">
                  Reconhecidos por órgãos do setor e premiados pela qualidade de nossos serviços 
                  e satisfação dos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-[--primary] to-[--secondary] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold mb-2 text-[--accent]">15+</h3>
              <p className="text-gray-100">Anos de Experiência</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2 text-[--accent]">5000+</h3>
              <p className="text-gray-100">Clientes Felizes</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2 text-[--accent]">50+</h3>
              <p className="text-gray-100">Destinos</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2 text-[--accent]">98%</h3>
              <p className="text-gray-100">Satisfação</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
