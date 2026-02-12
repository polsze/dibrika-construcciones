import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building2, CheckCircle, ArrowRight, Phone, 
  MessageCircle, Landmark, Users, Shield,
  Clock, MapPin
} from 'lucide-react';
import { LINK_LLAMADA, LINK_WHATSAPP, TELEFONO_PRINCIPAL } from '../../constants/phone';

const ObrasPublicas = () => {
  const seoProps = {
    title: "Obras Públicas en Misiones | DIBRIKA Construcciones",
    description: "Ejecutamos obras de infraestructura pública en Posadas y Misiones. Edificios municipales, espacios públicos, saneamiento y más.",
    keywords: "obras públicas Misiones, construcción municipal Posadas, infraestructura pública, licitaciones obra pública",
    canonical: "https://dibrikaconstrucciones.com.ar/trabajos/obras-publicas"
  };

  // ========== FUNCIÓN DE TRACKING UNIFICADA ==========
  const trackEvent = (eventName, eventData = {}) => {
    if (window.fbq) {
      window.fbq('track', eventName, {
        ...eventData,
        page: 'ObrasPublicas',
        location: 'obras_publicas_page',
        timestamp: new Date().toISOString()
      });
    }
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, eventData);
    }
  };

  const trackContactRequest = () => {
    trackEvent('Lead', { 
      content_name: 'Contact ObrasPublicas Click',
      content_category: 'Form',
      content_type: 'contact',
      service: 'obras_publicas'
    });
  };

  return (
    <Layout seoProps={seoProps}>
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-6 border border-white/20">
              <Landmark className="h-5 w-5" />
              <span className="font-semibold text-sm">Obras Públicas</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-poppins">
              Construimos el <span className="text-[#d09400]">futuro</span> de Misiones
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-poppins font-light">
              Desarrollamos infraestructura pública de calidad en <strong className="font-semibold text-white">Posadas y toda la provincia</strong>.
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Experiencia en obra pública</h2>
              <p className="text-gray-600 text-lg">
                Contamos con la capacidad técnica y operativa para ejecutar proyectos de envergadura municipal y provincial.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Edificios municipales y comunitarios",
                "Espacios públicos y plazas",
                "Infraestructura vial",
                "Obras de saneamiento",
                "Refacciones de escuelas",
                "Centros de salud"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a 
                href="/contacto" 
                onClick={trackContactRequest}
                className="inline-flex items-center gap-2 bg-[#004aad] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#003a8a]"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Contactar para licitaciones</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ObrasPublicas;