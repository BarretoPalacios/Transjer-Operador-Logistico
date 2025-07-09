import { Truck, ArrowRight, ChevronsDown, MapPin, Shield,Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const backgrounds = [
    "url('/img/flota-1.jpg')",
    "url('/img/flota-2.jpg')",
    "url('/img/flota-3.jpg')",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
      {/* Fondo dinámico con transición */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        {backgrounds.map((bg, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: bg }}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Efecto de partículas (simulado con CSS) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-yellow-400 opacity-20 animate-float"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        {/* Logo/Texto animado */}
        <div className="mb-8 animate-fade-in-down">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6">
            <span className="text-yellow-400">TRANS</span>
            <span className="text-white">JER</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Conectando el Perú con soluciones logísticas inteligentes
          </p>
        </div>

        {/* Tarjetas flotantes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
          {[
            { icon: <Truck size={40} className="text-yellow-400 mx-auto" />, text: "Flota Moderna" },
            { icon: <Shield size={40} className="text-yellow-400 mx-auto" />, text: "Carga Protegida" },
            { icon: <MapPin size={40} className="text-yellow-400 mx-auto" />, text: "Cobertura Nacional" },
            { icon: <Clock size={40} className="text-yellow-400 mx-auto" />, text: "Entregas Puntuales" }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-black bg-opacity-60 backdrop-blur-sm p-4 rounded-lg border border-yellow-400 border-opacity-30 hover:border-opacity-100 transition-all hover:transform hover:-translate-y-2 shadow-lg"
            >
              {item.icon}
              <p className="mt-2 text-white font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Principal */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a href='/contacto' className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-lg">
            Solicitar Cotización <ArrowRight className="ml-2" />
          </a>
          <a href='/servicios' className="px-8 py-4 bg-transparent border-2 border-white hover:border-yellow-400 text-white hover:text-yellow-400 font-bold rounded-full flex items-center justify-center transition-all">
            Ver Servicios
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ChevronsDown className="text-yellow-400 w-10 h-10" />
        </div>

        {/* Efecto de camión animado */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <div className="animate-truck absolute -left-64 bottom-0">
            <Truck className="text-yellow-400 w-32 h-32 opacity-80" />
          </div>
        </div>
      </div>

      {/* Estilos de animación */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-100px) translateX(20px); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes truck {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(calc(100vw + 100px)); }
        }
        .animate-float { animation: float linear infinite; }
        .animate-truck { animation: truck 20s linear infinite; }
        .animate-fade-in-down {
          animation: fadeInDown 1.5s ease-out forwards;
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;