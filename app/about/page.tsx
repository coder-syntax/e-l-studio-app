"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-beige-50">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&q=80"
            alt="E&L Studio"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl mb-4">Acerca de E&L Studio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Donde la elegancia atemporal se encuentra con el diseño contemporáneo
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="prose prose-lg max-w-none">
          <h2 className="font-serif text-4xl mb-8 text-center">Nuestra historia</h2>
          
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              E&L Studio nació de la idea de elegancia atemporal—una visión de crear 
              moda que trasciende las tendencias efímeras y celebra la belleza perdurable 
              del diseño bien elaborado.
            </p>

            <p>
              Fundado en el corazón de Europa, nuestro atelier reúne décadas de 
              experiencia en alta costura con una perspectiva fresca y moderna. Cada pieza 
              de nuestra colección está cuidadosamente diseñada para encarnar sofisticación 
              y versatilidad, permitiendo a la mujer contemporánea expresar su estilo único 
              con confianza.
            </p>

            <p>
              Creemos que el verdadero lujo no reside en el exceso, sino en el equilibrio perfecto 
              entre forma, función y calidad. Nuestras prendas están confeccionadas con los mejores 
              materiales, con meticulosa atención a cada detalle—desde la caída de la 
              tela hasta la precisión de cada puntada.
            </p>

            <p>
              En E&L Studio, estamos comprometidos con prácticas sostenibles y producción ética. 
              Trabajamos estrechamente con artesanos y fabricantes que comparten nuestros 
              valores, asegurando que cada pieza se elabore con respeto tanto por las personas como 
              por el planeta.
            </p>

            <p className="text-black font-medium text-xl text-center pt-8">
              "La moda pasa, solo el estilo permanece."
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-beige-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl mb-16 text-center">Nuestros valores</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-3xl">✦</span>
              </div>
              <h3 className="font-serif text-2xl mb-4">Calidad</h3>
              <p className="text-gray-600 leading-relaxed">
                Seleccionamos solo los mejores materiales y trabajamos con artesanos expertos 
                para crear piezas que resistan el paso del tiempo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-3xl">✧</span>
              </div>
              <h3 className="font-serif text-2xl mb-4">Elegancia</h3>
              <p className="text-gray-600 leading-relaxed">
                Cada diseño encarna simplicidad refinada y sofisticación atemporal, 
                celebrando la belleza del minimalismo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-3xl">✦</span>
              </div>
              <h3 className="font-serif text-2xl mb-4">Sostenibilidad</h3>
              <p className="text-gray-600 leading-relaxed">
                Estamos comprometidos con la producción ética y prácticas sostenibles 
                que respetan nuestro medio ambiente y comunidades.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Images Grid */}
      <div className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80"
                alt="Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80"
                alt="Atelier"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-black text-white py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Únete a nuestro viaje
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Descubre piezas que se convertirán en tesoros preciados de tu guardarropa por años.
          </p>
          <a
            href="/shop"
            className="inline-block bg-white text-black px-12 py-4 hover:bg-beige-100 transition-colors font-medium tracking-wider"
          >
            Explorar colección
          </a>
        </div>
      </div>
    </div>
  );
}
