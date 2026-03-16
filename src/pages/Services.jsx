import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Plus, 
  Minus, 
  ArrowUpRight, 
  Activity, 
  Wind, 
  Heart 
} from 'lucide-react';

// Datos de servicios con sus subservicios específicos
const servicesData = [
  {
    id: "rehabilitacion-deportiva",
    title: "Rehabilitación Deportiva",
    subtitle: "Vuelve al campo con más fuerza",
    description: "Tratamientos especializados para atletas y personas activas. Nos enfocamos en la recuperación funcional y la optimización del rendimiento físico.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=1000",
    icon: <Activity size={24} />,
    subservices: [
      { name: "Punción Seca", desc: "Tratamiento de puntos gatillo para eliminar contracturas profundas." },
      { name: "Vendaje Neuromuscular", desc: "Soporte elástico que ayuda a la estabilidad sin limitar el movimiento." },
      { name: "Readaptación al Gesto Deportivo", desc: "Ejercicios específicos para volver a tu deporte sin miedo a recaer." }
    ]
  },
  {
    id: "kinesiologia-respiratoria",
    title: "Kinesiología Respiratoria",
    subtitle: "Mejora tu capacidad vital",
    description: "Técnicas manuales y ejercicios diseñados para mejorar la función pulmonar y la mecánica respiratoria.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
    icon: <Wind size={24} />,
    subservices: [
      { name: "Higiene Bronquial", desc: "Técnicas para facilitar la eliminación de secreciones." },
      { name: "Reeducación Diafragmática", desc: "Optimización del uso del músculo principal de la respiración." },
      { name: "Entrenamiento de Músculos Inspiratorios", desc: "Fortalecimiento específico para mejorar la resistencia." }
    ]
  },
  {
    id: "terapia-manual",
    title: "Terapia Manual Integrada",
    subtitle: "Alivio preciso y humano",
    description: "Abordaje integral del dolor mediante manipulaciones articulares y técnicas de tejido blando para restaurar el movimiento.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000",
    icon: <Heart size={24} />,
    subservices: [
      { name: "Movilización Articular", desc: "Técnicas suaves para recuperar el rango de movimiento perdido." },
      { name: "Masaje Terapéutico", desc: "Tratamiento de tejidos blandos para reducir el estrés neuromuscular." },
      { name: "Osteopatía sutil", desc: "Enfoque holístico para equilibrar las tensiones del cuerpo." }
    ]
  }
];

const Services = () => {
  const [activeSub, setActiveSub] = useState(null);

  // Función para manejar el mensaje de WhatsApp dinámico
  const handleWhatsApp = (serviceTitle, subName = "") => {
    const baseMessage = `Hola Ana Sol! Me gustaría consultar por el servicio de ${serviceTitle}`;
    const subMessage = subName ? ` específicamente sobre ${subName}` : "";
    const finalMessage = encodeURIComponent(`${baseMessage}${subMessage}.`);
    window.open(`https://wa.me/tu_numero_aqui?text=${finalMessage}`, '_blank');
  };

  return (
    <div className="pt-32 md:pt-44 pb-24 bg-brand-cream/20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header de la página */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-rose font-sans font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block"
          >
            Nuestras Especialidades
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-brand-green italic"
          >
            Tratamientos <br /> <span className="not-italic">Integrales</span>
          </motion.h1>
          <p className="mt-8 text-brand-dark/60 max-w-xl mx-auto font-sans leading-relaxed">
            Cada paciente es único. Diseñamos planes de rehabilitación personalizados basados en la evidencia científica y la calidez humana.
          </p>
        </div>

        {/* Listado de Servicios (Z-Pattern) */}
        <div className="space-y-40">
          {servicesData.map((service, index) => (
            <div 
              key={service.id}
              className={`flex flex-col gap-16 items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Contenedor de Imagen */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 relative"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-brand-green/10 rounded-[3.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="relative z-10 w-full aspect-square object-cover rounded-[3.5rem] shadow-2xl border-8 border-white"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-brand-rose p-6 rounded-3xl text-white shadow-xl z-20 hidden md:block">
                    {service.icon}
                  </div>
                </div>
              </motion.div>

              {/* Contenedor de Texto y Subservicios */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-brand-rose">
                    <span className="font-sans font-bold uppercase tracking-widest text-[10px]">
                      {service.subtitle}
                    </span>
                  </div>
                  <h2 className="text-4xl font-serif text-brand-green">{service.title}</h2>
                  <p className="text-brand-dark/70 font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Desglose de Subservicios (Acordeón) */}
                <div className="pt-4 space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-tan border-b border-brand-tan/20 pb-2">
                    Tratamientos Específicos
                  </h4>
                  
                  {service.subservices.map((sub, sIdx) => {
                    const uniqueId = `${service.id}-${sIdx}`;
                    const isOpen = activeSub === uniqueId;

                    return (
                      <div 
                        key={uniqueId}
                        className={`transition-all duration-300 ${isOpen ? 'bg-white rounded-3xl p-6 shadow-sm' : 'bg-transparent'}`}
                      >
                        <button 
                          onClick={() => setActiveSub(isOpen ? null : uniqueId)}
                          className="w-full flex justify-between items-center text-left"
                        >
                          <span className={`font-serif text-xl ${isOpen ? 'text-brand-rose' : 'text-brand-green'}`}>
                            {sub.name}
                          </span>
                          {isOpen ? <Minus size={18} className="text-brand-rose" /> : <Plus size={18} className="text-brand-tan" />}
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <p className="text-brand-dark/60 text-sm font-sans mt-4 leading-relaxed">
                                {sub.desc}
                              </p>
                              <button 
                                onClick={() => handleWhatsApp(service.title, sub.name)}
                                className="mt-4 flex items-center gap-2 text-[10px] font-bold text-brand-green uppercase tracking-widest hover:text-brand-rose transition-colors"
                              >
                                Consultar tratamiento <ArrowUpRight size={14} />
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-6">
                   <button 
                    onClick={() => handleWhatsApp(service.title)}
                    className="px-10 py-4 bg-brand-green text-white rounded-full font-sans font-bold uppercase tracking-widest text-[10px] hover:bg-brand-rose transition-all shadow-lg w-full md:w-auto"
                   >
                    Consulta General
                   </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;