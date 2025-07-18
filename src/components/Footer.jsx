import React from 'react'
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Clock,
  Truck,
  Package,
  Shield,
  Headphones,
} from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Columna 1 - Información de la empresa */}
            <div>
              <div className="bg-white w-fit p-2 rounded-sm mb-4">
                <img src="/img/logo-transjer.png" alt="logo de transjer"  className='w-20 '/>
              </div>
              <p className="text-gray-300 mb-6">
                RUC:  20607981176 <br />
RAZON SOCIAL: Transjer Operador Logistico S.A.C. 

              </p>
              <div>
                <h4 className="text-lg font-semibold mb-3 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#FEC727]">
                  Síguenos
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61573999940845"
                    className="text-gray-300 hover:text-[#FEC727] transition"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/comercialtransjer/"
                    className="text-gray-300 hover:text-[#FEC727] transition"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/transjer-operador-log%C3%ADstico-4071a6351/?fbclid=IwY2xjawLa_3NleHRuA2FlbQIxMABicmlkETFKZFNmNDhXQWFNaGRYTk9jAR7X5gB6jgRb5p_4vS1p-JKljR3R1U_IemT4byDoNJHk_oB5lnyBxMkalKlNpA_aem_sJpdKRSaohJXz5PF-ZS3yA"
                    className="text-gray-300 hover:text-[#FEC727] transition"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Columna 2 - Enlaces rápidos */}
            <div>
              <h4 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#FEC727]">
                Enlaces Rápidos
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 hover:text-[#FEC727] transition flex items-center"
                  >
                    <Truck className="w-4 h-4 mr-2" /> Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="/nosotros"
                    className="text-gray-300 hover:text-[#FEC727] transition flex items-center"
                  >
                    <Shield className="w-4 h-4 mr-2" /> Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="/servicios"
                    className="text-gray-300 hover:text-[#FEC727] transition flex items-center"
                  >
                    <Package className="w-4 h-4 mr-2" /> Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="/flota"
                    className="text-gray-300 hover:text-[#FEC727] transition flex items-center"
                  >
                    <Truck className="w-4 h-4 mr-2" /> Nuestra Flota
                  </a>
                </li>
                <li>
                  <a
                    href="/contacto"
                    className="text-gray-300 hover:text-[#FEC727] transition flex items-center"
                  >
                    <Headphones className="w-4 h-4 mr-2" /> Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3 - Servicios */}
            <div>
              <h4 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#FEC727]">
                Nuestros Servicios
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/servicios"
                    className="text-gray-300 hover:text-[#FEC727] transition"
                  >
                    Transporte Local
                  </a>
                </li>
                <li>
                  <a
                    href="/servicios"
                    className="text-gray-300 hover:text-[#FEC727] transition"
                  >
                    Transporte Nacional
                  </a>
                </li>
                <li>
                  <a
                    href="/servicios"
                    className="text-gray-300 hover:text-[#FEC727] transition"
                  >
                    Logística Integral
                  </a>
                </li>
                <li>
                  <a
                    href="/servicios"
                    className="text-gray-300 hover:text-[#FEC727] transition"
                  >
                    Distribución
                  </a>
                </li>
                <li>
                  <a
                    href="/servicios"
                    className="text-gray-300 hover:text-[#FEC727] transition"
                  >
                    Almacenamiento
                  </a>
                </li>
                <li>
                  <a
                    href="/servicios"
                    className="text-gray-300 hover:text-[#FEC727] transition"
                  >
                    Servicios Express
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 4 - Contacto */}
            <div>
              <h4 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#FEC727]">
                Contacto
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-[#FEC727] mr-3 mt-1 flex-shrink-0" />
                  <a
                    href="tel:+51913117037"
                    className="text-gray-300 hover:text-[#FEC727] transition"
                  >
                    +51 913 117 037
                  </a>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-[#FEC727] mr-3 mt-1 flex-shrink-0" />
                  <a
                    href="mailto:comercial@transjer.com"
                    className="text-gray-300 hover:text-[#FEC727] transition"
                  >
                    comercial@transjer.com
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#FEC727] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Av. Industrial 123, Lima, Perú</span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-[#FEC727] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Atención: 24/7</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} TRANSJER. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer