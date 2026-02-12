// ============================================
// DIBRIKA CONSTRUCCIONES - NAVIGATION
// ============================================
// IMPORTAMOS LOS NÚMEROS REALES DESDE PHONE.JS
// ============================================
import {
  TELEFONO_PRINCIPAL,
  TELEFONO_INTERNACIONAL,
  WHATSAPP_NUMERO,
  LINK_LLAMADA,
  LINK_WHATSAPP
} from '../constants/phone';

// Información de contacto principal - CON NÚMEROS REALES
export const contactInfo = {
  phone: {
    display: TELEFONO_PRINCIPAL,        // "3764 65-8469"
    raw: TELEFONO_INTERNACIONAL,        // "+543764658469"
    formatted: TELEFONO_PRINCIPAL,      // "3764 65-8469"
    link: LINK_LLAMADA                  // "tel:+543764658469"
  },
  whatsapp: {
    display: TELEFONO_PRINCIPAL,        // "3764 65-8469"
    raw: WHATSAPP_NUMERO,              // "5493764658469"
    link: LINK_WHATSAPP                // "https://wa.me/5493764658469..."
  },
  email: "favio.cardo@gmail.com",       // ✅ MAIL DEL CLIENTE
  address: {
    street: "Bº Altos de Bella Vista, Posadas, Misiones",
    city: "Posadas",
    province: "Misiones",
    country: "Argentina",
    postalCode: "3300",
    full: "Bº Altos de Bella Vista, Posadas, Misiones",
    googleMaps: "https://goo.gl/maps/ejemploPosadasMisiones"
  },
  businessHours: {
    weekdays: "Lunes a Viernes: 8:00 - 18:00 hs",
    saturday: "Sábados: 9:00 - 13:00 hs",
    sunday: "Domingos: Cerrado"
  },
  coordinates: {
    lat: "-27.362137",
    lng: "-55.900875"
  }
};

// Items del menú principal con SEO - RUTAS CORREGIDAS
export const navigationItems = [
  {
    id: 1,
    name: "Inicio",
    href: "/",
    title: "DIBRIKA Construcciones - Inicio",
    description: "Constructora líder en construcción de viviendas en Posadas, Misiones",
    keywords: "inicio, constructora Posadas, construcción Misiones",
    cta: false
  },
  {
    id: 2,
    name: "Trabajos",
    href: "/trabajos",
    title: "Nuestros Proyectos de Construcción",
    description: "Portafolio de obras: viviendas, refacciones, quinchos y piletas en Misiones",
    keywords: "proyectos construcción, obras realizadas, portafolio constructora",
    cta: false,
    hasDropdown: true,
    subItems: [
      {
        id: 2.1,
        name: "Viviendas",
        href: "/trabajos/viviendas",              // ✅ CORREGIDO
        title: "Construcción de Viviendas en Posadas",
        description: "Casas y viviendas personalizadas construidas en Posadas, Misiones",
        keywords: "casas Posadas, construcción viviendas, viviendas Misiones"
      },
      {
        id: 2.2,
        name: "Obra Gris",                         // ✅ CAMBIADO (antes era Refacciones)
        href: "/trabajos/obra-gris",              // ✅ CORREGIDO
        title: "Servicio de Obra Gris en Misiones",
        description: "Construcción en seco y obra gris para proyectos residenciales",
        keywords: "obra gris Posadas, construcción en seco, estructura Misiones"
      },
      {
        id: 2.3,
        name: "Refacciones",                      // ✅ CAMBIADO (antes era Quinchos)
        href: "/trabajos/refacciones",           // ✅ CORREGIDO
        title: "Refacciones y Remodelaciones en Misiones",
        description: "Servicios de refacción y remodelación de viviendas en Posadas",
        keywords: "refacciones Posadas, remodelación Misiones, renovación viviendas"
      },
      {
        id: 2.4,
        name: "Quinchos y Piletas",              // ✅ UNIFICADO
        href: "/trabajos/quinchos-piletas",      // ✅ CORREGIDO
        title: "Quinchos y Piletas en Posadas",
        description: "Construcción de quinchos, parrillas y piletas de material",
        keywords: "quinchos Posadas, piletas Misiones, construcción quinchos y piletas"
      },
      {
        id: 2.5,
        name: "Obras Públicas",
        href: "/trabajos/obras-publicas",        // ✅ CORREGIDO
        title: "Obras Públicas en Posadas, Misiones",
        description: "Proyectos de infraestructura y obras públicas en la provincia",
        keywords: "obras públicas Posadas, infraestructura Misiones, construcción pública"
      },
      {
        id: 2.6,
        name: "Proyectos Especiales",            // ✅ NUEVO
        href: "/trabajos/proyectos-especiales",  // ✅ CORREGIDO
        title: "Proyectos Especiales a Medida",
        description: "Galpones, tinglados, locales comerciales y proyectos industriales",
        keywords: "proyectos especiales Posadas, galpones Misiones, construcción industrial"
      }
    ]
  },
  {
    id: 3,
    name: "Empresa",
    href: "/empresa",
    title: "Sobre DIBRIKA Construcciones",
    description: "Conozca nuestra trayectoria y experiencia en construcción en Posadas",
    keywords: "historia constructora, sobre nosotros, empresa construcción Misiones",
    cta: false
  },
  {
    id: 4,
    name: "Contacto",
    href: "/contacto",
    title: "Contacto y Presupuesto | DIBRIKA",
    description: "Solicite presupuesto para su proyecto de construcción en Posadas, Misiones",
    keywords: "contacto constructor, presupuesto obra, cotización construcción",
    cta: true,
    highlight: true
  }
];

