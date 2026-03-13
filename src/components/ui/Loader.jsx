import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-brand-cream flex flex-col items-center justify-center"
    >
      {/* Elemento animado: Un círculo elegante que se expande y contrae */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="w-24 h-24 border-2 border-brand-green rounded-full flex items-center justify-center mb-4"
      >
         <span className="font-serif text-brand-green font-bold text-xl tracking-tighter">LUMARE</span>
      </motion.div>

      {/* Texto de carga sutil */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xs uppercase tracking-[0.3em] text-brand-green/60 font-sans"
      >
        Cargando Bienestar
      </motion.p>
    </motion.div>
  );
};

export default Loader;