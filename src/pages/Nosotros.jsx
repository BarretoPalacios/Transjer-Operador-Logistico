import { Users, Globe, Target, Shield, BarChart2, Award,Briefcase } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import WhatsAppButton from "../components/WhatsAppButton";

const Nosotros = () => {
  return (
  <>

  <WhatsAppButton />

  <Navbar   />
       <div className="bg-white text-black">
      {/* Hero Section */}
      <div 
        className="relative h-96 w-full flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('img/nosotros.jpg')" , backgroundSize: 'cover' , backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">D&D SECURITY</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Más de 10 años protegiendo personas y empresas a nivel nacional
          </p>
        </div>
      </div>

      {/* Nuestra Historia */}
      <div className="max-w-6xl mx-auto py-20 px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#004FAC' }}>
              Nuestra <span style={{ color: '#00A9DD' }}>Historia</span>
            </h2>
            <p className="text-lg mb-4">
              Fundada en 2013 por expertos en seguridad, D&D Security se ha consolidado como referente nacional en protección integral para empresas y particulares.
            </p>
            <p className="text-lg mb-6">
              Combinamos experiencia policial con los más altos estándares de seguridad privada para ofrecer soluciones personalizadas.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '10+', label: 'Años en el mercado' },
                { value: '300+', label: 'Clientes satisfechos' },
                { value: '24/7', label: 'Disponibilidad' },
                { value: '100%', label: 'Personal certificado' }
              ].map((item, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-2xl font-bold" style={{ color: '#004FAC' }}>{item.value}</p>
                  <p className="text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="img/img (6).png" 
              alt="Equipo D&D Security" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="gradient-bg py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#fff' }}>
            Nuestra <span style={{ color: '#fff' }}>Esencia</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 mr-4" style={{ color: '#00A9DD' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#004FAC' }}>Misión</h3>
              </div>
              <p className="text-lg">
                Proveer seguridad confiable mediante personal altamente capacitado y tecnología de vanguardia, adaptándonos a las necesidades específicas de cada cliente en el territorio nacional.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Globe className="w-12 h-12 mr-4" style={{ color: '#00A9DD' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#004FAC' }}>Visión</h3>
              </div>
              <p className="text-lg">
                Consolidarnos como la empresa líder en seguridad privada a nivel nacional, reconocida por nuestra eficiencia, profesionalismo y capacidad de innovación.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Valores Corporativos */}
      <div className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#004FAC' }}>
          Pilares de <span style={{ color: '#00A9DD' }}>D&D Security</span>
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="w-10 h-10" style={{ color: '#00A9DD' }} />,
              title: "Integridad",
              description: "Actuamos con ética y transparencia en todas nuestras operaciones"
            },
            {
              icon: <Briefcase className="w-10 h-10" style={{ color: '#00A9DD' }} />,
              title: "Profesionalismo",
              description: "Personal con más de 10 años de experiencia en seguridad"
            },
            {
              icon: <BarChart2 className="w-10 h-10" style={{ color: '#00A9DD' }} />,
              title: "Excelencia",
              description: "Buscamos la perfección en cada servicio que ofrecemos"
            },
            {
              icon: <Users className="w-10 h-10" style={{ color: '#00A9DD' }} />,
              title: "Compromiso",
              description: "Dedicación total a la satisfacción de nuestros clientes"
            },
            {
              icon: <Award className="w-10 h-10" style={{ color: '#00A9DD' }} />,
              title: "Innovación",
              description: "Implementamos tecnología de punta adaptada a cada necesidad"
            },
            {
              icon: <Target className="w-10 h-10" style={{ color: '#00A9DD' }} />,
              title: "Confidencialidad",
              description: "Absoluta discreción en todas nuestras operaciones"
            }
          ].map((value, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4" style={{ borderColor: '#004FAC' }}>
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-gray-100 mr-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
              </div>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Equipo Directivo */}
      <div className="gradient-bg py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#fff' }}>
            Nuestro <span style={{ color: '#fff' }}>Equipo</span>
          </h2>
          <p className="text-xl text-center mb-16 max-w-2xl mx-auto text-white">
            Profesionales con amplia experiencia en el sector de seguridad
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Daniel Pérez",
                position: "Director General",
                bio: "Ex miembro de la policía nacional con más de 15 años de experiencia en seguridad corporativa y protección de personas.",
                image: "img/img (4).png"
              },
              {
                name: "Diana Rodríguez",
                position: "Directora Operativa",
                bio: "Especialista en seguridad privada con más de 10 años de experiencia en diseño e implementación de protocolos de seguridad.",
                image: "img/img (3).png"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-lg mb-4" style={{ color: '#00A9DD' }}>{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificaciones */}
      <div className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#004FAC' }}>
          Nuestros <span style={{ color: '#00A9DD' }}>Reconocimientos</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {[
            { img: "img/Certificación en Seguridad Privada.jpg", alt: "Certificación en Seguridad Privada" },
            { img: "img/Certificado de Calidad.jpg", alt: "Certificado de Calidad" },
            { img: "img/Personal Profesional Certificado.jpg", alt: "Personal Profesional Certificado" },
            { img: "img/Tecnología Avanzada.jpg", alt: "Tecnología Avanzada" }
          ].map((cert, index) => (
            <div key={index} className="flex justify-center p-4 bg-gray-50 rounded-lg h-full">
              <img 
                src={cert.img} 
                alt={cert.alt} 
                className="h-20 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div 
        className="py-20 px-4 text-center text-white"
        style={{ backgroundColor: '#00A9DD' }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">¿Necesitas un servicio de seguridad confiable?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos para una asesoría personalizada sin compromiso
          </p>
          <button 
            className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center mx-auto hover:bg-gray-100 transition transform hover:scale-105"
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=51937203853&text=Hola%2C+estoy+interesado+en+los+servicios+de+seguridad+de+D%26D+Security+SAC.+%C2%BFPodr%C3%ADan+brindarme+m%C3%A1s+informaci%C3%B3n%3F&type=phone_number&app_absent=0', '_blank')}
          >
            <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
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