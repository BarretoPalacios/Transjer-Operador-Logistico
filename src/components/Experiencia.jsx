

import { useState, useEffect, useRef } from "react";
import { Truck, Calendar, MapPin, CheckCircle } from "lucide-react";

const Experiencia = () => {
  // Array de imágenes
  const images = [
     "img/flotas/c_1-5/IMG_5676.JPG",
     "img/flotas/c_1-5/IMG_5663.JPG",
     "img/flotas/c_1-5/IMG_5665.JPG",

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Auto-avance del slider
  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)),
      5000 // Cambia cada 5 segundos
    );

    return () => resetTimeout();
  }, [currentIndex, images.length]);

  // Navegación manual
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-black to-[#FEC727] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#FEC727] filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#FEC727] filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white italic">
            CREANDO <span className="text-[#FEC727]"> EXPERIENCIA</span> ,
            ENTREGANDO <span className="text-[#FEC727]">EXCELENCIA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            +4 AÑOS TRANSPORTANDO CONFIANZA Y SEGURIDAD A TRAVES DE TODO EL
            PERU.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Slider personalizado */}
          <div className="relative group">
            <div className="absolute -inset-2 rounded-xl bg-[#FEC727] opacity-75 group-hover:opacity-100 blur transition duration-200"></div>
            <div className="relative rounded-xl overflow-hidden h-[400px]">
              {/* Contenedor del slider */}
              <div className="relative w-full h-full">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentIndex
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Flota de TRANSJER ${index + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    />
                  </div>
                ))}
              </div>

              {/* Indicadores/puntos */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-[#FEC727] w-6"
                        : "bg-white/50"
                    }`}
                    aria-label={`Ir a slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha - Contenido (igual que antes) */}
          <div className="space-y-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#FEC727] p-3 rounded-lg mr-6">
                  <Truck className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Flota moderna y equipada
                  </h3>
                  <p className="text-gray-300">
                    vehículos adaptados para todo tipo de carga, con tecnología
                    de seguimiento GPS y mantenimiento preventivo constante.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#FEC727] p-3 rounded-lg mr-6">
                  <Calendar className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    4 años de trayectoria
                  </h3>
                  <p className="text-gray-300">
                    Desde 2021 brindando soluciones logísticas confiables,
                    acumulando experiencia y perfeccionando nuestros procesos.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#FEC727] p-3 rounded-lg mr-6">
                  <MapPin className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Cobertura Local y Nacional
                  </h3>
                  <p className="text-gray-300">
                    Operaciones en las 20 regiones del Perú, con centros
                    logísticos estratégicamente ubicados para mayor eficiencia.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#FEC727] p-3 rounded-lg mr-6">
                  <CheckCircle className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Clientes que confían en nosotros
                  </h3>
                  <p className="text-gray-300">
                    Empresas de diversos sectores que confían en nuestra
                    capacidad de entrega puntual y segura.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logros destacados (igual que antes) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { number: '4+', label: 'Años de experiencia', icon: '🏆' },
            { number: '14+', label: 'Vehículos', icon: '🚛' },
            { number: '25', label: 'Regiones cubiertas', icon: '🗺️' },
            { number: '100+', label: 'Clientes satisfechos', icon: '😊' }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#FEC727] bg-opacity-50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-[#FEC727] transition-all text-center"
            >
              <div className="text-4xl mb-2 text-black">{item.icon}</div>
              {/* <p className="text-3xl font-bold text-black">{item.number}</p> */}
              <p className="text-black">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
