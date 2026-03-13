import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Datos capturados:", data);
    alert("¡Mensaje enviado con éxito! Ana Sol se contactará pronto.");
  };

  return (
    // Hemos aumentado el padding superior (pt-40) para dar espacio al nuevo logo del Navbar
    <main className="min-h-screen bg-brand-cream/10 pt-40 pb-20 px-6 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
      >
        
        {/* Información Lateral - Branding Section */}
        <div className="bg-brand-green p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Círculo decorativo de fondo para toque de agencia */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">Comencemos tu recuperación</h2>
            <div className="w-12 h-1 bg-brand-rose mb-8"></div>
            <p className="font-sans text-brand-cream/80 mb-8 italic text-lg leading-relaxed">
              "El movimiento es una medicina para crear cambios en los estados físicos, emocionales y mentales."
            </p>
          </div>
          
          <div className="relative z-10 space-y-6 font-sans text-sm tracking-wide">
            <div className="flex items-center gap-4">
              <span className="text-xl">📍</span>
              <p>Córdoba, Argentina</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl">📞</span>
              <p>+54 9 351 XXX-XXXX</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl">📧</span>
              <p className="lowercase">contacto@anasol.com</p>
            </div>
          </div>
        </div>

        {/* Formulario de Captación */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-10 md:p-14 space-y-8 bg-white">
          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-dark/50 font-bold">Nombre Completo</label>
            <input 
              {...register("name", { required: "El nombre es obligatorio" })}
              className={`w-full border-b-2 p-3 outline-none transition-all duration-300 bg-transparent ${
                errors.name ? 'border-red-400' : 'border-brand-tan/20 focus:border-brand-rose'
              }`}
              placeholder="Ej: Juan Pérez"
            />
            {errors.name && <span className="text-red-400 text-[10px] uppercase font-bold">{errors.name.message}</span>}
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-dark/50 font-bold">WhatsApp</label>
            <input 
              {...register("phone", { required: "Necesitamos un contacto" })}
              className="w-full border-b-2 border-brand-tan/20 focus:border-brand-rose p-3 outline-none transition-all duration-300 bg-transparent"
              placeholder="+54 9..."
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-dark/50 font-bold">Tu Consulta</label>
            <textarea 
              {...register("message")}
              rows="3"
              className="w-full border-2 border-brand-tan/10 focus:border-brand-rose p-4 rounded-2xl outline-none transition-all duration-300 bg-brand-cream/5 resize-none shadow-inner"
              placeholder="¿Cómo podemos ayudarte?"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: '#b68d7a' }} // Hover color rose un poco más oscuro
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className={`w-full py-5 rounded-full text-white font-sans uppercase tracking-[0.2em] text-xs font-bold shadow-xl transition-all ${
              isSubmitting ? 'bg-gray-400' : 'bg-brand-rose'
            }`}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
          </motion.button>
        </form>
      </motion.div>
    </main>
  );
};

export default Contact;