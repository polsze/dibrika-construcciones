import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { seoKeywords } from '../data/navigation';
import { 
  CheckCircle, Award, Shield, Clock, ArrowRight, Phone, 
  MessageCircle, Home as HomeIcon, Construction, Check, 
  Sparkles, FileCheck, CalendarCheck, Users, Building2, 
  HeartHandshake, TrendingUp, Lightbulb, BadgeCheck,
  MapPin, Navigation, Target, Globe
} from 'lucide-react';
import {
  TELEFONO_PRINCIPAL,
  LINK_LLAMADA,
  LINK_WHATSAPP
} from '../constants/phone';
import heroBg from '../assets/images/dibrika-construcciones-hero.webp';
import piletaBg from '../assets/images/pileta-dibrika-construcciones.jpeg';
import obraGrisBg from '../assets/images/obra-gris-dibrika-construcciones.jpg';
import viviendaBg from '../assets/images/vivienda-dibrika-construcciones.jpg';
import refaccionBg from '../assets/images/refaccion-dibrika-construcciones.jpg';
import obraPublicaBg from '../assets/images/obra-publica-dibrika-construcciones.jpg';
import especialBg from '../assets/images/obra-especial-dibrika-construcciones.jpg';
import estructuraBg from '../assets/images/estructura-dibrika-construcciones.jpg';
import posadasBg from '../assets/images/posadas.jpg';



