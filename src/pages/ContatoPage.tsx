import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from 'sonner@2.0.3';

export function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In production, this would send data to an API
    console.log('Form submitted:', formData);
    
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[--primary] to-[--secondary] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white mb-4">Entre em Contato</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Estamos prontos para ajudar você a realizar a viagem dos seus sonhos. Entre em contato conosco!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6">Envie sua Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 rounded-lg"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 rounded-lg"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 rounded-lg"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Assunto *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 rounded-lg"
                    placeholder="Sobre o que você quer falar?"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 rounded-lg min-h-32"
                    placeholder="Conte-nos mais sobre sua viagem dos sonhos..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[--secondary] hover:bg-[--primary] text-white rounded-full"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-6">Informações de Contato</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-[--primary] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Rua Exemplo, 123<br />
                      Centro - São Paulo, SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-[--secondary] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1">Telefone</h4>
                    <p className="text-gray-600">
                      <a href="tel:+5511999999999" className="text-[--secondary] hover:text-[--primary]">
                        (11) 99999-9999
                      </a>
                      <br />
                      <a href="tel:+551133334444" className="text-[--secondary] hover:text-[--primary]">
                        (11) 3333-4444
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-[--accent] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[--neutral]" />
                  </div>
                  <div>
                    <h4 className="mb-1">E-mail</h4>
                    <p className="text-gray-600">
                      <a href="mailto:contato@stellabraga.com.br" className="text-[--secondary] hover:text-[--primary]">
                        contato@stellabraga.com.br
                      </a>
                      <br />
                      <a href="mailto:vendas@stellabraga.com.br" className="text-[--secondary] hover:text-[--primary]">
                        vendas@stellabraga.com.br
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-[--primary] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 9h às 18h<br />
                      Sábado: 9h às 13h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-[--primary] to-[--secondary] rounded-2xl text-white">
                <h4 className="mb-2 text-white">Atendimento WhatsApp</h4>
                <p className="text-sm mb-4 text-gray-100">
                  Prefere falar por WhatsApp? Clique no botão flutuante no canto da tela ou envie uma mensagem diretamente!
                </p>
                <Button
                  onClick={() => {
                    const phoneNumber = '5511999999999';
                    const message = 'Olá! Gostaria de mais informações.';
                    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="bg-[--accent] text-[--neutral] hover:bg-yellow-400 rounded-full w-full"
                >
                  Abrir WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-8">Nossa Localização</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg h-96 bg-gray-300 flex items-center justify-center">
            <p className="text-gray-600">Mapa interativo seria carregado aqui via Google Maps API</p>
          </div>
        </div>
      </section>
    </div>
  );
}
