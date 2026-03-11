import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-brand-cream/20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Lado Imagen con un marco decorativo decorativo de agencia */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Cuadrado decorativo detrás de la foto */}
          <div className="absolute -top-4 -left-4 w-64 h-64 bg-brand-tan/20 rounded-2xl -z-10"></div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800" 
              alt="Lic. Ana Sol Pereyra Alvarez" 
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Badge flotante de experiencia */}
          <div className="absolute -bottom-6 -right-6 bg-brand-green p-6 rounded-xl shadow-lg text-white font-sans">
            <p className="text-3xl font-bold italic">Lic.</p>
            <p className="text-sm uppercase tracking-tighter">Kinesiología</p>
          </div>
        </motion.div>

        {/* Lado Texto */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-rose font-sans font-semibold uppercase tracking-widest text-sm">Trayectoria y Pasión</span>
          <h2 className="text-4xl font-serif text-brand-green mt-4 mb-6 leading-tight">
            Comprometida con tu <br /> bienestar integral.
          </h2>
          <div className="space-y-4 text-brand-dark/90 font-sans leading-relaxed">
            <p>
              Soy <strong>Ana Sol Pereyra Alvarez</strong>, Licenciada en Kinesiología y Fisioterapia. 
              Mi enfoque se basa en entender que cada cuerpo tiene una historia única y merece un camino de recuperación adaptado a sus necesidades.
            </p>
            <p>
              A lo largo de mi carrera, me he especializado en técnicas de rehabilitación 
              que combinan la evidencia científica con un trato cálido y humano, 
              buscando no solo aliviar el dolor, sino devolver la autonomía a mis pacientes.
            </p>
          </div>
          
          <button className="mt-8 border-b-2 border-brand-rose text-brand-rose font-sans font-bold hover:text-brand-green hover:border-brand-green transition-all pb-1 uppercase text-sm tracking-widest">
            Conoce mi formación
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;