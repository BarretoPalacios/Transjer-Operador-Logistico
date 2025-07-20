import { Truck, Phone, Mail, MapPin, Clock } from "lucide-react";
import Forms from "./Forms";

const ContactSection = () => {
  return (
    <div className="relative py-20">
      {/* Imagen de fondo con overlay oscuro */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="img/flotas/c_5t_gaviota/IMG_5670.JPG"
          lazyLoad="lazy"
          alt="Camiones de transporte"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Contenido */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Solicita una cotización personalizada para tus necesidades
            logísticas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="bg-black bg-opacity-80 rounded-xl p-4 md:p-8 backdrop-blur-sm">
  <div className="flex items-center mb-4 md:mb-8">
    <Truck className="w-6 h-6 md:w-10 md:h-10 text-yellow-500 mr-2 md:mr-4" />
    <h3 className="text-xl md:text-2xl font-bold text-white">
      Información de contacto
    </h3>
  </div>

  <div className="space-y-4 md:space-y-6">
    <div className="flex items-start">
      <div className="p-1 md:p-2 bg-black rounded-full mr-2 md:mr-4">
        <MapPin className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
      </div>
      <div>
        <h4 className="text-base md:text-lg font-semibold text-white mb-1">
          Oficina Principal
        </h4>
        <p className="text-sm md:text-base text-gray-300">Gerardo Unger 3601 – Edificio Albamar, Dpto1801.</p>
      </div>
    </div>

    <div className="flex items-start">
      <div className="p-1 md:p-2 bg-black rounded-full mr-2 md:mr-4">
        <Phone className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
      </div>
      <div>
        <h4 className="text-base md:text-lg font-semibold text-white mb-1">
          Teléfonos
        </h4>
        <p className="text-sm md:text-base text-gray-300">(+51) 913 177 037</p>
      </div>
    </div>

    <div className="flex items-start">
      <div className="p-1 md:p-2 bg-black rounded-full mr-2 md:mr-4">
        <Mail className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
      </div>
      <div>
        <h4 className="text-base md:text-lg font-semibold text-white mb-1">
          Correo Electrónico
        </h4>
        <p className="text-sm md:text-base text-gray-300">comercial@transjer.com</p>
      </div>
    </div>

    <div className="flex items-start">
      <div className="p-1 md:p-2 bg-black rounded-full mr-2 md:mr-4">
        <Clock className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
      </div>
      <div>
        <h4 className="text-base md:text-lg font-semibold text-white mb-1">
          Horario de Atención
        </h4>
        <p className="text-sm md:text-base text-gray-300">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
        <p className="text-xs md:text-sm text-yellow-400 font-medium">
          Soporte logístico: 24/7
        </p>
      </div>
    </div>
  </div>
</div>

          {/* Formulario */}
          <div className="hidden md:block">
            <Forms />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
