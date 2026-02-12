import Layout from '../components/layout/Layout';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout seoProps={{
      title: "Página no encontrada | DIBRIKA Construcciones",
      description: "La página que buscas no existe. Regresa al inicio de DIBRIKA Construcciones en Posadas, Misiones."
    }}>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-9xl font-bold text-primary mb-4">404</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4 font-poppins">
              Página no encontrada
            </h1>
            <p className="text-gray-600 mb-8">
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            <div className="space-y-4">
              <a
                href="/"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Home className="mr-2 h-5 w-5" />
                Volver al inicio
              </a>
              <p className="text-sm text-gray-500">
                O navega por nuestro sitio usando el menú principal
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;