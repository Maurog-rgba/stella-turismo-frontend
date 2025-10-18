import { ArrowRight, Calendar, User } from 'lucide-react';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { blogPosts } from '../data/mockData';

export function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[--primary] to-[--secondary] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white mb-4">Blog de Viagens</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Dicas, guias e inspirações para sua próxima aventura. Fique por dentro das melhores notícias do mundo do turismo.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-[--primary] to-[--secondary] rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <ImageWithFallback
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
                <Badge className="bg-[--accent] text-[--neutral] hover:bg-[--accent] w-fit mb-4">
                  Destaque
                </Badge>
                <h2 className="text-white mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-100 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-200 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blogPosts[0].date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Stella Braga</span>
                  </div>
                </div>
                <Button
                  className="bg-[--accent] text-[--neutral] hover:bg-yellow-400 rounded-full w-fit"
                >
                  Ler Mais
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-12">Últimas Postagens</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-[--accent] text-[--neutral] hover:bg-[--accent]">
                    {post.category}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="mb-3 group-hover:text-[--secondary] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[--secondary] hover:text-[--primary] p-0"
                    >
                      Ler mais
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}

            {/* Duplicate posts for demonstration */}
            {blogPosts.map((post, idx) => (
              <article key={`${post.id}-${idx}`} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-[--accent] text-[--neutral] hover:bg-[--accent]">
                    {post.category}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="mb-3 group-hover:text-[--secondary] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[--secondary] hover:text-[--primary] p-0"
                    >
                      Ler mais
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[--primary] to-[--secondary] rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-white mb-4">Inscreva-se em Nossa Newsletter</h2>
            <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
              Receba dicas exclusivas, promoções especiais e novidades sobre os melhores destinos diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[--accent]"
              />
              <Button className="bg-[--accent] text-[--neutral] hover:bg-yellow-400 rounded-full px-8">
                Inscrever
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
