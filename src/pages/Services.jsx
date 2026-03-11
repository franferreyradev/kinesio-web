import { motion } from 'framer-motion';
import { Activity, Heart, Users, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const allServices = [
  {
    id: 'kinesio-deportiva',
    title: "Kinesiología Deportiva",
    description: "Especializada en la prevención y tratamiento de lesiones derivadas de la práctica deportiva. Orientado a atletas de alto rendimiento y aficionados.",
    benefits: ["Retorno seguro al deporte", "Optimización del gesto técnico", "Prevención de recidivas"],
    icon: <Activity className="text-brand-rose" size={32} />
  },
  {
    id: 'fisioterapia-manual',
    title: "Fisioterapia Manual",
    description: "Técnicas de terapia manual ortopédica para tratar disfunciones músculo-esqueléticas, dolor de espalda y cervicalgias.",
    benefits: ["Alivio inmediato del dolor", "Mejora del rango de movimiento", "Reducción de la tensión muscular"],
    icon: <Heart className="text-brand-rose" size={32} />
  },
  {
    id: 'rehabilitacion',
    title: "Rehabilitación Integral",
    description: "Tratamientos personalizados para recuperación post-quirúrgica o afecciones crónicas, con seguimiento constante.",
    benefits: ["Plan adaptado a tu ritmo", "Ejercicios terapéuticos", "Educación del paciente"],
    icon: <Users className="text-brand-rose" size={32} />
  }
];

const Services = () => {
  return (
    <main className="pt-24 bg-brand-cream/10">
      {/* Header de la Página */}
      <section className="py-16 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-brand-green mb-6">Propuestas de Bienestar</h1>
          <p className="text-brand-dark/70 font-sans leading-relaxed">
            Cada tratamiento comienza con una evaluación exhaustiva para diseñar el camino 
            más efectivo hacia tu recuperación y máximo potencial físico.
          </p>
        </motion.div>
      </section>

      {/* Listado Detallado de Servicios */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {allServices.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-8 p-8 bg-white rounded-3xl shadow-sm border border-brand-tan/10 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-4">
                <div className="bg-brand-cream w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-serif text-brand-green">{service.title}</h2>
                <p className="text-brand-dark/80 font-sans leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-brand-dark/60 font-sans">
                      <div className="w-1.5 h-1.5 bg-brand-tan rounded-full mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                   <Link to="/contacto" className="inline-flex items-center text-brand-rose font-bold text-sm uppercase tracking-widest hover:gap-2 transition-all">
                    Consultar por este servicio <ArrowRight size={16} className="ml-2" />
                   </Link>
                </div>
              </div>
              <div className="flex-1 w-full h-64 bg-brand-cream/30 rounded-2xl overflow-hidden">
                {/* Placeholder para fotos reales de cada servicio */}
                <div className="w-full h-full flex items-center justify-center text-brand-tan italic">
                  [Imagen de {service.title}]
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Banner de Cierre (CTA Final) */}
      <section className="py-20 px-6">
        <motion.div 
          whileInView={{ scale: [0.95, 1] }}
          className="max-w-4xl mx-auto bg-brand-green p-12 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">¿Listo para dar el primer paso?</h2>
            <p className="mb-10 text-brand-cream/80 font-sans max-w-xl mx-auto">
              La disponibilidad de turnos es limitada para garantizar una atención 100% personalizada. 
              Reserva tu consulta inicial hoy mismo.
            </p>
            <Link 
              to="/contacto" 
              className="bg-white text-brand-green px-10 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-sm hover:bg-brand-rose hover:text-white transition-all inline-flex items-center gap-3"
            >
              <Calendar size={18} /> Agendar Turno
            </Link>
          </div>
          {/* Círculo decorativo de fondo */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full" />
        </motion.div>
      </section>
    </main>
  );
};

export default Services;