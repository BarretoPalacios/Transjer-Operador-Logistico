// import {
//   Truck,
//   MapPin,
//   Shield,
//   Camera,
//   Users,
//   CheckCircle,
//   Package,
//   Clock,
//   ArrowRight
// } from "lucide-react";
// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Flotas = () => {
//   const [activeTab, setActiveTab] = useState("vehiculos");

//   const benefitImages = [
//     {
//       title: "Monitoreo GPS",
//       src: "/img/gps.png",
//     },
//     {
//       title: "Seguros y Pólizas",
//       src: "/img/seguro.png",
//     },
//     {
//       title: "Cámaras de Seguridad",
//       src: "/img/camaras.png",
//     },
//     {
//       title: "Personal Capacitado",
//       src: "/img/personal.png",
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-b from-black to-[#FEC727]">
//       <Navbar />
//       {/* Hero Banner */}
//       <div className="relative bg-[#FEC727] text-white py-10 md:py-20">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601574028857-2d0a48483fa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-50" />
//         <div className="relative  container mx-auto px-4 sm:px-6 text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
//             <span className="text-black">NUESTRA FLOTA</span>
//           </h1>
//           <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-black">
//             vehículos modernos listos para transportar tu mercadería a todo el
//             Perú
//           </p>
//         </div>
//       </div>

//       {/* Tabs Navigation */}
//       <div className="container mx-auto px-4 sm:px-6">
//         <div className="flex overflow-x-auto scrollbar-hide">
//           <button
//             onClick={() => setActiveTab("vehiculos")}
//             className={`px-4 py-2 md:px-6 md:py-3 font-bold whitespace-nowrap transition-colors ${
//               activeTab === "vehiculos"
//                 ? "bg-[#FEC727] text-black"
//                 : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//             }`}
//           >
//             <Truck className="inline mr-2 w-4 h-4 md:w-5 md:h-5" /> Tipos de
//             Vehículos
//           </button>
//           <button
//             onClick={() => setActiveTab("cobertura")}
//             className={`px-4 py-2 md:px-6 md:py-3 font-bold whitespace-nowrap transition-colors ${
//               activeTab === "cobertura"
//                 ? "bg-[#FEC727] text-black"
//                 : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//             }`}
//           >
//             <MapPin className="inline mr-2 w-4 h-4 md:w-5 md:h-5" /> Cobertura
//             Nacional
//           </button>
//           <button
//             onClick={() => setActiveTab("beneficios")}
//             className={`px-4 py-2 md:px-6 md:py-3 font-bold whitespace-nowrap transition-colors ${
//               activeTab === "beneficios"
//                 ? "bg-[#FEC727] text-black"
//                 : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//             }`}
//           >
//             <Shield className="inline mr-2 w-4 h-4 md:w-5 md:h-5" /> Beneficios
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
//         {/* Sección de Vehículos */}
//         {activeTab === "vehiculos" && (
//           <div className="grid md:grid-cols-2 gap-8 md:gap-12">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-[#FEC727]">
//                 Nuestra Capacidad de Transporte
//               </h2>

//               <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-6 md:mb-8 border-l-4 border-[#FEC727]">
//                 <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center">
//                   <Truck className="text-[#FEC727] mr-3 w-5 h-5 md:w-6 md:h-6" />{" "}
//                   Flota Moderna "A la de Gaviota"
//                 </h3>
//                 <ul className="space-y-3 md:space-y-4">
//                   <li className="flex items-start">
//                     <CheckCircle className="text-[#FEC727] mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
//                     <span>5 TN - Carga y descarga rápida</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="text-[#FEC727] mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
//                     <span>Mercadería no visible - Mayor seguridad</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="text-[#FEC727] mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
//                     <span>Ideal para mercadería de gran volumen</span>
//                   </li>
//                 </ul>
//               </div>

//               <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-[#FEC727]">
//                 <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
//                   Especificaciones Técnicas
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {[
//                     {
//                       capacity: "2 TN",
//                       count: "5 unidades",
//                       image: "/img/flota-1.jpg",
//                     },
//                     {
//                       capacity: "4 TN",
//                       count: "5 unidades",
//                       image: "/img/flota-1.jpg",
//                     },
//                     {
//                       capacity: "5 TN",
//                       count: "5 unidades",
//                       image: "/img/flota-2.jpg",
//                     },
//                     {
//                       capacity: "7 TN",
//                       count: "5 unidades",
//                       image: "/img/flota-2.jpg",
//                     },
//                     {
//                       capacity: "10 TN (10-15 m³)",
//                       count: "5 unidades",
//                       image: "/img/flota-3.jpg",
//                     },
//                     {
//                       capacity: "15 TN (20-25 m³)",
//                       count: "5 unidades",
//                       image: "/img/flota-3.jpg",
//                     },
//                     {
//                       capacity: "15 TN (30-35 m³)",
//                       count: "5 unidades",
//                       image: "/img/flota-4.jpg",
//                     },
//                     {
//                       capacity: "15 TN (40-50 m³)",
//                       count: "5 unidades",
//                       image: "/img/flota-4.jpg",
//                     },
//                     {
//                       capacity: "15 TN (60 m³)",
//                       count: "5 unidades",
//                       image: "/img/flota-5.jpg",
//                     },
//                     {
//                       capacity: "15 TN (80 m³)",
//                       count: "5 unidades",
//                       image: "/img/flota-6.jpg",
//                     },
//                   ].map((item, index) => (
//                     <div
//                       key={index}
//                       className="bg-gray-50 p-4 rounded-lg group overflow-hidden"
//                     >
//                       <div className="relative h-32 mb-3 rounded-md overflow-hidden">
//                         <img
//                           src={item.image}
//                           alt={`Vehículo ${item.capacity}`}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                         />
//                         <div className="absolute inset-0 bg-black opacity-30 flex items-center justify-center">
//                           <span className="text-white font-bold text-lg">
//                             {item.capacity}
//                           </span>
//                         </div>
//                       </div>
//                       <div className="font-bold text-[#FEC727]">
//                         {item.capacity}
//                       </div>
//                       {/* <div className="text-gray-600">{item.count}</div> */}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-6 md:mb-8 h-full">
//                 <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-6">
//                   <img
//                     src="/img/flota-3.jpg"
//                     alt="Flota TRANSJER"
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
//                   <div className="absolute bottom-0 left-0 p-6 text-white">
//                     <h3 className="text-xl md:text-2xl font-bold">
//                       Flota Moderna y Segura
//                     </h3>
//                     <p>Garantizando la protección de tu mercadería</p>
//                   </div>
//                 </div>
//                 <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
//                   Características Generales
//                 </h3>
//                 <ul className="space-y-2 md:space-y-3">
//                   <li className="flex items-start">
//                     <CheckCircle className="text-[#FEC727] mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
//                     <span>Vehículos modernos con mantenimiento preventivo</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="text-[#FEC727] mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
//                     <span>Capacidad adaptada a diferentes tipos de carga</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="text-[#FEC727] mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
//                     <span>Certificados por el MTC</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="text-[#FEC727] mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
//                     <span>Conductores profesionales capacitados</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Sección de Cobertura */}
//         {activeTab === "cobertura" && (
//           <div className="grid md:grid-cols-2 gap-8 md:gap-12">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-[#FEC727]">
//                 Llegamos a cada rincón del Perú
//               </h2>

//               <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-6 md:mb-8 border-l-4 border-[#FEC727]">
//                 <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center">
//                   <MapPin className="text-[#FEC727] mr-3 w-5 h-5 md:w-6 md:h-6" />{" "}
//                   Cobertura Nacional
//                 </h3>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <h4 className="font-bold mb-2 text-[#FEC727]">NORTE</h4>
//                     <ul className="space-y-1">
//                       {[
//                         "CHIMBOTE",
//                         "TRUJILLO",
//                         "CHICLAYO",
//                         "PIURA",
//                         "TUMBES",
//                         "CAJAMARCA",
//                       ].map((city, i) => (
//                         <li key={i} className="flex items-center">
//                           <CheckCircle className="text-[#FEC727] mr-2 w-4 h-4" />
//                           {city}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div>
//                     <h4 className="font-bold mb-2 text-[#FEC727]">SUR</h4>
//                     <ul className="space-y-1">
//                       {[
//                         "CHINCHA",
//                         "PISCO",
//                         "ICA",
//                         "AREQUIPA",
//                         "CUSCO",
//                         "JULIACA",
//                         "PUNO",
//                       ].map((city, i) => (
//                         <li key={i} className="flex items-center">
//                           <CheckCircle className="text-[#FEC727] mr-2 w-4 h-4" />
//                           {city}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="mt-4">
//                     <h4 className="font-bold mb-2 text-[#FEC727]">CENTRO</h4>
//                     <ul className="space-y-1">
//                       {["HUANCAYO", "TARMA", "HUANCAVELICA", "HUARAZ"].map(
//                         (city, i) => (
//                           <li key={i} className="flex items-center">
//                             <CheckCircle className="text-[#FEC727] mr-2 w-4 h-4" />
//                             {city}
//                           </li>
//                         )
//                       )}
//                     </ul>
//                   </div>

//                   <div className="mt-4">
//                     <h4 className="font-bold mb-2 text-[#FEC727]">SELVA</h4>
//                     <ul className="space-y-1">
//                       {["PUCALLPA", "TARAPOTO", "MADRE DE DIOS"].map(
//                         (city, i) => (
//                           <li key={i} className="flex items-center">
//                             <CheckCircle className="text-[#FEC727] mr-2 w-4 h-4" />
//                             {city}
//                           </li>
//                         )
//                       )}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg h-full">
//                 <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-6">
//                   <img
//                     src="/img/equipo-transjer.jpg"
//                     alt="Cobertura Nacional"
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
//                   <div className="absolute bottom-0 left-0 p-6 text-white">
//                     <h3 className="text-xl md:text-2xl font-bold">
//                       Red Logística Nacional
//                     </h3>
//                     <p>Conectamos todo el territorio peruano</p>
//                   </div>
//                 </div>
//                 <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
//                   Nuestra Red Logística
//                 </h3>
//                 <p className="text-gray-600 mb-3 md:mb-4">
//                   Contamos con rutas establecidas y alianzas estratégicas que
//                   nos permiten llegar a todo el territorio nacional con
//                   eficiencia y seguridad.
//                 </p>
//                 <ul className="space-y-2 md:space-y-3">
//                   <li className="flex items-start">
//                     <CheckCircle className="text-[#FEC727] mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
//                     <span>Entregas puntuales en todo el país</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="text-[#FEC727] mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
//                     <span>Coordinación logística profesional</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="text-[#FEC727] mt-1 mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
//                     <span>Monitoreo constante de rutas</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Sección de Beneficios */}
//         {activeTab === "beneficios" && (
//           <div className="max-w-6xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#FEC727] text-center">
//               Beneficios <span className="text-white">Premium</span> de Nuestra
//               Flota
//             </h2>

//             <div className="grid md:grid-cols-2 gap-8 mb-12">
//               {/* Beneficio 1 - GPS */}
//               <div className="bg-white rounded-xl shadow-2xl overflow-hidden transition-transform hover:scale-[1.02]">
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={benefitImages[0].src}
//                     alt="Monitoreo GPS"
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
//                   <div className="absolute bottom-4 left-4">
//                     <h3 className="text-2xl font-bold text-white">
//                       Sistema de GPS
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <ul className="space-y-4">
//                     <li className="flex items-start">
//                       <div className="bg-[#FEC727]/20 rounded-full p-1 mr-3">
//                         <CheckCircle className="text-[#FEC727] w-5 h-5" />
//                       </div>
//                       <span className="text-gray-700">
//                         Seguimiento en vivo con plataformas digitales avanzadas
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="bg-[#FEC727]/20 rounded-full p-1 mr-3">
//                         <CheckCircle className="text-[#FEC727] w-5 h-5" />
//                       </div>
//                       <span>
//                         Verificación precisa de ubicación y estado de la
//                         mercancía en tiempo real
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="bg-[#FEC727]/20 rounded-full p-1 mr-3">
//                         <CheckCircle className="text-[#FEC727] w-5 h-5" />
//                       </div>
//                       <span>
//                         Doble sistema de seguridad: Señuelo y Anti vandalismo
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Beneficio 2 - Cámaras */}
//               <div className="bg-white rounded-xl shadow-2xl overflow-hidden transition-transform hover:scale-[1.02]">
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={benefitImages[2].src}
//                     alt="Cámaras de Seguridad"
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
//                   <div className="absolute bottom-4 left-4">
//                     <h3 className="text-2xl font-bold text-white">
//                       Cámaras de Seguridad
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <ul className="space-y-4">
//                     <li className="flex items-start">
//                       <div className="bg-[#FEC727]/20 rounded-full p-1 mr-3">
//                         <CheckCircle className="text-[#FEC727] w-5 h-5" />
//                       </div>
//                       <span>
//                         Sistema de videovigilancia HD con cobertura 360°
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="bg-[#FEC727]/20 rounded-full p-1 mr-3">
//                         <CheckCircle className="text-[#FEC727] w-5 h-5" />
//                       </div>
//                       <span>
//                         Monitoreo continuo las 24 horas desde nuestra central
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="bg-[#FEC727]/20 rounded-full p-1 mr-3">
//                         <CheckCircle className="text-[#FEC727] w-5 h-5" />
//                       </div>
//                       <span>
//                         Grabación constante para trazabilidad completa de los
//                         envíos
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Beneficio 3 - Seguros */}
//               <div className="bg-white rounded-xl shadow-2xl overflow-hidden transition-transform hover:scale-[1.02]">
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={benefitImages[1].src}
//                     alt="Seguros y Pólizas"
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
//                   <div className="absolute bottom-4 left-4">
//                     <h3 className="text-2xl font-bold text-white">
//                       Seguros y Pólizas
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <ul className="space-y-4">
//                     <li className="flex items-start">
//                       <div className="bg-[#FEC727]/20 rounded-full p-1 mr-3">
//                         <CheckCircle className="text-[#FEC727] w-5 h-5" />
//                       </div>
//                       <span>
//                         Póliza de Responsabilidad Civil que protege contra daños
//                         a terceros
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="bg-[#FEC727]/20 rounded-full p-1 mr-3">
//                         <CheckCircle className="text-[#FEC727] w-5 h-5" />
//                       </div>
//                       <span>
//                         Póliza de Carga que cubre hasta $150,000 dólares por
//                         accidentes, robos o desastres naturales
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="bg-[#FEC727]/20 rounded-full p-1 mr-3">
//                         <CheckCircle className="text-[#FEC727] w-5 h-5" />
//                       </div>
//                       <span>
//                         Documentación fiscalizada y en regla con SUNAT
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Beneficio 4 - Personal */}
//               <div className="bg-white rounded-xl shadow-2xl overflow-hidden transition-transform hover:scale-[1.02]">
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={benefitImages[3].src}
//                     alt="Personal Capacitado"
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
//                   <div className="absolute bottom-4 left-4">
//                     <h3 className="text-2xl font-bold text-white">
//                       Personal Capacitado
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <ul className="space-y-4">
//                     <li className="flex items-start">
//                       <div className="bg-[#FEC727]/20 rounded-full p-1 mr-3">
//                         <CheckCircle className="text-[#FEC727] w-5 h-5" />
//                       </div>
//                       <span>
//                         Estibadores propios para carga y descarga eficiente
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="bg-[#FEC727]/20 rounded-full p-1 mr-3">
//                         <CheckCircle className="text-[#FEC727] w-5 h-5" />
//                       </div>
//                       <span>
//                         Equipo administrativo experto en logística y
//                         documentación
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="bg-[#FEC727]/20 rounded-full p-1 mr-3">
//                         <CheckCircle className="text-[#FEC727] w-5 h-5" />
//                       </div>
//                       <span>
//                         Conductores profesionales con certificación MTC y amplia
//                         experiencia
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* CTA Final Mejorado */}
//             <div className="relative rounded-xl overflow-hidden mb-12">
//               <div className="absolute inset-0 bg-black/60 z-10"></div>
//               <img
//                 src="/img/almacenamiento.jpg"
//                 alt="Transporte seguro"
//                 className="w-full h-64 object-cover"
//               />
//               <div className=" relative z-20 p-8 md:p-12 flex flex-col md:flex-row justify-between items-center">
//                 <div className="mb-6 md:mb-0 md:w-2/3">
//                   <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
//                     Transporte tu carga con máxima seguridad
//                   </h3>
//                   <p className="text-yellow-100 md:text-lg">
//                     Nuestros servicios premium garantizan la protección total de
//                     su mercancía
//                   </p>
//                 </div>
//                 <div className="md:w-1/3 text-center">
//                   <a
//                     href="https://wa.me/51913117037"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block px-8 py-4 bg-[#FEC727] hover:bg-yellow-500 text-black font-bold rounded-lg transition transform hover:scale-105 shadow-lg"
//                   >
//                     Solicitar Cotización
//                     <ArrowRight className="inline ml-2 w-5 h-5" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Flotas;

