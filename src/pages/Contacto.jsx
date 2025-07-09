import { MapPin, Phone, Mail, Clock, Send, Truck } from "lucide-react";
import Forms from "../components/Forms";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative h-96 w-full flex items-center justify-center bg-black">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">
              Contáctenos
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Soluciones logísticas personalizadas para tu negocio
            </p>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Columna izquierda - Información de contacto */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-black">
                Nuestras Sedes
              </h2>

              {/* Tarjeta de información */}
              <div className="bg-gray-100 rounded-xl p-8 shadow-md mb-10 border-l-4 border-yellow-500">
                <div className="space-y-6">
                  {/* Dirección */}
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-black">
                      <MapPin className="text-yellow-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold mb-2">
                        Gerardo Unger 3601 – Edificio Albamar, Dpto1801.
                      </h3>
                    </div>
                  </div>

                  {/* Teléfonos */}
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-black">
                      <Phone className="text-yellow-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold mb-2">Teléfonos</h3>
                      <p className="text-gray-700">(+51) 913 177 037</p>
                    </div>
                  </div>

                  {/* Correo */}
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-black">
                      <Mail className="text-yellow-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold mb-2">
                        Correo Electrónico
                      </h3>
                      <p className="text-gray-700">comercial@transjer.com</p>
                    </div>
                  </div>

                  {/* Horario */}
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-black">
                      <Clock className="text-yellow-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold mb-2">
                        Horario de Atención
                      </h3>
                      <p className="text-gray-700">
                        Lunes a Viernes: 8:00 AM - 6:00 PM
                      </p>
                      <p className="text-yellow-600 font-semibold">
                        Soporte logístico: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-500">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.735858989248!2d-77.06011952415358!3d-11.99277024089939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cfb43d9b7a63%3A0x9642959ac790d4e!2sEdificio%20Albamar%20-%20s.m.p.!5e0!3m2!1ses-419!2spe!4v1752058212985!5m2!1ses-419!2spe"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Ubicación TRANSJER"
                ></iframe>
              </div>
            </div>

            {/* Columna derecha - Formulario */}
            <div>
              <Forms />

              {/* Sección de urgencias */}
              <div className="mt-10 bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500">
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-black mr-4">
                    <Phone className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">
                      Transporte Urgente
                    </h3>
                    <p className="text-gray-700 mb-3">
                      ¿Necesitas mover carga de inmediato?
                    </p>
                    <a
                      href="tel:+51937203853"
                      className="px-6 py-3 bg-black text-yellow-500 rounded-lg font-bold inline-flex items-center hover:bg-gray-800 hover:text-white transition"
                    >
                      <Phone className="mr-2" />
                      Llamar al (+51) 913 177 037
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
