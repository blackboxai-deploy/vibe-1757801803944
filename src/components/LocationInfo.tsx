"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function LocationInfo() {
  const locationFeatures = [
    {
      title: "Barrio Recreo",
      description: "Sector tradicional y residencial de Viña del Mar",
      details: "Uno de los barrios más consolidados y valorados de la ciudad",
      icon: "🏘️"
    },
    {
      title: "Conectividad",
      description: "Conexión directa por Av. España",
      details: "Acceso rápido a Valparaíso y centro de Viña del Mar",
      icon: "🚗"
    },
    {
      title: "Plaza Recreo",
      description: "A pasos de la histórica Plaza Recreo",
      details: "Centro neurálgico del barrio con comercio y servicios",
      icon: "🌳"
    },
    {
      title: "Universidades",
      description: "Cerca de importantes centros educativos",
      details: "Fácil acceso a universidades y colegios de prestigio",
      icon: "🎓"
    },
    {
      title: "Comercio Local",
      description: "Variada oferta comercial y gastronómica",
      details: "Supermercados, restaurantes y servicios a pocas cuadras",
      icon: "🛒"
    },
    {
      title: "Transporte",
      description: "Excelente conectividad de transporte público",
      details: "Múltiples líneas de micro y metro Valparaíso",
      icon: "🚌"
    }
  ];

  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=Amunátegui 1946, Viña del Mar, Chile', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            Ubicación Estratégica
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recreo, <span className="text-blue-600">Viña del Mar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vive en uno de los barrios más tradicionales y mejor conectados de Viña del Mar, 
            con todo lo que necesitas a tu alcance.
          </p>
        </div>

        {/* Location Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {locationFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-600 font-semibold mb-3">
                  {feature.description}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Image */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0e53bde3-8be6-4768-ab09-1f1da4fff064.png"
                    alt="Vista aérea del barrio Recreo en Viña del Mar mostrando la ubicación del Condominio Gran Océano"
                    className="w-full h-80 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={handleMapClick}
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNmMGY5ZmYiLz48dGV4dCB4PSIzMDAiIHk9IjIwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjMzc0MTUxIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NYXBhIGRlIFViaWNhY2nDs248L3RleHQ+PC9zdmc+';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
                  <Button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={handleMapClick}
                  >
                    Ver en Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Details */}
          <div className="order-1 lg:order-2">
            <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
              La Ubicación Perfecta
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Dirección Exacta</h4>
                  <p className="text-gray-600">
                    Amunátegui 1946, Torre E, Recreo<br />
                    Viña del Mar, Región de Valparaíso
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <span className="text-2xl">🚗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Acceso Vehicular</h4>
                  <p className="text-gray-600">
                    Conexión directa a Av. España<br />
                    15 minutos al centro de Viña del Mar<br />
                    20 minutos a Valparaíso
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <span className="text-2xl">🏪</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Servicios Cercanos</h4>
                  <p className="text-gray-600">
                    Supermercados, farmacias, bancos<br />
                    Restaurantes y cafeterías<br />
                    Centros médicos y clínicas
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <span className="text-2xl">🌊</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cercanía al Mar</h4>
                  <p className="text-gray-600">
                    5 minutos en auto a las playas<br />
                    Vista panorámica a la bahía<br />
                    Brisa marina todo el año
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connectivity Highlights */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Conectividad Excepcional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🏙️</div>
              <h4 className="text-xl font-semibold mb-2">Centro Viña del Mar</h4>
              <p className="text-blue-100">15 minutos en auto</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🏛️</div>
              <h4 className="text-xl font-semibold mb-2">Puerto Valparaíso</h4>
              <p className="text-blue-100">20 minutos en auto</p>
            </div>
            <div>
              <div className="text-4xl mb-4">✈️</div>
              <h4 className="text-xl font-semibold mb-2">Aeropuerto Santiago</h4>
              <p className="text-blue-100">2 horas en auto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}