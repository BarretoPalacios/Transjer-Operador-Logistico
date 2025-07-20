import { ArrowRight, ChevronsDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const backgrounds = [
    "img/flotas/c_1-5/IMG_5660.JPG",
    "img/flotas/c_1-5/IMG_5665.JPG",
    "img/flotas/c_1-5/IMG_5676.JPG",
    "img/flotas/c_1-5/IMG_5672.JPG",
    "img/flotas/c_1-5/IMG_5651.JPG"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] flex overflow-hidden">
      {/* Fondo dinámico con overlay oscuro para mejor contraste */}
      <div className="absolute inset-0">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            lazyLoad="lazy"
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
  
      </div>
{/* Contenedor en forma de "D" */}
<div className="bg-[#FEC727] relative z-10 h-1/3 md:h-full w-full md:w-1/2 lg:w-1/3 flex flex-col rounded-br-full rounded-bl-full md:rounded-bl-[0px] md:rounded-tr-full md:rounded-br-full flex items-center justify-center p-4 border border-white border-[10px]">

  <div className=" flex flex-col items-center md:items-start w-full max-w-xs md:max-w-md">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">
      TRANSJER
    </h1>
    <p className="text-center md:text-left text-base sm:text-lg md:text-xl text-black mb-4 px-2 sm:px-0">
      CREANDO EXPERIENCIA , ENTREGANDO EXCELENCIA
    </p>
    
    <div className="flex flex-col gap-2  w-auto">
      <Link
  to="/contacto"
  className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-bold rounded-full hover:bg-gray-900 transition-all shadow-lg text-sm sm:text-base"
>
  Cotizar Ahora <ArrowRight className="ml-2" />
</Link>

<Link
  to="/servicios"
  className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg text-sm sm:text-base"
>
  Ver Servicios
</Link>
    </div>
  </div>

</div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <ChevronsDown className="text-white w-10 h-10 drop-shadow-lg" />
      </div>

    </section>
  );
};

export default HeroBanner;