import { Phone, ShieldCheck, Clock, Truck, Award, Quote } from "lucide-react";

const AdditionalServices = () => {
  return (
    <div className="w-full bg-black text-white py-16 px-4 md:px-8">
      {/* Sección de diferenciales */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#FEC727' }}>
          Ventajas de trabajar con TRANSJER
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-12">
          Más de 10 años moviendo el Perú con logística inteligente y flota moderna
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Flota Moderna y Segura",
              description: "Vehículos equipados con tecnología GPS y mantenimiento preventivo constante",
              icon: <Truck className="w-12 h-12 mb-4 mx-auto" color="#FEC727" />
            },
            {
              title: "Entregas Puntuales",
              description: "Cumplimiento del 98% en tiempos de entrega gracias a nuestra red logística optimizada",
              icon: <Clock className="w-12 h-12 mb-4 mx-auto" color="#FEC727" />
            },
            {
              title: "Certificaciones de Calidad",
              description: "Procesos estandarizados bajo normas internacionales de logística y transporte",
              icon: <Award className="w-12 h-12 mb-4 mx-auto" color="#FEC727" />
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="border-2 border-yellow-500/20 hover:border-yellow-500 p-8 rounded-xl hover:transform hover:scale-105 transition duration-300 bg-gray-900/50"
            >
              <div className="text-center text-white">
                {item.icon}
                <h3 className="text-2xl font-semibold mb-3" style={{ color: '#FEC727' }}>{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de testimonios */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#FEC727' }}>
          Nuestros clientes opinan
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote: "TRANSJER revolucionó nuestra cadena de suministro. Redujeron nuestros tiempos de entrega en un 40% con total confiabilidad.",
              author: "Miguel Torres - Gerente de Operaciones",
              company: "Importadora Comercial del Norte"
            },
            {
              quote: "La trazabilidad en tiempo real de sus envíos nos da tranquilidad. Son nuestro partner logístico hace 5 años y seguimos creciendo juntos.",
              author: "Sandra Quintana - Directora de Logística",
              company: "Distribuidora Médica Andina"
            }
          ].map((testimonial, index) => (
            <div key={index} className="relative bg-gray-900 p-8 rounded-xl border-l-4 border-yellow-500">
              <Quote className="absolute top-4 left-4 w-8 h-8 opacity-20" color="#FEC727" />
              <p className="text-lg italic mb-6 pl-10">"{testimonial.quote}"</p>
              <div className="border-t border-gray-700 pt-4">
                <p className="font-semibold" style={{ color: '#FEC727' }}>{testimonial.author}</p>
                <p className="text-gray-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div 
        className="max-w-4xl mx-auto p-12 rounded-xl text-center relative overflow-hidden"
        style={{ 
          backgroundColor: '#000000',
          border: '2px solid #FEC727'
        }}
      >
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(#FEC727 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
        
        <div className="relative">
          <h3 className="text-3xl font-bold mb-4" style={{ color: '#FEC727' }}>¿Necesitas una solución logística a medida?</h3>
          <p className="text-xl mb-8">Nuestros especialistas en transporte están listos para optimizar tu cadena de suministro</p>
          <button 
            onClick={() => window.open('https://wa.me/51987654321', '_blank')}
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