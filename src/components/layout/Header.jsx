import { useState, useEffect } from 'react';
import { 
  Phone, MapPin, MessageCircle, 
  Instagram, Menu, X, ChevronDown,
  Clock
} from 'lucide-react';
import { navigationItems, socialMedia } from '../../data/navigation';
import {
  TELEFONO_PRINCIPAL,
  TELEFONO_INTERNACIONAL,
  LINK_LLAMADA,
  LINK_WHATSAPP
} from '../../constants/phone';

// ✅ IMPORTACIÓN DEL LOGO
import logo from '../../assets/images/Logo Dibrika Vectorizado-Negro-Naranja.webp';

// Datos de contacto actualizados con números REALES
const contactInfo = {
  phone: {
    display: TELEFONO_PRINCIPAL,
    formatted: TELEFONO_PRINCIPAL,
    raw: TELEFONO_INTERNACIONAL,
    link: LINK_LLAMADA
  },
  whatsapp: {
    link: LINK_WHATSAPP
  },
  address: {
    city: "Posadas",
    province: "Misiones",
    full: "Bº Altos de Bella Vista, Posadas, Misiones"
  },
  businessHours: {
    weekdays: "Lun a Vie: 8:00 - 18:00",
    saturday: "Sáb: 9:00 - 13:00"
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  // ========== FUNCIÓN DE TRACKING UNIFICADA ==========
  const trackEvent = (eventName, eventData = {}) => {
    if (window.fbq) {
      window.fbq('track', eventName, {
        ...eventData,
        page: 'Header',
        timestamp: new Date().toISOString()
      });
    }
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, eventData);
    }
  };

  const trackWhatsApp = () => {
    trackEvent('Contact', { 
      content_name: 'WhatsApp Header Click',
      content_category: 'WhatsApp',
      content_type: 'whatsapp',
      location: 'header',
      value: 1
    });
  };

  const trackPhoneCall = () => {
    trackEvent('Contact', { 
      content_name: 'Phone Call Header Click',
      content_category: 'Phone',
      content_type: 'call',
      location: 'header',
      phone: TELEFONO_PRINCIPAL
    });
  };

  const trackInstagram = () => {
    trackEvent('ViewContent', { 
      content_name: 'Instagram Header Click',
      content_category: 'Social',
      content_type: 'instagram',
      location: 'header',
      social_platform: 'instagram'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className={`hidden lg:block bg-gradient-to-r from-gray-900 to-[#004aad] text-white transition-all duration-300 ${scrolled ? 'py-1' : 'py-2'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 group">
                <div className="bg-[#d09400]/20 p-1.5 rounded-md group-hover:bg-[#d09400]/30 transition-colors">
                  <MapPin className="h-4 w-4 text-[#d09400]" />
                </div>
                <div>
                  <span className="font-semibold">{contactInfo.address.city}, {contactInfo.address.province}</span>
                  <div className="text-xs text-gray-300">Área de servicio</div>
                </div>
              </div>
              
              <a 
                href={contactInfo.phone.link}
                onClick={trackPhoneCall}
                className="flex items-center space-x-2 hover:text-[#d09400] transition-all duration-200 group"
                aria-label="Llamar a DIBRIKA Construcciones"
              >
                <div className="bg-[#d09400]/20 p-1.5 rounded-md group-hover:bg-[#d09400]/30 transition-colors">
                  <Phone className="h-4 w-4 text-[#d09400]" />
                </div>
                <div>
                  <span className="font-semibold">{contactInfo.phone.display}</span>
                  <div className="text-xs text-gray-300">Llamá ahora</div>
                </div>
              </a>
              
              
            </div>

            <div className="flex items-center space-x-3">
              <a
                href={contactInfo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsApp}
                className="flex items-center space-x-2 bg-[#25D366] hover:bg-[#128C7E] px-3 py-2 rounded-md transition-all duration-200 group relative"
                aria-label="Contactar por WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="font-medium hidden xl:inline">WhatsApp</span>
                <span className="absolute -top-1 -right-1 bg-white text-[#25D366] text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  !
                </span>
              </a>
              
              <a
                href={socialMedia.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackInstagram}
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 px-3 py-2 rounded-md transition-all duration-200 group"
                aria-label="Seguinos en Instagram"
              >
                <Instagram className="h-4 w-4" />
                <span className="font-medium hidden xl:inline">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-white shadow-md py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            
            {/* ========== LOGO Y MARCA - TAMAÑO GRANDE PROFESIONAL ========== */}
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center space-x-4 group">
                {/* ✅ LOGO GRANDE - 120px NORMAL, 80px SCROLLED */}
                <div className={`relative flex items-center justify-center transition-all duration-300 ${
                  scrolled ? 'h-20 w-20' : 'h-28 w-28'
                }`}>
                  <img 
                    src={logo}
                    alt="DIBRIKA Construcciones - Logo oficial | Constructora en Posadas, Misiones"
                    className="w-full h-full object-contain"
                    loading="eager"
                    width={scrolled ? 80 : 112}
                    height={scrolled ? 80 : 112}
                    fetchpriority="high"
                  />
                </div>
                
                {/* Texto de la marca - Desktop con TAMAÑO GRANDE */}
                <div className="hidden sm:block">
                  <h1 className={`font-bold text-gray-900 font-poppins transition-all duration-300 ${
                    scrolled ? 'text-2xl' : 'text-4xl'
                  }`}>
                    DIBRIKA <span className="bg-gradient-to-r from-[#d09400] to-[#b07d00] bg-clip-text text-transparent">Construcciones</span>
                  </h1>
                  <p className={`text-gray-600 transition-all duration-300 ${
                    scrolled ? 'text-sm' : 'text-lg'
                  } flex items-center mt-2`}>
                    <MapPin className="h-5 w-5 mr-1.5 text-[#d09400]" />
                    {contactInfo.address.city}, {contactInfo.address.province}
                  </p>
                </div>
              </a>
            </div>

            {/* Navegación Desktop */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.id} className="relative dropdown-container">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className={`flex items-center px-4 py-3 font-medium transition-all duration-200 rounded-lg group ${
                          openDropdown === item.name 
                            ? 'text-[#d09400] bg-gradient-to-r from-[#d09400]/10 to-[#d09400]/5' 
                            : 'text-gray-700 hover:text-[#d09400] hover:bg-gray-50'
                        }`}
                      >
                        <span className="relative">
                          {item.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d09400] group-hover:w-full transition-all duration-300"></span>
                        </span>
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {openDropdown === item.name && (
                        <div className="absolute left-0 mt-1 w-72 rounded-xl bg-white shadow-2xl border border-gray-100 py-2 z-50 animate-fadeIn overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-b from-[#d09400]/5 to-transparent pointer-events-none"></div>
                          {item.subItems.map((subItem) => (
                            <a
                              key={subItem.id}
                              href={subItem.href}
                              className="relative block px-6 py-3 text-gray-700 hover:text-[#d09400] hover:bg-gradient-to-r from-[#d09400]/5 to-transparent transition-all duration-150 group"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="flex items-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#d09400]/0 group-hover:bg-[#d09400] mr-3 transition-all duration-300"></div>
                                <div className="font-medium group-hover:translate-x-1 transition-transform duration-200">
                                  {subItem.name}
                                </div>
                              </div>
                              <p className="text-xs text-gray-500 mt-1 ml-4 line-clamp-1">
                                {subItem.description}
                              </p>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={`relative px-4 py-3 font-medium rounded-lg transition-all duration-200 group ${
                        item.highlight
                          ? 'bg-gradient-to-r from-[#d09400] to-[#b07d00] text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5' 
                          : 'text-gray-700 hover:text-[#d09400]'
                      }`}
                    >
                      <span className="relative">
                        {item.name}
                        {!item.highlight && (
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d09400] group-hover:w-full transition-all duration-300"></span>
                        )}
                      </span>
                      {item.highlight && (
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#d09400]/0 to-[#d09400]/0 group-hover:from-white/10 group-hover:to-transparent transition-all duration-300"></div>
                      )}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Teléfono CTA en desktop */}
            <div className="hidden lg:flex items-center">
              <a
                href={contactInfo.phone.link}
                onClick={trackPhoneCall}
                className="flex items-center space-x-3 bg-gradient-to-r from-[#004aad] to-[#003a8a] text-white px-5 py-3 rounded-xl hover:shadow-2xl transition-all duration-300 shadow-lg hover:-translate-y-0.5 group relative overflow-hidden glow-effect"
                aria-label="Llamar a DIBRIKA Construcciones"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#d09400] to-[#b07d00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex items-center space-x-3">
                  <div className="relative">
                    <Phone className="h-5 w-5" />
                    <div className="absolute inset-0 animate-ping opacity-20">
                      <Phone className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-white/80">Llamá ahora</div>
                    <div className="font-bold font-poppins text-sm">{contactInfo.phone.formatted}</div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-lg text-gray-700 hover:text-[#d09400] hover:bg-gray-100 transition-colors duration-200"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40">
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto animate-slideIn">
              <div className="p-6">
                {/* ========== HEADER MÓVIL - LOGO GRANDE ========== */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    {/* ✅ LOGO MÓVIL - 80px */}
                    
                    <div>
                      <div className="font-bold text-gray-900 font-poppins text-2xl">
                        DIBRIKA <span className="text-[#d09400]">Construcciones</span>
                      </div>
                      <p className="text-base text-gray-600 flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1 text-[#d09400]" />
                        Posadas, Misiones
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Contacto móvil */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <a
                    href={contactInfo.phone.link}
                    onClick={() => {
                      trackPhoneCall();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center justify-center space-x-3 bg-gradient-to-r from-[#004aad] to-[#003a8a] text-white px-4 py-3 rounded-lg mb-3"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-bold">{contactInfo.phone.display}</span>
                  </a>
                  
                  <div className="flex justify-center space-x-4">
                    <a
                      href={contactInfo.whatsapp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        trackWhatsApp();
                        setIsMenuOpen(false);
                      }}
                      className="flex-1 bg-[#25D366] text-white px-3 py-2 rounded-lg text-center text-sm font-medium"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={socialMedia.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        trackInstagram();
                        setIsMenuOpen(false);
                      }}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-lg text-center text-sm font-medium"
                    >
                      Instagram
                    </a>
                  </div>
                </div>

                {/* Navegación móvil */}
                <nav className="space-y-1">
                  {navigationItems.map((item) => (
                    <div key={item.id}>
                      {item.hasDropdown ? (
                        <div className="mb-2">
                          <button
                            onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
                            className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-[#d09400] hover:bg-gray-50 rounded-lg transition-colors duration-200"
                          >
                            <span className="font-medium">{item.name}</span>
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                              mobileDropdown === item.name ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          {mobileDropdown === item.name && (
                            <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#d09400] pl-4">
                              {item.subItems.map((subItem) => (
                                <a
                                  key={subItem.id}
                                  href={subItem.href}
                                  className="block px-3 py-2 text-gray-600 hover:text-[#d09400] hover:bg-gray-50 rounded-lg"
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setMobileDropdown(null);
                                  }}
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
                            item.highlight
                              ? 'bg-gradient-to-r from-[#d09400] to-[#b07d00] text-white font-medium' 
                              : 'text-gray-700 hover:text-[#d09400] hover:bg-gray-50'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Información adicional móvil */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-[#d09400] mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Ubicación</p>
                        <p className="text-sm text-gray-600">{contactInfo.address.full}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-[#d09400]" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Horarios</p>
                        <p className="text-sm text-gray-600">{contactInfo.businessHours.weekdays}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Estilos inline */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        
        .glow-effect {
          position: relative;
          overflow: hidden;
        }
        
        .glow-effect::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(30deg);
          transition: transform 0.6s;
        }
        
        .glow-effect:hover::after {
          transform: rotate(30deg) translate(20%, 20%);
        }
      `}</style>
    </>
  );
};

export default Header;