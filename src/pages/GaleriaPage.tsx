import { X } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { galleryImages } from '../data/mockData';

export function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[--primary] to-[--secondary] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white mb-4">Galeria de Viagens</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Veja alguns dos momentos incríveis que nossos clientes vivenciaram em suas viagens conosco.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="aspect-square">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h4 className="font-semibold text-white">{image.title}</h4>
                    <p className="text-sm text-gray-200">{image.location}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate some images for a fuller gallery */}
            {galleryImages.map((image, idx) => (
              <div
                key={`${image.id}-${idx}`}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="aspect-square">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h4 className="font-semibold text-white">{image.title}</h4>
                    <p className="text-sm text-gray-200">{image.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