// Servicios principales para footer y secciones - ACTUALIZADOS
export const servicesList = [
  {
    id: 1,
    name: "Construcción de Viviendas",
    description: "Casas personalizadas en Posadas, Misiones",
    href: "/trabajos/viviendas"                    // ✅ CORREGIDO
  },
  {
    id: 2,
    name: "Obra Gris",
    description: "Estructuras y construcción básica",
    href: "/trabajos/obra-gris"                   // ✅ CORREGIDO
  },
  {
    id: 3,
    name: "Refacciones Integrales",
    description: "Remodelación y renovación de espacios",
    href: "/trabajos/refacciones"                // ✅ CORREGIDO
  },
  {
    id: 4,
    name: "Quinchos y Piletas",
    description: "Espacios de entretenimiento al aire libre",
    href: "/trabajos/quinchos-piletas"           // ✅ CORREGIDO
  },
  {
    id: 5,
    name: "Obras Públicas",
    description: "Proyectos de infraestructura en Misiones",
    href: "/trabajos/obras-publicas"             // ✅ CORREGIDO
  },
  {
    id: 6,
    name: "Proyectos Especiales",
    description: "Galpones, locales y proyectos a medida",
    href: "/trabajos/proyectos-especiales"       // ✅ NUEVO
  }
];

// Redes sociales con URLs
export const socialMedia = {
  facebook: {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61577245474536",
    icon: "Facebook",
    handle: "@dibrikaconstrucciones"
  },
  instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/dibrika__construcciones/",
    icon: "Instagram",
    handle: "@dibrika__construcciones"
  }
};

// Palabras clave por página para SEO
export const seoKeywords = {
  home: [
    "construcción de casas Posadas",
    "empresa constructora Misiones",
    "obra gris Posadas",
    "refacciones de viviendas Misiones",
    "construcción de viviendas Posadas",
    "constructora en Posadas",
    "obras públicas Misiones",
    "quinchos y piletas Posadas",
    "presupuesto construcción Misiones",
    "empresa de construcción confiable Posadas"
  ],
  trabajos: [
    "proyectos construcción Posadas",
    "obras realizadas Misiones",
    "portafolio constructora",
    "casas construidas Posadas",
    "refacciones terminadas Misiones",
    "quinchos construidos Posadas",
    "piletas de material Misiones",
    "galería de obras",
    "trabajos realizados constructora"
  ],
  empresa: [
    "historia constructora Posadas",
    "experiencia construcción Misiones",
    "sobre nuestra empresa",
    "trayectoria constructora",
    "equipo de construcción Posadas",
    "valores empresa constructora",
    "certificaciones construcción",
    "años de experiencia Misiones"
  ],
  contacto: [
    "contacto constructor Posadas",
    "presupuesto obra Misiones",
    "cotización construcción",
    "consultas constructora",
    "solicitar visita técnica",
    "teléfono constructora Posadas",
    "email construcción Misiones",
    "formulario contacto obra"
  ]
};

// URLs importantes - ACTUALIZADAS CON NÚMEROS REALES
export const siteUrls = {
  base: "https://dibrikaconstrucciones.com.ar",
  whatsapp: LINK_WHATSAPP,
  email: "mailto:favio.cardo@gmail.com",
  tel: LINK_LLAMADA,
  maps: "https://goo.gl/maps/ejemploPosadasMisiones",
  sitemap: "https://dibrikaconstrucciones.com.ar/sitemap.xml",
  privacy: "https://dibrikaconstrucciones.com.ar/politica-privacidad",
  terms: "https://dibrikaconstrucciones.com.ar/terminos-condiciones"
};

export default {
  contactInfo,
  navigationItems,
  servicesList,
  socialMedia,
  seoKeywords,
  siteUrls
};