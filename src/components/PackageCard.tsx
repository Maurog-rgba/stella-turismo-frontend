import { Calendar, DollarSign, MapPin, Share2, Users } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './ui/ImageWithFallback';

interface PackageCardProps {
  id: string;
  title: string;
  destination: string;
  image: string;
  price: string;
  duration: string;
  groupSize: string;
  description: string;
  featured?: boolean;
  onRequestQuote: (packageId: string) => void;
}

export function PackageCard({
  id,
  title,
  destination,
  image,
  price,
  duration,
  groupSize,
  description,
  featured,
  onRequestQuote,
}: PackageCardProps) {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Confira este pacote: ${title} - ${destination}`;

    const shareUrls: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      instagram: url, // Instagram doesn't support direct sharing via URL
    };

    if (platform === 'instagram') {
      alert('Copie o link para compartilhar no Instagram!');
      navigator.clipboard.writeText(url);
    } else {
      window.open(shareUrls[platform], '_blank');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {featured && (
          <Badge className="absolute top-4 right-4 bg-[var(--accent)] text-[var(--neutral)] hover:bg-[var(--accent)] border-none">
            Destaque
          </Badge>
        )}

        {/* Share button */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="relative group/share">
            <Button
              size="sm"
              className="bg-white/90 hover:bg-white text-[var(--neutral)] rounded-full"
            >
              <Share2 className="w-4 h-4" />
            </Button>
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-2 opacity-0 group-hover/share:opacity-100 transition-opacity duration-200 pointer-events-none group-hover/share:pointer-events-auto">
              <button
                onClick={() => handleShare('whatsapp')}
                className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded whitespace-nowrap"
              >
                WhatsApp
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded whitespace-nowrap"
              >
                Facebook
              </button>
              <button
                onClick={() => handleShare('instagram')}
                className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded whitespace-nowrap"
              >
                Instagram
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-2 text-[var(--secondary)] mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{destination}</span>
        </div>

        <p className="text-[var(--base-content)] text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Info */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{groupSize}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <p className="text-xs text-gray-500">A partir de</p>
            <p className="text-2xl font-bold text-[--primary]">{price}</p>
          </div>
          <Button
            onClick={() => onRequestQuote(id)}
            className="bg-[var(--secondary)] hover:bg-[var(--primary)] text-white rounded-full px-6"
          >
            <DollarSign className="w-4 h-4 mr-1" />
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </div>
  );
}
