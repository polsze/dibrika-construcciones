import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import SeoMeta from '../ui/SeoMeta';
import { siteUrls } from '../../data/navigation';



const Layout = ({ children, seoProps }) => {
  // Configuración de scripts de seguimiento (modo desarrollo/producción)
  const isProduction = import.meta.env.PROD;

  useEffect(() => {
    const handleScroll = () => {
      const backToTopButton = document.getElementById('back-to-top');
      if (!backToTopButton) return;
  
      if (window.scrollY > 300) {
        backToTopButton.classList.remove('opacity-0', 'pointer-events-none');
        backToTopButton.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        backToTopButton.classList.remove('opacity-100', 'pointer-events-auto');
        backToTopButton.classList.add('opacity-0', 'pointer-events-none');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  
  return (
      <div className="min-h-screen flex flex-col bg-white font-poppins">
        {/* Meta tags globales */}
        <SeoMeta {...seoProps} />
        
        {/* Google Tag Manager (solo en producción) */}
        {isProduction && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-XXXXXX');
                `
              }}
            />
            <noscript>
              <iframe 
                src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
                height="0" 
                width="0" 
                style={{display:'none', visibility:'hidden'}}
              ></iframe>
            </noscript>
          </>
        )}
        
        {/* Facebook Pixel (solo en producción) */}
        {isProduction && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', 'XXXXXXXXXXXXXXXX');
                fbq('track', 'PageView');
              `
            }}
          />
        )}
        
        {/* Header principal */}
        <Header />
        
        {/* Contenido principal */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* WhatsApp flotante - Siempre visible */}
        <a
  href={siteUrls.whatsapp}
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    if (window.fbq) {
      window.fbq('track', 'Contact', {
        content_name: 'WhatsApp Floating Button',
        content_category: 'WhatsApp'
      });
    }
  }}
  className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110 group"
  aria-label="Contactar por WhatsApp para presupuesto de construcción"
  title="WhatsApp - Consultas rápidas"
>
          <div className="relative">
            {/* Icono WhatsApp */}
            <svg 
              className="w-8 h-8" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
            </svg>
            
            {/* Badge de notificación */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
              1
            </span>
          </div>
          
          {/* Tooltip en hover */}
          <div className="absolute right-16 bottom-1/2 translate-y-1/2 bg-gray-900 text-white text-sm py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            ¡Consulta por tu presupuesto!
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        </a>
        
        {/* Botón para volver arriba */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-40 bg-primary text-white p-3 rounded-full shadow-xl hover:bg-primary-dark transition-all duration-300 opacity-0 pointer-events-none"
          id="back-to-top"
          aria-label="Volver arriba"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
        
        
      </div>
  );
};

// Propiedades por defecto
Layout.defaultProps = {
  seoProps: {
    title: "DIBRIKA Construcciones | Constructora en Posadas, Misiones",
    description: "Especialistas en construcción de viviendas, obra gris, refacciones y obras públicas en Posadas, Misiones. Calidad y confianza desde 2026.",
    keywords: "construcción de casas Posadas, empresa constructora Misiones, obra gris Posadas, refacciones de viviendas Misiones",
    canonical: "https://dibrikaconstrucciones.com.ar",
    ogImage: "/og-default.jpg"
  }
};



export default Layout;