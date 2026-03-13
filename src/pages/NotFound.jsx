import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';

const NotFound = () => {
  return (
    <main className="min-h-screen bg-brand-cream flex items-center justify-center px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-serif text-brand-tan/40">404</h1>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-green -mt-8 mb-6">
            Página no encontrada
          </h2>
          <p className="text-brand-dark/70 font-sans max-w-md mx-auto mb-10 leading-relaxed">
            Parece que el camino que buscabas no está disponible. 
            Permítenos ayudarte a retomar el camino hacia tu bienestar.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-brand-rose text-white px-8 py-3 rounded-full font-sans font-bold uppercase tracking-widest text-sm shadow-lg hover:bg-brand-rose/90 transition-all"
          >
            <HomeIcon size={18} /> Volver al Inicio
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;