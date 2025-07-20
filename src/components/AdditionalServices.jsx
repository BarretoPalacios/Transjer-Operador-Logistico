import { Phone, ShieldCheck, Clock, Truck, Award, Quote } from "lucide-react";

const AdditionalServices = () => {
  return (
    <div className="w-full bg-gradient-to-r from-black to-[#FEC727] text-white py-8 md:py-16 px-4 md:px-8">
      {/* Sección de diferenciales */}
      <div className="hidden md:block max-w-6xl mx-auto mb-10 md:mb-20">
        <h2
          className="text-xl md:text-4xl font-bold text-center mb-4"
          style={{ color: "#FEC727" }}
        >
          Ventajas de trabajar con TRANSJER
        </h2>
        <p className="text-sm md:text-xl text-center max-w-3xl mx-auto mb-12">
          Años moviendo el Perú con logística inteligente y flota moderna
        </p>

        <div className="grid  md:grid-cols-3 gap-4 md:gap-8">
          {[
            {
              title: "FLOTA PROPIA Y MODERNA",
              description:
                "Vehículos equipados con tecnología GPS y mantenimiento preventivo constante",
              icon: (
                <Truck className="w-6 h-6 md:w-12 md:h-12 mb-4 mx-auto" color="#FEC727" />
              ),
            },
            {
              title: "SEGURO DE MERCADERÍA DE CARGA Y VEHICULAR",
              description:
                "Cumplimiento en tiempos de entrega gracias a nuestra red logística optimizada",
              icon: (
                <Clock className="w-6 h-6 md:w-12 md:h-12 mb-4 mx-auto" color="#FEC727" />
              ),
            },
            {
              title: "DOBLE SISTEMA DE SEGURIDAD",
              description:
                "Procesos estandarizados bajo normas de logística y transporte",
              icon: (
                <Award className="w-6 h-6 md:w-12 md:h-12 mb-4 mx-auto" color="#FEC727" />
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border-2 border-yellow-500/20 hover:border-yellow-500 p-4 md:p-8 rounded-xl hover:transform hover:scale-105 transition duration-300 bg-gray-900/50"
            >
              <div className="text-center text-white">
                {item.icon}
                <h3
                  className=" md:text-2xl font-semibold mb-3"
                  style={{ color: "#FEC727" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs md:text-lg text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de testimonios */}
      <div className="max-w-6xl mx-auto mb-5 md:mb-20">
        <h2
          className="text-xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "#FEC727" }}
        >
          Nuestros clientes opinan
        </h2>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {[
            {
              quote:
                "TRANSJER ha sido clave en nuestra operación logística. Su compromiso y cumplimiento ha mejorado nuestra distribución a nivel nacional.",
           
              company: "SONEPAR PERU S.A.C.",
            },
            {
              quote:
                "Gracias a TRANSJER hemos optimizado tiempos y costos de entrega. Su equipo siempre responde con eficiencia y puntualidad.",
        
              company: "TIENDAS PERUANAS S.A.",
            },
            {
              quote:
                "Una empresa confiable y profesional. TRANSJER se ha convertido en un aliado estratégico para nuestra cadena logística.",
            
              company: "LA CALERA S.A.C.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gray-900 p-4 md:p-8 rounded-xl border-l-4 border-yellow-500"
            >
              <Quote
                className="absolute md:top-4 md:left-4 md:w-8 md:h-8 opacity-20"
                color="#FEC727"
              />
              <p className="text-sm md:text-lg italic mb-3 md:mb-6 pl-10">"{testimonial.quote}"</p>
              <div className="border-t border-gray-700 pt-2 md:pt-4">
      
                <p className="text-gray-400 text-sm md:text-md">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div
        className="hidden md:block max-w-4xl mx-auto p-12 rounded-xl text-center relative overflow-hidden"
        style={{
          backgroundColor: "#000000",
          border: "2px solid #FEC727",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#FEC727 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="relative">
          <h3 className="text-3xl font-bold mb-4" style={{ color: "#FEC727" }}>
            ¿Necesitas una solución logística a medida?
          </h3>
          <p className="text-xl mb-8">
            Nuestros especialistas en transporte están listos para optimizar tu
            cadena de suministro
          </p>
          <button
            onClick={() => window.open("https://wa.me/51913117037", "_blank")}
            className="px-8 py-4 bg-yellow-500 text-black rounded-full font-bold flex items-center mx-auto hover:bg-yellow-400 transition transform hover:scale-105"
          >
            <Phone className="mr-2" size={20} />
            Contactar a un asesor
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;
