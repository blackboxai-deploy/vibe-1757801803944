"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PropertyFeatures() {
  const features = [
    {
      title: "Dormitorios",
      description: "3 dormitorios en suite con baños privados",
      details: "Amplios dormitorios con closets empotrados y ventanas termopanel",
      icon: "🛏️"
    },
    {
      title: "Living-Comedor",
      description: "Amplio living-comedor con salida a terraza",
      details: "Espacio integrado con acceso directo a terraza cerrada",
      icon: "🏠"
    },
    {
      title: "Cocina Equipada",
      description: "Cocina amoblada y completamente equipada",
      details: "Incluye electrodomésticos y logia adicional",
      icon: "🍳"
    },
    {
      title: "Terraza Cerrada",
      description: "9 m² de terraza con vista panorámica",
      details: "Vista privilegiada a la bahía de Valparaíso",
      icon: "🌊"
    },
    {
      title: "Estacionamiento",
      description: "1 estacionamiento subterráneo + bodega",
      details: "Seguridad y comodidad garantizada",
      icon: "🚗"
    },
    {
      title: "Termopanel",
      description: "Ventanas termopanel en toda la propiedad",
      details: "Eficiencia energética y aislación acústica",
      icon: "🪟"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            Características Destacadas
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Un Hogar de <span className="text-blue-600">Lujo y Comodidad</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada detalle ha sido cuidadosamente diseñado para ofrecerte la máxima comodidad 
            y calidad de vida en este exclusivo departamento.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg hover:shadow-blue-100/50">
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

        {/* Property Highlights */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                  Vista Panorámica Inigualable
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-lg">119 m² de superficie construida</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-lg">9 m² de terraza cerrada adicional</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-lg">Ubicado en el piso 9 de la Torre E</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-lg">Vista directa a la bahía de Valparaíso</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d9d176f6-2a2e-4716-907b-b2497b1d963d.png"
                  alt="Vista panorámica desde la terraza del departamento hacia la bahía de Valparaíso"
                  className="rounded-lg shadow-2xl w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNmMGY5ZmYiLz48dGV4dCB4PSIzMDAiIHk9IjIwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjMzc0MTUxIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WaXN0YSBQYW5vcsOhbWljYTwvdGV4dD48L3N2Zz4=';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}