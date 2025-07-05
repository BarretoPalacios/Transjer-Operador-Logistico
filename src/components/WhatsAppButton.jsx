import { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showOptions, setShowOptions] = useState(false);

  // Ocultar el botón al hacer scroll hacia abajo
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = '51937203853'; // Número sin el '+' inicial
  const defaultMessage = encodeURIComponent(
    'Hola, estoy interesado en los servicios de seguridad de D&D Security SAC. ¿Podrían brindarme más información?'
  );

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${defaultMessage}`, '_blank');
  };

  const openPhoneCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showOptions && (
        <div className="flex flex-col gap-2 mb-2 animate-fade-in">
          <button
            onClick={openPhoneCall}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-all"
            aria-label="Llamar por teléfono"
          >
            <Phone className="w-5 h-5" />
          </button>
        </div>
      )}

      <button
        onClick={() => {
          if (showOptions) {
            openWhatsApp();
          } else {
            setShowOptions(true);
          }
        }}
        className={`flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all ${
          isVisible ? 'animate-fade-in' : 'animate-fade-out'
        }`}
        aria-label="Contactar por WhatsApp"
      >
        {showOptions ? (
          <MessageSquare className="w-6 h-6" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;