import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Phone, Mail, MapPin, Clock, MessageCircle,
  Send, CheckCircle, AlertCircle, HomeIcon,
  Building2, User, FileText, PhoneCall,
  Calendar, ArrowRight
} from 'lucide-react';
import {
  TELEFONO_PRINCIPAL,
  TELEFONO_INTERNACIONAL,
  LINK_LLAMADA,
  LINK_WHATSAPP
} from '../constants/phone';
import { 
  EMAILJS_CONFIG, 
  COMPANY_EMAILS, 
  validateEmailJSConfig 
} from '../config/emailjs';
import contactoBg from '../assets/images/aqui-construye-dibrika-construcciones.jpg';


const Contact = () => {
  // Referencia al formulario para EmailJS
  const formRef = useRef();
  
  // SEO Props optimizadas para "Contacto"
  const seoProps = {
    title: "Contacto DIBRIKA Construcciones | Constructora Posadas, Misiones",
    description: `Contacte a DIBRIKA Construcciones para su proyecto. Consultas, presupuestos y asesoramiento profesional en construcción en Posadas, Misiones. Respuesta en 24hs. Tel: ${TELEFONO_PRINCIPAL}`,
    keywords: "contacto constructoras Posadas, presupuesto construcción Misiones, consulta obra gris, constructoras Posadas contacto, pedir presupuesto construcción, asesoramiento construcción",
    canonical: "https://dibrikaconstrucciones.com.ar/contacto"
  };

  // Estados para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoProyecto: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [configValid, setConfigValid] = useState(true);

  // ========== FUNCIÓN DE TRACKING UNIFICADA ==========
  const trackEvent = (eventName, eventData = {}) => {
    // Facebook Pixel
    if (window.fbq) {
      window.fbq('track', eventName, {
        ...eventData,
        page: 'Contact',
        location: 'contact_page',
        timestamp: new Date().toISOString()
      });
    }
    // Google Analytics / Google Ads
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, eventData);
    }
  };

  // Trackers específicos para Contact
  const trackWhatsApp = () => {
    trackEvent('Contact', { 
      content_name: 'WhatsApp Contact Click',
      content_category: 'WhatsApp',
      content_type: 'whatsapp',
      location: 'contact_sidebar',
      value: 1
    });
  };

  const trackWhatsAppCTA = () => {
    trackEvent('Contact', { 
      content_name: 'WhatsApp Contact CTA Click',
      content_category: 'WhatsApp',
      content_type: 'whatsapp',
      location: 'contact_cta_final',
      value: 1
    });
  };

  const trackPhoneCall = () => {
    trackEvent('Contact', { 
      content_name: 'Phone Call Contact Click',
      content_category: 'Phone',
      content_type: 'call',
      location: 'contact_sidebar',
      phone: TELEFONO_PRINCIPAL
    });
  };

  const trackPhoneCallCTA = () => {
    trackEvent('Contact', { 
      content_name: 'Phone Call Contact CTA Click',
      content_category: 'Phone',
      content_type: 'call',
      location: 'contact_cta_final',
      phone: TELEFONO_PRINCIPAL
    });
  };

  const trackEmailClick = () => {
    trackEvent('Contact', { 
      content_name: 'Email Contact Click',
      content_category: 'Email',
      content_type: 'email',
      location: 'contact_sidebar'
    });
  };

  const trackGoogleMaps = () => {
    trackEvent('ViewContent', { 
      content_name: 'Google Maps Click',
      content_category: 'Location',
      content_type: 'maps',
      location: 'contact_maps'
    });
  };

  // Validar configuración de EmailJS al montar el componente
  useEffect(() => {
    const isValid = validateEmailJSConfig();
    setConfigValid(isValid);
    
    // Inicializar EmailJS con la public key
    if (isValid) {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
  }, []);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejar envío del formulario con EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Validación básica
    if (!formData.nombre || !formData.email || !formData.telefono || !formData.tipoProyecto) {
      setSubmitError('Por favor, complete todos los campos requeridos');
      setIsSubmitting(false);
      return;
    }

    // Validar configuración de EmailJS
    if (!configValid) {
      setSubmitError('Error de configuración del servicio de email. Por favor, contacte al administrador.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Preparar los parámetros para EmailJS
      const templateParams = {
        from_name: formData.nombre,
        from_email: formData.email,
        from_phone: formData.telefono,
        project_type: formData.tipoProyecto,
        message: formData.mensaje || 'Sin mensaje adicional',
        to_email: COMPANY_EMAILS.INFO,
        reply_to: formData.email,
        date: new Date().toLocaleDateString('es-AR'),
        time: new Date().toLocaleTimeString('es-AR')
      };

      // Enviar email usando EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      if (result.status === 200) {

        // ✅ EVENTO LEAD META PIXEL (SOLO SI ENVÍA CORRECTAMENTE)
        if (window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'Formulario Contacto',
            content_category: formData.tipoProyecto,
            content_type: 'form_submit',
            location: 'contact_form',
            value: 1,
            currency: 'ARS'
          });
        }

        // Éxito
        setSubmitSuccess(true);
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          tipoProyecto: '',
          mensaje: ''
        });

        // Resetear éxito después de 5 segundos
        setTimeout(() => setSubmitSuccess(false), 5000);

      } else {
        throw new Error('Error al enviar el mensaje');
      }

    } catch (error) {
      console.error('Error EmailJS:', error);
      setSubmitError('Error al enviar el mensaje. Por favor, intente nuevamente o contáctenos por WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout seoProps={seoProps}>
      {/* ========== HERO CONTACTO ========== */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div style={{ backgroundImage: `url(${contactoBg})` }} className="absolute inset-0  bg-cover bg-center opacity-20"></div>
        
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-6 border border-white/20">
              <MessageCircle className="h-5 w-5" />
              <span className="font-semibold text-sm">Estamos aquí para ayudarte</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-poppins">
              Hablemos de tu <span className="text-[#d09400]">proyecto</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-poppins font-light">
              Consultas, presupuestos y asesoramiento personalizado para tu obra en 
              <strong className="font-semibold text-white"> Posadas, Misiones</strong>.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ========== SECCIÓN CONTACTO ========== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Columna izquierda: Información de contacto con números REALES y TRACKING */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d09400]/10 to-[#004aad]/10 text-[#d09400] px-6 py-2 rounded-full mb-8 border border-[#d09400]/20">
                <PhoneCall className="h-5 w-5" />
                <span className="font-semibold text-sm">Contacto directo</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-poppins">
                Información de <span className="text-[#d09400]">contacto</span>
              </h2>

              {/* Tarjetas de información con datos REALES y TRACKING */}
              <div className="space-y-6 mb-12">
                {/* Teléfono - REAL con TRACKING */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#d09400] transition-colors">
                  <div className="bg-[#d09400]/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-[#d09400]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Teléfono</h3>
                    <a 
                      href={LINK_LLAMADA}
                      onClick={trackPhoneCall}
                      className="text-gray-700 hover:text-[#d09400] transition-colors text-lg"
                    >
                      {TELEFONO_PRINCIPAL}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Lunes a Viernes de 8:00 a 18:00 hs</p>
                    <p className="text-gray-600 text-sm mt-1">Sabádo de 9:00 a 13:00 hs</p>
                  </div>
                </div>

                {/* Email - REAL con TRACKING */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#004aad] transition-colors">
                  <div className="bg-[#004aad]/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-[#004aad]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Email</h3>
                    <a 
                      href={`mailto:${COMPANY_EMAILS.INFO}`}
                      onClick={trackEmailClick}
                      className="text-gray-700 hover:text-[#004aad] transition-colors text-lg"
                    >
                      {COMPANY_EMAILS.INFO}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Respondemos en menos de 24 horas</p>
                  </div>
                </div>

                {/* WhatsApp - REAL con TRACKING */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#25D366] transition-colors">
                  <div className="bg-[#25D366]/10 p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">WhatsApp</h3>
                    <a 
                      href={LINK_WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={trackWhatsApp}
                      className="text-gray-700 hover:text-[#25D366] transition-colors text-lg"
                    >
                      {TELEFONO_PRINCIPAL}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Respuesta inmediata</p>
                  </div>
                </div>

                {/* Ubicación */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-green-600 transition-colors">
                  <div className="bg-green-600/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Oficina en Posadas</h3>
                    <p className="text-gray-700">
                      Bº Altos de Bella Vista
                    </p>
                    <p className="text-gray-600 text-sm mt-1">Con cita previa</p>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-purple-600 transition-colors">
                  <div className="bg-purple-600/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Horario de atención</h3>
                    <p className="text-gray-700">
                      Lunes a Viernes: 8:00 - 18:00 hs<br />
                      Sábados: 9:00 - 13:00 hs<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>

              {/* Botón directo a WhatsApp con TRACKING */}
              <a
                href={LINK_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsApp}
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-xl font-semibold transition-colors w-full mb-6"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Contactar por WhatsApp ahora</span>
                <ArrowRight className="h-5 w-5" />
              </a>

              {/* Mensaje adicional */}
              <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-3">¿Por qué elegirnos?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Respuesta en menos de 24 horas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Presupuesto sin compromiso</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Visita técnica gratuita en Posadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Asesoramiento personalizado</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Columna derecha: Formulario con EmailJS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 md:p-8">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-poppins">
                    Envíanos tu consulta
                  </h2>
                  <p className="text-gray-600">
                    Completá el formulario y te contactaremos para asesorarte.
                  </p>
                </div>

                {/* Mensajes de estado */}
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <h4 className="font-bold text-green-900">¡Mensaje enviado con éxito!</h4>
                        <p className="text-green-700 text-sm">
                          Te contactaremos en las próximas 24 horas.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4"
                  >
                    <div className="flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <div>
                        <h4 className="font-bold text-red-900">Error al enviar</h4>
                        <p className="text-red-700 text-sm">{submitError}</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Formulario con EmailJS */}
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-900 mb-2">
                        Nombre completo *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d09400] focus:border-transparent transition-all"
                          placeholder="Juan Pérez"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d09400] focus:border-transparent transition-all"
                          placeholder="juan@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-900 mb-2">
                        Teléfono *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d09400] focus:border-transparent transition-all"
                          placeholder={TELEFONO_PRINCIPAL}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="tipoProyecto" className="block text-sm font-medium text-gray-900 mb-2">
                        Tipo de proyecto *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Building2 className="h-5 w-5 text-gray-400" />
                        </div>
                        <select
                          id="tipoProyecto"
                          name="tipoProyecto"
                          value={formData.tipoProyecto}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d09400] focus:border-transparent transition-all appearance-none"
                        >
                          <option value="">Seleccionar tipo</option>
                          <option value="Vivienda familiar">🏠 Vivienda familiar</option>
                          <option value="Obra gris">🏗️ Obra gris</option>
                          <option value="Refacción/Remodelación">🔨 Refacción/Remodelación</option>
                          <option value="Ampliación">📐 Ampliación</option>
                          <option value="Obra pública">🏛️ Obra pública</option>
                          <option value="Proyecto comercial">🏢 Proyecto comercial</option>
                          <option value="Quincho/Pileta">☀️ Quincho/Pileta</option>
                          <option value="Consulta general">📋 Consulta general</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-900 mb-2">
                      Mensaje
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <FileText className="h-5 w-5 text-gray-400" />
                      </div>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        rows={6}
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d09400] focus:border-transparent transition-all"
                        placeholder="Describí tu proyecto, necesidades específicas, ubicación, dimensiones aproximadas..."
                      />
                    </div>
                    <p className="text-gray-500 text-sm mt-2">
                      Cuantos más detalles proporciones, mejor podremos asesorarte.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">
                        Al enviar este formulario, aceptás que nos contactemos por teléfono, 
                        email o WhatsApp para proporcionarte información y asesoramiento 
                        personalizado sobre tu proyecto de construcción.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-lg transition-all ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#d09400] to-[#b07d00] hover:from-[#b07d00] hover:to-[#d09400] transform hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span className="text-white">Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 text-white" />
                        <span className="text-white">Enviar consulta</span>
                        <ArrowRight className="h-5 w-5 text-white" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* ========== CTA FINAL CON TRACKING ========== */}
      <section className="py-20 bg-gradient-to-r from-[#004aad] to-[#003a8a]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
              ¿Necesitás una respuesta inmediata?
            </h2>
            
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Llamanos ahora mismo para una consulta telefónica o agendá una visita técnica 
              gratuita en <strong>Posadas, Misiones</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={LINK_LLAMADA}
                onClick={trackPhoneCallCTA}
                className="inline-flex items-center justify-center gap-3 bg-white text-[#004aad] hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Llamar ahora: {TELEFONO_PRINCIPAL}</span>
              </a>
              <a
                href={LINK_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppCTA}
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>

            <p className="text-white/70 mt-8 mb-2">
              Horario de atención telefónica: Lunes a Viernes 8:00 - 18:00 hs
            </p>
            <p className="text-white/70">
            Sábado: 9:00 - 13:00 hs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schema markup para página de contacto - ACTUALIZADO CON NÚMEROS REALES */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contacto DIBRIKA Construcciones",
            "description": "Formulario de contacto para consultas y presupuestos de construcción en Posadas, Misiones",
            "url": "https://dibrikaconstrucciones.com.ar/contacto",
            "mainEntity": {
              "@type": "ContactPoint",
              "telephone": TELEFONO_INTERNACIONAL,
              "email": COMPANY_EMAILS.INFO,
              "contactType": "customer service",
              "areaServed": {
                "@type": "AdministrativeArea",
                "name": "Misiones",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "Misiones",
                  "addressCountry": "AR"
                }
              },
              "availableLanguage": ["Spanish"],
              "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            }
          })
        }}
      />
    </Layout>
  );
};

export default Contact;