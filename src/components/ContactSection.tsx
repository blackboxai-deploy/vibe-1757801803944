"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, estoy interesado en el departamento del Condominio Gran Océano en Viña del Mar. Me gustaría obtener más información.');
    window.open(`https://wa.me/56912345678?text=${message}`, '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+56912345678';
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Consulta Departamento Gran Océano');
    const body = encodeURIComponent(`Hola,

Estoy interesado en el departamento en venta del Condominio Gran Océano ubicado en:
- Amunátegui 1946, Torre E
- 119 m² + 9 m² terraza
- Precio: UF 9.000

Me gustaría coordinar una visita y obtener más información.

Quedo atento a su respuesta.

Saludos cordiales.`);
    window.location.href = `mailto:contacto@granaceano.cl?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-300 border-blue-300">
            Información de Contacto
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            ¡Agenda tu <span className="text-blue-300">Visita Hoy!</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No pierdas la oportunidad de conocer este exclusivo departamento. 
            Contacta con nosotros para coordinar una visita personalizada.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm mb-12">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Property Summary */}
                <div>
                  <h3 className="font-playfair text-3xl font-bold text-white mb-6">
                    Departamento en Venta
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
                      <span className="text-lg text-gray-200">119 m² + 9 m² terraza</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
                      <span className="text-lg text-gray-200">3 dormitorios en suite</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
                      <span className="text-lg text-gray-200">Vista panorámica bahía Valparaíso</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
                      <span className="text-lg text-gray-200">Estacionamiento + bodega</span>
                    </div>
                  </div>

                  {/* Price Highlight */}
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-6 mb-8">
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                        UF 9.000
                      </div>
                      <p className="text-black/80 font-semibold">
                        Precio de venta
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="text-center">
                    <p className="text-blue-200 text-lg mb-2">📍 Dirección</p>
                    <p className="text-white font-semibold text-xl">
                      Amunátegui 1946, Torre E
                    </p>
                    <p className="text-gray-300">
                      Recreo, Viña del Mar
                    </p>
                  </div>
                </div>

                {/* Contact Options */}
                <div>
                  <h3 className="font-playfair text-3xl font-bold text-white mb-8 text-center">
                    Contáctanos
                  </h3>
                  
                  <div className="space-y-6">
                    {/* WhatsApp */}
                    <Card className="bg-green-600 hover:bg-green-700 transition-colors cursor-pointer" onClick={handleWhatsAppClick}>
                      <CardContent className="p-6">
                        <div className="flex items-center">
                          <div className="bg-white p-3 rounded-full mr-4">
                            <span className="text-2xl">💬</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold text-lg mb-1">WhatsApp</h4>
                            <p className="text-green-100">+56 9 1234 5678</p>
                            <p className="text-green-100 text-sm">Respuesta inmediata</p>
                          </div>
                          <div className="text-white text-2xl">→</div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Phone */}
                    <Card className="bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer" onClick={handlePhoneCall}>
                      <CardContent className="p-6">
                        <div className="flex items-center">
                          <div className="bg-white p-3 rounded-full mr-4">
                            <span className="text-2xl">📞</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold text-lg mb-1">Llamada Directa</h4>
                            <p className="text-blue-100">+56 9 1234 5678</p>
                            <p className="text-blue-100 text-sm">Lunes a Viernes 9:00 - 18:00</p>
                          </div>
                          <div className="text-white text-2xl">→</div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Email */}
                    <Card className="bg-purple-600 hover:bg-purple-700 transition-colors cursor-pointer" onClick={handleEmailClick}>
                      <CardContent className="p-6">
                        <div className="flex items-center">
                          <div className="bg-white p-3 rounded-full mr-4">
                            <span className="text-2xl">✉️</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold text-lg mb-1">Email</h4>
                            <p className="text-purple-100">contacto@granaceano.cl</p>
                            <p className="text-purple-100 text-sm">Información detallada</p>
                          </div>
                          <div className="text-white text-2xl">→</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Visit Button */}
                  <div className="mt-8 text-center">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-12 py-4 text-lg rounded-xl"
                      onClick={handleWhatsAppClick}
                    >
                      Agendar Visita Ahora
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/5 border-white/10">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">🏠</div>
                <CardTitle className="text-white">Visitas Programadas</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-sm">
                  Coordinamos visitas en horarios convenientes para ti
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">📋</div>
                <CardTitle className="text-white">Documentación</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-sm">
                  Todos los documentos legales disponibles
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">💰</div>
                <CardTitle className="text-white">Financiamiento</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-sm">
                  Asesoría en opciones de financiamiento
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-gray-400 mb-2">
              © 2024 Condominio Gran Océano - Todos los derechos reservados
            </p>
            <p className="text-gray-500 text-sm">
              Esta propiedad es comercializada de manera exclusiva
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}