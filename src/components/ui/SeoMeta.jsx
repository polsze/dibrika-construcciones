import { Helmet } from 'react-helmet-async';

/**
 * Componente para manejar meta tags SEO dinámicas
 * @param {Object} props - Propiedades SEO
 * @param {string} props.title - Título de la página (máx 60 caracteres)
 * @param {string} props.description - Descripción (máx 160 caracteres)
 * @param {string} props.keywords - Palabras clave separadas por comas
 * @param {string} props.canonical - URL canónica
 * @param {string} props.ogImage - Imagen para Open Graph (default: /og-default.jpg)
 * @param {string} props.type - Tipo Open Graph (website/article/product)
 * @param {Object} props.schema - Schema markup adicional
 */
const SeoMeta = ({ 
  title = "DIBRIKA Construcciones | Constructora Posadas, Misiones",
  description = "Constructora de viviendas en Posadas, Misiones. Ofrecemos financiamiento y entrega rápida. Tu casa lista con calidad y confianza desde 2012",
  keywords = "construcción de casas Posadas, empresa constructora Misiones, obra gris Posadas, refacciones de viviendas Misiones, construcción de viviendas Posadas, constructora en Posadas, obras públicas Misiones",
  canonical = "https://dibrikaconstrucciones.com.ar",
  ogImage = "/og-default.jpg",
  type = "website",
  schema = null
}) => {
  // URL completa para Open Graph
  const siteUrl = "https://dibrikaconstrucciones.com.ar";
  const fullImageUrl = `${siteUrl}${ogImage}`;
  
  // Schema markup base para empresa constructora
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "name": "DIBRIKA Construcciones",
    "description": "Empresa constructora especializada en viviendas, obra gris, refacciones y obras públicas en Posadas, Misiones. Ofrecemos financiamiento y entrega rápida.",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "telephone": "+543764123456",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bº Altos de Bella Vista",
      "addressLocality": "Posadas",
      "addressRegion": "Misiones",
      "addressCountry": "AR",
      "postalCode": "3300"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-27.362137",
      "longitude": "-55.900875"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-27.362137",
        "longitude": "-55.900875"
      },
      "geoRadius": "50000"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61577245474536&locale=es_LA",
      "https://www.instagram.com/dibrika__construcciones/"
    ]
  };

  // Combinar schema base con schema personalizado
  const finalSchema = schema ? { ...baseSchema, ...schema } : baseSchema;

  return (
    <Helmet>
      {/* Meta tags básicas */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="DIBRIKA Construcciones - Proyectos en Posadas, Misiones" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:site_name" content="DIBRIKA Construcciones" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@dibrikaconst" />
      
      {/* Geo tags para SEO local Posadas, Misiones */}
      <meta name="geo.region" content="AR-N" />
      <meta name="geo.placename" content="Posadas, Misiones" />
      <meta name="geo.position" content="-27.362137;-55.900875" />
      <meta name="ICBM" content="-27.362137, -55.900875" />
      
      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      
      {/* Structured Data - Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
      
      {/* Idioma */}
      <meta httpEquiv="content-language" content="es-AR" />
      
      {/* Autor */}
      <meta name="author" content="DIBRIKA Construcciones" />
      
      {/* Alternate languages si existieran */}
      <link rel="alternate" hrefLang="es" href={canonical} />
    </Helmet>
  );
};

// Propiedades por defecto para diferentes páginas
SeoMeta.defaultProps = {
  keywords: "construcción de casas Posadas, empresa constructora Misiones, obra gris Posadas, refacciones de viviendas Misiones, construcción de viviendas Posadas, constructora en Posadas, obras públicas Misiones, quinchos y piletas Posadas, presupuesto construcción Misiones, construcción piletas en Posadas",
};

export default SeoMeta;