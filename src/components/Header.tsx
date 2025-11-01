import { Gift, HelpCircle, Phone, User } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuIcons = {
    hospedagens: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="10" width="18" height="10" rx="2" />
        <path d="M7 10V7a5 5 0 0110 0v3" />
      </svg>
    ),
    passagens: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M2 16l20-5-8.5-2.5L12 2l-1.5 6.5L2 16z" />
        <circle cx="12" cy="19" r="2" />
      </svg>
    ),
    pacotes: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="4" />
        <rect x="7" y="3" width="10" height="8" rx="4" />
      </svg>
    ),
    ofertas: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
    prontos: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="4" />
      </svg>
    ),
    alugueis: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="7" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    passeios: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    carros: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="6" rx="2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
    disney: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="8" cy="8" r="4" />
        <circle cx="16" cy="8" r="4" />
        <circle cx="12" cy="16" r="6" />
      </svg>
    ),
    universal: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
      </svg>
    ),
    cruzeiros: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="4" y="14" width="16" height="6" rx="3" />
        <path d="M4 14l8-8 8 8" />
      </svg>
    ),
    seguros: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="8" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
    transfers: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M4 12h16M4 12l4-4M4 12l4 4" />
      </svg>
    ),
  };

  const mainMenu = [
    { id: "hospedagens", label: "Hospedagens", icon: menuIcons.hospedagens },
    { id: "passagens", label: "Passagens", icon: menuIcons.passagens },
    { id: "pacotes", label: "Pacotes", icon: menuIcons.pacotes },
    { id: "ofertas", label: "Ofertas", icon: menuIcons.ofertas },
    { id: "prontos", label: "Pacotes prontos", icon: menuIcons.prontos },
    { id: "alugueis", label: "Aluguéis", icon: menuIcons.alugueis },
    { id: "passeios", label: "Passeios", icon: menuIcons.passeios },
    { id: "carros", label: "Carros", icon: menuIcons.carros },
    { id: "disney", label: "Disney", icon: menuIcons.disney },
    { id: "universal", label: "Universal", icon: menuIcons.universal },
    { id: "cruzeiros", label: "Cruzeiros", icon: menuIcons.cruzeiros },
    { id: "seguros", label: "Seguros", icon: menuIcons.seguros },
    { id: "transfers", label: "Transfers", icon: menuIcons.transfers },
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top bar */}
      <div className="flex items-center justify-between px-10 py-2 bg-[var(--primary)] text-white text-sm">
        <div className="mx-auto flex justify-between w-full max-w-6xl ">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>
              Televendas <strong>0800 883 6342</strong>
            </span>
          </div>
          <div className="flex items-center gap-6 text-gray-200">
            <button className="flex items-center gap-2 hover:text-white transition">
              <HelpCircle className="w-4 h-4" /> Ajuda
            </button>
            <button className="flex items-center gap-2 hover:text-white transition">
              <User className="w-4 h-4" /> Minhas Viagens
            </button>
            <button className="flex items-center gap-1 hover:text-white transition">
              <Gift className="w-4 h-4" /> Benefícios
            </button>
          </div>
        </div>
      </div>

      {/* Logo + menu */}
      <div className="flex flex-col items-center bg-white pt-4 max-w-6xl mx-auto">
        {/* Logo */}
        <button onClick={() => onNavigate("home")} className="flex items-center mb-2">
          <img
            src="./logo.png"
            alt="Stella Braga Turismo"
            width={200}
            height={40}
            className="h-auto"
          />
        </button>

        {/* Menu */}
        <nav className="w-full max-w-6xl flex justify-center border-t border-gray-200 mt-3 pt-3 pb-2">
          <ul className="flex justify-between max-w-6xl w-full">
            {mainMenu.map((item) => (
              <li key={item.id} className="flex flex-col items-center cursor-pointer hover:scale-105 hover:text-[var(--primary)] border-b-2 border-transparent hover:border-b-2 hover:border-[var(--primary)] transition-all mx-auto">
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`flex flex-col items-center ${currentPage === item.id
                    ? "text-white bg-[var(--primary)] rounded-full p-2 shadow-md"
                    : "text-gray-600 hover:text-[var(--primary)] rounded-full p-2"
                    } transition-all`}
                >
                  {item.icon}
                </button>
                <span
                  className={`text-xs text-center font-semibold mt-1 ${currentPage === item.id ? "text-[var(--primary)]" : "text-gray-700"
                    }`}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