const Home = () => {
  const seoProps = {
    title: "DIBRIKA Construcciones | Constructora Posadas, Misiones",
    description: "Especialistas en construcción de viviendas, obra gris, refacciones y obras públicas en Posadas, Misiones. Calidad y confianza desde 2026.",
    keywords: seoKeywords.home.join(', '),
    canonical: "https://dibrikaconstrucciones.com.ar"
  };

  // Función para trackear clics en WhatsApp con Facebook Pixel
  const trackWhatsAppClick = () => {
    if (window.fbq) {
      window.fbq('track', 'Contact', { 
        content_name: 'WhatsApp Click - Home',
        content_category: 'Button'
      });
    }
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/WHATSAPP_CLICK',
        'event_category': 'Contacto',
        'event_label': 'WhatsApp'
      });
    }
  };

  return (
    <Layout seoProps={seoProps}>
     {/* ========== HERO SECTION - OPTIMIZADO PARA SEO ========== */}
<section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
  {/* Background con overlay gradiente */}
  <div className="absolute inset-0 z-0">
    {/* Imagen de fondo optimizada para construcción */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundPosition: 'center 30%',
        filter: 'brightness(0.1)',
        backgroundImage: `url(${heroBg})` 

      }}
    ></div>
  </div>

  {/* Contenido principal del Hero */}
  <div className="container relative z-10 mx-auto px-4 py-16 lg:py-24">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Columna izquierda - Texto principal */}
      <div className="text-left animate-fade-in-up">
       
        {/* H1 Principal - SEO Optimizado */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-poppins">
          <span className="block">Construimos</span>
          <span className="text-[#d09400] relative">
            tu hogar ideal
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#d09400] to-transparent rounded-full"></span>
          </span>
          <span className="block mt-3">en Posadas, Misiones</span>
        </h1>

        {/* H2 Descriptivo - SEO Secundario */}
        <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl font-poppins font-light">
          Especialistas en <strong className="font-semibold text-white">construcción de viviendas</strong>, obra gris, refacciones y obras públicas. Transformamos tus ideas en realidad con calidad certificada.
        </h2>

        {/* Lista de beneficios */}
        <ul className="space-y-3 mb-10">
          {[
            "✅ Presupuesto detallado sin cargo",
            "✅ Garantía escrita",
            "✅ Materiales de primera calidad",
            "✅ Cumplimiento de plazos garantizado"
          ].map((item, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <CheckCircle className="h-5 w-5 text-[#d09400] mr-3 flex-shrink-0" />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Columna derecha - CTAs en disposición horizontal */}
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-end lg:space-x-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        {/* CTA Primario - Presupuesto */}
        <a
          href="/contacto"
          className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#d09400] to-[#b07d00] hover:from-[#b07d00] hover:to-[#d09400] text-white px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl min-w-[240px]"
          aria-label="Solicitar presupuesto gratuito para construcción"
        >
          <HomeIcon className="h-5 w-5" />
          <span className='text-base'>Pedí tu presupuesto</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* CTA Secundario - Llamar con número REAL */}
        <a
          href={LINK_LLAMADA}
          className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-4 rounded-xl text-lg font-semibold border-2 border-white/30 hover:border-white transition-all duration-300 min-w-[200px]"
          aria-label="Llamar a DIBRIKA Construcciones"
        >
          <Phone className="h-5 w-5" />
          <div className="text-left">
            <div className="text-sm font-medium">Llamá ahora</div>
            <div className="font-bold text-base">{TELEFONO_PRINCIPAL}</div>
          </div>
        </a>

        {/* CTA Terciario - WhatsApp con número REAL y Pixel Tracking */}
        <a
          href={LINK_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppClick}
          className="group inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 min-w-[200px]"
          aria-label="Contactar por WhatsApp para consultas"
        >
          <MessageCircle className="h-5 w-5" />
          <span className='text-base'>WhatsApp</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </div>
</section>

      {/* ========== SECCIÓN DE SERVICIOS ESPECIALIZADOS ========== */}
<section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
  <div className="container mx-auto px-4">
    {/* Encabezado SEO Optimizado */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d09400]/10 to-[#004aad]/10 text-[#004aad] px-6 py-2 rounded-full mb-6 border border-[#004aad]/20">
        <Construction className="h-4 w-4" />
        <span className="font-semibold text-sm">Especialistas en construcción</span>
      </div>

      {/* H2 Principal - Keywords de servicios */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
        Construcción integral en <span className="text-[#d09400]">Posadas, Misiones</span>
      </h2>
      
      {/* H3 Descriptivo - Servicios principales */}
      <h3 className="text-xl text-gray-600 max-w-3xl mx-auto">
        Especialistas en <strong className="font-semibold text-gray-900">viviendas personalizadas</strong>, 
        <strong className="font-semibold text-gray-900"> obra gris</strong>, 
        <strong className="font-semibold text-gray-900"> refacciones</strong> y 
        <strong className="font-semibold text-gray-900"> obras públicas</strong> en toda la provincia
      </h3>
    </motion.div>

    {/* Grid de servicios - 3 columnas en desktop */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {/* Servicio 1: Viviendas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="group relative"
      >
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-200">
          {/* Imagen del servicio */}
          <div className="h-48 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
            <div style={{ backgroundImage: `url(${viviendaBg})` }}
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"

            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/10 to-transparent"></div>
            {/* Badge del servicio */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="font-semibold text-sm text-gray-900">Viviendas</span>
            </div>
          </div>

          {/* Contenido del servicio */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-[#d09400] to-[#b07d00] p-2 rounded-lg">
                <HomeIcon className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 font-poppins">
                Viviendas Personalizadas
              </h4>
            </div>
            
            <p className="text-gray-600 mb-4">
              Diseñamos y construimos tu casa ideal desde cero. Proyectos llave en mano 
              adaptados a tus necesidades en Posadas, Garupá y Candelaria.
            </p>
            
            {/* Lista de características */}
            <ul className="space-y-2 mb-6">
              {[
                "Casas de 1 a 3 plantas",
                "Diseños modernos y funcionales",
                "Materiales de primera calidad",
                "Permisos municipales incluidos"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA específico */}
            <a
              href="/trabajos/viviendas"
              className="inline-flex items-center text-[#d09400] font-semibold text-sm group-hover:text-[#b07d00] transition-colors"
            >
              <span>Consultar por proyectos de viviendas</span>
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Texto SEO oculto */}
        <div className="sr-only">
          Construcción de viviendas en Posadas, casas personalizadas Misiones, constructora de viviendas llave en mano
        </div>
      </motion.div>

      {/* Servicio 2: Obra Gris */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="group relative"
      >
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-200">
          {/* Imagen del servicio */}
          <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
            <div style={{ backgroundImage: `url(${obraGrisBg})` }}
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/10 to-transparent"></div>
            {/* Badge del servicio */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="font-semibold text-sm text-gray-900">Obra Gris</span>
            </div>
          </div>

          {/* Contenido del servicio */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-gray-600 to-gray-800 p-2 rounded-lg">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 font-poppins">
                Obra Gris Integral
              </h4>
            </div>
            
            <p className="text-gray-600 mb-4">
              Estructuras, mampostería, techos y todo lo esencial. Servicio de obra gris 
              completo para tu proyecto en Posadas y localidades cercanas.
            </p>
            
            {/* Lista de características */}
            <ul className="space-y-2 mb-6">
              {[
                "Estructuras de hormigón armado",
                "Mampostería de ladrillos",
                "Techos de losa y chapa",
                "Instalaciones básicas"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA específico */}
            <a
              href="/trabajos/obra-gris"
              className="inline-flex items-center text-gray-700 font-semibold text-sm group-hover:text-gray-900 transition-colors"
            >
              <span>Consultar por proyectos de obra gris</span>
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Texto SEO oculto */}
        <div className="sr-only">
          Obra gris Posadas, construcción en seco Misiones, estructuras de hormigón, mampostería en Posadas
        </div>
      </motion.div>

      {/* Servicio 3: Refacciones */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="group relative"
      >
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-200">
          {/* Imagen del servicio */}
          <div className="h-48 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
            <div style={{ backgroundImage: `url(${refaccionBg})` }}
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/10 to-transparent"></div>
            {/* Badge del servicio */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="font-semibold text-sm text-gray-900">Refacciones</span>
            </div>
          </div>

          {/* Contenido del servicio */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-2 rounded-lg">
                <Construction className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 font-poppins">
                Refacciones Integrales
              </h4>
            </div>
            
            <p className="text-gray-600 mb-4">
              Transformamos tus espacios existentes. Ampliaciones, renovaciones y 
              mejoras para tu hogar o comercio en Posadas, Garupá y Candelaria.
            </p>
            
            {/* Lista de características */}
            <ul className="space-y-2 mb-6">
              {[
                "Ampliación de viviendas",
                "Renovación de baños y cocinas",
                "Cambio de pisos y revestimientos",
                "Reparaciones estructurales"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA específico */}
            <a
              href="/trabajos/refacciones"
              className="inline-flex items-center text-amber-600 font-semibold text-sm group-hover:text-orange-600 transition-colors"
            >
              <span>Consultar por proyectos de refacciones</span>
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Texto SEO oculto */}
        <div className="sr-only">
          Refacciones en Posadas, remodelación de viviendas Misiones, ampliaciones de casas, renovación de baños y cocinas
        </div>
      </motion.div>

      {/* Servicio 4: Quinchos y Piletas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="group relative"
      >
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-200">
          {/* Imagen del servicio */}
          <div className="h-48 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
            <div   style={{ backgroundImage: `url(${piletaBg})` }}

              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/10 to-transparent"></div>
            {/* Badge del servicio */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="font-semibold text-sm text-gray-900">Espacios Exteriores</span>
            </div>
          </div>

          {/* Contenido del servicio */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg">
                <HomeIcon className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 font-poppins">
                Quinchos y Piletas
              </h4>
            </div>
            
            <p className="text-gray-600 mb-4">
              Creamos espacios de entretenimiento al aire libre. Quinchos con parrillas, 
              piletas de material y áreas de recreación para disfrutar en familia.
            </p>
            
            {/* Lista de características */}
            <ul className="space-y-2 mb-6">
              {[
                "Quinchos con parrilla y horno",
                "Piletas de material premoldeado",
                "Pérgolas y decks de madera",
                "Iluminación y paisajismo"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA específico */}
            <a
              href="/trabajos/quinchos-piletas"
              className="inline-flex items-center text-emerald-600 font-semibold text-sm group-hover:text-teal-600 transition-colors"
            >
              <span>Consultar por proyectos de exteriores</span>
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Texto SEO oculto */}
        <div className="sr-only">
          Quinchos en Posadas, construcción de piletas Misiones, parrillas de material, espacios exteriores
        </div>
      </motion.div>

      {/* Servicio 5: Obras Públicas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="group relative"
      >
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-200">
          {/* Imagen del servicio */}
          <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
            <div style={{ backgroundImage: `url(${obraPublicaBg})` }}
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/10 to-transparent"></div>
            {/* Badge del servicio */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="font-semibold text-sm text-gray-900">Infraestructura</span>
            </div>
          </div>

          {/* Contenido del servicio */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-lg">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 font-poppins">
                Obras Públicas
              </h4>
            </div>
            
            <p className="text-gray-600 mb-4">
              Proyectos de infraestructura para municipios y entidades públicas. 
              Experiencia en obras de envergadura en toda la provincia de Misiones.
            </p>
            
            {/* Lista de características */}
            <ul className="space-y-2 mb-6">
              {[
                "Edificios municipales",
                "Espacios públicos y plazas",
                "Infraestructura vial básica",
                "Obras de saneamiento"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA específico */}
            <a
              href="/trabajos/obras-publicas"
              className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:text-indigo-600 transition-colors"
            >
              <span>Consultar por proyectos de infraestructura</span>
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Texto SEO oculto */}
        <div className="sr-only">
          Obras públicas Misiones, construcción de infraestructura Posadas, proyectos municipales, obras de envergadura
        </div>
      </motion.div>

      {/* Servicio 6: Proyectos Especiales */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="group relative"
      >
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-200">
          {/* Imagen del servicio */}
          <div className="h-48 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
            <div style={{ backgroundImage: `url(${especialBg})` }}
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/10 to-transparent"></div>
            {/* Badge del servicio */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="font-semibold text-sm text-gray-900">Proyectos Especiales</span>
            </div>
          </div>

          {/* Contenido del servicio */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-2 rounded-lg">
                <Lightbulb className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 font-poppins">
                Proyectos Especiales
              </h4>
            </div>
            
            <p className="text-gray-600 mb-4">
              Soluciones a medida para necesidades específicas. Galpones, tinglados, 
              locales comerciales y proyectos industriales en Posadas y región.
            </p>
            
            {/* Lista de características */}
            <ul className="space-y-2 mb-6">
              {[
                "Galpones y tinglados industriales",
                "Locales comerciales",
                "Oficinas y showrooms",
                "Proyectos a medida"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA específico */}
            <a
              href="/trabajos/proyectos-especiales"
              className="inline-flex items-center text-purple-600 font-semibold text-sm group-hover:text-pink-600 transition-colors"
            >
              <span>Consultar por proyectos especiales</span>
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Texto SEO oculto */}
        <div className="sr-only">
          Proyectos especiales construcción, galpones industriales Posadas, locales comerciales Misiones, tinglados
        </div>
      </motion.div>
    </div>

    {/* CTA Final - Presupuesto con número REAL */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-[#d09400] to-[#b07d00] rounded-2xl p-8 text-center text-white"
    >
      <h3 className="text-2xl font-bold mb-4 font-poppins">
        ¿Necesitás alguno de estos servicios en Posadas o zonas aledañas?
      </h3>
      <p className="mb-6 opacity-90 max-w-2xl mx-auto">
        Contactanos para un presupuesto personalizado sin compromiso. Atendemos 
        viviendas, obra gris, refacciones, quinchos y obras públicas.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contacto"
          className="bg-white text-[#d09400] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
        >
          <Phone className="h-5 w-5" />
          <span>Solicitar presupuesto</span>
        </a>
        <a
          href={LINK_LLAMADA}
          className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Llamar al {TELEFONO_PRINCIPAL}
        </a>
      </div>
    </motion.div>
  </div>
</section>
{/* ========== VENTAJAS EXCLUSIVAS DIBRIKA ========== */}
<section className="py-24 relative overflow-hidden bg-white">
  {/* Elementos decorativos de fondo */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-[#d09400]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#004aad]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    {/* Encabezado con badge dorado */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d09400]/20 to-[#b07d00]/20 text-[#d09400] px-6 py-2 rounded-full mb-6 border border-[#d09400]/30 shadow-lg shadow-[#d09400]/5">
        <Sparkles className="h-4 w-4" />
        <span className="font-semibold text-sm tracking-wider">EXCLUSIVO DIBRIKA</span>
      </div>
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
        Construí <span className="text-[#d09400]">sin límites</span>
      </h2>
      
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Condiciones únicas en Posadas que hacen realidad tu hogar más rápido y con total tranquilidad
      </p>
    </motion.div>

    {/* Grid de características - 3 columnas en desktop */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      
      {/* CARACTERÍSTICA 1: Llave en mano */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="group"
      >
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden">
          {/* Decoración de fondo sutil */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#d09400]/5 to-transparent rounded-bl-full"></div>
          
          {/* Icono con efecto 3D */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-[#d09400]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-[#d09400] to-[#b07d00] w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <HomeIcon className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3 font-poppins flex items-center gap-2">
            Sistema <span className="bg-gradient-to-r from-[#d09400] to-[#b07d00] bg-clip-text text-transparent">Llave en Mano</span>
          </h3>
          
          <p className="text-gray-600 mb-4 text-lg">
            Entregamos tu casa <strong className="text-gray-900">100% terminada</strong>. 
            Olvidate de trámites, permisos y contratistas. 
          </p>
          
          <div className="border-t border-gray-100 pt-4 mt-2">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle className="h-4 w-4 text-[#d09400]" />
              <span>Incluye planos, permisos y dirección técnica</span>
            </div>
          </div>
          
          {/* Badge destacado */}
          <div className="absolute top-4 right-4 bg-[#d09400]/10 px-3 py-1 rounded-full text-xs font-bold text-[#d09400] border border-[#d09400]/20">
            EXCLUSIVO
          </div>
        </div>
      </motion.div>

      {/* CARACTERÍSTICA 2: Financiación Propia */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="group"
      >
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#004aad]/5 to-transparent rounded-bl-full"></div>
          
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-[#004aad]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-[#004aad] to-[#003a8a] w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3 font-poppins">
            <span className="bg-gradient-to-r from-[#004aad] to-[#003a8a] bg-clip-text text-transparent">Financiación</span> Propia
          </h3>
          
          <p className="text-gray-600 mb-4 text-lg">
            <strong className="text-gray-900">Sin bancos, sin tasas de interés abusivas.</strong> Plan flexible ajustado a tu realidad.
          </p>
          
          <div className="border-t border-gray-100 pt-4 mt-2">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle className="h-4 w-4 text-[#004aad]" />
              <span><strong className="text-gray-900">Anticipo + cuotas fijas</strong> en pesos</span>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#004aad]/5 rounded-full blur-2xl"></div>
        </div>
      </motion.div>

      {/* CARACTERÍSTICA 3: Auto/Terreno como parte de pago */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="group md:col-span-2 lg:col-span-1"
      >
        <div className="bg-white rounded-3xl p-8 border-2 border-[#d09400]/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden">
          {/* Fondo especial para destacar */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#d09400]/5 to-transparent"></div>
          
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-[#d09400]/30 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-[#d09400] to-[#b07d00] w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
              <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4-4 5H7l-4-5z" />
              </svg>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3 font-poppins">
            ¿Tenés <span className="text-[#d09400]">auto o terreno?</span>
          </h3>
          
          <p className="text-gray-600 mb-4 text-lg">
            <strong className="text-gray-900">Lo aceptamos como parte de pago.</strong> Transformá tu vehículo o lote en la casa propia.
          </p>
          
          <div className="bg-[#d09400]/10 rounded-xl p-4 border border-[#d09400]/20">
            <div className="flex items-center gap-3">
              <div className="bg-[#d09400] rounded-full p-1">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
              <span className="text-gray-800 font-medium">Consultá por la valuación sin cargo</span>
            </div>
          </div>
          
          {/* Badge "ÚNICO" */}
          <div className="absolute top-4 right-4 bg-[#d09400] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            ¡SOMOS ÚNICOS!
          </div>
        </div>
      </motion.div>

      {/* CARACTERÍSTICA 4: Entrega 60/90 días */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="group"
      >
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-500/5 to-transparent rounded-bl-full"></div>
          
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-green-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <CalendarCheck className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3 font-poppins">
            Entregas <span className="text-green-600">récord</span>
          </h3>
          
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-4xl font-black text-gray-900">60/90</span>
            <span className="text-xl text-gray-600">días</span>
          </div>
          
          <p className="text-gray-600 mb-4">
            El tiempo promedio más rápido de Posadas. <strong>Metodología propia</strong> que cumple los plazos.
          </p>
          
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>Vs. 12-18 meses de la construcción tradicional</span>
          </div>
        </div>
      </motion.div>

      {/* CARACTERÍSTICA 5: Anticipo + Cuotas Fijas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="group"
      >
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/5 to-transparent rounded-bl-full"></div>
          
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3 font-poppins">
            Cuotas <span className="text-purple-600">fijas</span>
          </h3>
          
          <p className="text-gray-600 mb-2 text-lg">
            <strong className="text-gray-900">Entregá un anticipo y</strong>
          </p>
          
          <p className="text-gray-600 mb-4">
            el resto en <strong>cuotas fijas</strong> ajustadas por unidad de vivienda. Sabés exactamente cuánto y hasta cuándo pagás.
          </p>
          
          <div className="bg-purple-50 rounded-lg p-3">
            <span className="text-sm text-purple-700 font-medium">
              💎 Sin indexación, sin sorpresas
            </span>
          </div>
        </div>
      </motion.div>
    </div>

    {/* BANNER INFERIOR - FRASE DE IMPACTO */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-16 text-center"
    >
      <div className="bg-gradient-to-r from-[#d09400] via-[#b07d00] to-[#d09400] rounded-2xl p-0.5 max-w-3xl mx-auto shadow-2xl">
        <div className="bg-white rounded-2xl py-6 px-8">
          <p className="text-xl md:text-2xl text-gray-800 font-poppins font-medium">
            💰 <span className="font-bold">Lo que otros piden en 5 años,</span> nosotros te lo entregamos en 60/90 días y con tu auto o terreno como parte de pago.
          </p>
          <div className="mt-4 flex justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 bg-[#d09400] hover:bg-[#b07d00] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Descubrí cómo</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* ========== SECCIÓN "VENTAJAS DIBRIKA" - DISEÑO ELEGANTE ========== */}
<section className="py-20 bg-white overflow-hidden">
  <div className="container mx-auto px-4">
    {/* Encabezado minimalista */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
        Excelencia en cada construcción
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#d09400] to-[#004aad] mx-auto mb-6"></div>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Más de una década construyendo confianza en Posadas con estándares de calidad inigualables
      </p>
    </motion.div>

    {/* Grid elegante de 3 columnas */}
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {/* Card 1 - Garantía */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="group relative"
      >
        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Shield className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">
            Garantía
          </h3>
          <p className="text-gray-600 mb-4">
            Todas nuestras obras cuentan con garantía. Tranquilidad absoluta para tu inversión.
          </p>
          <div className="text-green-600 text-sm font-medium flex items-center">
            <span>Seguridad garantizada</span>
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>

      {/* Card 2 - Calidad */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="group relative"
      >
        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
          <div className="bg-gradient-to-br from-[#d09400]/10 to-[#b07d00]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Award className="h-8 w-8 text-[#d09400]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">
            Materiales Premium
          </h3>
          <p className="text-gray-600 mb-4">
            Trabajamos exclusivamente con materiales de primera línea certificados. Calidad que se ve y se siente.
          </p>
          <div className="text-[#d09400] text-sm font-medium flex items-center">
            <span>Calidad certificada</span>
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>

      {/* Card 3 - Plazos */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="group relative"
      >
        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
          <div className="bg-gradient-to-br from-[#004aad]/10 to-[#003a8a]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <CalendarCheck className="h-8 w-8 text-[#004aad]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">
            Plazos Cumplidos
          </h3>
          <p className="text-gray-600 mb-4">
            Metodología probada que garantiza la entrega puntual de tu proyecto. Tu tiempo es nuestro compromiso.
          </p>
          <div className="text-[#004aad] text-sm font-medium flex items-center">
            <span>Puntualidad asegurada</span>
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </div>

    {/* Sección con imagen destacada */}
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
      {/* Imagen de construcción */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="rounded-xl overflow-hidden shadow-xl">
          <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800 relative">
            {/* Imagen de construcción moderna */}
            <div   style={{ backgroundImage: `url(${estructuraBg})` }}
              className="absolute inset-0  bg-cover bg-center"
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
            
            {/* Badge sobre imagen */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="flex items-center gap-2">
                <Construction className="h-5 w-5 text-[#d09400]" />
                <span className="font-semibold text-gray-900">Construcción moderna</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Texto descriptivo */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
          Proceso meticuloso, resultados excepcionales
        </h3>
        <p className="text-gray-600 mb-6">
          Cada proyecto en DIBRIKA pasa por un riguroso proceso de planificación, 
          ejecución y control de calidad. Desde el diseño inicial hasta la entrega 
          final, cada etapa es supervisada por expertos.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Equipo especializado</h4>
              <p className="text-gray-600 text-sm">Profesionales locales con amplia experiencia en construcción en Posadas</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Seguimiento constante</h4>
              <p className="text-gray-600 text-sm">Actualizaciones periódicas y comunicación directa durante toda la obra</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Transparencia total</h4>
              <p className="text-gray-600 text-sm">Presupuestos detallados sin sorpresas y documentación completa</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Estadísticas elegantes */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 mb-2 font-poppins">10+</div>
          <div className="text-gray-600">Años de experiencia</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 mb-2 font-poppins">50+</div>
          <div className="text-gray-600">Proyectos completados</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 mb-2 font-poppins">100%</div>
          <div className="text-gray-600">Clientes satisfechos</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 mb-2 font-poppins">24/7</div>
          <div className="text-gray-600">Atención personalizada</div>
        </div>
      </div>
    </motion.div>

    {/* CTA minimalista con número REAL */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-16 text-center"
    >
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
          ¿Listo para construir con excelencia?
        </h3>
        <p className="text-gray-600 mb-8">
          Contactanos y descubrí por qué más familias en Posadas eligen DIBRIKA para su hogar
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contacto"
            className="inline-flex items-center justify-center bg-[#d09400] hover:bg-[#b07d00] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Solicitar presupuesto
          </a>
          <a
            href={LINK_LLAMADA}
            className="inline-flex items-center justify-center bg-white text-gray-900 border border-gray-300 hover:border-[#004aad] hover:text-[#004aad] px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Llamar ahora
          </a>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* ========== SECCIÓN DE UBICACIÓN - POSADAS, MISIONES ========== */}
<section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
  <div className="container mx-auto px-4">
    {/* Encabezado simple y directo */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
        Ubicados en <span className="text-[#d09400]">Posadas, Misiones</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Servimos a Posadas y zonas aledañas con calidad y compromiso
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-8 items-center">
      {/* Columna izquierda - Imagen de Posadas */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <div   style={{ backgroundImage: `url(${posadasBg})` }}
            className="h-80 bg-cover bg-center"
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-5 w-5 text-[#d09400]" />
                <h3 className="font-bold text-gray-900 font-poppins">Posadas, Misiones</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Capital de la provincia, a orillas del Río Paraná
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Columna derecha - Información concisa */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6"
      >
        {/* Card de ubicación */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-[#004aad]/10 p-3 rounded-lg">
              <Target className="h-6 w-6 text-[#004aad]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">
                Base operativa en Posadas
              </h3>
              <p className="text-gray-600">
                Nuestra empresa está radicada en Posadas, Misiones. Desde aquí atendemos 
                proyectos en toda la ciudad y localidades cercanas como Garupá y Candelaria y más...
              </p>
            </div>
          </div>
        </div>

        {/* Card de ventajas */}
        <div className="bg-gradient-to-r from-[#d09400]/5 to-white rounded-xl p-6 border border-[#d09400]/20">
          <h4 className="font-bold text-gray-900 mb-4 font-poppins">
            Ventajas de trabajar con una constructora local
          </h4>
          <ul className="space-y-3">
            {[
              "Conocimiento de normativas municipales de Misiones",
              "Acceso directo a proveedores locales",
              "Respuesta rápida a emergencias",
              "Equipos con experiencia en la región"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#d09400] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA simple con número REAL y WhatsApp con tracking */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            ¿Necesitás una constructora confiable en Posadas?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-[#d09400] hover:bg-[#b07d00] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              <Phone className="h-5 w-5" />
              <span>Consultar por mi proyecto</span>
            </a>
            <a
              href={LINK_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Área de cobertura simple */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-12"
    >
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4 text-center font-poppins">
          Área de cobertura principal
        </h4>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
            <div className="w-2 h-2 rounded-full bg-[#d09400]"></div>
            <span className="font-medium text-gray-900">Posadas</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
            <div className="w-2 h-2 rounded-full bg-[#004aad]"></div>
            <span className="text-gray-700">Garupá</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-gray-700">Candelaria</span>
          </div>
        </div>
        <p className="text-center text-gray-600 text-sm mt-4">
          * Consultar por otras localidades de Misiones
        </p>
      </div>
    </motion.div>
  </div>
</section>

      {/* ========== CTA FINAL SECTION ========== */}
      <section className="py-20 bg-gradient-to-r from-[#d09400]/10 to-[#004aad]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
            ¿Listo para comenzar tu proyecto en Misiones?
          </h2>
          <h3 className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Ya sea en <strong>Posadas, Garupá, Candelaria</strong> o cualquier localidad de Misiones, 
            estamos listos para construir tu hogar ideal.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center bg-[#d09400] hover:bg-[#b07d00] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contactar ahora
            </a>
            <a
              href={LINK_LLAMADA}
              className="inline-flex items-center justify-center bg-[#004aad] hover:bg-[#003a8a] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Llamar al {TELEFONO_PRINCIPAL}
            </a>
          </div>
        </div>
      </section>

      {/* Estilos inline para animaciones */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </Layout>
  );
};

export default Home;