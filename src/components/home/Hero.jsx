import { motion } from 'framer-motion';
import logo from '../../assets/logo_sin_titulo2.png'; // Ajusta la extensión si es .jpeg
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-20 text-center bg-brand-cream">
      {/* Contenedor de la imagen con animación sutil */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <img 
          src={logo} 
          alt="Ana Sol Pereyra Alvarez Logo" 
          className="w-48 md:w-64 h-auto drop-shadow-sm"
        />
      </motion.div>

      {/* Texto Principal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-serif text-brand-green mb-4">
          Excelencia en Movimiento
        </h1>
        <p className="text-lg md:text-xl font-sans text-brand-dark max-w-2xl mx-auto leading-relaxed">
          Lic. en Kinesiología y Fisioterapia dedicada a tu bienestar integral 
          y recuperación personalizada.
        </p>
        
        {/* Botón de Acción (CTA) */}
        <div className="mt-10">
          <Link to="/servicios" className="px-8 py-3 bg-brand-rose text-white font-sans uppercase tracking-widest text-sm hover:bg-brand-rose/90 transition-all rounded-full shadow-lg">
            Ver Servicios
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;