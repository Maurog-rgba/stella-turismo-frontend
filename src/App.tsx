import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { ViagensPage } from './pages/ViagensPage';
import { CorporativoPage } from './pages/CorporativoPage';
import { SobrePage } from './pages/SobrePage';
import { ContatoPage } from './pages/ContatoPage';
import { GruposPage } from './pages/GruposPage';
import { GaleriaPage } from './pages/GaleriaPage';
import { BlogPage } from './pages/BlogPage';
import { Toaster } from './components/ui/sonner';
import { packages } from './data/mockData';

type Page = 'home' | 'viagens' | 'grupos' | 'corporativo' | 'galeria' | 'blog' | 'sobre' | 'contato';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>();

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleRequestQuote = (packageId: string) => {
    const pkg = packages.find(p => p.id === packageId);
    setSelectedPackage(pkg?.title);
    setQuoteModalOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onRequestQuote={handleRequestQuote} />;
      case 'viagens':
        return <ViagensPage onRequestQuote={handleRequestQuote} />;
      case 'grupos':
        return <GruposPage onNavigate={handleNavigate} />;
      case 'corporativo':
        return <CorporativoPage onNavigate={handleNavigate} />;
      case 'galeria':
        return <GaleriaPage />;
      case 'blog':
        return <BlogPage />;
      case 'sobre':
        return <SobrePage />;
      case 'contato':
        return <ContatoPage />;
      default:
        return <HomePage onNavigate={handleNavigate} onRequestQuote={handleRequestQuote} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />
      
      <WhatsAppButton />
      
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => {
          setQuoteModalOpen(false);
          setSelectedPackage(undefined);
        }}
        packageTitle={selectedPackage}
      />

      <Toaster position="top-right" />
    </div>
  );
}
