import { Shield, Building, Package, CalendarDays,Globe , Video, Check, Users, ClipboardList, Settings, MapPin, Clock, Phone, MessageSquare } from 'lucide-react';

const servicios = [
  {
    id: 'seguridad-personal',
    title: "Protección Ejecutiva",
    slogan: "Discreción y profesionalismo",
    description: "Guardaespaldas certificados con entrenamiento militar y policial. Protección 24/7 para personas de alto perfil.",
    image: "img/img (1).png",
    icon: <Shield className="w-12 h-12" />,
    details: {
      overview: "Nuestros especialistas en protección ejecutiva cuentan con entrenamiento de élite en fuerzas especiales, garantizando su seguridad en todo momento. Servicio disponible 24/7 los 365 días del año.",
      features: [
        "Agentes con experiencia en fuerzas militares y policiales",
        "Protección física personalizada",
        "Vehículos blindados con conductores especializados",
        "Evaluación de rutas y protocolos de evacuación",
        "Protección residencial y familiar",
        "Discreción absoluta en todas las operaciones"
      ],
      coverage: [
        { icon: <MapPin />, text: "Cobertura en todo el territorio nacional" },
        { icon: <Clock />, text: "Servicio continuo 24/7/365" },
        { icon: <Users />, text: "Equipos desde 1 hasta 8 agentes según necesidad" }
      ],
      process: [
        "1. Análisis de riesgo inicial sin costo",
        "2. Diseño de plan de protección personalizado",
        "3. Selección del equipo especializado",
        "4. Implementación con protocolos específicos",
        "5. Monitoreo y ajustes continuos"
      ],
      testimonials: [
        "Gracias a D&D Security, nuestro CEO puede viajar con tranquilidad incluso en zonas de alto riesgo.",
        "La profesionalidad de sus agentes ha superado todas nuestras expectativas."
      ]
    }
  },
  {
    id: 'seguridad-empresarial',
    title: "Seguridad Corporativa",
    slogan: "Tu negocio en buenas manos",
    description: "Sistemas integrados de vigilancia física y electrónica para empresas, bancos y centros comerciales.",
    image: "img/img (2).jpg",
    icon: <Building className="w-12 h-12" />,
    details: {
      overview: "Soluciones completas de seguridad para proteger sus instalaciones, activos y personal. Combinamos tecnología de punta con personal altamente capacitado.",
      features: [
        "Guardias de seguridad certificados",
        "Sistemas de control de acceso biométrico",
        "Videovigilancia con analítica inteligente",
        "Protección perimetral con sensores avanzados",
        "Rondas de vigilancia programadas y aleatorias",
        "Monitoreo remoto 24/7 desde nuestro centro de control"
      ],
      coverage: [
        { icon: <ClipboardList />, text: "Auditorías de seguridad completas" },
        { icon: <Settings />, text: "Soluciones escalables para cualquier tamaño" },
        { icon: <Users />, text: "Personal uniformado o de civil según necesidad" }
      ],
      process: [
        "1. Evaluación de vulnerabilidades",
        "2. Propuesta de solución personalizada",
        "3. Implementación por fases",
        "4. Capacitación del personal",
        "5. Revisiones trimestrales de eficacia"
      ],
      testimonials: [
        "Desde que implementamos su sistema, los incidentes de seguridad bajaron un 80% en nuestras sucursales.",
        "Su equipo detectó y neutralizó un intento de intrusión antes de que ocurriera."
      ]
    }
  },
  {
    id: 'resguardo-bienes',
    title: "Custodia de Activos",
    slogan: "Protección en movimiento",
    description: "Transporte seguro de valores, mercancías y documentos confidenciales con vehículos blindados y protocolos anti-asalto.",
    image: "img/img (3).jpg",
    icon: <Package className="w-12 h-12" />,
    details: {
      overview: "Servicio especializado en el transporte seguro de activos de alto valor. Contamos con vehículos blindados y protocolos certificados internacionalmente.",
      features: [
        "Flota de vehículos blindados equipados",
        "Tecnología de rastreo satelital en tiempo real",
        "Personal con entrenamiento anti-secuestro",
        "Custodia para transferencias bancarias",
        "Transporte de mercancías de alto valor",
        "Protección de documentos confidenciales"
      ],
      coverage: [
        { icon: <MapPin />, text: "Cobertura nacional con rutas seguras" },
        { icon: <Clock />, text: "Servicio programado o bajo demanda" },
        { icon: <Users />, text: "Equipos de 2 a 4 agentes por operación" }
      ],
      process: [
        "1. Evaluación de riesgos del traslado",
        "2. Diseño de ruta segura con alternativas",
        "3. Selección del equipo y vehículo adecuado",
        "4. Ejecución con seguimiento en tiempo real",
        "5. Entrega con protocolos de verificación"
      ],
      testimonials: [
        "Hemos transportado valores por millones sin ningún incidente gracias a su servicio.",
        "Su sistema de rastreo nos da tranquilidad en cada operación."
      ]
    }
  },
  {
    id: 'seguridad-eventos',
    title: "Seguridad en Eventos",
    slogan: "Control total de multitudes",
    description: "Equipos especializados en conciertos, convenciones y eventos VIP. Prevención y manejo de situaciones críticas.",
    image: "img/img (4).jpg",
    icon: <CalendarDays className="w-12 h-12" />,
    details: {
      overview: "Servicio completo de seguridad para eventos masivos o privados. Desde control de accesos hasta manejo de emergencias.",
      features: [
        "Equipos con experiencia en eventos masivos",
        "Control de accesos y acreditaciones",
        "Detección temprana de amenazas",
        "Coordinación con cuerpos policiales",
        "Protección para artistas y personalidades",
        "Protocolos anti-pánico para emergencias"
      ],
      coverage: [
        { icon: <ClipboardList />, text: "Análisis de riesgo previo al evento" },
        { icon: <Settings />, text: "Soluciones adaptadas al tipo de evento" },
        { icon: <Users />, text: "Desde 5 hasta 200 agentes por evento" }
      ],
      process: [
        "1. Revisión del lugar y planos",
        "2. Estimación de riesgos y aforo",
        "3. Propuesta de seguridad personalizada",
        "4. Implementación día del evento",
        "5. Reporte post-evento con lecciones aprendidas"
      ],
      testimonials: [
        "Gracias a D&D Security, nuestro evento corporativo transcurrió sin ningún incidente.",
        "Manejaron perfectamente una situación crítica con un asistente alterado."
      ]
    }
  },
  {
    id: 'videovigilancia',
    title: "Vigilancia Inteligente",
    slogan: "Ojos en todas partes",
    description: "Monitoreo remoto con IA para detección de amenazas en tiempo real. Grabación en alta definición con almacenamiento en la nube.",
    image: "img/img (5).png",
    icon: <Video className="w-12 h-12" />,
    details: {
      overview: "Sistemas de videovigilancia con inteligencia artificial para detección proactiva de amenazas. Soluciones adaptadas a cada necesidad.",
      features: [
        "Reconocimiento facial y de matrículas",
        "Alertas automáticas por comportamiento sospechoso",
        "Integración con sistemas de alarma",
        "Monitoreo 24/7 desde nuestro centro de control",
        "Almacenamiento en la nube cifrado",
        "Acceso remoto desde cualquier dispositivo"
      ],
      coverage: [
        { icon: <ClipboardList />, text: "Auditoría inicial de puntos ciegos" },
        { icon: <Settings />, text: "Sistemas escalables para cualquier propiedad" },
        { icon: <Clock />, text: "Monitoreo constante 24/7/365" }
      ],
      process: [
        "1. Diagnóstico de necesidades",
        "2. Diseño del sistema de cámaras",
        "3. Instalación profesional",
        "4. Configuración de alertas personalizadas",
        "5. Capacitación en el uso del sistema"
      ],
      testimonials: [
        "Su sistema detectó un intruso antes de que ingresara a nuestra propiedad.",
        "La calidad de imagen nos permitió identificar a los responsables de un robo."
      ]
    }
  }
];

