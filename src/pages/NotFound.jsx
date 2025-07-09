import { Truck, Home, Frown ,Phone} from 'lucide-react';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    document.title = "Página no encontrada | TRANSJER";
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center text-white relative overflow-hidden">
      {/* Efecto de fondo animado (partículas) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-yellow-500 opacity-10 animate-float"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 px-6 py-12">
        {/* Ilustración personalizada */}
        <div className="mb-8 mx-auto w-48 h-48 relative">
          <div className="absolute inset-0 rounded-full border-4 border-yellow-500 flex items-center justify-center">
            <div className="text-center">
              <Frown size={64} className="mx-auto text-yellow-500 mb-2" />
              <span className="text-5xl font-bold text-white">404</span>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4">
            <Truck size={48} className="text-yellow-500 animate-bounce" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">
          ¡Ups! Ruta no encontrada
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          Parece que el destino que buscas no está en nuestro mapa logístico.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/"
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg flex items-center justify-center transition-transform hover:scale-105 shadow-lg"
          >
            <Home className="mr-2" size={20} />
            Volver al inicio
          </a>
          <a
            href="/contacto"
            className="px-6 py-3 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold rounded-lg flex items-center justify-center transition-all"
          >
            <Phone className="mr-2" size={20} />
            Contactar soporte
          </a>
        </div>
      </div>

      {/* Efecto de camión animado en el borde inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden h-20">
        <div className="animate-truck absolute -left-64 bottom-0">
          <Truck className="text-yellow-400 w-32 h-32 opacity-80" />
        </div>
      </div>

      {/* Estilos de animación */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-50px) translateX(20px); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes truck {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(calc(100vw + 100px)); }
        }
        .animate-float { animation: float linear infinite; }
        .animate-truck { animation: truck 15s linear infinite; }
      `}</style>
    </div>
  );
};

export default NotFound;