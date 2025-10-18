import { Facebook, Instagram, Mail, Menu, Phone, X, Youtube } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [viagensOpen, setViagensOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    {
      id: 'viagens',
      label: 'Viagens',
      children: [
        { id: 'nacionais', label: 'Nacionais' },
        { id: 'internacionais', label: 'Internacionais' },
        { id: 'pacotes', label: 'Pacotes' },
      ],
    },
    { id: 'grupos', label: 'Grupos e Bloqueios' },
    { id: 'corporativo', label: 'Corporativo' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'blog', label: 'Blog' },
    { id: 'sobre', label: 'Quem Somos' },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <header className="bg-transparent sticky top-0 z-50">
      {/* Top thin bar: contacts left, hours center, socials right */}
      <div className="bg-white/90 border-b text-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-9">
          <div className="flex items-center gap-4 text-xs text-[--muted]">
            <a href="mailto:contato@stellabraga.com.br" className="flex items-center gap-2 hover:text-[--accent] transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">contato@stellabraga.com.br</span>
            </a>
            <a href="tel:+5511999999999" className="flex items-center gap-2 hover:text-[--accent] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(11) 99999-9999</span>
            </a>
          </div>

          <div className="hidden sm:block text-[--muted] text-xs">Seg - Sex: 9h às 18h | Sáb: 9h às 13h</div>

          <div className="flex items-center gap-3 text-[--primary]">
            <a href="#" aria-label="Facebook" className="hover:text-[--accent] transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[--accent] transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-[--accent] transition-colors"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Centered white nav card */}
      <div className="container mx-auto px-4 -mt-6">
        <div className="mx-auto max-w-6xl bg-white rounded-lg shadow-lg py-4 px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <div className="w-14 h-14 bg-[--primary] rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">SB</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[--primary] font-extrabold text-lg">Stella Braga</span>
              <span className="text-[--secondary] text-sm">Turismo</span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <div key={item.id} className={`relative ${item.children ? 'group' : ''}`}>
                <button
                  onClick={() => {
                    if (item.children) {
                      setViagensOpen((s) => !s);
                    } else {
                      onNavigate(item.id);
                    }
                  }}
                  onMouseEnter={() => item.children && setViagensOpen(true)}
                  onMouseLeave={() => item.children && setViagensOpen(false)}
                  className={`hover:text-[--secondary] transition-colors ${currentPage === item.id ? 'text-[--primary] font-semibold' : 'text-[--base-content]'} flex items-center gap-2`}
                >
                  {item.label}
                  {item.children && <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>}
                </button>

                {item.children && (
                  <div
                    onMouseEnter={() => setViagensOpen(true)}
                    onMouseLeave={() => setViagensOpen(false)}
                    className={`absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-md py-2 z-50 ${viagensOpen ? 'block' : 'hidden'}`}
                  >
                    {item.children.map((child) => (
                      <button
                        key={child.id}
                        onClick={() => onNavigate(child.id)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation (full width under the card) */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-3 px-2 pb-4 flex flex-col gap-2">
            {menuItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => {
                    if (item.children) {
                      // expand/collapse mobile submenu by toggling viagensOpen
                      setViagensOpen((s) => !s);
                    } else {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors ${currentPage === item.id ? 'bg-[--primary] text-white' : 'text-[--base-content]'}`}
                >
                  {item.label}
                </button>

                {item.children && viagensOpen && (
                  <div className="pl-6">
                    {item.children.map((child) => (
                      <button
                        key={child.id}
                        onClick={() => {
                          onNavigate(child.id);
                          setMobileMenuOpen(false);
                          setViagensOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-sm"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
