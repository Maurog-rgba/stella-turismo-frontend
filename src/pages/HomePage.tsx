import { ArrowRight, Mail } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { FeaturedSectionCard } from '../components/FeaturedSectionCard';
import { PackageCard } from '../components/PackageCard';
import { TravelSearch } from '../components/TravelSearch';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { blogPosts, packages } from '../data/mockData';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onRequestQuote: (packageId: string) => void;
}

export function HomePage({ onNavigate, onRequestQuote }: HomePageProps) {
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [origin, setOrigin] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Inscrição realizada com sucesso!', {
      description: 'Você receberá nossas melhores ofertas por e-mail.'
    });
    setEmail('');
  };

  const handleSearch = () => {
    if (!destination || !checkIn || !checkOut) {
      toast.error('Por favor, preencha todos os campos da busca');
      return;
    }

    toast.success('Buscando viagens para ' + destination + '!', {
      description: `${adults} adulto(s) e ${children} criança(s) - ${checkIn} até ${checkOut}`
    });
    onNavigate('viagens');
  };

  const destinations = [
    'Maldivas',
    'Turquia',
    'Marrocos',
    'Rio de Janeiro',
    'Bahia',
    'Foz do Iguaçu',
    'Cancún',
    'Paris',
    'Londres',
    'Roma',
  ];

  const internationalDestinations = [
    {
      id: 'maldivas',
      name: 'Maldivas',
      image: 'https://images.unsplash.com/photo-1682308999971-208126ba75ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMHJlc29ydHxlbnwxfHx8fDE3NjA3MzQ4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Paraíso tropical com praias de areia branca'
    },
    {
      id: 'turquia',
      name: 'Turquia',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJrZXklMjBpc3RhbmJ1bHxlbnwxfHx8fDE3NjA3ODU0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Mistura única de cultura ocidental e oriental'
    },
    {
      id: 'marrocos',
      name: 'Marrocos',
      image: 'https://images.unsplash.com/photo-1653565271392-8bf279cdf068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NvJTIwbWFycmFrZWNofGVufDF8fHx8MTc2MDgwNzY3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Exotismo e história no norte da África'
    }
  ];

  const nationalDestinations = [
    {
      id: 'rio',
      name: 'Rio de Janeiro',
      image: 'https://images.unsplash.com/photo-1513648197777-861864c16509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaW8lMjBkZSUyMGphbmVpcm8lMjBjaHJpc3QlMjByZWRlZW1lcnxlbnwxfHx8fDE3NjA4MDc2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Cidade Maravilhosa com praias e pontos turísticos'
    },
    {
      id: 'bahia',
      name: 'Bahia',
      image: 'https://images.unsplash.com/photo-1749337965976-1e19d0af8d7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWhpYSUyMHNhbHZhZG9yJTIwYnJhemlsfGVufDF8fHx8MTc2MDgwNzY3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Berço da cultura brasileira e praias paradisíacas'
    },
    {
      id: 'foz',
      name: 'Foz do Iguaçu',
      image: 'https://images.unsplash.com/photo-1649183371651-9b9a366ef96d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZ3VhenUlMjBmYWxscyUyMGJyYXppbHxlbnwxfHx8fDE3NjA4MDc2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Uma das maravilhas naturais do mundo'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1666088540676-222a3c133575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB2YWNhdGlvbiUyMGluc3RhZ3JhbXxlbnwxfHx8fDE3NjA4MDc2NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1596457328913-3b4d416ae621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBwaG90b2dyYXBoeSUyMG1vbWVudHN8ZW58MXx8fHwxNzYwODA3Njc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1682308999971-208126ba75ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMHJlc29ydHxlbnwxfHx8fDE3NjA3MzQ4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJrZXklMjBpc3RhbmJ1bHxlbnwxfHx8fDE3NjA3ODU0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1649183371651-9b9a366ef96d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZ3VhenUlMjBmYWxscyUyMGJyYXppbHxlbnwxfHx8fDE3NjA4MDc2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1513648197777-861864c16509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaW8lMjBkZSUyMGphbmVpcm8lMjBjaHJpc3QlMjByZWRlZW1lcnxlbnwxfHx8fDE3NjA4MDc2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16" style={{
        background: 'linear-gradient(45deg, var(--primary) 15%, var(--accent) 15%, var(--accent) 70%, var(--secondary) 70%)',
      }}>
        {/* <div className="container mx-auto text-center">
          <h1 className="text-[var(--primary)] font-bold my-6 text-xl md:text-2xl lg:text-3xl text-accent-100">
            Promoção em viagens para o mundo todo!
          </h1>
        </div> */}

        {/* Search Card */}
        <TravelSearch />
      </section>

      {/* Destinos Internacionais - Novo Layout */}
      <section className="py-16 bg-white w-full">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Lado esquerdo: destaque visual e texto */}
            <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0 md:pr-8 min-w-[260px] max-w-xs">
              <div className="mb-6">
                {/* Ícone ilustrativo */}
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="14" fill="#FFEB3B" />
                  <rect x="18" y="18" width="32" height="24" rx="8" stroke="var(--accent)" strokeWidth="3" fill="white" />
                  <rect x="24" y="24" width="20" height="16" rx="6" stroke="var(--accent)" strokeWidth="2" fill="white" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-black leading-tight">
                Encontre <span className="text-[var(--accent)]">ofertas</span><br /> ideais para sua viagem
              </h2>
              <p className="text-gray-500 mb-4">Saindo de <span className="text-[var(--accent)]">São Paulo</span></p>
              <span className="text-xs text-gray-400 mt-2">*Taxas de embarque serão cobradas na primeira parcela</span>
            </div>
            {/* Lado direito: carrossel de cards */}
            <div className="w-full flex items-center justify-end">
              <div className="flex-1 max-w-[800px] min-w-0">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={24}
                  slidesPerView={3}
                  centeredSlides={true}
                  speed={1500}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  style={{ paddingBottom: 8, width: '100%', maxWidth: '100%' }}
                >
                  {internationalDestinations.concat(internationalDestinations).map((dest, idx) => (
                    <SwiperSlide key={dest.id + idx} style={{ minWidth: 0, display: 'flex', justifyContent: 'center' }}>
                      <PackageCard
                        id={dest.id}
                        title={`${dest.name} | 4 dias`}
                        destination={dest.name}
                        image={dest.image}
                        price="R$ 1.999"
                        duration="4 dias"
                        groupSize="2 pessoas"
                        description={dest.description}
                        onRequestQuote={onRequestQuote}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinos Nacionais - Novo Layout */}
      <section className="py-16 bg-gray-50 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Lado esquerdo: carrossel de cards */}
            <div className="flex-1 max-w-[800px] min-w-0 flex items-center justify-start">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={24}
                slidesPerView={3}
                centeredSlides={true}
                speed={1500}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                style={{ paddingBottom: 8, width: '100%', maxWidth: '100%' }}
              >
                {nationalDestinations.concat(nationalDestinations).map((dest, idx) => (
                  <SwiperSlide key={dest.id + idx} style={{ minWidth: 0, display: 'flex', justifyContent: 'center' }}>
                    <PackageCard
                      id={dest.id}
                      title={`${dest.name} | 7 dias`}
                      destination={dest.name}
                      image={dest.image}
                      price={idx % 3 === 0 ? 'R$ 616' : idx % 3 === 1 ? 'R$ 725' : 'R$ 1.068'}
                      duration="7 dias"
                      groupSize="2 pessoas"
                      description={dest.description}
                      onRequestQuote={onRequestQuote}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Lado direito: destaque visual e texto */}
            <div className="flex-1 flex flex-col items-start justify-center mb-12 md:mb-0 md:pr-12 min-w-[260px] max-w-xs">
              <div className="mb-6">
                {/* Ícone ilustrativo */}
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="42" cy="14" r="14" fill="#FFEB3B" />
                  <path d="M10 38l36-8-12-4-2-8-4 8-12 4z" stroke="var(--accent)" strokeWidth="3" fill="white" />
                  <path d="M28 44a4 4 0 100-8 4 4 0 000 8z" stroke="var(--accent)" strokeWidth="2" fill="white" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-black leading-tight">
                <span className="text-[var(--accent)]">Os melhores</span> preços<br />
              </h2>
              <p className="text-gray-500 mb-4">Saindo de <span className="text-(--accent) underline cursor-pointer">São Paulo <span className="align-middle">▼</span></span></p>
              <span className="text-xs text-gray-400 mt-2">*Taxas de embarque serão cobradas na primeira parcela</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className="py-20 relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(23, 38, 79, 0.85), rgba(23, 38, 79, 0.85)), url('https://images.unsplash.com/photo-1673515335048-ace62cf73a26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzbGV0dGVyJTIwdHJhdmVsJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjA4MDc2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-white mb-4">Fique por dentro das novidades</h2>
              <p className="text-gray-200 text-lg">
                Receba em primeira mão as melhores ofertas, promoções exclusivas e dicas de viagem direto no seu e-mail.
              </p>
            </div>
            <div>
              <form onSubmit={handleNewsletterSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="mb-4">Assine nossa Newsletter</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="newsletter-email" className="text-sm mb-2 text-gray-700">
                      Seu melhor e-mail
                    </Label>
                    <Input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seuemail@exemplo.com"
                      className="rounded-xl border-gray-300"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[var(--secondary)] hover:bg-[var(--accent)] text-white rounded-full"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Quero receber ofertas
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Pacotes em destaque - Comercial */}
      <section className="py-20 bg-white max-w-6xl mx-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          {/* Lado esquerdo: texto comercial e destaque visual */}
          <div className="flex-1 flex flex-col items-start justify-center mb-12 md:mb-0 md:pr-12">
            <div className="mb-6">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="16" width="40" height="28" rx="10" fill="var(--accent)" fillOpacity="0.08" />
                <rect x="14" y="22" width="28" height="16" rx="8" stroke="var(--accent)" strokeWidth="3" fill="white" />
                <circle cx="44" cy="16" r="6" fill="#FFEB3B" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-black leading-tight">
              <span className="text-[var(--accent)]">Pacotes exclusivos</span> para sua próxima viagem
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-md">
              Descubra ofertas imperdíveis, roteiros completos e condições especiais para transformar seu sonho em realidade. Reserve agora e viaje com tranquilidade!
            </p>
            <Button
              onClick={() => onNavigate('viagens')}
              size="lg"
              className="bg-[var(--accent)] hover:bg-[var(--accent)]/80 text-white rounded-full px-10 py-6 text-lg font-bold shadow-xl transition-all duration-200"
            >
              Ver todos os pacotes
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          {/* Lado direito: cards de pacotes */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 max-w-full">
              {packages.slice(0, 6).map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  {...pkg}
                  onRequestQuote={onRequestQuote}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog - Dicas e notícias */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2>Dicas, notícias e muito mais</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fique por dentro das últimas novidades do mundo das viagens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[var(--accent)] text-[var(--neutral)] px-3 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <h3 className="mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <Button
                    onClick={() => onNavigate('blog')}
                    variant="outline"
                    className="rounded-full border-[var(--secondary)] text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-white"
                  >
                    Ler mais
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={() => onNavigate('blog')}
              size="lg"
              variant="outline"
              className="rounded-full border-[var(--secondary)] text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-white"
            >
              Ver todos os artigos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Galeria - Compartilhando momentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2>Compartilhando momentos incríveis!</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Veja alguns dos momentos especiais que nossos clientes viveram
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
              >
                <ImageWithFallback
                  src={img}
                  alt={`Galeria ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={() => onNavigate('galeria')}
              size="lg"
              className="bg-[var(--secondary)] hover:bg-[var(--accent)] text-white rounded-full px-8"
            >
              Ver galeria completa
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Pronto para Sua Próxima Aventura?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Entre em contato conosco e descubra como podemos transformar sua viagem em uma experiência inesquecível.
          </p>
          <Button
            onClick={() => onNavigate('contato')}
            size="lg"
            className="bg-[var(--accent)] text-[var(--neutral)] hover:bg-yellow-400 rounded-full px-8"
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
