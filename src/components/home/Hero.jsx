import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-cream/30 pt-48 md:pt-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Columna de Texto */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="text-brand-rose font-sans font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
            Sol Pereyra | Centro de Bienestar Integral
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-brand-green leading-[1.1] mb-6">
            Tu mejor <br /> 
            <span className="italic">versión</span> empieza aca.
          </h1>
          <p className="text-lg text-brand-dark/70 font-sans max-w-lg mb-10 leading-relaxed">
            Kinesiología, fisioterapia y estética en un mismo espacio, con tratamientos personalizados enfocados en la recuperación, el cuidado del cuerpo y lograr resultados reales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contacto" className="bg-brand-green text-white px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-brand-rose transition-all flex items-center justify-center gap-2">
              Reserva una consulta <ChevronRight size={16} />
            </Link>
            <Link to="/servicios" className="border border-brand-green/20 text-brand-green px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-xs hover:bg-white transition-all text-center">
              Ver servicios
            </Link>
          </div>
        </motion.div>

        {/* Columna de Imagen con Estética de Agencia */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Elemento decorativo detrás */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-tan/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
              alt="Bienestar y salud" 
              className="w-full h-[500px] object-cover"
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-brand-green/5"></div>
          </div>

          {/* Card Flotante (Social Proof rápido) */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-cream rounded-full flex items-center justify-center text-brand-rose">
                ✨
              </div>
              <div>
                <p className="text-xs font-bold text-brand-dark uppercase tracking-tighter">Damos el primer paso?</p>
                <p className="text-[10px] text-brand-dark/50 italic">Personalizado para vos</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;