import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { PackageCard } from '../components/PackageCard';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { packages } from '../data/mockData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

interface ViagensPageProps {
  onRequestQuote: (packageId: string) => void;
}

export function ViagensPage({ onRequestQuote }: ViagensPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [durationFilter, setDurationFilter] = useState('all');

  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrice =
      priceFilter === 'all' ||
      (priceFilter === 'low' && parseFloat(pkg.price.replace(/[^\d]/g, '')) < 5000) ||
      (priceFilter === 'medium' && parseFloat(pkg.price.replace(/[^\d]/g, '')) >= 5000 && parseFloat(pkg.price.replace(/[^\d]/g, '')) < 10000) ||
      (priceFilter === 'high' && parseFloat(pkg.price.replace(/[^\d]/g, '')) >= 10000);

    const matchesDuration =
      durationFilter === 'all' ||
      (durationFilter === 'short' && parseInt(pkg.duration) <= 7) ||
      (durationFilter === 'medium' && parseInt(pkg.duration) > 7 && parseInt(pkg.duration) <= 10) ||
      (durationFilter === 'long' && parseInt(pkg.duration) > 10);

    return matchesSearch && matchesPrice && matchesDuration;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[--primary] to-[--secondary] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white mb-4">Nossos Pacotes de Viagem</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Explore nossos destinos cuidadosamente selecionados e encontre a viagem perfeita para você.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white shadow-sm sticky top-[72px] z-40 border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar destino ou pacote..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-full border-gray-300"
              />
            </div>

            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-full md:w-48 rounded-full">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Preço" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os preços</SelectItem>
                <SelectItem value="low">Até R$ 5.000</SelectItem>
                <SelectItem value="medium">R$ 5.000 - R$ 10.000</SelectItem>
                <SelectItem value="high">Acima de R$ 10.000</SelectItem>
              </SelectContent>
            </Select>

            <Select value={durationFilter} onValueChange={setDurationFilter}>
              <SelectTrigger className="w-full md:w-48 rounded-full">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Duração" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as durações</SelectItem>
                <SelectItem value="short">Até 7 dias</SelectItem>
                <SelectItem value="medium">8 - 10 dias</SelectItem>
                <SelectItem value="long">Mais de 10 dias</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg) => (
                <PackageCard key={pkg.id} {...pkg} onRequestQuote={onRequestQuote} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-4">Nenhum pacote encontrado com os filtros selecionados.</p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setPriceFilter('all');
                  setDurationFilter('all');
                }}
                className="bg-[--secondary] hover:bg-[--primary] rounded-full"
              >
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
