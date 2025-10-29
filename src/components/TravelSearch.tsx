import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

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
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState<Date | undefined>(undefined);
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");

  const handleSearch = () => {
    const searchData: SearchData = {
      destination,
      departureDate: departureDate ? format(departureDate, 'yyyy-MM-dd') : '',
      returnDate: returnDate ? format(returnDate, 'yyyy-MM-dd') : '',
      adults: parseInt(adults),
      children: parseInt(children),
    };
    if (onSearch) {
      onSearch(searchData);
    }
  };

  return (
    <div className="bg-white rounded-md shadow-lg p-6 md:p-8 max-w-6xl mx-auto -mt-12 relative z-10 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
        {/* Primeira linha: Destino, Partida, Retorno, Pessoas */}
        <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="flex flex-col">
            <Input
              id="destination"
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Origem"
              className="rounded-md border border-gray-300 h-12 px-3 w-full transition-all duration-150 focus:ring-2 focus:ring-[#7ac143] focus:border-[#7ac143] hover:border-[#7ac143] hover:shadow-md bg-white animate-[pulse_0.8s_ease-in-out]"
              style={{ boxShadow: '0 1px 4px 0 rgba(122,193,67,0.04)' }}
            />
          </div>
          <div className="flex flex-row items-stretch w-full bg-white rounded-md border border-gray-300 overflow-hidden divide-x divide-gray-300">
            {/* Data de Início */}
            <Popover>
              <PopoverTrigger asChild>
                <div
                  tabIndex={0}
                  role="button"
                  aria-label="Selecionar data de partida"
                  className="flex-1 h-12 px-3 flex items-center justify-between text-left bg-white cursor-pointer select-none transition-shadow focus:outline-none focus:ring-2 focus:ring-[#7ac143] focus:ring-offset-2 hover:shadow-md active:scale-[0.98] touch-manipulation"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') e.currentTarget.click(); }}
                >
                  <span className={departureDate ? '' : 'text-gray-400'}>
                    {departureDate ? format(departureDate, 'dd/MM/yyyy', { locale: ptBR }) : 'Início'}
                  </span>
                  <CalendarIcon className="w-5 h-5 text-gray-400 ml-2 shrink-0" />
                </div>
              </PopoverTrigger>
              <PopoverContent align="start" className="p-0 w-auto bg-white z-50">
                <Calendar
                  mode="single"
                  selected={departureDate}
                  onSelect={setDepartureDate}
                  fromDate={new Date()}
                  initialFocus
                  locale={ptBR}
                  classNames={{
                    day_selected: 'bg-[#7ac143] text-white hover:bg-[#5fa22d] focus:bg-[#5fa22d] focus:text-white ring-2 ring-[#7ac143] ring-offset-2',
                    day: 'transition-colors duration-150',
                  }}
                />
              </PopoverContent>
            </Popover>
            {/* Data de Fim */}
            <Popover>
              <PopoverTrigger asChild>
                <div
                  tabIndex={0}
                  role="button"
                  aria-label="Selecionar data de retorno"
                  className="flex-1 h-12 px-3 flex items-center justify-between text-left bg-white cursor-pointer select-none transition-shadow focus:outline-none focus:ring-2 focus:ring-[#7ac143] focus:ring-offset-2 hover:shadow-md active:scale-[0.98] touch-manipulation"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') e.currentTarget.click(); }}
                >
                  <span className={returnDate ? '' : 'text-gray-400'}>
                    {returnDate ? format(returnDate, 'dd/MM/yyyy', { locale: ptBR }) : 'Fim'}
                  </span>
                  <CalendarIcon className="w-5 h-5 text-gray-400 ml-2 shrink-0" />
                </div>
              </PopoverTrigger>
              <PopoverContent align="start" className="p-0 w-auto bg-white z-50">
                <Calendar
                  mode="single"
                  selected={returnDate}
                  onSelect={setReturnDate}
                  fromDate={departureDate || new Date()}
                  initialFocus
                  locale={ptBR}
                  classNames={{
                    day_selected: 'bg-[#7ac143] text-white hover:bg-[#5fa22d] focus:bg-[#5fa22d] focus:text-white ring-2 ring-[#7ac143] ring-offset-2',
                    day: 'transition-colors duration-150',
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-col">
            <select
              id="adults"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="rounded-md border border-gray-300 h-12 px-3 w-full bg-white focus:ring-2 focus:ring-[#7ac143] focus:border-[#7ac143] hover:border-[#7ac143] hover:shadow-md transition-all duration-150 appearance-none shadow-sm animate-[pulse_0.8s_ease-in-out]"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' fill=\'none\' stroke=\'gray\' stroke-width=\'2\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25em 1.25em', boxShadow: '0 1px 4px 0 rgba(122,193,67,0.04)' }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col justify-end">
            <Button
              onClick={handleSearch}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-[#5fa22d] hover:to-[#7ac143] text-white rounded-md px-8 h-12 w-full md:w-auto shadow-lg transition-all duration-200"
              style={{ boxShadow: '0 4px 16px 0 rgba(122,193,67,0.15)' }}
            >
              PESQUISAR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
