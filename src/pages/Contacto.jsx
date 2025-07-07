import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Forms from '../components/Forms';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <>
    <Navbar />
<div className="bg-white">

       {/* Hero Section */}
      <div 
        className="relative h-96 w-full flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('img/contacto.jpg')" , backgroundSize: 'cover' , backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contáctenos</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
             Estamos listos para proteger lo que más valoras
          </p>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Columna izquierda - Información de contacto */}
          <div>
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#004FAC' }}>
              Información de Contacto
            </h2>
            
            {/* Tarjeta de información */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-md mb-10">
              <div className="space-y-6">
                {/* Dirección */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#00A9DD' }}>
                    <MapPin className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Oficina Principal</h3>
                    <p className="text-gray-700">Av. Seguridad 1234, Piso 8</p>
                    <p className="text-gray-700">Distrito Financiero, Ciudad Capital</p>
                  </div>
                </div>
                
                {/* Teléfonos */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#00A9DD' }}>
                    <Phone className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Teléfonos</h3>
                    <p className="text-gray-700">(+51) 937 203 853</p>
 
                  </div>
                </div>
                
                {/* Correo */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#00A9DD' }}>
                    <Mail className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Correo Electrónico</h3>
                    <p className="text-gray-700">contacto@dydsecurity.com</p>
                    <p className="text-gray-700">soporte@dydsecurity.com</p>
                  </div>
                </div>
                
                {/* Horario */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#00A9DD' }}>
                    <Clock className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Horario de Atención</h3>
                    <p className="text-gray-700">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Sábados: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-700" style={{ color: '#004FAC' }}>Emergencias: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mapa */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-0.12345678901234567!3d51.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzI0LjQiTiAwwrAwNyczNi4xIlc!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" 
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy"
                title="Ubicación D&D Security"
              ></iframe>
            </div>
          </div>
          
          {/* Columna derecha - Formulario */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4" style={{ borderColor: '#004FAC' }}>
              <div className="flex items-center mb-6">
                <Send className="w-8 h-8 mr-3" style={{ color: '#00A9DD' }} />
                <h2 className="text-3xl font-bold" style={{ color: '#004FAC' }}>Envíanos un Mensaje</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Completa el formulario y uno de nuestros especialistas se pondrá en contacto contigo en menos de 24 horas.
              </p>
              
              {/* Aquí integras tu componente de formulario existente */}
              <Forms />

              <div className="mt-6 text-sm text-gray-500">
                <p>Al enviar este formulario, aceptas nuestra <a href="#" className="underline" style={{ color: '#004FAC' }}>Política de Privacidad</a>.</p>
              </div>
            </div>
            
            {/* Sección de emergencia */}
            <div className="mt-10 bg-red-50 rounded-xl p-6 border-l-4" style={{ borderColor: '#004FAC' }}>
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-red-100 mr-4">
                  <Phone className="w-6 h-6" style={{ color: '#004FAC' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#004FAC' }}>Emergencias 24/7</h3>
                  <p className="text-gray-700 mb-3">Para situaciones urgentes que requieran atención inmediata:</p>
                  <a 
                    href="tel:+15557654321" 
                    className="px-6 py-3 bg-red-600 text-white rounded-lg font-bold inline-flex items-center hover:bg-red-700 transition"
                  >
                    <Phone className="mr-2" />
                    Llamar al (+51) 937 203 853
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final
      <div className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">¿Prefieres que te llamemos nosotros?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Déjanos tu número y te contactaremos en el horario que nos indiques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="tel" 
              placeholder="Tu número de teléfono" 
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2" 
              style={{ focusRingColor: '#00A9DD' }}
            />
            <button 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition whitespace-nowrap"
              style={{ backgroundColor: '#004FAC' }}
            >
              Solicitar llamada
            </button>
          </div>
        </div>
      </div> */}
    </div>
<Footer />
    </>
  );
};

export default ContactPage;