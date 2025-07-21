import { useState, useEffect, useRef } from "react";
import { X, Send } from "lucide-react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Efecto para manejar el scroll
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efecto para el auto-scroll al añadir mensajes
  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const phoneNumber = "51913177037";
  const defaultMessage = "Hola, estoy interesado en los servicios de logística de Transjer ¿Podrían brindarme más información?";

  // Mensaje inicial de la empresa (simulando chatbot)
  const companyGreeting = {
    text: "¡Hola! 👋 Somos Transjer. ¿En qué podemos ayudarte hoy? Puedes escribir tu consulta y te responderemos a la brevedad.",
    sender: "company",
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  const openWhatsApp = (customMessage = "") => {
    const textToSend = customMessage || defaultMessage;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textToSend)}`,
      "_blank"
    );
    setIsModalOpen(false);
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Añadir mensaje del usuario
      const userMessage = {
        text: message,
        sender: "user",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setChatMessages(prev => [...prev, userMessage]);
      setMessage("");
      
      // Simular que la empresa está escribiendo
      setIsTyping(true);
      
      // Respuesta automática después de un delay
      setTimeout(() => {
        setIsTyping(false);
        const companyResponse = {
          text: "Gracias por tu mensaje. Para continuar con tu consulta, serás redirigido a WhatsApp donde nuestro equipo te atenderá personalmente.",
          sender: "company",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setChatMessages(prev => [...prev, companyResponse]);
        
        // Redirigir después de mostrar la respuesta
        setTimeout(() => openWhatsApp(userMessage.text), 1500);
      }, 500);
    }
  };

  // Inicializar el chat con el saludo de la empresa cuando se abre el modal
  useEffect(() => {
    if (isModalOpen && chatMessages.length === 0) {
      setChatMessages([companyGreeting]);
    }
  }, [isModalOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Botón de WhatsApp */}
      <button
        onClick={() => setIsModalOpen(true)}
        className={`flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all ${
          isVisible ? "animate-fade-in" : "animate-fade-out"
        }`}
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </button>

      {/* Modal del Chat */}
      {isModalOpen && (
        <div className="relative">
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 flex flex-col" style={{ height: "400px" }}>
            {/* Header del Chat */}
            <div className="bg-green-500 p-3 text-white flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-green-500"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Transjer</h3>
                  <p className="text-xs opacity-80">
                    {isTyping ? "escribiendo..." : "en línea"}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  setChatMessages([]);
                }}
                className="text-white hover:text-gray-200"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Cuerpo del Chat */}
            <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
              {chatMessages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-xs p-3 rounded-lg ${msg.sender === "user" 
                      ? "bg-green-100 text-gray-800 rounded-tr-none" 
                      : "bg-white text-gray-800 rounded-tl-none shadow-sm"}`}
                  >
                    <p>{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === "user" ? "text-gray-500 text-right" : "text-gray-400"}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="mb-3 flex justify-start">
                  <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Formulario de mensaje */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 bg-white">
              <div className="flex items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Escribe un mensaje..."
                />
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-r-lg transition-colors"
                  disabled={!message.trim()}
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;