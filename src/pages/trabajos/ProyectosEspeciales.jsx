import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Lightbulb, CheckCircle, ArrowRight, Phone, 
  MessageCircle, Building2, Warehouse, Store,
  Shield, Clock, MapPin
} from 'lucide-react';
import { LINK_LLAMADA, LINK_WHATSAPP, TELEFONO_PRINCIPAL } from '../../constants/phone';

const ProyectosEspeciales = () => {
  const seoProps = {
    title: "Proyectos Especiales | Galpones, Locales y más | DIBRIKA",
    description: "Construimos galpones, tinglados, locales comerciales y proyectos a medida en Posadas, Misiones. Soluciones industriales y comerciales.",
    keywords: "galpones Posadas, tinglados Misiones, locales comerciales, construcción industrial, proyectos especiales",
    canonical: "https://dibrikaconstrucciones.com.ar/trabajos/proyectos-especiales"
  };

  // ========== FUNCIÓN DE TRACKING UNIFICADA ==========
  const trackEvent = (eventName, eventData = {}) => {
    if (window.fbq) {
      window.fbq('track', eventName, {
        ...eventData,
        page: 'ProyectosEspeciales',
        location: 'proyectos_especiales_page',
        timestamp: new Date().toISOString()
      });
    }
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, eventData);
    }
  };

  const trackContactRequest = () => {
    trackEvent('Lead', { 
      content_name: 'Contact ProyectosEspeciales Click',
      content_category: 'Form',
      content_type: 'contact',
      service: 'proyectos_especiales'
    });
  };

  return (
    <Layout seoProps={seoProps}>
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-6 border border-white/20">
              <Lightbulb className="h-5 w-5" />
              <span className="font-semibold text-sm">Proyectos Especiales</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-poppins">
              Soluciones <span className="text-[#d09400]">a medida</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-poppins font-light">
              Desarrollamos proyectos industriales, comerciales y especiales en <strong className="font-semibold text-white">Posadas, Misiones</strong>.
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Warehouse, title: "Galpones y Tinglados", desc: "Estructuras metálicas y de hormigón para industria" },
              { icon: Store, title: "Locales Comerciales", desc: "Showrooms, oficinas y puntos de venta" },
              { icon: Building2, title: "Proyectos a Medida", desc: "Cualquier necesidad especial de construcción" }
            ].map((item, i) => (
              <motion.div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg text-center">
                <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">¿Tenés un proyecto especial en mente?</h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Nos adaptamos a cualquier requerimiento. Consultanos sin compromiso.
            </p>
            <a 
              href="/contacto" 
              onClick={trackContactRequest}
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Contanos tu proyecto</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProyectosEspeciales;