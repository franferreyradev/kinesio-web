import { motion } from 'framer-motion';
import { Activity, Wind, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Rehabilitación Deportiva",
    description: "Recuperación optimizada para atletas de todos los niveles, enfocada en volver al campo con más fuerza.",
    icon: <Activity size={32} />,
    color: "bg-brand-green/10"
  },
  {
    title: "Kinesiología Respiratoria",
    description: "Tratamientos especializados para mejorar la función pulmonar y la calidad de vida respiratoria.",
    icon: <Wind size={32} />,
    color: "bg-brand-tan/10"
  },
  {
    title: "Terapia Manual",
    description: "Técnicas manuales precisas para aliviar el dolor crónico y restaurar la movilidad articular.",
    icon: <Heart size={32} />,
    color: "bg-brand-rose/10"
  },
  {
    title: "Drenaje Linfático",
    description: "Estimulación del sistema linfático para reducir inflamaciones y mejorar la circulación post-quirúrgica.",
    icon: <Sparkles size={32} />,
    color: "bg-brand-cream"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-brand-cream/10 px-6 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-tan/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-rose font-sans font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Nuestras Especialidades
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-brand-green"
          >
            Servicios <span className="italic">Personalizados</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-tan/5 flex flex-col h-full group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-brand-green mb-8 group-hover:bg-brand-green group-hover:text-white transition-colors duration-500 shadow-inner`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-serif text-brand-green mb-4">{service.title}</h3>
              <p className="text-brand-dark/60 font-sans text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              
              <Link 
                to="/servicios" 
                className="flex items-center gap-2 text-brand-rose font-bold uppercase tracking-widest text-[10px] hover:gap-4 transition-all"
              >
                Saber más <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Link 
            to="/servicios" 
            className="inline-block bg-transparent border-2 border-brand-green text-brand-green px-10 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-xs hover:bg-brand-green hover:text-white transition-all shadow-md"
          >
            Ver todos los tratamientos
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;