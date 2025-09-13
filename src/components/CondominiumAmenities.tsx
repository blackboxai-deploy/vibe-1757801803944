"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CondominiumAmenities() {
  const amenities = [
    {
      title: "Piscinas",
      description: "Piscina adultos y niños con área de descanso",
      details: "Disfruta del sol y relájate en las amplias piscinas del condominio",
      icon: "🏊‍♂️",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7638933e-bfc6-4199-acba-d4fe5b7202cb.png"
    },
    {
      title: "Quincho",
      description: "Área de parrillas y eventos sociales",
      details: "Espacio perfecto para reuniones familiares y celebraciones",
      icon: "🔥",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0740b8f8-4d77-4e20-9978-4450736dd6b7.png"
    },
    {
      title: "Multicanchas",
      description: "Canchas deportivas multiuso",
      details: "Fútbol, tenis, básquetbol y más actividades deportivas",
      icon: "⚽",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/06020aa3-23a7-4e2c-bc49-c6f8f3a1ae7d.png"
    },
    {
      title: "Gimnasio",
      description: "Gimnasio completamente equipado",
      details: "Mantente en forma sin salir del condominio",
      icon: "💪",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a543ab13-7549-4858-ae3d-0fc5be156fa3.png"
    },
    {
      title: "Jardines",
      description: "Amplias áreas verdes y paisajismo",
      details: "Espacios naturales para caminar y relajarse",
      icon: "🌿",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/20904b25-bfdd-4971-8b33-6a7fe5f12078.png"
    },
    {
      title: "Seguridad",
      description: "Acceso controlado y vigilancia 24/7",
      details: "Tranquilidad y seguridad para toda la familia",
      icon: "🔐",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0bea2c75-5380-4cae-b973-edeb5610b30f.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            Amenidades del Condominio
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Condominio <span className="text-blue-600">Gran Océano</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un condominio consolidado con alto estándar de construcción y todas las 
            amenidades que necesitas para una vida plena y cómoda.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {amenities.map((amenity, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg overflow-hidden">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmMGY5ZmYiLz48dGV4dCB4PSIyMDAiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjMzc0MTUxIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BbWVuaWRhZGVzPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full">
                  <span className="text-2xl">{amenity.icon}</span>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">
                  {amenity.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-blue-600 font-semibold mb-3">
                  {amenity.description}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {amenity.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="font-playfair text-3xl font-bold text-center text-gray-900 mb-8">
            Servicios Adicionales
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl mb-3">🚗</div>
              <h4 className="font-semibold text-gray-900 mb-2">Estacionamiento Visitas</h4>
              <p className="text-sm text-gray-600">Espacios designados para invitados</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl mb-3">🏢</div>
              <h4 className="font-semibold text-gray-900 mb-2">Conserjerí­a</h4>
              <p className="text-sm text-gray-600">Atención personalizada y recepción</p>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="text-3xl mb-3">🔧</div>
              <h4 className="font-semibold text-gray-900 mb-2">Mantenimiento</h4>
              <p className="text-sm text-gray-600">Servicio técnico especializado</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl mb-3">📶</div>
              <h4 className="font-semibold text-gray-900 mb-2">Conectividad</h4>
              <p className="text-sm text-gray-600">Internet de alta velocidad disponible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}