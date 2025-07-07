import { useRef, useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // o import { Link } from 'next/link' para Next.js

const ServicesCarousel = () => {
  const services = [
    {
      id: 'seguridad-personal',
      title: "Seguridad Personal",
      description: "Protección de ejecutivos y personas, con guardaespaldas certificados y discreción absoluta.",
      image: "img/img (1).jpg"
    },
    {
      id: 'seguridad-empresarial',
      title: "Seguridad Empresarial",
      description: "Resguardo y control de accesos en oficinas, empresas y condominios.",
      image: "img/img (2).jpg"
    },
    {
      id: 'resguardo-bienes',
      title: "Resguardo de Bienes",
      description: "Custodia de bienes materiales, activos y carga en movimiento o en almacén.",
      image: "img/img (3).jpg"
    },
    {
      id: 'seguridad-eventos',
      title: "Seguridad para Eventos",
      description: "Cobertura total para eventos corporativos, ferias, sociales y reuniones masivas.",
      image: "img/img (4).jpg"
    },
    {
      id: 'videovigilancia',
      title: "Videovigilancia 24/7",
      description: "Instalación y monitoreo de cámaras con acceso remoto y grabación continua.",
      image: "img/img (5).png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);

  // Configuración del carrusel infinito
  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoPlaying) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? services.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === services.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getCardStyle = (index) => {
    const offset = (index - currentIndex + services.length) % services.length;
    
    if (offset === 0) return "center"; // Tarjeta central
    if (offset === 1) return "right";  // Tarjeta derecha
    if (offset === services.length - 1) return "left"; // Tarjeta izquierda
    return "hidden"; // Otras tarjetas no visibles
  };

  return (
    <section id="services" className="py-20 gradient-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Nuestros Servicios</h2>
        <p className="text-lg text-gray-200 text-center max-w-3xl mx-auto mb-12">
          Ofrecemos una amplia gama de servicios de seguridad adaptados a las necesidades específicas de cada cliente, garantizando la máxima protección y tranquilidad.
        </p>

        <div className="relative">
          {/* Controles del carrusel */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-blue-900 p-2 rounded-full shadow-lg transition-all hidden md:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-blue-900 p-2 rounded-full shadow-lg transition-all hidden md:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Contenedor del carrusel */}
          <div 
            ref={carouselRef}
            className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center"
          >
            {services.map((service, index) => {
              const position = getCardStyle(index);
              
              if (position === "hidden") return null;

              return (
                <div
                  key={service.id}
                  className={`absolute transition-all duration-500 ease-in-out ${
                    position === "center" 
                      ? "z-10 w-[100%] md:w-[40%] h-[500px] opacity-100 left-1/2 -translate-x-1/2"
                      : position === "right"
                        ? "z-0 w-[80%] md:w-[30%] h-[400px] opacity-50 left-[75%] -translate-x-1/2"
                        : "z-0 w-[80%] md:w-[30%] h-[400px] opacity-50 left-[25%] -translate-x-1/2"
                  }`}
                >
                  <div className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full`}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className={`w-full ${
                        position === "center" ? "h-[300px]" : "h-[200px]"
                      } object-cover`}
                    />
                    <div className={`p-6 ${
                      position === "center" ? "h-[200px]" : "h-[200px]"
                    } flex flex-col`}>
                      <h3 className={`font-bold ${
                        position === "center" ? "text-xl" : "text-lg"
                      }`}>{service.title}</h3>
                      <p className={`text-gray-600 mb-4 flex-grow ${
                        position === "center" ? "" : "text-sm"
                      }`}>{service.description}</p>
                      <Link 
                        to={`/servicio#${service.id}`} 
                        className="text-blue-600 font-medium flex items-center hover:underline"
                      >
                        Saber más <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicadores para móvil */}
          <div className="flex justify-center mt-8 space-x-2 md:hidden">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
                aria-label={`Ir al servicio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;