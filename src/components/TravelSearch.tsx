import { useState } from 'react';
import { Calendar, MapPin, Users, Baby, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface TravelSearchProps {
  onSearch?: (data: SearchData) => void;
}

export interface SearchData {
  destination: string;
  departureDate: string;
  returnDate: string;
  adults: number;
  children: number;
}

export function TravelSearch({ onSearch }: TravelSearchProps) {
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');

  const destinations = [
    'Cancún, México',
    'Paris, França',
    'Londres, Inglaterra',
    'Roma, Itália',
    'Suíça',
    'Áustria',
    'Grécia',
    'Espanha',
    'Portugal',
    'Dubai',
    'Maldivas',
    'Tailândia',
    'Japão',
    'Nova York, EUA',
    'Orlando, EUA',
  ];

  const handleSearch = () => {
    const searchData: SearchData = {
      destination,
      departureDate,
      returnDate,
      adults: parseInt(adults),
      children: parseInt(children),
    };
    
    if (onSearch) {
      onSearch(searchData);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-w-6xl mx-auto -mt-16 relative z-10 border border-gray-100">
      <h3 className="mb-8 text-center">Encontre sua Viagem dos Sonhos</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
        {/* Destino */}
        <div className="sm:col-span-2 lg:col-span-2">
          <Label htmlFor="destination" className="text-sm mb-2 flex items-center gap-2">
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

        {/* Data de Partida */}
        <div>
          <Label htmlFor="departure" className="text-sm mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[--primary]" />
            Partida
          </Label>
          <Input
            id="departure"
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="rounded-xl border-gray-300"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Data de Retorno */}
        <div>
          <Label htmlFor="return" className="text-sm mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[--primary]" />
            Retorno
          </Label>
          <Input
            id="return"
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="rounded-xl border-gray-300"
            min={departureDate || new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Passageiros */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Label className="text-sm mb-2 flex items-center gap-2">
            <Users className="w-4 h-4 text-[--primary]" />
            Passageiros
          </Label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="adults" className="text-xs text-gray-500">
                Adultos
              </Label>
              <Select value={adults} onValueChange={setAdults}>
                <SelectTrigger id="adults" className="rounded-xl border-gray-300">
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
            <div>
              <Label htmlFor="children" className="text-xs text-gray-500 flex items-center gap-1">
                <Baby className="w-3 h-3" />
                Crianças
              </Label>
              <Select value={children} onValueChange={setChildren}>
                <SelectTrigger id="children" className="rounded-xl border-gray-300">
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
          Buscar Viagens
        </Button>
      </div>
    </div>
  );
}
