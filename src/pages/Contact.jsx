import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    // Simulación de envío a una API o servicio de mail
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Datos capturados:", data);
    alert("¡Mensaje enviado con éxito! Ana Sol se contactará pronto.");
  };

  return (
    <main className="min-h-screen bg-brand-cream/10 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Información Lateral */}
        <div className="bg-brand-green p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-serif mb-6">Comencemos tu recuperación</h2>
            <p className="font-sans text-brand-cream/80 mb-8 italic">
              "El movimiento es una medicina para crear cambios en los estados físicos, emocionales y mentales."
            </p>
          </div>
          
          <div className="space-y-4 font-sans text-sm">
            <p>📍 Córdoba, Argentina</p>
            <p>📞 +54 9 351 XXX-XXXX</p>
            <p>📧 contacto@anasol.com</p>
          </div>
        </div>

        {/* Formulario Real */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-12 space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-brand-dark/60 mb-2 font-bold">Nombre Completo</label>
            <input 
              {...register("name", { required: "El nombre es obligatorio" })}
              className={`w-full border-b-2 p-2 outline-none transition-colors ${errors.name ? 'border-red-400' : 'border-brand-tan/30 focus:border-brand-rose'}`}
              placeholder="Ej: Juan Pérez"
            />
            {errors.name && <span className="text-red-400 text-xs mt-1">{errors.name.message}</span>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-brand-dark/60 mb-2 font-bold">WhatsApp</label>
            <input 
              {...register("phone", { required: "Necesitamos un contacto" })}
              className="w-full border-b-2 border-brand-tan/30 focus:border-brand-rose p-2 outline-none transition-colors"
              placeholder="+54 9..."
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-brand-dark/60 mb-2 font-bold">Consulta</label>
            <textarea 
              {...register("message")}
              rows="4"
              className="w-full border-2 border-brand-tan/10 focus:border-brand-rose p-3 rounded-xl outline-none transition-colors resize-none"
              placeholder="¿En qué puedo ayudarte?"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className={`w-full py-4 rounded-full text-white font-sans uppercase tracking-widest text-sm shadow-lg transition-all ${isSubmitting ? 'bg-gray-400' : 'bg-brand-rose hover:bg-brand-rose/90'}`}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
          </motion.button>
        </form>
      </div>
    </main>
  );
};

export default Contact;