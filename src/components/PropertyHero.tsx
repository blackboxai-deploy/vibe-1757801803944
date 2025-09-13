"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PropertyHero() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/56912345678?text=Hola, estoy interesado en el departamento del Condominio Gran Océano', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/35872de2-2f00-4db5-9cb1-f7d8f424cfa1.png"
          alt="Vista panorámica del Condominio Gran Océano con la bahía de Valparaíso al fondo"
          className="w-full h-full object-cover opacity-40"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Property Type Badge */}
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-2">
            Departamento Exclusivo en Venta
          </Badge>
          
          {/* Main Title */}
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Condominio
            <br />
            <span className="text-blue-300">Gran Océano</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Vista Panorámica a la Bahía de Valparaíso
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-200">119m²</div>
                <div className="text-sm text-blue-100">+ 9m² Terraza</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-200">Piso 9</div>
                <div className="text-sm text-blue-100">Torre E</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-200">3</div>
                <div className="text-sm text-blue-100">Dormitorios</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-200">3</div>
                <div className="text-sm text-blue-100">Baños</div>
              </CardContent>
            </Card>
          </div>
          
          {/* Price */}
          <div className="mb-10">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
              UF 9.000
            </div>
            <p className="text-blue-100">Recreo, Viña del Mar</p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
              onClick={handleContactClick}
            >
              Ver Detalles Completos
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-green-600 hover:bg-green-700 text-white border-green-600 px-8 py-3 text-lg font-semibold"
              onClick={handleWhatsAppClick}
            >
              Contactar por WhatsApp
            </Button>
          </div>
          
          {/* Location */}
          <div className="mt-12 text-center">
            <p className="text-blue-100 text-lg">
              📍 Amunátegui 1946, Torre E – Viña del Mar
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}