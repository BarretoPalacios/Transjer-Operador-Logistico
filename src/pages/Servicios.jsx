import {
  Truck,
  Package,
  Warehouse,
  Shield,
  Clock,
  MapPin,
  Globe,
  Calendar,
  CheckCircle,
  Headphones,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Servicios = () => {
  return (
    <>
      <WhatsAppButton />
      <Navbar />

      <div className="bg-white text-black">
        {/* Hero Section */}
        <div className="relative h-96 w-full flex items-center justify-center bg-black">
          <div className="absolute inset-0 bg-black "></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-[#FEC727] mb-4">
              NUESTROS SERVICIOS
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Soluciones logísticas integrales adaptadas a tus necesidades
            </p>
          </div>
        </div>

        {/* Servicios Destacados */}
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Servicios de{" "}
              <span className="text-[#FEC727]">Transporte y Logística</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones completas para el transporte, almacenamiento
              y distribución de mercancías en todo el Perú
            </p>
          </div>

          {/* Servicio 1 - Transporte Local */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28">
            <div className="order-1 lg:order-1">
              <img
                src="img/flotas/c_1-5/IMG_5661.JPG"
                alt="Transporte Local"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="order-2 lg:order-2">
              <div className="flex items-center mb-4">
                <div className="bg-[#FEC727] p-3 rounded-lg mr-4">
                  <Truck className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-3xl font-bold">Transporte Local</h3>
              </div>
              <p className="text-lg mb-6">
                Servicio de transporte urbano y metropolitano para distribución
                eficiente dentro de la ciudad. Ideal para empresas que requieren
                entregas rápidas y frecuentes.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#FEC727] mr-2 mt-1 flex-shrink-0" />
                  <span>Vehículos desde 2 hasta 15 toneladas de capacidad</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#FEC727] mr-2 mt-1 flex-shrink-0" />
                  <span>Horarios flexibles según necesidades del cliente</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#FEC727] mr-2 mt-1 flex-shrink-0" />
                  <span>Sistema de seguimiento GPS en tiempo real</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#FEC727] mr-2 mt-1 flex-shrink-0" />
                  <span>Personal capacitado en manejo de mercancías</span>
                </li>
              </ul>
              <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-[#FEC727]">
                <p className="font-semibold">Beneficio exclusivo:</p>
                <p>
                  Programas de rutas optimizadas que reducen tiempos de entrega
                  hasta en un 30%
                </p>
              </div>
            </div>
          </div>

          {/* Servicio 2 - Transporte Nacional */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28">
            <div className="order-1 lg:order-2">
              <img
                src="img/flotas/c_5t_gaviota/IMG_5670.JPG"
                alt="Transporte Nacional"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="bg-[#FEC727] p-3 rounded-lg mr-4">
                  <Globe className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-3xl font-bold">
                  Transporte Local y Nacional
                </h3>
              </div>
              <p className="text-lg mb-6">
                Cobertura en las 20 regiones del Perú con diferentes modalidades
                según el tipo de carga y urgencia del servicio.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-[#FEC727]">
                    Carga General
                  </h4>
                  <p>
                    Mercancías convencionales en camiones cerrados o abiertos
                    según requerimiento
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-[#FEC727]">
                    Carga Refrigerada
                  </h4>
                  <p>
                    Unidades con control de temperatura para productos
                    perecibles
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-[#FEC727]">
                    Carga Pesada
                  </h4>
                  <p>
                    Equipos especializados para mercancías de gran tamaño o peso
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-[#FEC727]">
                    Carga Peligrosa
                  </h4>
                  <p>
                    Transporte de materiales con protocolos de seguridad
                    especiales
                  </p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="w-5 h-5 mr-2 text-[#FEC727]" />
                <p>
                  Todos nuestros conductores cuentan con certificación MTC para
                  transporte de carga
                </p>
              </div>
            </div>
          </div>

          {/* Servicio 3 - Almacenamiento */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28">
            <div className="order-1 lg:order-1">
              <img
                src="img/flotas/c_7t/IMG_5668.JPG"
                alt="Servicios de Almacenamiento"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="order-2 lg:order-2">
              <div className="flex items-center mb-4">
                <div className="bg-[#FEC727] p-3 rounded-lg mr-4">
                  <Warehouse className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-3xl font-bold">Almacenamiento</h3>
              </div>
              <p className="text-lg mb-6">
                Centros logísticos estratégicamente ubicados con diferentes
                tipos de almacenes según tus necesidades.
              </p>
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3 text-[#FEC727]">
                  Tipos de almacén:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-black text-[#FEC727] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Almacén convencional</p>
                      <p className="text-gray-600 text-sm">
                        Para mercancías generales con sistema de rackeo
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-black text-[#FEC727] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Almacén seguro</p>
                      <p className="text-gray-600 text-sm">
                        Para mercancías de alto valor con máxima seguridad
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-black text-white rounded-lg">
                <h4 className="text-xl font-bold mb-2 text-[#FEC727]">
                  Sistema de gestión WMS
                </h4>
                <p>
                  Nuestros almacenes cuentan con sistema de gestión de almacenes
                  (WMS) para inventario preciso y control en tiempo real
                </p>
              </div>
            </div>
          </div>

          {/* Servicio 4 - Distribución */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28">
            <div className="order-1 lg:order-2">
              <img
                src="img/flotas/c_1-5/IMG_5664.JPG"
                alt="Servicios de Distribución"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="bg-[#FEC727] p-3 rounded-lg mr-4">
                  <Package className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-3xl font-bold">Distribución</h3>
              </div>
              <p className="text-lg mb-6">
                Servicio completo de distribución desde nuestros almacenes o
                directamente desde tus proveedores.
              </p>
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3 text-[#FEC727]">
                  Proceso de distribución:
                </h4>
                <ol className="space-y-4 border-l-4 border-[#FEC727] pl-6">
                  <li className="flex items-start">
                    <div className="bg-[#FEC727] text-black rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Recolección</p>
                      <p className="text-gray-600 text-sm">
                        Recogemos la mercancía en el punto de origen
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#FEC727] text-black rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Clasificación</p>
                      <p className="text-gray-600 text-sm">
                        Organizamos según rutas y prioridades
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#FEC727] text-black rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Distribución</p>
                      <p className="text-gray-600 text-sm">
                        Entrega en los puntos designados
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#FEC727] text-black rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-medium">Confirmación</p>
                      <p className="text-gray-600 text-sm">
                        Reporte digital con evidencia de entrega
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Otros Servicios */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              Otros{" "}
              <span className="text-[#FEC727]">Servicios Especializados</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Transporte Express",
                  icon: <Clock className="w-10 h-10 text-[#FEC727]" />,
                  description:
                    "Entrega urgente en 24 horas para cargas prioritarias en rutas principales",
                  image: "img/flotas/c_1-5/IMG_5651.JPG",
                },
                {
                  title: "Cross Docking",
                  icon: <Package className="w-10 h-10 text-[#FEC727]" />,
                  description:
                    "Redistribución inmediata de mercancías sin necesidad de almacenamiento",
                  image: "img/flotas/c_1-5/IMG_5658.JPG",
                },
                {
                  title: "Last Mile Delivery",
                  icon: <MapPin className="w-10 h-10 text-[#FEC727]" />,
                  description:
                    "Solución completa para la última milla con vehículos menores y personal capacitado",
                  image: "img/flotas/c_1-5/IMG_5659.JPG",
                },
                {
                  title: "Gestión de Inventarios",
                  icon: <Warehouse className="w-10 h-10 text-[#FEC727]" />,
                  description:
                    "Control y administración de stock con reportes periódicos",
                  image: "img/flotas/c_15/IMG_5674.JPG",
                },
                {
                  title: "Embalaje Especializado",
                  icon: <Shield className="w-10 h-10 text-[#FEC727]" />,
                  description:
                    "Preparación de carga con materiales y técnicas profesionales",
                  image: "img/flotas/c_7t/IMG_5669.JPG",
                },
                {
                  title: "Servicio Personalizado",
                  icon: <Headphones className="w-10 h-10 text-[#FEC727]" />,
                  description:
                    "Soluciones a medida según requerimientos específicos de cada cliente",
                  image: "img/flotas/c_5t_gaviota/IMG_5650.JPG",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-black p-2 rounded-lg mr-4">
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-bold">{service.title}</h4>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="py-16 px-8 rounded-2xl text-center relative overflow-hidden"
            style={{ backgroundColor: "#FEC727" }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-black filter blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-black filter blur-xl"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                ¿Necesitas una solución logística a tu medida?
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-black">
                Nuestros expertos están listos para asesorarte y diseñar la
                mejor opción para tu negocio
              </p>
              <button
                className="px-8 py-4 bg-black text-white rounded-full font-bold flex items-center mx-auto hover:bg-gray-800 transition transform hover:scale-105"
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send/?phone=51913177037&text=Hola%2C+estoy+interesado+en+los+servicios+de+transporte+y+log%C3%ADstica+de+TRANSJER.+%C2%BFPodr%C3%ADan+brindarme+m%C3%A1s+informaci%C3%B3n%3F&type=phone_number&app_absent=0",
                    "_blank"
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Solicitar cotización
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Servicios;