import {
  Truck,
  Box,
  Ruler,
  Weight,
  CalendarClock,
  ZoomInIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Flotas = () => {
  const [activeTab, setActiveTab] = useState("5tn");
  const [selectedImage, setSelectedImage] = useState(null);

  // Para forzar actualización cuando cambiamos las imágenes
  const [_, forceUpdate] = useState();

  const flotasData = {
    "5tn": {
      title: "CAMIONES DE 5 TN ALA DE GAVIOTA",
      description:
        "Nuestros camiones de 5 toneladas con ala de gaviota son ideales para transportes urbanos y regionales. Cuentan con sistemas de carga laterales que facilitan la logística y reducen tiempos de entrega.",
      features: [
        { icon: <Box size={20} />, text: "Capacidad de carga: 5 toneladas" },

        {
          icon: <Weight size={20} />,
          text: "Peso máximo autorizado: 7.500 kg",
        },
        { icon: <CalendarClock size={20} />, text: "Disponibilidad inmediata" },
      ],
      images: [
        "img/flotas/c_5t_gaviota/IMG_5646.JPG",
        "img/flotas/c_5t_gaviota/IMG_5648.JPG",
        "img/flotas/c_5t_gaviota/IMG_5649.JPG",
        "img/flotas/c_5t_gaviota/IMG_5654.JPG",
        "img/flotas/c_5t_gaviota/IMG_5666.JPG",
        "img/flotas/c_5t_gaviota/IMG_5670.JPG",
      ],
    },
    "7tn": {
      title: "CAMIONES DE 7 TN",
      description:
        "La flota de 7 toneladas ofrece un equilibrio perfecto entre capacidad y maniobrabilidad. Perfectos para distribuciones medianas con requerimientos de agilidad en ciudad.",
      features: [
        { icon: <Box size={20} />, text: "Capacidad de carga: 7 toneladas" },
        {
          icon: <Weight size={20} />,
          text: "Peso máximo autorizado: 10.000 kg",
        },
        { icon: <CalendarClock size={20} />, text: "Disponibles 24/7" },
      ],
      images: [
        "img/flotas/c_7t/IMG_5667.JPG",
        "img/flotas/c_7t/IMG_5668.JPG",
        "img/flotas/c_7t/IMG_5669.JPG",
        "img/flotas/c_7t/IMG_5702.JPG",
      ],
    },
    "10tn": {
      title: "CAMIONES DE 10 TN",
      description:
        "Para cargas más voluminosas, nuestros camiones de 10 toneladas brindan potencia y espacio suficiente sin sacrificar eficiencia en el consumo de combustible.",
      features: [
        { icon: <Box size={20} />, text: "Capacidad de carga: 10 toneladas" },

        {
          icon: <Weight size={20} />,
          text: "Peso máximo autorizado: 14.000 kg",
        },
        { icon: <CalendarClock size={20} />, text: "Flota siempre disponible" },
      ],
      images: ["img/flotas/c_10t/IMG_5679.JPG"],
    },
    "15tn": {
      title: "CAMIONES DE 15 TN",
      description:
        "Nuestra flota pesada de 15 toneladas está diseñada para los trabajos más demandantes. Equipados con la última tecnología en seguridad y eficiencia energética.",
      features: [
        { icon: <Box size={20} />, text: "Capacidad de carga: 15 toneladas" },

        {
          icon: <Weight size={20} />,
          text: "Peso máximo autorizado: 19.000 kg",
        },
        {
          icon: <CalendarClock size={20} />,
          text: "Reservas con 24h de anticipación",
        },
      ],
      images: [
        "img/flotas/c_15/IMG_5653.JPG",
        "img/flotas/c_15/IMG_5655.JPG",
        "img/flotas/c_15/IMG_5674.JPG",
      ],
    },
    porter: {
      title: "PORTER H100 1.5 TN",
      description:
        "El vehículo ideal para entregas rápidas en zonas urbanas con acceso restringido. Combina agilidad con capacidad suficiente para pequeñas cargas.",
      features: [
        { icon: <Box size={20} />, text: "Capacidad de carga: 1.5 toneladas" },
        {
          icon: <Weight size={20} />,
          text: "Peso máximo autorizado: 2.800 kg",
        },
        { icon: <CalendarClock size={20} />, text: "Disponibilidad inmediata" },
      ],
      images: [
        "img/flotas/c_1-5/IMG_5664.JPG",
        "img/flotas/c_1-5/IMG_5665.JPG",
        "img/flotas/c_1-5/IMG_5671.JPG",
        "img/flotas/c_1-5/IMG_5672.JPG",
        "img/flotas/c_1-5/IMG_5673.JPG",
        "img/flotas/c_1-5/IMG_5675.JPG",
        "img/flotas/c_1-5/IMG_5676.JPG",
      ],
    },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black to-[#FEC727] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="relative h-96 w-full flex items-center justify-center ">
            <div className="absolute inset-0 "></div>
            <div className="relative z-10 text-center px-4">
              <h1 className="text-5xl md:text-6xl font-bold text-[#FEC727] mb-4">
                NUESTRA FLOTA
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Contamos con una amplia variedad de vehículos para adaptarnos a
                todas tus necesidades de transporte y logística.
              </p>
            </div>
          </div>

          {/* Navegación por pestañas */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {Object.keys(flotasData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 font-medium rounded-lg transition-all ${
                  activeTab === key
                    ? "bg-[#FEC727] text-black shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {flotasData[key].title}
              </button>
            ))}
          </div>

          {/* Contenido de la flota seleccionada */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Galería de imágenes */}
              <div className="md:w-1/2 p-4">
                <div className="grid grid-cols-2 gap-4">
                  {flotasData[activeTab].images.map((img, index) => (
                    <div
                      key={index}
                      className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img
                        src={img}
                        alt={`Imagen ${index + 1}`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30  flex items-center justify-center">
                        <ZoomInIcon className="text-white " size={40} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Información detallada */}
              <div className="md:w-1/2 p-8 bg-gray-50">
                <div className="flex items-center mb-6">
                  <Truck className="text-[#FEC727] mr-3" size={32} />
                  <h2 className="text-2xl font-bold text-black">
                    {flotasData[activeTab].title}
                  </h2>
                </div>

                <p className="text-gray-700 mb-6">
                  {flotasData[activeTab].description}
                </p>

                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-black">
                    CARACTERÍSTICAS PRINCIPALES
                  </h3>
                  <ul className="space-y-3">
                    {flotasData[activeTab].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#FEC727] mr-2 mt-0.5">
                          {feature.icon}
                        </span>
                        <span className="text-gray-700">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="https://wa.me/51913177037" className="w-fit bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center">
                  Solicitar este vehículo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-[#FEC727] transition-colors"
                aria-label="Cerrar"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Imagen ampliada"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex =
                    flotasData[activeTab].images.indexOf(selectedImage);
                  const nextIndex =
                    (currentIndex - 1 + flotasData[activeTab].images.length) %
                    flotasData[activeTab].images.length;
                  setSelectedImage(flotasData[activeTab].images[nextIndex]);
                }}
                className="absolute left-4 text-white hover:text-[#FEC727] p-2"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={40} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex =
                    flotasData[activeTab].images.indexOf(selectedImage);
                  const nextIndex =
                    (currentIndex + 1) % flotasData[activeTab].images.length;
                  setSelectedImage(flotasData[activeTab].images[nextIndex]);
                }}
                className="absolute right-4 text-white hover:text-[#FEC727] p-2"
                aria-label="Imagen siguiente"
              >
                <ChevronRight size={40} />
              </button>
            </div>
          )}

          {/* Sección de ventajas */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-[#FEC727] p-6 rounded-xl shadow-md">
              <div className="text-black mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Seguridad Garantizada
              </h3>
              <p className="text-gray-800">
                Todos nuestros vehículos cuentan con los más altos estándares de
                seguridad y mantenimiento preventivo.
              </p>
            </div>

            <div className="bg-black p-6 rounded-xl shadow-md text-white">
              <div className="text-[#FEC727] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Puntualidad</h3>
              <p className="text-gray-300">
                Compromiso de entrega en el tiempo acordado, con seguimiento en
                tiempo real de tus envíos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="text-[#FEC727] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Precios Competitivos
              </h3>
              <p className="text-gray-700">
                Ofrecemos las mejores tarifas del mercado sin comprometer la
                calidad de nuestro servicio.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Flotas;
