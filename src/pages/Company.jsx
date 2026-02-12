import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building2, Users, Award, Shield, 
  Clock, CheckCircle, MapPin, 
  Target, HeartHandshake, TrendingUp,
  ArrowRight, Phone, MessageCircle,
  Construction, Home as HomeIcon
} from 'lucide-react';
import {
  TELEFONO_PRINCIPAL,
  TELEFONO_INTERNACIONAL,
  LINK_LLAMADA,
  LINK_WHATSAPP
} from '../constants/phone';
import companyHeroBg from '../assets/images/empresa-bg-dibrika-construcciones.jpeg';
import companyBg from '../assets/images/empresa-dibrika-construcciones.jpg';
import equipoBg from '../assets/images/aqui-construye-dibrika-construcciones.jpg';


const Company = () => {
  // SEO Props optimizadas para "Sobre Nosotros"
  const seoProps = {
    title: "Sobre DIBRIKA Construcciones | Constructora en Posadas, Misiones",
    description: "Conozca nuestra historia, equipo y valores. Más de 10 años construyendo viviendas de calidad en Posadas, Misiones. Especialistas en obra gris, refacciones y obras públicas.",
    keywords: "sobre DIBRIKA Construcciones, historia constructora Posadas, empresa construcción Misiones, equipo de constructores, valores constructora, experiencia en construcción Posadas",
    canonical: "https://dibrikaconstrucciones.com.ar/empresa"
  };

  // ========== FUNCIÓN DE TRACKING UNIFICADA ==========
  const trackEvent = (eventName, eventData = {}) => {
    // Facebook Pixel
    if (window.fbq) {
      window.fbq('track', eventName, {
        ...eventData,
        page: 'Company',
        location: 'company_page',
        timestamp: new Date().toISOString()
      });
    }
    // Google Analytics / Google Ads
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, eventData);
    }
  };

  // Trackers específicos para Company
  const trackWhatsApp = () => {
    trackEvent('Contact', { 
      content_name: 'WhatsApp Company Click',
      content_category: 'WhatsApp',
      content_type: 'whatsapp',
      location: 'company_cta',
      value: 1
    });
  };

  const trackPhoneCall = () => {
    trackEvent('Contact', { 
      content_name: 'Phone Call Company Click',
      content_category: 'Phone',
      content_type: 'call',
      location: 'company_cta',
      phone: TELEFONO_PRINCIPAL
    });
  };

  const trackContactPage = () => {
    trackEvent('Lead', { 
      content_name: 'Contact Page Company Click',
      content_category: 'Form',
      content_type: 'contact_page',
      location: 'company_cta'
    });
  };

  return (
    <Layout seoProps={seoProps}>
      {/* ========== HERO EMPRESA ========== */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div style={{ backgroundImage: `url(${companyHeroBg})` }} 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-6 border border-white/20">
              <Building2 className="h-5 w-5" />
              <span className="font-semibold text-sm">Nuestra empresa</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-poppins">
              Construyendo <span className="text-[#d09400]">confianza</span> desde 2012
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-poppins font-light">
              Más de una década transformando sueños en hogares en 
              <strong className="font-semibold text-white"> Posadas, Misiones</strong>. 
              Conocé nuestra historia, valores y compromiso con la calidad.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ========== NUESTRA HISTORIA ========== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d09400]/10 to-[#004aad]/10 text-[#d09400] px-6 py-2 rounded-full mb-6 border border-[#d09400]/20">
                <Clock className="h-5 w-5" />
                <span className="font-semibold text-sm">Nuestra trayectoria</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Más de 10 años construyendo en <span className="text-[#d09400]">Posadas</span>
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>DIBRIKA Construcciones</strong> nació en 2012 con una visión clara: 
                  ofrecer servicios de construcción de máxima calidad en 
                  <strong> Posadas, Misiones</strong>. Desde nuestros inicios, nos hemos 
                  enfocado en construir no solo estructuras, sino relaciones de confianza 
                  duraderas con nuestros clientes.
                </p>
                
                <p>
                  Comenzamos como un pequeño equipo de constructores locales y, gracias 
                  a nuestro compromiso con la excelencia, hemos crecido para convertirnos 
                  en una de las constructoras más confiables de la región. Cada proyecto 
                  ha sido una oportunidad para demostrar nuestra pasión por la construcción 
                  y nuestro conocimiento profundo de las necesidades específicas de 
                  <strong> Misiones</strong>.
                </p>
                
                <p>
                  Hoy, contamos con un equipo multidisciplinario de más de 20 
                  profesionales especializados, tecnología de punta y una cartera de más 
                  de <strong>50 proyectos exitosos</strong> en toda la provincia.
                </p>
              </div>

              {/* Estadísticas rápidas */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#d09400] mb-2">10+</div>
                  <div className="text-gray-600">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#004aad] mb-2">50+</div>
                  <div className="text-gray-600">Proyectos completados</div>
                </div>
              </div>
            </motion.div>

            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800 relative">
                  <div style={{ backgroundImage: `url(${companyBg})` }}
                    className="absolute inset-0 bg-cover bg-center"
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                  
                  {/* Badge sobre imagen */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 max-w-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="h-5 w-5 text-[#d09400]" />
                      <h3 className="font-bold text-gray-900">Posadas, Misiones</h3>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Operamos desde el corazón de la provincia, atendiendo toda la región
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== NUESTROS VALORES ========== */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Los valores que nos definen
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Principios fundamentales que guían cada proyecto en DIBRIKA Construcciones
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Calidad Garantizada",
                description: "Materiales de primera línea y procesos rigurosos para resultados excepcionales",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: HeartHandshake,
                title: "Compromiso Total",
                description: "Cada proyecto es tratado con la misma dedicación y atención personalizada",
                color: "from-[#d09400] to-[#b07d00]"
              },
              {
                icon: Target,
                title: "Transparencia",
                description: "Comunicación clara, presupuestos detallados y sin sorpresas ocultas",
                color: "from-[#004aad] to-[#003a8a]"
              },
              {
                icon: TrendingUp,
                title: "Innovación Constante",
                description: "Incorporamos las mejores prácticas y tecnologías del sector construcción",
                color: "from-purple-500 to-pink-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.color} mb-4`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NUESTRO EQUIPO ========== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Imagen del equipo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800 relative">
                  <div style={{ backgroundImage: `url(${equipoBg})` }}
                    className="absolute inset-0 bg-cover bg-top"
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>

            {/* Texto del equipo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d09400]/10 to-[#004aad]/10 text-[#004aad] px-6 py-2 rounded-full mb-6 border border-[#004aad]/20">
                <Users className="h-5 w-5" />
                <span className="font-semibold text-sm">Nuestro equipo</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Profesionales de <span className="text-[#d09400]">Misiones</span>
              </h2>
              
              <div className="space-y-4 text-gray-700 mb-8">
                <p>
                  Contamos con un equipo  de 
                  <strong> profesionales especializados</strong> en diferentes áreas 
                  de la construcción.
                </p>
                
                <p>
                  Lo que nos distingue es nuestro <strong>conocimiento local</strong>. 
                  Nuestros profesionales son de <strong>Posadas y Misiones</strong>, 
                  lo que nos permite entender las particularidades del terreno, clima 
                  y normativas locales, asegurando proyectos adaptados perfectamente 
                  a las condiciones de nuestra región.
                </p>
                
                <p>
                  Cada miembro de nuestro equipo comparte nuestra filosofía de trabajo: 
                  <strong> excelencia, responsabilidad y atención al detalle</strong> 
                  en cada etapa del proceso constructivo.
                </p>
              </div>

              {/* Especialidades */}
              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 text-lg">Especialidades:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Arquitectura",
                    "Ingeniería Civil",
                    "Maestros de obra",
                    "Electricistas",
                    "Plomeros",
                    "Herreros",
                    "Carpinteros",
                    "Pintores"
                  ].map((especialidad, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">{especialidad}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== CERTIFICACIONES Y GARANTÍAS ========== */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
                Compromiso con la excelencia
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Garantías y certificaciones que respaldan nuestro trabajo en Posadas y toda Misiones
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Certificaciones",
                  items: [
                    "Registro de Constructora",
                    "Cámara de la Construcción de Misiones",
                    "Normas IRAM aplicadas",
                    "Seguridad e higiene certificada"
                  ]
                },
                {
                  icon: Shield,
                  title: "Garantías",
                  items: [
                    "Garantía escrita",
                    "Responsabilidad civil asegurada",
                    "Materiales con certificado",
                    "Supervisión técnica permanente"
                  ]
                },
                {
                  icon: Construction,
                  title: "Metodología",
                  items: [
                    "Planificación detallada",
                    "Control de calidad por etapas",
                    "Documentación completa",
                    "Seguimiento fotográfico"
                  ]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-[#d09400] to-[#b07d00] p-2 rounded-lg">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-poppins">
                      {item.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {item.items.map((listItem, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL - CON NÚMEROS REALES Y TRACKING ========== */}
      <section className="py-20 bg-gradient-to-r from-[#d09400] to-[#b07d00]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
              ¿Listo para construir con una empresa confiable?
            </h2>
            
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Con más de 10 años de experiencia en <strong>Posadas, Misiones</strong>, 
              estamos listos para hacer realidad tu proyecto de construcción con la 
              calidad y profesionalismo que nos caracteriza.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Botón Contactar ahora con tracking */}
              <a
                href="/contacto"
                onClick={trackContactPage}
                className="inline-flex items-center justify-center gap-3 bg-white text-[#d09400] hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Contactar ahora</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              
              {/* Botón WhatsApp con tracking */}
              <a
                href={LINK_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsApp}
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              
              {/* Botón Llamar con tracking */}
              <a
                href={LINK_LLAMADA}
                onClick={trackPhoneCall}
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Llamar al {TELEFONO_PRINCIPAL}</span>
              </a>
            </div>
            
            <p className="text-white/80 text-sm mt-6">
              📱 Respuesta inmediata por WhatsApp | 📞 Atención personalizada
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schema markup para empresa - ACTUALIZADO CON NÚMEROS REALES */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DIBRIKA Construcciones",
            "description": "Constructora especializada en construcción de viviendas, obra gris, refacciones y obras públicas en Posadas, Misiones. Más de 10 años de experiencia.",
            "url": "https://dibrikaconstrucciones.com.ar",
            "logo": "https://dibrikaconstrucciones.com.ar/logo.png",
            "foundingDate": "2010",
            "founders": [{
              "@type": "Person",
              "name": "Fundador DIBRIKA"
            }],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. Corrientes 1234",
              "addressLocality": "Posadas",
              "addressRegion": "Misiones",
              "addressCountry": "AR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": TELEFONO_INTERNACIONAL,
              "contactType": "customer service",
              "areaServed": "AR",
              "availableLanguage": ["Spanish"]
            },
            "sameAs": [
              "https://facebook.com/dibrikaconstrucciones",
              "https://instagram.com/dibrikaconstrucciones"
            ]
          })
        }}
      />
    </Layout>
  );
};

export default Company;