"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function PropertyGallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = [
    {
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c986076a-b2f3-4d67-abda-7d1fee8402c1.png",
      alt: "Living principal con vista panorámica a la bahía",
      title: "Living Principal"
    },
    {
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c0d40df8-c73b-46cc-97d6-55fc60aa4ad1.png",
      alt: "Dormitorio principal en suite con vista al mar",
      title: "Dormitorio Principal"
    },
    {
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6fbcfa89-caec-48a7-8c3b-a3e0676076ab.png",
      alt: "Cocina completamente equipada con electrodomésticos modernos",
      title: "Cocina Equipada"
    },
    {
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9a53d97a-f747-43e6-9548-b20dcea8341e.png",
      alt: "Terraza cerrada de 9m² con vista panorámica",
      title: "Terraza Cerrada"
    },
    {
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ddedd376-6dfb-4785-936b-4cdae4e9759c.png",
      alt: "Baño principal con terminaciones de lujo",
      title: "Baño Principal"
    },
    {
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6f7254e3-7a1b-4584-852c-8f01deec162d.png",
      alt: "Estacionamiento subterráneo y bodega",
      title: "Estacionamiento"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            Galería de Imágenes
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conoce Cada <span className="text-blue-600">Rincón</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora los espacios de este exclusivo departamento y descubre 
            la calidad de vida que te espera.
          </p>
        </div>

        {/* Main Image Display */}
        <div className="mb-8">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-[400px] md:h-[600px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI2MDAiIGZpbGw9IiNmMGY5ZmYiLz48dGV4dCB4PSI0MDAiIHk9IjMwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMzc0MTUxIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HYWxlcsOtYSBkZSBJbcOhZ2VuZXM8L3RleHQ+PC9zdmc+';
                  }}
                />
                {/* Image Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold">
                    {galleryImages[selectedImage].title}
                  </h3>
                </div>
                
                {/* Navigation Arrows */}
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 border-0"
                  onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1)}
                >
                  ←
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 border-0"
                  onClick={() => setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0)}
                >
                  →
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <Card 
              key={index}
              className={`cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg ${
                selectedImage === index 
                  ? 'ring-4 ring-blue-500 shadow-lg transform scale-105' 
                  : 'hover:shadow-md'
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <CardContent className="p-0">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-24 md:h-32 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNmMGY5ZmYiLz48dGV4dCB4PSIxMDAiIHk9Ijc1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMzNzQxNTEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlbjwvdGV4dD48L3N2Zz4=';
                  }}
                />
                {selectedImage === index && (
                  <div className="absolute inset-0 bg-blue-500/20 border-4 border-blue-500 rounded"></div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gallery Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            {selectedImage + 1} de {galleryImages.length} imágenes
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Haz clic en las imágenes para explorar cada espacio del departamento
          </p>
        </div>
      </div>
    </section>
  );
}