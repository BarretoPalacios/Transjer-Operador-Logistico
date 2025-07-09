import { ShieldCheck, UserSquare, Phone, Check, MapPin } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";
import Navbar from "../components/Navbar";
import Forms from "../components/Forms";
import Footer from "../components/Footer";
import ServicesSlider from "../components/ServicesSlider";
import AdditionalServices from "../components/AdditionalServices";
import Experiencia from "../components/Experiencia";
import CoberturaNacional from "../components/CoberturaNacional";
import ServicesCarousel from "../components/ServicesCarousel";
import ContactSection from "../components/ContactSection";
import HeroBanner from "../components/HeroBanner";

const Inicio = () => {
  return (
    <div className="bg-white">
      <WhatsAppButton />

      {/* Navbar Mejorado */}
      <Navbar />

      {/* Hero Section con Video de Fondo */}
     <HeroBanner />

      {/* experiencia */}
      <Experiencia />

      {/* covertura nacional */}
      <CoberturaNacional />

      {/* servicios */}
      <ServicesCarousel />

      {/* servicios adicionales  */}
      <AdditionalServices />

      {/* Contacto (sección idéntica al original) */}
      <ContactSection />
    </div>
  );
};

export default Inicio;
