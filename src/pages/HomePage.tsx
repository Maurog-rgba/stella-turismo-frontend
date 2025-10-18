import { ArrowRight, Baby, Calendar, Mail, MapPin, Search, Users } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { PackageCard } from '../components/PackageCard';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { blogPosts, packages } from '../data/mockData';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onRequestQuote: (packageId: string) => void;
}

export function HomePage({ onNavigate, onRequestQuote }: HomePageProps) {
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
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
      {/* Hero Section com Background Image */}
      <section 
        className="relative bg-cover bg-center text-white py-32 md:py-48"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 102, 51, 0.5), rgba(7, 173, 62, 0.5)), url('https://images.unsplash.com/photo-1678991013254-c0ddd0ab674c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvdXBsZSUyMHRyYXZlbGluZyUyMGJlYWNofGVufDF8fHx8MTc2MDgwNzY3MXww&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white mb-8 text-4xl md:text-5xl lg:text-6xl">
            A viagem dos seus sonhos!
          </h1>
        </div>

        {/* Search Section - Integrated in Hero */}
        <div className="container mx-auto px-4 mt-12">
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
              {/* Destino */}
              <div className="lg:col-span-2">
                <Label htmlFor="destination" className="text-sm mb-2 flex items-center gap-2 text-gray-700">
                  <MapPin className="w-4 h-4 text-[--primary]" />
                  Destino
                </Label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger id="destination" className="rounded-xl border-gray-300">
                    <SelectValue placeholder="Selecione o destino" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinations.map((dest) => (
                      <SelectItem key={dest} value={dest}>
                        {dest}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Check-in */}
              <div>
                <Label htmlFor="checkin" className="text-sm mb-2 flex items-center gap-2 text-gray-700">
                  <Calendar className="w-4 h-4 text-[--primary]" />
                  Check-in
                </Label>
                <Input
                  id="checkin"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="rounded-xl border-gray-300"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Check-out */}
              <div>
                <Label htmlFor="checkout" className="text-sm mb-2 flex items-center gap-2 text-gray-700">
                  <Calendar className="w-4 h-4 text-[--primary]" />
                  Check-out
                </Label>
                <Input
                  id="checkout"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="rounded-xl border-gray-300"
                  min={checkIn || new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Adultos */}
              <div>
                <Label htmlFor="adults-home" className="text-sm mb-2 flex items-center gap-2 text-gray-700">
                  <Users className="w-4 h-4 text-[--primary]" />
                  Adultos
                </Label>
                <Select value={adults} onValueChange={setAdults}>
                  <SelectTrigger id="adults-home" className="rounded-xl border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Crianças */}
              <div>
                <Label htmlFor="children-home" className="text-sm mb-2 flex items-center gap-2 text-gray-700">
                  <Baby className="w-4 h-4 text-[--primary]" />
                  Crianças
                </Label>
                <Select value={children} onValueChange={setChildren}>
                  <SelectTrigger id="children-home" className="rounded-xl border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Botão de Busca */}
            <div className="mt-6 text-center">
              <Button
                onClick={handleSearch}
                size="lg"
                className="bg-[--secondary] hover:bg-[--primary] text-white rounded-full px-12"
              >
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Destinos Internacionais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2>Destinos Internacionais</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internationalDestinations.map((dest) => (
              <div key={dest.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <ImageWithFallback
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-white mb-2">{dest.name}</h3>
                    <p className="text-sm text-gray-200 mb-4">{dest.description}</p>
                    <Button 
                      onClick={() => onNavigate('viagens')}
                      className="bg-[--secondary] hover:bg-[--primary] text-white rounded-full"
                    >
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinos Nacionais */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2>Destinos Nacionais</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nationalDestinations.map((dest) => (
              <div key={dest.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <ImageWithFallback
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-white mb-2">{dest.name}</h3>
                    <p className="text-sm text-gray-200 mb-4">{dest.description}</p>
                    <Button 
                      onClick={() => onNavigate('viagens')}
                      className="bg-[--secondary] hover:bg-[--primary] text-white rounded-full"
                    >
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </div>
            ))}
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
                    className="w-full bg-[--secondary] hover:bg-[--primary] text-white rounded-full"
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

      {/* Planeje sua viagem - Pacotes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2>Planeje sua viagem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pacotes completos com os melhores preços e condições especiais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {packages.slice(0, 6).map((pkg) => (
              <PackageCard
                key={pkg.id}
                {...pkg}
                onRequestQuote={onRequestQuote}
              />
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => onNavigate('viagens')}
              size="lg"
              className="bg-[--secondary] hover:bg-[--primary] text-white rounded-full px-8"
            >
              Ver todos os pacotes
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
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
                    <span className="bg-[--accent] text-[--neutral] px-3 py-1 rounded-full text-xs">
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
                    className="rounded-full border-[--secondary] text-[--secondary] hover:bg-[--secondary] hover:text-white"
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
              className="rounded-full border-[--secondary] text-[--secondary] hover:bg-[--secondary] hover:text-white"
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
              className="bg-[--secondary] hover:bg-[--primary] text-white rounded-full px-8"
            >
              Ver galeria completa
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[--primary] to-[--secondary] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Pronto para Sua Próxima Aventura?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Entre em contato conosco e descubra como podemos transformar sua viagem em uma experiência inesquecível.
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
      </section>
    </div>
  );
}
