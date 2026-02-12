import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building2, CheckCircle, ArrowRight, Phone, 
  MessageCircle, HardHat, Hammer, Ruler,
  Shield, Clock
} from 'lucide-react';
import { LINK_LLAMADA, LINK_WHATSAPP, TELEFONO_PRINCIPAL } from '../../constants/phone';
import obraGris from '../../assets/images/obra-gris-dibrika-construcciones.jpg'


const ObraGris = () => {
  const seoProps = {
    title: "Obra Gris en Posadas | Estructuras y Mampostería | DIBRIKA",
    description: "Ejecutamos obra gris profesional en Posadas, Misiones. Estructuras de hormigón, mampostería, techos e instalaciones básicas. Calidad y cumplimiento.",
    keywords: "obra gris Posadas, construcción estructura Misiones, mampostería Posadas, hormigón armado",
    canonical: "https://dibrikaconstrucciones.com.ar/trabajos/obra-gris"
  };

  // ========== FUNCIÓN DE TRACKING UNIFICADA ==========
  const trackEvent = (eventName, eventData = {}) => {
    if (window.fbq) {
      window.fbq('track', eventName, {
        ...eventData,
        page: 'ObraGris',
        location: 'obra_gris_page',
        timestamp: new Date().toISOString()
      });
    }
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, eventData);
    }
  };

  const trackPhoneCall = () => {
    trackEvent('Contact', { 
      content_name: 'Phone Call ObraGris Click',
      content_category: 'Phone',
      content_type: 'call',
      service: 'obra_gris',
      phone: TELEFONO_PRINCIPAL
    });
  };

  return (
    <Layout seoProps={seoProps}>
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-6 border border-white/20">
              <Building2 className="h-5 w-5" />
              <span className="font-semibold text-sm">Obra Gris Profesional</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-poppins">
              La <span className="text-[#d09400]">estructura</span> de tu proyecto
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-poppins font-light">
              Ejecutamos obra gris de calidad en <strong className="font-semibold text-white">Posadas, Misiones</strong>. 
              Hormigón armado, mampostería, techos e instalaciones.
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Obra gris <span className="text-[#d09400]">integral</span>
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Desde la fundación hasta la cubierta. Realizamos <strong>toda la estructura</strong> de tu obra con los más altos estándares de calidad.
              </p>
              <ul className="space-y-4">
                {[
                  "Estructuras de hormigón armado",
                  "Mampostería de ladrillos cerámicos y bloques",
                  "Techos de losa, chapa y decks",
                  "Instalaciones eléctricas y sanitarias básicas",
                  "Revoques gruesos y carpetas"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#d09400] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={obraGris}
                  alt="Estructura de hormigón armado"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#004aad] to-[#003a8a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Necesitás avanzar con tu obra?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Presupuestamos tu obra gris sin cargo. Consultanos hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={LINK_LLAMADA} 
              onClick={trackPhoneCall}
              className="inline-flex items-center gap-2 bg-white text-[#004aad] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100"
            >
              <Phone className="h-5 w-5" />
              <span>Llamar ahora: {TELEFONO_PRINCIPAL}</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ObraGris;