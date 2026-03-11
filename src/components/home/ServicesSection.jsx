import { motion } from 'framer-motion';

// Datos de los servicios - Fáciles de editar
const services = [
  {
    title: "Kinesiología Deportiva",
    desc: "Recuperación de lesiones y optimización del rendimiento para atletas.",
    icon: "🏃‍♀️"
  },
  {
    title: "Fisioterapia Manual",
    desc: "Técnicas especializadas para el alivio del dolor crónico y movilidad.",
    icon: "👐"
  },
  {
    title: "Rehabilitación Post-Quirúrgica",
    desc: "Acompañamiento integral para una recuperación segura y efectiva.",
    icon: "🩺"
  }
];

// Configuración de la animación del contenedor (padre)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Tiempo entre la aparición de cada hijo
    }
  }
};

// Configuración de cada tarjeta (hijo)
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ServicesSection = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-green mb-4">Especialidades</h2>
          <div className="w-16 h-1 [background:var(--color-brand-rose)] mx-auto"></div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Se activa al hacer scroll
          viewport={{ once: true, amount: 0.2 }} // Solo ocurre una vez
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="p-8 border border-brand-tan/30 rounded-2xl bg-brand-cream/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-serif text-brand-rose mb-3">{service.title}</h3>
              <p className="text-brand-dark/80 leading-relaxed font-sans text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;