import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Phone, X, Mail, MapPin, Clock } from "lucide-react";
import Modal from "react-modal";

// Configuración del modal para accesibilidad
Modal.setAppElement('#root');

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

const getLinkClass = (path) =>
  `relative px-4 py-2 rounded-full font-medium transition-colors ${
    currentPath === path
      ? "text-black after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-[2px] after:bg-black"
      : "text-black hover:bg-[#FEC727] hover:text-black"
  }`;



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const customStyles = {
    content: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      padding: '20px',
      backgroundColor: '#000',
      border: 'none',
      borderRadius: '0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 1000
    }
  };

  return (
    <>
{/* Barra superior de contactos - Fija en la parte superior */}
{!scrolled && (
  <div className="fixed w-full top-0 z-40 bg-[#FEC727] text-black text-sm py-5 hidden md:block">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <a href="tel:913177037" className="flex items-center hover:text-black">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          <span className="ml-1">913177037</span>
        </a>
        <a href="mailto:contacto@transjer.com" className="flex items-center hover:text-black">
          <Mail className="w-4 h-4 mr-1" />
          <span>comercial@transjer.com</span>
        </a>
      </div> 
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <a href="https://www.facebook.com/profile.php?id=61573999940845" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
          </a>
          <a href="https://www.instagram.com/comercialtransjer/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/transjer-operador-log%C3%ADstico-4071a6351/?fbclid=IwY2xjawLa_3NleHRuA2FlbQIxMABicmlkETFKZFNmNDhXQWFNaGRYTk9jAR7X5gB6jgRb5p_4vS1p-JKljR3R1U_IemT4byDoNJHk_oB5lnyBxMkalKlNpA_aem_sJpdKRSaohJXz5PF-ZS3yA" target="_blank" rel="noopener noreferrer" className="hover:text-black">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          <span>Gerardo Unger 3601 – Independencia. </span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span>Lun-Vie: 8:00 - 18:00</span>
        </div>
      </div>
    </div>
  </div>
</div>
)}

      {/* Navbar principal - Posicionado debajo de la barra de contactos */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-2 bg-white/20 backdrop-blur-sm shadow-lg top-0"
            : "py-4 bg-white md:top-15 top-0"  // Ajuste aquí: md:top-10 para dejar espacio a la barra de contactos
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img
                src="img/logo-transjer.png"
                alt="Transjer Operador Logístico"
                className="h-14 object-contain"
              />
            </Link>

            {/* Menú Desktop */}
            <nav className="hidden md:flex items-center space-x-1 uppercase font-bolder">
              <Link
                to="/"
                className={getLinkClass("/")}
        
              >
                Inicio
              </Link>
              <Link
                to="/servicios"
                className={getLinkClass("/servicios")}
              >
                Servicios
              </Link>
              <Link
                to="/flotas"
                className={getLinkClass("/flotas")}
              >
                Flotas
              </Link>
              <Link
                to="/nosotros"
                className={getLinkClass("/nosotros")}
              >
                Nosotros
              </Link>
              <Link
                to="/contacto"
                className={getLinkClass("/contacto")}
              >
                Contacto
              </Link>
              <a
                href="tel:913177037"
                className="ml-4 px-6 py-2 bg-[#FEC727] text-black rounded-full font-semibold hover:bg-yellow-500 transition-colors flex items-center"
              
              >
                <Phone className="w-4 h-4 mr-2" />
              913177037
              </a>
            </nav>

            {/* Botón Mobile - Abre modal */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 text-black"
              onClick={() => setModalIsOpen(true)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Espacio para evitar que el contenido quede oculto detrás del navbar */}
      <div className={`${scrolled ? 'h-16' : 'h-24'} md:h-24`}></div>

      {/* Modal para Mobile */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Menú de navegación"
      >
        <button 
          onClick={() => setModalIsOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-[#FEC727]"
        >
          <X className="w-8 h-8" />
        </button>
        
        <div className="w-full flex flex-col items-center space-y-6">
          <Link
            to="/"
            className="w-full text-center text-white text-2xl font-bold hover:text-[#FEC727] transition-colors py-3"
            onClick={() => setModalIsOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to="/servicios"
            className="w-full text-center text-white text-2xl font-bold hover:text-[#FEC727] transition-colors py-3"
            onClick={() => setModalIsOpen(false)}
          >
            Servicios
          </Link>
          <Link
            to="/flotas"
            className="w-full text-center text-white text-2xl font-bold hover:text-[#FEC727] transition-colors py-3"
            onClick={() => setModalIsOpen(false)}
          >
            Flotas
          </Link>
          <Link
            to="/nosotros"
            className="w-full text-center text-white text-2xl font-bold hover:text-[#FEC727] transition-colors py-3"
            onClick={() => setModalIsOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            to="/contacto"
            className="w-full text-center text-white text-2xl font-bold hover:text-[#FEC727] transition-colors py-3"
            onClick={() => setModalIsOpen(false)}
          >
            Contacto
          </Link>
          
          <div className="mt-8 w-full space-y-4">
            <a
              href="tel:913177037"
              className="block px-8 py-4 bg-[#FEC727] text-black rounded-full font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center text-xl"
            >
              <Phone className="w-6 h-6 mr-2" />
              Llamar: 913177037
            </a>
            <a
              href="mailto:comercial@transjer.com"
              className="block px-8 py-4 text-white border border-white rounded-full font-bold hover:bg-white hover:text-black transition-colors flex items-center justify-center text-xl"
            >
              <Mail className="w-6 h-6 mr-2" />
              Email
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Navbar;