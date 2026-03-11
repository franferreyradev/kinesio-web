import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "5493512345678"; // Reemplaza con el número real de Ana
  const message = encodeURIComponent("Hola Ana Sol! Vi tu página web y me gustaría consultar por un turno de kinesiología.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        transition: { delay: 1 } 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Tooltip lateral que aparece al hacer hover */}
      <span className="absolute right-16 bg-white text-brand-dark text-xs font-bold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none whitespace-nowrap">
        ¿Consultas? Escribime
      </span>
      
      {/* Animación de pulso detrás del botón */}
      <motion.span 
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-[#25D366] rounded-full -z-10"
      />
      
      <MessageCircle size={28} fill="currentColor" />
    </motion.a>
  );
};

export default WhatsAppButton;