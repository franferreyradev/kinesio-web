import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BookOpen, RotateCcw, ChevronDown } from 'lucide-react';

const AboutSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const academicInfo = [
    { title: "Lic. en Kinesiología y Fisioterapia", institution: "Universidad Nacional de Córdoba" },
    { title: "Especialista en Rehabilitación Deportiva", institution: "Certificación Internacional" },
    { title: "Postgrado en Terapia Manual", institution: "Asociación Argentina de Kinesiología" },
    { title: "Matrícula Profesional", institution: "M.P. XXXX / Córdoba" }
  ];

  return (
    <section className="py-24 md:py-40 bg-white px-6 overflow-visible">
      <div className="max-w-6xl mx-auto">
        
        {/* --- VERSIÓN DESKTOP (Flip Card con Breaking the Container) --- */}
        <div className="hidden md:block relative [perspective:2000px] h-[550px] w-full">
          <motion.div
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 15 }}
            className="w-full h-full relative [transform-style:preserve-3d]"
          >
            
            {/* CARA FRONTAL */}
            <div 
              className={`absolute inset-0 w-full h-full [backface-visibility:hidden] z-10 ${isFlipped ? 'pointer-events-none' : 'pointer-events-auto'}`}
              style={{ transform: 'rotateY(0deg)' }}
            >
              <div className="grid grid-cols-2 gap-16 items-center bg-brand-cream/20 p-12 rounded-[3.5rem] h-full shadow-sm">
                
                {/* Imagen que rompe el contenedor (Efecto Pro) */}
                <div className="relative -mt-24 -mb-12 h-[120%]">
                  <div className="h-full rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-8 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000" 
                      alt="Lic. Ana Sol" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="space-y-8">
                  <h2 className="text-5xl font-serif text-brand-green leading-tight">Sobre Mí</h2>
                  <p className="text-brand-dark/70 font-sans text-lg leading-relaxed">
                    Soy Ana Sol, profesional enfocada en la rehabilitación personalizada y el bienestar físico. 
                    Mi enfoque combina la evidencia científica con una atención humana y empática para asegurar tu recuperación.
                  </p>
                  <button 
                    onClick={() => setIsFlipped(true)}
                    className="flex items-center gap-4 bg-brand-green text-white px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-xs hover:bg-brand-rose transition-all shadow-lg"
                  >
                    Conoce mi formación <Award size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* CARA POSTERIOR */}
            <div 
              className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-brand-green rounded-[3.5rem] p-16 text-white shadow-2xl flex flex-col justify-center"
              style={{ transform: 'rotateY(180deg)' }}
            >
              <div className="flex justify-between items-center mb-12">
                <h3 className="text-4xl font-serif italic text-brand-cream">Trayectoria Académica</h3>
                <button 
                  onClick={() => setIsFlipped(false)}
                  className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all text-brand-rose"
                >
                  <RotateCcw size={28} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {academicInfo.map((edu, index) => (
                  <div key={index} className="bg-white/10 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <BookOpen className="text-brand-rose mb-4" size={28} />
                    <p className="font-sans font-bold text-lg mb-1">{edu.title}</p>
                    <p className="font-sans text-brand-cream/60 text-sm">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

        {/* --- VERSIÓN MOBILE (Acordeón Seguro) --- */}
        <div className="md:hidden space-y-10">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-serif text-brand-green italic">Sobre Mí</h2>
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-brand-cream">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000" 
                alt="Lic. Ana Sol" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-brand-dark/70 font-sans leading-relaxed text-center px-4">
              Soy Ana Sol, profesional enfocada en la rehabilitación personalizada y el bienestar físico.
            </p>
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-full flex justify-between items-center bg-brand-green p-6 rounded-2xl font-sans font-bold text-white uppercase tracking-widest text-xs shadow-lg"
            >
              Ver formación académica
              <motion.div animate={{ rotate: isFlipped ? 180 : 0 }}>
                <ChevronDown size={20} />
              </motion.div>
            </button>

            <AnimatePresence>
              {isFlipped && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden space-y-3"
                >
                  {academicInfo.map((edu, index) => (
                    <div key={index} className="bg-brand-cream/30 p-5 rounded-2xl border border-brand-tan/10 shadow-sm">
                      <p className="font-sans font-bold text-brand-green text-sm">{edu.title}</p>
                      <p className="font-sans text-brand-dark/50 text-xs">{edu.institution}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;