const ServicesPage = () => {
 const phoneNumber = "51937203853"; // Número sin el '+' inicial
  const defaultMessage = encodeURIComponent(
    "Hola, estoy interesado en los servicios de seguridad de D&D Security SAC. ¿Podrían brindarme más información?"
  );

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${defaultMessage}`,
      "_blank"
    );
  };

  return (
    <div className="bg-white">
       {/* Hero Section */}
      <div 
        className="relative h-96 w-full flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('img/servicios.jpg')" , backgroundSize: 'cover' , backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Nuestros Servicios de Seguridad</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Soluciones integrales adaptadas a tus necesidades específicas
          </p>
        </div>
      </div>

      {/* Listado de Servicios */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicios.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-[#004FAC] rounded-lg text-white">
                    {service.icon}
                  </div>
                  <h3 className="ml-4 text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href={`#${service.id}`} 
                  className="inline-block px-6 py-2 bg-[#004FAC] text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Ver detalles
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Detalles de cada servicio */}
        {servicios.map((service, index) => (
          <section key={index} id={service.id} className="mb-32 scroll-mt-24">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Columna izquierda - Imagen */}
              <div className="lg:w-1/2">
                <div className="sticky top-24">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto rounded-xl shadow-xl"
                  />
                </div>
              </div>
              
              {/* Columna derecha - Contenido */}
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-[#004FAC] rounded-lg text-white">
                    {service.icon}
                  </div>
                  <h2 className="ml-4 text-4xl font-bold">{service.title}</h2>
                </div>
                <p className="text-xl mb-8" style={{ color: '#00A9DD' }}>{service.slogan}</p>
                
                {/* Descripción general */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <ClipboardList className="mr-2" style={{ color: '#004FAC' }} />
                    <span style={{ color: '#004FAC' }}>Descripción del Servicio</span>
                  </h3>
                  <p className="text-lg text-gray-700">{service.details.overview}</p>
                </div>
                
                {/* Características principales */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Check className="mr-2" style={{ color: '#004FAC' }} />
                    <span style={{ color: '#004FAC' }}>Características Principales</span>
                  </h3>
                  <ul className="space-y-3">
                    {service.details.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 mt-1 mr-2 flex-shrink-0" style={{ color: '#00A9DD' }} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Cobertura */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Globe className="mr-2" style={{ color: '#004FAC' }} />
                    <span style={{ color: '#004FAC' }}>Cobertura y Alcance</span>
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    {service.details.coverage.map((item, idx) => (
                      <div key={idx} className="flex items-start mb-4">
                        <div className="p-2 bg-blue-100 rounded-full mr-4" style={{ color: '#004FAC' }}>
                          {item.icon}
                        </div>
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Proceso */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Settings className="mr-2" style={{ color: '#004FAC' }} />
                    <span style={{ color: '#004FAC' }}>Nuestro Proceso</span>
                  </h3>
                  <ol className="space-y-4 list-decimal list-inside text-gray-700">
                    {service.details.process.map((step, idx) => (
                      <li key={idx} className="mb-2 pl-2">{step}</li>
                    ))}
                  </ol>
                </div>
                
                {/* Testimonios */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <MessageSquare className="mr-2" style={{ color: '#004FAC' }} />
                    <span style={{ color: '#004FAC' }}>Testimonios</span>
                  </h3>
                  <div className="space-y-4">
                    {service.details.testimonials.map((testimonial, idx) => (
                      <div key={idx} className="bg-gray-100 p-6 rounded-lg">
                        <p className="italic text-gray-700">"{testimonial}"</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA */}
                <div className="bg-[#004FAC] rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">¿Interesado en este servicio?</h3>
                  <p className="text-white mb-6">Contáctanos para una asesoría personalizada sin compromiso</p>
                  <button  onClick={() => openWhatsApp()} className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition flex items-center mx-auto">
                    <Phone className="mr-2" />
                    Solicitar información
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Final
      <div className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿No encuentras lo que necesitas?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Tenemos soluciones personalizadas para tus requerimientos específicos de seguridad
          </p>
          <button className="px-8 py-4 bg-[#004FAC] hover:bg-blue-700 rounded-lg text-lg font-bold transition flex items-center mx-auto">
            <MessageSquare className="mr-2" />
            Hablar con un especialista
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ServicesPage;