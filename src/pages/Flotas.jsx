import { Truck, MapPin, Shield, Camera, Users, CheckCircle, Package, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

const Flotas = () => {
  const [activeTab, setActiveTab] = useState('vehiculos');

  // Imágenes de flotas
  const fleetImages = [
    { type: '2 TN', src: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    { type: '5 TN', src: 'https://images.unsplash.com/photo-1631795583215-8dc655c4a8a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    { type: '10 TN', src: 'https://images.unsplash.com/photo-1601574028976-3b2615d71e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    { type: '15 TN', src: 'https://images.unsplash.com/photo-1601574028976-3b2615d71e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' }
  ];

  // Imágenes de beneficios
  const benefitImages = [
    { title: 'Monitoreo GPS', src: 'https://images.unsplash.com/photo-1581093057305-25f0a6f3a1e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    { title: 'Cámaras de Seguridad', src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    { title: 'Personal Capacitado', src: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative bg-black text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601574028857-2d0a48483fa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-50" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-yellow-400">NUESTRA FLOTA</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
            15 vehículos modernos listos para transportar tu mercadería a todo el Perú
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="container mx-auto px-4 sm:px-6 -mt-8 md:-mt-10">
        <div className="flex overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setActiveTab('vehiculos')}
            className={`px-4 py-2 md:px-6 md:py-3 font-bold whitespace-nowrap transition-colors ${
              activeTab === 'vehiculos' 
                ? 'bg-yellow-500 text-black' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            <Truck className="inline mr-2 w-4 h-4 md:w-5 md:h-5" /> Tipos de Vehículos
          </button>
          <button
            onClick={() => setActiveTab('cobertura')}
            className={`px-4 py-2 md:px-6 md:py-3 font-bold whitespace-nowrap transition-colors ${
              activeTab === 'cobertura' 
                ? 'bg-yellow-500 text-black' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            <MapPin className="inline mr-2 w-4 h-4 md:w-5 md:h-5" /> Cobertura Nacional
          </button>
          <button
            onClick={() => setActiveTab('beneficios')}
            className={`px-4 py-2 md:px-6 md:py-3 font-bold whitespace-nowrap transition-colors ${
              activeTab === 'beneficios' 
                ? 'bg-yellow-500 text-black' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            <Shield className="inline mr-2 w-4 h-4 md:w-5 md:h-5" /> Beneficios
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Sección de Vehículos */}
        {activeTab === 'vehiculos' && (
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">
                Nuestra Capacidad de Transporte
              </h2>
              
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-6 md:mb-8 border-l-4 border-yellow-500">
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center">
                  <Truck className="text-yellow-500 mr-3 w-5 h-5 md:w-6 md:h-6" /> Flota Moderna "A la de Gaviota"
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>5 TN - Carga y descarga rápida</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Mercadería no visible - Mayor seguridad</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Ideal para mercadería de gran volumen</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Especificaciones Técnicas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { capacity: '2 TN', count: '5 unidades', image: fleetImages[0].src },
                    { capacity: '4 TN', count: '5 unidades', image: fleetImages[1].src },
                    { capacity: '5 TN', count: '5 unidades', image: fleetImages[1].src },
                    { capacity: '7 TN', count: '5 unidades', image: fleetImages[1].src },
                    { capacity: '10 TN (10-15 m³)', count: '5 unidades', image: fleetImages[2].src },
                    { capacity: '15 TN (20-25 m³)', count: '5 unidades', image: fleetImages[3].src },
                    { capacity: '15 TN (30-35 m³)', count: '5 unidades', image: fleetImages[3].src },
                    { capacity: '15 TN (40-50 m³)', count: '5 unidades', image: fleetImages[3].src },
                    { capacity: '15 TN (60 m³)', count: '5 unidades', image: fleetImages[3].src },
                    { capacity: '15 TN (80 m³)', count: '5 unidades', image: fleetImages[3].src },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg group overflow-hidden">
                      <div className="relative h-32 mb-3 rounded-md overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={`Vehículo ${item.capacity}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{item.capacity}</span>
                        </div>
                      </div>
                      <div className="font-bold text-yellow-600">{item.capacity}</div>
                      <div className="text-gray-600">{item.count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-6 md:mb-8 h-full">
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1601574028976-3b2615d71e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Flota TRANSJER" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold">Flota Moderna y Segura</h3>
                    <p>Garantizando la protección de tu mercadería</p>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Características Generales</h3>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Vehículos modernos con mantenimiento preventivo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Capacidad adaptada a diferentes tipos de carga</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Certificados por el MTC</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Conductores profesionales capacitados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Sección de Cobertura */}
        {activeTab === 'cobertura' && (
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">
                Llegamos a cada rincón del Perú
              </h2>
              
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-6 md:mb-8 border-l-4 border-yellow-500">
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center">
                  <MapPin className="text-yellow-500 mr-3 w-5 h-5 md:w-6 md:h-6" /> Cobertura Nacional
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2 text-yellow-600">NORTE</h4>
                    <ul className="space-y-1">
                      {['CHIMBOTE', 'TRUJILLO', 'CHICLAYO', 'PIURA', 'TUMBES', 'CAJAMARCA'].map((city, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="text-yellow-500 mr-2 w-4 h-4" />
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2 text-yellow-600">SUR</h4>
                    <ul className="space-y-1">
                      {['CHINCHA', 'PISCO', 'ICA', 'AREQUIPA', 'CUSCO', 'JULIACA', 'PUNO'].map((city, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="text-yellow-500 mr-2 w-4 h-4" />
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-bold mb-2 text-yellow-600">CENTRO</h4>
                    <ul className="space-y-1">
                      {['HUANCAYO', 'TARMA', 'HUANCAVELICA', 'HUARAZ'].map((city, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="text-yellow-500 mr-2 w-4 h-4" />
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-bold mb-2 text-yellow-600">SELVA</h4>
                    <ul className="space-y-1">
                      {['PUCALLPA', 'TARAPOTO', 'MADRE DE DIOS'].map((city, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="text-yellow-500 mr-2 w-4 h-4" />
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg h-full">
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1544620347-c4fd8a3b0f1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                    alt="Cobertura Nacional" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold">Red Logística Nacional</h3>
                    <p>Conectamos todo el territorio peruano</p>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Nuestra Red Logística</h3>
                <p className="text-gray-600 mb-3 md:mb-4">
                  Contamos con rutas establecidas y alianzas estratégicas que nos permiten llegar a todo el territorio nacional con eficiencia y seguridad.
                </p>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Entregas puntuales en todo el país</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Coordinación logística profesional</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Monitoreo constante de rutas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Sección de Beneficios */}
        {activeTab === 'beneficios' && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">
              Beneficios de Nuestra Flota
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              {/* Beneficio 1 - GPS */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
                <div className="flex items-center mb-4">
                  <div className="relative mr-4">
                    <img 
                      src={benefitImages[0].src} 
                      alt="Monitoreo GPS" 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-yellow-500 rounded-full p-1">
                      {/* <Gps className="text-black w-4 h-4" /> */}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Sistema de GPS</h3>
                </div>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Seguimiento en vivo con plataformas digitales</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Verificación de ubicación y estado de la mercancía en tiempo real</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Doble sistema de seguridad: Señuelo y Anti vandalismo</span>
                  </li>
                </ul>
              </div>
              
              {/* Beneficio 2 - Cámaras */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
                <div className="flex items-center mb-4">
                  <div className="relative mr-4">
                    <img 
                      src={benefitImages[1].src} 
                      alt="Cámaras de Seguridad" 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-yellow-500 rounded-full p-1">
                      <Camera className="text-black w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Cámaras de Seguridad</h3>
                </div>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Sistema avanzado de videovigilancia en todas las unidades</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Monitoreo continuo en tiempo real</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Garantiza trazabilidad de los envíos y previene incidentes</span>
                  </li>
                </ul>
              </div>
              
              {/* Beneficio 3 - Seguros */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
                <div className="flex items-center mb-4">
                  <div className="relative mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Seguros y Pólizas" 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-yellow-500 rounded-full p-1">
                      <Shield className="text-black w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Seguros y Pólizas</h3>
                </div>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Póliza de Responsabilidad Civil que protege contra daños a terceros</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Póliza de Carga que cubre hasta $150,000 dólares por accidentes, robos o desastres naturales</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Documentación en regla y fiscalizada por SUNAT</span>
                  </li>
                </ul>
              </div>
              
              {/* Beneficio 4 - Personal */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
                <div className="flex items-center mb-4">
                  <div className="relative mr-4">
                    <img 
                      src={benefitImages[2].src} 
                      alt="Personal Capacitado" 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-yellow-500 rounded-full p-1">
                      <Users className="text-black w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Personal Capacitado</h3>
                </div>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Estibadores propios para carga y descarga sin contratiempos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Personal administrativo experto en liquidaciones y facturaciones</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span>Conductores profesionales con certificación MTC</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* CTA Final */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">¿Listo para transportar con seguridad?</h3>
                  <p className="text-gray-700">Solicita una cotización personalizada para tu carga</p>
                </div>
                <div className="md:w-1/3 text-center">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdyLrxVlKpuWF4QiWnUsbXHylc3784wNaJKU8BI61B9_c1V1A/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-black hover:bg-gray-800 text-yellow-500 font-bold rounded-lg transition"
                  >
                    Solicitar Cotización
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Flotas;
