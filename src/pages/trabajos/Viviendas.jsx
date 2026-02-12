import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Home, CheckCircle, ArrowRight, Phone, 
  MessageCircle, Users, Ruler, PenTool,
  Building2, Shield, Clock, MapPin
} from 'lucide-react';
import { LINK_LLAMADA, LINK_WHATSAPP, TELEFONO_PRINCIPAL } from '../../constants/phone';
import viviendaDC from '../../assets/images/vivienda-dibrika-construcciones.jpg'

const Viviendas = () => {
  const seoProps = {
    title: "Construcción de Viviendas en Posadas | DIBRIKA Construcciones",
    description: "Construimos tu casa ideal desde cero. Proyectos llave en mano en Posadas, Misiones. Diseño personalizado, materiales premium y garantía de 10 años.",
    keywords: "construcción de viviendas Posadas, casas llave en mano Misiones, construir casa Posadas, empresa constructora viviendas",
    canonical: "https://dibrikaconstrucciones.com.ar/trabajos/viviendas"
  };

  // ========== FUNCIÓN DE TRACKING UNIFICADA ==========
  const trackEvent = (eventName, eventData = {}) => {
    if (window.fbq) {
      window.fbq('track', eventName, {
        ...eventData,
        page: 'Viviendas',
        location: 'viviendas_page',
        timestamp: new Date().toISOString()
      });
    }
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, eventData);
    }
  };

  const trackWhatsApp = () => {
    trackEvent('Contact', { 
      content_name: 'WhatsApp Viviendas Click',
      content_category: 'WhatsApp',
      content_type: 'whatsapp',
      service: 'viviendas',
      value: 1
    });
  };

  const trackPhoneCall = () => {
    trackEvent('Contact', { 
      content_name: 'Phone Call Viviendas Click',
      content_category: 'Phone',
      content_type: 'call',
      service: 'viviendas',
      phone: TELEFONO_PRINCIPAL
    });
  };

  const trackBudgetRequest = () => {
    trackEvent('Lead', { 
      content_name: 'Budget Request Viviendas Click',
      content_category: 'Form',
      content_type: 'budget',
      service: 'viviendas'
    });
  };

  return (
    <Layout seoProps={seoProps}>
      {/* HERO */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-6 border border-white/20">
              <Home className="h-5 w-5" />
              <span className="font-semibold text-sm">Viviendas Personalizadas</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-poppins">
              Construimos la <span className="text-[#d09400]">casa de tus sueños</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-poppins font-light">
              Proyectos llave en mano en <strong className="font-semibold text-white">Posadas, Misiones</strong>. 
              Diseño personalizado, materiales premium y entrega en tiempo récord.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
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
                Viviendas <span className="text-[#d09400]">llave en mano</span>
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Nos encargamos de <strong>todo el proceso</strong>: desde el diseño arquitectónico 
                hasta la entrega de las llaves. Vos solo tenés que disfrutar.
              </p>
              <ul className="space-y-4">
                {[
                  "Diseño personalizado según tus necesidades",
                  "Planos y permisos municipales incluidos",
                  "Materiales de primera calidad certificados",
                  "Garantía escrita en toda la obra",
                  "Entrega en plazo pactado"
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
                  src={viviendaDC}
                  alt="Vivienda moderna construida por DIBRIKA"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          {/* CARACTERÍSTICAS */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Ruler, title: "Diseño a medida", desc: "Planificamos cada espacio según tu estilo de vida" },
              { icon: PenTool, title: "Arquitectura moderna", desc: "Tendencias actuales con funcionalidad" },
              { icon: Shield, title: "10 años de garantía", desc: "Respaldo real en toda la estructura" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg text-center"
              >
                <div className="bg-[#d09400]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-[#d09400]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#d09400] to-[#b07d00]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Soñás con tu casa propia?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contactanos para un presupuesto sin cargo y empezá a construir tu futuro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contacto" 
              onClick={trackBudgetRequest}
              className="inline-flex items-center gap-2 bg-white text-[#d09400] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Pedir presupuesto</span>
            </a>
            <a 
              href={LINK_WHATSAPP} 
              target="_blank" 
              rel="noopener" 
              onClick={trackWhatsApp}
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E]"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Viviendas;