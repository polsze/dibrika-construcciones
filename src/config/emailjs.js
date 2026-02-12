// EmailJS Configuration
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};

// Emails de la empresa
export const COMPANY_EMAILS = {
  INFO: "favio.cardo@gmail.com",
  PRESUPUESTOS: "favio.cardo@gmail.com",
  ADMIN: "favio.cardo@gmail.com"
};

// Verificar que las variables de entorno estén definidas
export const validateEmailJSConfig = () => {
  const missingVars = [];
  
  if (!EMAILJS_CONFIG.PUBLIC_KEY) missingVars.push('VITE_EMAILJS_PUBLIC_KEY');
  if (!EMAILJS_CONFIG.SERVICE_ID) missingVars.push('VITE_EMAILJS_SERVICE_ID');
  if (!EMAILJS_CONFIG.TEMPLATE_ID) missingVars.push('VITE_EMAILJS_TEMPLATE_ID');
  
  if (missingVars.length > 0) {
    console.error(
      '❌ Error: Variables de entorno de EmailJS no definidas:\n',
      missingVars.join('\n'),
      '\n\n📌 Creá un archivo .env en la raíz del proyecto con:\n',
      'VITE_EMAILJS_PUBLIC_KEY=tu_public_key\n',
      'VITE_EMAILJS_SERVICE_ID=tu_service_id\n',
      'VITE_EMAILJS_TEMPLATE_ID=tu_template_id'
    );
    return false;
  }
  
  return true;
};