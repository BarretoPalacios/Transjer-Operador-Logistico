import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Truck,
  Package,
  Warehouse,
  Clock,
  MapPin,
  Globe,
  Shield,
  House,
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesCarousel = () => {
  const services = [
    {
      id: "transporte-local",
      title: "Transporte Local",
      description:
        "Servicio de transporte urbano y metropolitano para distribución eficiente dentro de la ciudad con vehículos de 1 a 10 toneladas.",
      image: "img/flotas/c_1-5/IMG_5665.JPG",
      icon: <Truck className="w-8 h-8 text-black" />,
    },
    {
      id: "transporte-nacional",
      title: "Transporte Nacional",
      description:
        "Cobertura en las 25 regiones del Perú con diferentes modalidades según el tipo de carga y urgencia del servicio.",
      image: "img/flotas/c_15/IMG_5674.JPG",
      icon: <Globe className="w-8 h-8 text-black" />,
    },
    {
      id: "mudanzas",
      title: "Mudanzas",
      description:
        "Servicio de mudanzas a nivel local y nacional, ideal para hogares y oficinas. Contamos con personal capacitado, embalaje seguro y vehículos adecuados para cada necesidad.",
      image: "img/flotas/c_1-5/IMG_5658.JPG",
      icon: <House className="w-8 h-8 text-black" />,
    },
    {
      id: "almacenamiento",
      title: "Almacenamiento",
      description:
        "Centros logísticos estratégicamente ubicados con almacenes convencionales, refrigerados y de máxima seguridad.",
      image: "img/almacenamiento.jpg",
      icon: <Warehouse className="w-8 h-8 text-black" />,
    },
    {
      id: "distribucion",
      title: "Distribución",
      description:
        "Servicio completo de distribución desde nuestros almacenes o directamente desde tus proveedores con seguimiento GPS.",
      image: "img/flotas/c_7t/IMG_5669.JPG",
      icon: <Package className="w-8 h-8 text-black" />,
    },
    {
      id: "transporte-express",
      title: "Transporte Express",
      description:
        "Entrega urgente en 24 horas para cargas prioritarias en rutas principales con vehículos dedicados.",
      image: "img/flotas/c_5t_gaviota/IMG_5650.JPG",
      icon: <Clock className="w-8 h-8 text-black" />,
    },
    {
      id: "last-mile",
      title: "Last Mile Delivery",
      description:
        "Solución completa para la última milla con vehículos menores y personal capacitado para entregas finales.",
      image: "img/flotas/c_5t_gaviota/IMG_5670.JPG",
      icon: <MapPin className="w-8 h-8 text-black" />,
    },
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
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getCardStyle = (index) => {
    const offset = (index - currentIndex + services.length) % services.length;

    if (offset === 0) return "center"; // Tarjeta central
    if (offset === 1) return "right"; // Tarjeta derecha
    if (offset === services.length - 1) return "left"; // Tarjeta izquierda
    return "hidden"; // Otras tarjetas no visibles
  };

  return (
    <section id="services" className="py-20 bg-black overflow-hidden relative">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#FEC727] filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#FEC727] filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-[#FEC727] bg-opacity-20 px-6 py-3 rounded-full mb-6">
            <Truck className="w-6 h-6 mr-2 text-black" />
            <span className="font-medium text-black">NUESTROS SERVICIOS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Soluciones Logísticas Integrales
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Servicios de transporte y distribución diseñados para optimizar tu
            cadena de suministro
          </p>
        </div>

        <div className="relative">
          {/* Controles del carrusel */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#FEC727] hover:bg-[#FEC727]/90 text-black p-3 rounded-full shadow-lg transition-all hidden md:block"
            aria-label="Servicio anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#FEC727] hover:bg-[#FEC727]/90 text-black p-3 rounded-full shadow-lg transition-all hidden md:block"
            aria-label="Siguiente servicio"
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
                  <div
                    className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full border-2 ${
                      position === "center"
                        ? "border-[#FEC727]"
                        : "border-transparent"
                    }`}
                    style={{
                      background: "linear-gradient(to bottom, #1a1a1a, #111)",
                    }}
                  >
                    <div className="relative h-[250px] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-full object-cover transition-transform duration-500 ${
                          position === "center" ? "hover:scale-105" : ""
                        }`}
                      />
                      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
                    </div>
                    <div
                      className={`p-6 ${
                        position === "center" ? "h-[250px]" : "h-[200px]"
                      } flex flex-col`}
                    >
                      <div className="flex items-center mb-3">
                        <div className="bg-[#FEC727] p-2 rounded-lg mr-4">
                          {service.icon}
                        </div>
                        <h3
                          className={`font-bold ${
                            position === "center"
                              ? "text-xl text-white"
                              : "text-lg text-gray-300"
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>
                      <p
                        className={`mb-4 flex-grow ${
                          position === "center"
                            ? "text-gray-300"
                            : "text-sm text-gray-400"
                        }`}
                      >
                        {service.description}
                      </p>
                      <Link
                        to={`/servicios#${service.id}`}
                        className={`flex items-center ${
                          position === "center"
                            ? "text-[#FEC727] hover:text-[#FEC727]/90"
                            : "text-gray-400"
                        } font-medium transition-colors`}
                      >
                        Ver detalles <ArrowRight className="w-4 h-4 ml-2" />
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
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-[#FEC727] w-6" : "bg-gray-500"
                }`}
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
