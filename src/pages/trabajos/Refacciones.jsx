import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Construction, CheckCircle, ArrowRight, Phone, 
  MessageCircle, Paintbrush, Bath, Home,
  Shield, Clock, MapPin
} from 'lucide-react';
import { LINK_LLAMADA, LINK_WHATSAPP, TELEFONO_PRINCIPAL } from '../../constants/phone';

const Refacciones = () => {
  const seoProps = {
    title: "Refacciones y Remodelaciones en Posadas | DIBRIKA",
    description: "Transformamos tu casa con refacciones integrales. Ampliaciones, renovación de baños, cocinas y más en Posadas, Misiones. Presupuesto sin cargo.",
    keywords: "refacciones Posadas, remodelación viviendas Misiones, ampliación de casas, renovación baños cocinas",
    canonical: "https://dibrikaconstrucciones.com.ar/trabajos/refacciones"
  };

  // ========== FUNCIÓN DE TRACKING UNIFICADA ==========
  const trackEvent = (eventName, eventData = {}) => {
    if (window.fbq) {
      window.fbq('track', eventName, {
        ...eventData,
        page: 'Refacciones',
        location: 'refacciones_page',
        timestamp: new Date().toISOString()
      });
    }
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, eventData);
    }
  };

  const trackWhatsApp = () => {
    trackEvent('Contact', { 
      content_name: 'WhatsApp Refacciones Click',
      content_category: 'WhatsApp',
      content_type: 'whatsapp',
      service: 'refacciones',
      value: 1
    });
  };

  const trackBudgetRequest = () => {
    trackEvent('Lead', { 
      content_name: 'Budget Request Refacciones Click',
      content_category: 'Form',
      content_type: 'budget',
      service: 'refacciones'
    });
  };

  return (
    <Layout seoProps={seoProps}>
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-6 border border-white/20">
              <Construction className="h-5 w-5" />
              <span className="font-semibold text-sm">Refacciones Integrales</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-poppins">
              Dale <span className="text-[#d09400]">nueva vida</span> a tu hogar
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-poppins font-light">
              Refaccionamos y remodelamos tu casa en <strong className="font-semibold text-white">Posadas, Misiones</strong>. 
              Ampliaciones, baños, cocinas y más.
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Home, title: "Ampliaciones", desc: "Agregá metros cuadrados a tu casa" },
              { icon: Bath, title: "Baños y Cocinas", desc: "Renovación completa de núcleos húmedos" },
              { icon: Paintbrush, title: "Terminaciones", desc: "Pisos, revestimientos, pintura y más" }
            ].map((item, i) => (
              <motion.div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg text-center">
                <div className="bg-[#d09400]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-[#d09400]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Tu casa necesita mejorar?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Visitamos tu propiedad, evaluamos lo que necesitás y te pasamos un presupuesto detallado sin cargo.
            </p>
            <a 
              href="/contacto" 
              onClick={trackBudgetRequest}
              className="inline-flex items-center gap-2 bg-[#d09400] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#b07d00]"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Solicitar visita y presupuesto</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Refacciones;