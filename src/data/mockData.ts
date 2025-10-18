// Mock data for demonstration
// In production, this would be fetched from an API

export const packages = [
  {
    id: '1',
    title: 'Caribe Paradisíaco',
    destination: 'Cancún, México',
    image: 'https://images.unsplash.com/photo-1736524972348-85c310d7815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwdmFjYXRpb258ZW58MXx8fHwxNzYwNTk0ODY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'R$ 3.999',
    duration: '7 dias',
    groupSize: 'Até 20 pessoas',
    description: 'Desfrute das praias paradisíacas de Cancún, com águas cristalinas e areia branca. Pacote completo com hotel all-inclusive.',
    featured: true,
    highlights: [
      'Hotel All-Inclusive 5 estrelas',
      'Passeio à Chichén Itzá',
      'Day tour em Playa del Carmen',
      'Transfer aeroporto/hotel',
    ],
    included: [
      'Passagens aéreas',
      'Hospedagem com café da manhã',
      'Seguro viagem',
      'Transfer in/out',
    ],
    notIncluded: [
      'Refeições não especificadas',
      'Passeios opcionais',
      'Despesas pessoais',
    ],
  },
  {
    id: '2',
    title: 'Europa Encantadora',
    destination: 'Paris, Londres e Roma',
    image: 'https://images.unsplash.com/photo-1593131540982-57778192fc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGNpdHklMjB0cmF2ZWx8ZW58MXx8fHwxNzYwNTY1MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'R$ 9.499',
    duration: '12 dias',
    groupSize: 'Até 30 pessoas',
    description: 'Conheça as principais cidades europeias em uma viagem inesquecível. Cultura, gastronomia e história.',
    featured: true,
    highlights: [
      'Torre Eiffel e Louvre em Paris',
      'Big Ben e Palácio de Buckingham',
      'Coliseu e Vaticano em Roma',
      'Guia em português',
    ],
    included: [
      'Passagens aéreas internacionais',
      'Trens entre cidades',
      'Hotéis 4 estrelas',
      'Café da manhã diário',
      'Tours guiados',
    ],
    notIncluded: [
      'Almoço e jantar',
      'Entradas em museus',
      'Despesas pessoais',
    ],
  },
  {
    id: '3',
    title: 'Aventura nos Alpes',
    destination: 'Suíça e Áustria',
    image: 'https://images.unsplash.com/photo-1543169564-be8896b30cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZSUyMGhpa2luZ3xlbnwxfHx8fDE3NjA1MzY5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'R$ 11.999',
    duration: '10 dias',
    groupSize: 'Até 15 pessoas',
    description: 'Explore as montanhas mais impressionantes da Europa. Perfeito para amantes da natureza e aventura.',
    featured: false,
    highlights: [
      'Jungfraujoch - Top of Europe',
      'Passeio de trem panorâmico',
      'Viena e Salzburgo',
      'Trilhas nos Alpes',
    ],
    included: [
      'Passagens aéreas',
      'Hospedagem em chalés',
      'Café da manhã e jantar',
      'Swiss Travel Pass',
    ],
    notIncluded: [
      'Almoços',
      'Atividades de aventura opcionals',
      'Despesas pessoais',
    ],
  },
  {
    id: '4',
    title: 'Cruzeiro pelo Mediterrâneo',
    destination: 'Grécia, Itália e Espanha',
    image: 'https://images.unsplash.com/photo-1710615209322-77731e33d4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwdHJhdmVsfGVufDF8fHx8MTc2MDYzMzAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'R$ 7.999',
    duration: '8 dias',
    groupSize: 'Ilimitado',
    description: 'Navegue pelas águas cristalinas do Mediterrâneo visitando as mais belas ilhas e cidades costeiras.',
    featured: false,
    highlights: [
      'Santorini e Mykonos',
      'Costa Amalfitana',
      'Barcelona',
      'Navio 5 estrelas',
    ],
    included: [
      'Passagens aéreas',
      'Cruzeiro all-inclusive',
      'Todas as refeições',
      'Entretenimento a bordo',
    ],
    notIncluded: [
      'Bebidas premium',
      'Excursões em terra',
      'Despesas pessoais',
    ],
  },
];

export const blogPosts = [
  {
    id: '1',
    title: 'Melhores Destinos para 2025',
    excerpt: 'Descubra os destinos mais procurados para o próximo ano e planeje sua viagem com antecedência.',
    image: 'https://images.unsplash.com/photo-1736524972348-85c310d7815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwdmFjYXRpb258ZW58MXx8fHwxNzYwNTk0ODY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2025-10-10',
    category: 'Dicas de Viagem',
  },
  {
    id: '2',
    title: 'Como Economizar em Viagens Internacionais',
    excerpt: 'Dicas práticas para viajar gastando menos sem perder qualidade e conforto.',
    image: 'https://images.unsplash.com/photo-1593131540982-57778192fc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGNpdHklMjB0cmF2ZWx8ZW58MXx8fHwxNzYwNTY1MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2025-10-05',
    category: 'Economia',
  },
  {
    id: '3',
    title: 'Documentos Necessários para Viajar',
    excerpt: 'Saiba quais documentos você precisa preparar antes da sua viagem internacional.',
    image: 'https://images.unsplash.com/photo-1543169564-be8896b30cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZSUyMGhpa2luZ3xlbnwxfHx8fDE3NjA1MzY5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2025-09-28',
    category: 'Documentação',
  },
];

export const galleryImages = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1736524972348-85c310d7815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwdmFjYXRpb258ZW58MXx8fHwxNzYwNTk0ODY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Praias Paradisíacas',
    location: 'Caribe',
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1593131540982-57778192fc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGNpdHklMjB0cmF2ZWx8ZW58MXx8fHwxNzYwNTY1MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Cidades Históricas',
    location: 'Europa',
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1543169564-be8896b30cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZSUyMGhpa2luZ3xlbnwxfHx8fDE3NjA1MzY5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Aventura nas Montanhas',
    location: 'Alpes Suíços',
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1710615209322-77731e33d4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwdHJhdmVsfGVufDF8fHx8MTc2MDYzMzAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Cruzeiros Exclusivos',
    location: 'Mediterrâneo',
  },
];

export const companyInfo = {
  name: 'Stella Braga Turismo',
  phone: '(11) 99999-9999',
  email: 'contato@stellabraga.com.br',
  address: 'Rua Exemplo, 123 - São Paulo, SP',
  hours: 'Seg - Sex: 9h às 18h | Sáb: 9h às 13h',
  whatsapp: '5511999999999',
};
