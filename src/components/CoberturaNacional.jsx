import { MapPin, Navigation, Truck, Globe } from 'lucide-react';
import PeruMap from './PeruMap'; // Asegúrate de que la ruta sea correcta

const CoberturaNacional = () => {
  const ciudades = [
  { nombre: "CHIMBOTE", region: "costa" },
  { nombre: "TRUJILLO", region: "costa" },
  { nombre: "CHICLAYO", region: "costa" },
  { nombre: "PIURA", region: "costa" },
  { nombre: "TUMBES", region: "costa" },
  { nombre: "CHINCHA", region: "costa" },
  { nombre: "PISCO", region: "costa" },
  { nombre: "ICA", region: "costa" },

  { nombre: "CAJAMARCA", region: "sierra" },
  { nombre: "AREQUIPA", region: "sierra" },
  { nombre: "CUSCO", region: "sierra" },
  { nombre: "JULIACA", region: "sierra" },
  { nombre: "PUNO", region: "sierra" },
  { nombre: "HUANCAYO", region: "sierra" },
  { nombre: "TARMA", region: "sierra" },
  { nombre: "HUANCAVELICA", region: "sierra" },
  { nombre: "HUARAZ", region: "sierra" },

  { nombre: "MADRE DE DIOS", region: "selva" },
  { nombre: "PUCALLPA", region: "selva" },
  { nombre: "TARAPOTO", region: "selva" },
];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#FEC727] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#FEC727] filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#FEC727] filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-[#FEC727] bg-opacity-20 px-6 py-3 rounded-full mb-6">
            <Globe className="w-6 h-6 mr-2 text-black" />
            <span className="font-medium text-black">COBERTURA NACIONAL</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Llegamos a <span className="text-[#FEC727]">20 ciudades</span> del Perú
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nuestra red logística cubre las principales rutas del país con operaciones estratégicamente ubicadas
          </p>
        </div>

        {/* Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mapa */}
          <div className="relative group h-full min-h-[400px] lg:min-h-[500px]">
            <div className="absolute -inset-2 rounded-xl bg-[#000] opacity-75 group-hover:opacity-100 blur transition duration-200"></div>
            <div className="relative h-full rounded-xl overflow-hidden border-2 border-[#ff]">
              <PeruMap className=" w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
            </div>
          </div>

          {/* Lista de ciudades */}
          <div>
            <div className="mb-8 flex items-center">
              <Navigation className="w-10 h-10 mr-4 text-[#FEC727]" />
              <div>
                <h3 className="text-2xl font-bold text-white">Rutas principales y secundarias</h3>
                <p className="text-gray-400">Cobertura en costa, sierra y selva del Perú</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {ciudades.map((ciudad, index) => {
    let color = "";
    if (ciudad.region === "costa") color = "bg-[#FEC727]";
    if (ciudad.region === "sierra") color = "bg-green-400";
    if (ciudad.region === "selva") color = "bg-blue-400";

    return (
      <div
        key={index}
        className={`flex items-center p-4 ${color} bg-opacity-50 rounded-lg border hover:shadow-md transition-all `}
      >
        <MapPin className="w-5 h-5 mr-3 text-black flex-shrink-0" />
        <span className="font-bold text-black">{ciudad.nombre}</span>
      </div>
    );
  })}
</div>

            {/* Info adicional */}
            <div className="mt-8 p-6 bg-[#FEC727] bg-opacity-10 rounded-xl border border-[#FEC727] border-opacity-30">
              <div className="flex items-start">
                <Truck className="w-8 h-8 mr-4 mt-1 text-black flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">Flota especializada por región</h4>
                  <p className="text-black">
                    Contamos con vehículos adaptados a cada tipo de terreno y necesidad logística, desde unidades para carretera hasta vehículos para zonas rurales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logros */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-black border shadow-md p-6 rounded-xl text-center">
            <p className="text-4xl font-bold text-[#FEC727]">20+</p>
            <p className="text-gray-300">Ciudades</p>
          </div>
          <div className="bg-black border shadow-md p-6 rounded-xl text-center">
            <p className="text-4xl font-bold text-[#FEC727]">25K+</p>
            <p className="text-gray-300">Km recorridos mensuales</p>
          </div>
          <div className="bg-black border shadow-md p-6 rounded-xl text-center">
            <p className="text-4xl font-bold text-[#FEC727]">24/7</p>
            <p className="text-gray-300">Monitoreo de flota</p>
          </div>
          <div className="bg-black border shadow-md p-6 rounded-xl text-center">
            <p className="text-4xl font-bold text-[#FEC727]">98%</p>
            <p className="text-gray-300">Entregas a tiempo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoberturaNacional;