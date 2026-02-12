import { 
  Phone, Mail, MapPin, Clock, 
  MessageCircle, Instagram, Facebook,
  ArrowRight, Home as HomeIcon, Building2, UserCircle
} from 'lucide-react';
import { socialMedia } from '../../data/navigation';
import {
  TELEFONO_PRINCIPAL,
  TELEFONO_INTERNACIONAL,
  LINK_LLAMADA,
  LINK_WHATSAPP,
  MENSAJE_WHATSAPP
} from '../../constants/phone';

// Datos de contacto actualizados con números REALES
const contactInfo = {
  phone: {
    display: TELEFONO_PRINCIPAL,      // "3764 65-8469"
    raw: TELEFONO_INTERNACIONAL,      // "+543764658469"
    link: LINK_LLAMADA               // "tel:+543764658469"
  },
  whatsapp: {
    display: TELEFONO_PRINCIPAL,
    raw: TELEFONO_INTERNACIONAL,
    link: LINK_WHATSAPP,
    mensaje: MENSAJE_WHATSAPP
  },
  email: "favio.cardo@gmail.com",
  address: {
    street: "Bº Altos de Bella Vista",
    city: "Posadas",
    province: "Misiones",
    full: "Bº Altos de Bella Vista, Posadas, Misiones"
  },
  businessHours: {
    weekdays: "Lun a Vie: 8:00 - 18:00",
    saturday: "Sáb: 9:00 - 13:00",
    sunday: "Domingos: Cerrado"
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ========== FUNCIÓN DE TRACKING UNIFICADA ==========
  const trackEvent = (eventName, eventData = {}) => {
    // Facebook Pixel
    if (window.fbq) {
      window.fbq('track', eventName, {
        ...eventData,
        page: 'Footer',
        location: 'footer',
        timestamp: new Date().toISOString()
      });
    }
    // Google Analytics / Google Ads
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, eventData);
    }
  };

  // Trackers específicos para Footer
  const trackWhatsApp = () => {
    trackEvent('Contact', { 
      content_name: 'WhatsApp Footer Click',
      content_category: 'WhatsApp',
      content_type: 'whatsapp',
      location: 'footer',
      value: 1
    });
  };

  const trackPhoneCall = () => {
    trackEvent('Contact', { 
      content_name: 'Phone Call Footer Click',
      content_category: 'Phone',
      content_type: 'call',
      location: 'footer',
      phone: TELEFONO_PRINCIPAL
    });
  };

  const trackFacebook = () => {
    trackEvent('ViewContent', { 
      content_name: 'Facebook Footer Click',
      content_category: 'Social',
      content_type: 'facebook',
      location: 'footer',
      social_platform: 'facebook'
    });
  };

  const trackInstagram = () => {
    trackEvent('ViewContent', { 
      content_name: 'Instagram Footer Click',
      content_category: 'Social',
      content_type: 'instagram',
      location: 'footer',
      social_platform: 'instagram'
    });
  };

  const trackEmail = () => {
    trackEvent('Contact', { 
      content_name: 'Email Footer Click',
      content_category: 'Email',
      content_type: 'email',
      location: 'footer'
    });
  };

  const trackNavigation = (pageName) => {
    trackEvent('ViewContent', { 
      content_name: `Navigation Footer Click - ${pageName}`,
      content_category: 'Navigation',
      content_type: 'link',
      location: 'footer',
      destination: pageName
    });
  };

  const trackCreditClick = () => {
    trackEvent('ViewContent', { 
      content_name: 'Credit Link Click - PBX Digital',
      content_category: 'Credits',
      content_type: 'external_link',
      location: 'footer'
    });
  };

  return (
    <footer className="bg-[#004aad] text-white">
      {/* Contenido principal del footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Columna 1: Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-14 w-14 rounded-xl bg-[#d09400] flex items-center justify-center">
                  <span className="text-white font-bold text-3xl">D</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-poppins">
                    DIBRIKA <span className="text-[#d09400]">Construcciones</span>
                  </h3>
                  <p className="text-gray-300 text-sm">Posadas, Misiones</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Especialistas en construcción de viviendas, obra gris, refacciones 
                y obras públicas en Posadas, Misiones. Calidad y confianza desde 2012.
              </p>
            </div>

            {/* Redes sociales con TRACKING */}
            <div className="flex space-x-3">
              {/* Facebook con TRACKING */}
              <a
                href={socialMedia.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackFacebook}
                className="h-10 w-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              
              {/* Instagram con TRACKING */}
              <a
                href={socialMedia.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackInstagram}
                className="h-10 w-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r from-purple-500 to-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              
              {/* WhatsApp con TRACKING */}
              <a
                href={contactInfo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsApp}
                className="h-10 w-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos con TRACKING */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-poppins border-l-4 border-[#d09400] pl-3">
              Enlaces rápidos
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="/"
                  onClick={() => trackNavigation('Inicio')}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <HomeIcon className="h-5 w-5 text-[#d09400]" />
                  <span className="font-medium">Inicio</span>
                </a>
              </li>
              <li>
                <a 
                  href="/trabajos/viviendas"
                  onClick={() => trackNavigation('Trabajos')}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <Building2 className="h-5 w-5 text-[#d09400]" />
                  <span className="font-medium">Trabajos</span>
                </a>
              </li>
              <li>
                <a 
                  href="/empresa"
                  onClick={() => trackNavigation('Empresa')}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <UserCircle className="h-5 w-5 text-[#d09400]" />
                  <span className="font-medium">Empresa</span>
                </a>
              </li>
              <li>
                <a 
                  href="/contacto"
                  onClick={() => trackNavigation('Contacto')}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <MessageCircle className="h-5 w-5 text-[#d09400]" />
                  <span className="font-medium">Contacto</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto con números REALES y TRACKING */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-poppins border-l-4 border-[#d09400] pl-3">
              Contacto
            </h4>
            <div className="space-y-4">
              {/* Teléfono con TRACKING de llamada */}
              <a 
                href={contactInfo.phone.link}
                onClick={trackPhoneCall}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Phone className="h-5 w-5 text-[#d09400]" />
                <div>
                  <p className="font-medium">{contactInfo.phone.display}</p>
                  <p className="text-xs text-gray-400">Llamá ahora</p>
                </div>
              </a>
              
              {/* Email con TRACKING */}
              <a 
                href={`mailto:${contactInfo.email}`}
                onClick={trackEmail}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Mail className="h-5 w-5 text-[#d09400]" />
                <div>
                  <p className="font-medium">{contactInfo.email}</p>
                  <p className="text-xs text-gray-400">Respondemos en 24hs</p>
                </div>
              </a>
              
              {/* Dirección */}
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-[#d09400] mt-1" />
                <div>
                  <p className="font-medium">{contactInfo.address.street}</p>
                  <p className="text-sm">{contactInfo.address.city}, {contactInfo.address.province}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 4: Horarios y WhatsApp con TRACKING */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-poppins border-l-4 border-[#d09400] pl-3">
              Horarios
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="h-5 w-5 text-[#d09400]" />
                <div>
                  <p className="font-medium">{contactInfo.businessHours.weekdays}</p>
                  <p className="text-sm">{contactInfo.businessHours.saturday}</p>
                  <p className="text-sm text-gray-400">{contactInfo.businessHours.sunday}</p>
                </div>
              </div>
              
              {/* WhatsApp con número REAL y TRACKING */}
              <a 
                href={contactInfo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsApp}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-lg font-medium transition-colors w-full group relative overflow-hidden"
              >
                {/* Efecto hover animado */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
                
                <MessageCircle className="h-5 w-5" />
                <span>Consultar por WhatsApp</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              {/* Texto adicional */}
              <p className="text-xs text-gray-400 text-center mt-2">
                Respuesta inmediata por WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior con TRACKING en créditos */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} DIBRIKA Construcciones. Todos los derechos reservados.
              </p>
              
            </div>

            {/* Créditos PBX Digital con TRACKING */}
            <div className="text-center">
              <p className="text-gray-200 text-sm">
                Desarrollado por{" "}
                <a 
                  href="http://pbxdigital.com.ar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={trackCreditClick}
                  className="text-green-500 hover:text-white transition-colors font-medium"
                >
                  PBX Digital
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;