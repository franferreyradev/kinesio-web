import { motion } from 'framer-motion';
import { Calendar, MessageCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="bg-brand-green rounded-[4rem] relative overflow-hidden shadow-2xl">
          
          {/* Elementos Decorativos de Fondo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-rose/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center">
            
            {/* Texto e Invitación */}
            <div className="p-10 md:p-20 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                  ¿Lista para volver a <br />
                  <span className="italic text-brand-tan">sentirte bien?</span>
                </h2>
                <p className="mt-6 text-brand-cream/80 font-sans text-lg max-w-md">
                  No permitas que el dolor limite tu vida. Juntos diseñaremos un plan de rehabilitación que se adapte a tu ritmo y objetivos.
                </p>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <button className="flex items-center justify-center gap-3 bg-brand-tan text-white px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-brand-green transition-all shadow-lg group">
                  <Calendar size={18} className="group-hover:scale-110 transition-transform" />
                  Reservar Turno
                </button>
                
                <button className="flex items-center justify-center gap-3 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-xs hover:bg-white/20 transition-all">
                  <MessageCircle size={18} />
                  Consultar por WhatsApp
                </button>
              </motion.div>
            </div>

            {/* Imagen con el efecto "Breaking the Container" inverso */}
            <div className="hidden lg:block relative h-full min-h-[500px]">
              <motion.div 
                className="absolute inset-0 top-12 -right-12"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                  alt="Atención kinésica" 
                  className="w-full h-full object-cover rounded-tl-[5rem] shadow-[-20px_0_50px_rgba(0,0,0,0.3)] border-l-8 border-t-8 border-brand-green"
                />
              </motion.div>
            </div>

          </div>
        </div>
        
        {/* Frase final fuera del box para airear el diseño */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12 font-serif italic text-brand-tan/60 text-xl"
        >
          "Tu cuerpo es tu templo, cuidarlo es el primer paso hacia la libertad."
        </motion.p>
      </div>
    </section>
  );
};

export default CTASection;