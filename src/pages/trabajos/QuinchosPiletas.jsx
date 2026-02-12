import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Home, CheckCircle, ArrowRight, Phone, 
  MessageCircle, Sun, Waves, Flame,
  Shield, Clock, MapPin
} from 'lucide-react';
import { LINK_LLAMADA, LINK_WHATSAPP, TELEFONO_PRINCIPAL } from '../../constants/phone';
import quinchoBg from '../../assets/images/quincho-dibrika-construcciones.jpeg';


const QuinchosPiletas = () => {
  const seoProps = {
    title: "Quinchos y Piletas en Posadas | DIBRIKA Construcciones",
    description: "Construimos quinchos con parrilla y piletas de material en Posadas, Misiones. Espacios al aire libre para disfrutar en familia.",
    keywords: "quinchos Posadas, piletas de material Misiones, parrillas de obra, construcción de quinchos",
    canonical: "https://dibrikaconstrucciones.com.ar/trabajos/quinchos-piletas"
  };

  // ========== FUNCIÓN DE TRACKING UNIFICADA ==========
  const trackEvent = (eventName, eventData = {}) => {
    if (window.fbq) {
      window.fbq('track', eventName, {
        ...eventData,
        page: 'QuinchosPiletas',
        location: 'quinchos_piletas_page',
        timestamp: new Date().toISOString()
      });
    }
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, eventData);
    }
  };

  const trackWhatsApp = () => {
    trackEvent('Contact', { 
      content_name: 'WhatsApp QuinchosPiletas Click',
      content_category: 'WhatsApp',
      content_type: 'whatsapp',
      service: 'quinchos_piletas',
      value: 1
    });
  };

  return (
    <Layout seoProps={seoProps}>
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div style={{ backgroundImage: `url(${quinchoBg})` }} className="absolute inset-0 bg-cover bg-center opacity-20"></div>
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-6 border border-white/20">
              <Sun className="h-5 w-5" />
              <span className="font-semibold text-sm">Quinchos y Piletas</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-poppins">
              Tu <span className="text-[#d09400]">paraíso</span> al aire libre
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-poppins font-light">
              Diseñamos y construimos quinchos con parrilla y piletas de material en <strong className="font-semibold text-white">Posadas, Misiones</strong>.
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quinchos con parrilla</h2>
              <ul className="space-y-4">
                {[
                  "Diseño personalizado",
                  "Parrilla y horno de barro",
                  "Mesadas de hormigón o granito",
                  "Iluminación y ventilación",
                  "Pérgolas y decks de madera"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#d09400]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Piletas de material</h2>
              <ul className="space-y-4">
                {[
                  "Piletas premoldeadas o construidas in situ",
                  "Revestimiento cerámico o pintura epoxi",
                  "Sistema de filtrado y limpieza",
                  "Iluminación subacuática",
                  "Solárium perimetral"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#d09400]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Hacé realidad el patio de tus sueños</h3>
            <p className="mb-6 opacity-90">Consultá por un proyecto llave en mano sin cargo.</p>
            <a 
              href={LINK_WHATSAPP} 
              target="_blank" 
              rel="noopener" 
              onClick={trackWhatsApp}
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default QuinchosPiletas;