import {
  Users,
  Globe,
  Target,
  Shield,
  BarChart2,
  Award,
  Briefcase,
  Truck,
  Package,
  Clock,
  MapPin,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Nosotros = () => {
  return (
    <>
      <WhatsAppButton />
      <Navbar />

      <div className="bg-white text-black">
        {/* Hero Section */}
        <div
          className="relative h-96 w-full flex items-center justify-center bg-black bg-cover bg-center"
          // style={{ backgroundImage: "url('img/transporte-hero.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-[#FEC727] mb-4">
              TRANSJER
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Soluciones logísticas y de transporte a nivel local y nacional
            </p>
          </div>
        </div>

        {/* Nuestra Historia */}
       <div className="max-w-6xl mx-auto py-20 px-4">
  <div className="flex flex-col md:flex-row gap-12 items-center">
    <div className="md:w-1/2">
      <h2 className="text-4xl font-bold mb-6">
        Nuestra <span className="text-[#FEC727]">Historia</span>
      </h2>
      <p className="text-lg mb-4">
        TRANSJER es una empresa especializada en logística de transporte
        y distribución física de mercadería a nivel local y nacional.
      </p>
      <p className="text-lg mb-6">
        Contamos con un equipo altamente capacitado y con amplia
        experiencia en el sector, garantizando un servicio seguro,
        eficiente y adaptado a las necesidades de cada cliente.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {[
          { value: "Flota propia", label: "Vehículos equipados y monitoreados" },
          { value: "Clientes satisfechos", label: "Relaciones de confianza a largo plazo" },
          { value: "Servicio continuo", label: "Disponibilidad operativa los 7 días de la semana" }, 
          { value: "Cobertura local y nacional", label: "Alcance en todas las regiones del Perú" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg border-l-4 border-[#FEC727]"
          >
            <p className="text-xl font-bold text-black">
              {item.value}
            </p>
            <p className="text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="md:w-1/2">
      <img
        src="img/flotas/equipo/IMG_5525.JPG"
        alt="Equipo TRANSJER"
        className="rounded-xl shadow-2xl w-full h-auto"
      />
    </div>
  </div>
</div>


        {/* Misión y Visión */}
        <div className="bg-black py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#FEC727]">
              Nuestra <span className="text-white">Esencia</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Target className="w-12 h-12 mr-4 text-[#FEC727]" />
                  <h3 className="text-2xl font-bold text-black">Misión</h3>
                </div>
                <p className="text-lg">
                  Brindamos soluciones de transporte de carga seguras, rápidas y
                  confiables a nivel local y nacional. Nos comprometemos con la
                  satisfacción de nuestros clientes, proporcionando un servicio
                  eficiente, personalizado y de alta calidad.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Globe className="w-12 h-12 mr-4 text-[#FEC727]" />
                  <h3 className="text-2xl font-bold text-black">Visión</h3>
                </div>
                <p className="text-lg">
                  Ser la empresa líder en transporte y logística a nivel local y
                  nacional, reconocida por nuestra capacidad de adaptación,
                  innovación constante y compromiso con la excelencia,
                  contribuyendo al crecimiento de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Valores Corporativos */}
        <div className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            Pilares de <span className="text-[#FEC727]">TRANSJER</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10 text-[#FEC727]" />,
                title: "Seguridad",
                description:
                  "Garantizamos el transporte seguro de su mercadería en todo momento",
              },
              {
                icon: <Truck className="w-10 h-10 text-[#FEC727]" />,
                title: "Puntualidad",
                description: "Entregas a tiempo con seguimiento en tiempo real",
              },
              {
                icon: <Package className="w-10 h-10 text-[#FEC727]" />,
                title: "Eficiencia",
                description:
                  "Procesos logísticos optimizados para máximo rendimiento",
              },
              {
                icon: <Users className="w-10 h-10 text-[#FEC727]" />,
                title: "Orientación al cliente",
                description: "Soluciones personalizadas para cada necesidad",
              },
              {
                icon: <Clock className="w-10 h-10 text-[#FEC727]" />,
                title: "Disponibilidad",
                description: "Servicio 24/7 para atender sus requerimientos",
              },
              {
                icon: <MapPin className="w-10 h-10 text-[#FEC727]" />,
                title: "Cobertura nacional",
                description:
                  "Llegamos a todo el territorio nacional con nuestra flota",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FEC727] hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-gray-100 mr-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipo Directivo */}
        <div className="bg-black py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#FEC727]">
              Nuestro <span className="text-white">Equipo</span>
            </h2>
            <p className="text-xl text-center mb-16 max-w-2xl mx-auto text-white">
              Profesionales con amplia experiencia en logística y transporte
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Renato Melchor",
                  position: "Asistente de Operaciones",
                  bio: "Apoya en la coordinación diaria de procesos logísticos, asegurando el cumplimiento de tiempos y procedimientos.",
                  image: "img/flotas/equipo/C2213544-2BA3-4D0E-8B73-D2F85FA2C7DD.JPG", // reemplaza con la imagen real si la tienes
                },
                {
                  name: "Julio Murga",
                  position: "Coordinador de Operaciones",
                  bio: "Encargado de supervisar las rutas y cargas, garantizando la eficiencia del servicio logístico en campo.",
                  image: "img/flotas/equipo/IMG_5525.JPG", // reemplaza con la imagen real si la tienes
                },
                {
                  name: "Cielo Telles",
                  position: "Ejecutiva Comercial",
                  bio: "Gestiona relaciones con clientes y desarrolla nuevas oportunidades comerciales en el sector transporte.",
                  image: "img/flotas/equipo/IMG_5575.JPG", // reemplaza con la imagen real si la tienes
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-1 text-black">
                      {member.name}
                    </h3>
                    <p className="text-lg mb-4 text-[#FEC727]">
                      {member.position}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

    

        {/* CTA Final */}
        <div
          className="py-20 px-4 text-center"
          style={{ backgroundColor: "#FEC727" }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-black">
              ¿Necesitas un servicio de transporte confiable?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-black">
              Contáctanos para una cotización personalizada sin compromiso
            </p>
            <button
              className="px-8 py-4 bg-black text-white rounded-full font-bold flex items-center mx-auto hover:bg-gray-800 transition transform hover:scale-105"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=51913177037&text=Hola%2C+estoy+interesado+en+los+servicios+de+transporte+de+TRANSJER.+%C2%BFPodr%C3%ADan+brindarme+m%C3%A1s+informaci%C3%B3n%3F&type=phone_number&app_absent=0",
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
              Contactar por WhatsApp
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Nosotros;
