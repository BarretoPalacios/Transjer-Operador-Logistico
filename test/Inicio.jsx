import { useEffect, useState } from 'react';
import { 
  ShieldCheck, 
  UserSquare, 
  Phone, 
  ArrowRight, 
  Check, 
  Send, 
  Facebook, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Clock 
} from 'lucide-react';
import WhatsAppButton from '../src/components/WhatsAppButton';
import ServicesCarousel from '../src/components/ServicesCarousel';

const Inicio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 3000);
    e.target.reset();
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-white">
      <WhatsAppButton />

      {/* Navbar Mejorado */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white shadow-lg' : 'py-4 bg-white backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center">
              <img 
                src="img/logo.png" 
                alt="D&D Security SAC" 
                className="h-12  object-contain"
              />
            </a>

            {/* Menú Desktop */}
            <nav className="hidden md:flex items-center space-x-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="px-4 py-2 rounded-full font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Inicio
              </button>
              |
              <button 
                onClick={() => scrollToSection('about')}
                className=" px-4 py-2 rounded-full font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Nosotros
              </button>
              |
              <button 
                onClick={() => scrollToSection('services')}
                className="px-4 py-2 rounded-full font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Servicios
              </button>
              |
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 rounded-full font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Contacto
              </button>
              |
              <a 
                href="tel:937203853"
                className="ml-2 px-6 py-2 bg-[#004FAC] text-white rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                937 203 853
              </a>
            </nav>

            {/* Botón Mobile */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Menú Mobile */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full px-4 py-2 text-left rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full px-4 py-2 text-left rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full px-4 py-2 text-left rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full px-4 py-2 text-left rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Contacto
              </button>
              <a 
                href="tel:937203853"
                className="block px-4 py-2 bg-[#004FAC] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mt-2"
              >
                <Phone className="w-4 h-4 mr-2" />
                Llamar ahora
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section con Video de Fondo */}
      <section id="home" className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden">
        {/* Video de fondo */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="videos/baner.mp4" type="video/mp4" />
            {/* Fallback image */}
            <img 
              src="img/istockphoto-842004510-1024x1024.jpg" 
              alt="Fondo de seguridad" 
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                D&D <span className="text-blue-400">Security SAC</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                Protegiendo lo que más valoras con más de 10 años de experiencia, incluyendo servicio en la Policía Nacional.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <ShieldCheck className="w-6 h-6 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                  <span>Personal de confianza y altamente capacitado</span>
                </li>
                <li className="flex items-start">
                  <UserSquare className="w-6 h-6 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                  <span>Tecnología de punta y monitoreo continuo</span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-6 h-6 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                  <span>Atención inmediata 24/7</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-[#004FAC] hover:bg-blue-700 text-white font-semibold rounded-full transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Solicitar Cotización
                </button>
                <a 
                  href="tel:937203853"
                  className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-full transition-all"
                >
                  Llamar ahora
                </a>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Cotización Gratis</h2>
              
              {isFormSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nombre y Apellido*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Distrito del servicio*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                  <textarea
                    placeholder="Mensaje*"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  ></textarea>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="not-robot"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      required
                    />
                    <label htmlFor="not-robot" className="ml-2 text-sm text-gray-700">
                      No soy un robot
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#004FAC] hover:bg-blue-700 text-white font-semibold rounded-lg transition flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios (sección idéntica al original) */}
      <ServicesCarousel />

      {/* Sobre Nosotros (sección idéntica al original) */}
      <section id="about" className="py-20 bg-white ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                   src="img/img (4).jpg" 
                alt="Personal de Seguridad" 
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">Sobre Nosotros</h2>
              <p className="text-lg text-gray-700 mb-4">
                En <span className="font-bold">D&D Security SAC</span> ofrecemos seguridad privada confiable y moderna en Lima y todo el Perú. Más de <span className="font-bold">10 años de experiencia</span> avalan nuestro compromiso y ética profesional.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Contamos con agentes que han servido en la Policía Nacional, expertos en prevención y control de riesgos.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Planes de seguridad a medida</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Monitoreo digital y rondas presenciales</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Tecnología de última generación</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Personal altamente capacitado</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">Disponibilidad</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">300+</div>
                  <div className="text-gray-600">Clientes satisfechos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto (sección idéntica al original) */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contáctanos</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Estamos aquí para ayudarte. Contáctanos para una consulta gratuita y descubre cómo podemos proteger lo que más valoras.
          </p>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nombre completo*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
                <input
                  type="tel"
                  placeholder="Teléfono*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email*"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              />

              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              >
                <option value="">Selecciona un servicio*</option>
                <option>Seguridad Personal</option>
                <option>Seguridad Empresarial</option>
                <option>Resguardo de Bienes</option>
                <option>Seguridad de Eventos</option>
                <option>Videovigilancia</option>
                <option>Respuesta Inmediata</option>
              </select>

              <textarea
                placeholder="¿Cómo podemos ayudarte?"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-[#004FAC] hover:bg-blue-700 text-white font-semibold rounded-lg transition flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer (sección idéntica al original) */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                D&D <span className="text-blue-400">Security</span> SAC
              </h3>
              <p className="text-gray-300 mb-6">
                Comprometidos con tu seguridad. Más de 10 años de experiencia y más de 300 clientes satisfechos.
              </p>
              <div>
                <h4 className="text-lg font-semibold mb-3 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-400">
                  Síguenos
                </h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-400">
                Servicios
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Seguridad Personal</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Seguridad Empresarial</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Resguardo de Bienes</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Videovigilancia</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Seguridad de Eventos</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Respuesta Inmediata</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-400">
                Contacto
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <a href="tel:937203853" className="text-gray-300 hover:text-blue-400 transition">937 203 853</a>
                </li>
                <li className="flex items-start">
                  <Send className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <a href="mailto:info@ddsecurity.com" className="text-gray-300 hover:text-blue-400 transition">info@ddsecurity.com</a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Lima, Perú</span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Disponibilidad 24/7</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} D&D Security SAC. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Inicio;