import { motion } from 'framer-motion';
import { 
  Instagram, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUpRight,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open(`https://wa.me/tu_numero_aqui?text=Hola%20Ana%20Sol!%20Te%20contacto%20desde%20tu%20web.`, '_blank');
  };

  return (
    // Usamos el color brand-dark (chocolate) como fondo principal
    <footer className="bg-[#2D1B14] text-white pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Grilla Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Columna 1: Branding */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif italic text-brand-cream">Ana Sol</h3>
            <p className="text-brand-cream/60 font-sans text-sm leading-relaxed max-w-[200px]">
              Kinesiología boutique enfocada en el bienestar integral y la salud en movimiento.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="p-3 bg-white/10 rounded-full text-brand-cream hover:bg-brand-rose transition-all border border-white/10">
                <Instagram size={18} />
              </a>
              <button onClick={handleWhatsApp} className="p-3 bg-white/10 rounded-full text-brand-cream hover:bg-brand-rose transition-all border border-white/10">
                <Phone size={18} />
              </button>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold uppercase tracking-[0.2em] text-[10px] text-brand-rose">Explorar</h4>
            <ul className="space-y-4">
              {['Home', 'Servicios', 'Blog'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="group flex items-center gap-2 text-brand-cream/80 font-serif text-lg hover:text-white transition-colors"
                  >
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-rose" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold uppercase tracking-[0.2em] text-[10px] text-brand-rose">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-rose mt-1 shrink-0" size={18} />
                <p className="text-brand-cream/70 text-sm font-sans leading-relaxed">
                  Calle Principal 123, <br />
                  Consultorio 4B, Córdoba.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-brand-rose shrink-0" size={18} />
                <p className="text-brand-cream/70 text-sm font-sans">hola@anasol.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-brand-rose shrink-0" size={18} />
                <p className="text-brand-cream/70 text-sm font-sans">+54 9 351 000 0000</p>
              </div>
            </div>
          </div>

          {/* Columna 4: Horarios */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold uppercase tracking-[0.2em] text-[10px] text-brand-rose">Atención</h4>
            <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="text-brand-rose mt-1" size={16} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-cream/40">Lunes a Viernes</p>
                  <p className="text-brand-cream font-serif text-lg">09:00 - 20:00</p>
                </div>
              </div>
              <div className="h-[1px] bg-white/10 w-full"></div>
              <p className="text-[10px] text-brand-cream/30 italic font-sans leading-tight">
                Sesiones personalizadas con turno previo.
              </p>
            </div>
          </div>

        </div>

        {/* Barra Inferior */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-cream/40">
            © {currentYear} Ana Sol Kinesiología — Todos los derechos reservados.
          </p>
          <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-cream/20 flex items-center gap-2">
            Hecho con <Heart size={10} className="text-brand-rose fill-brand-rose" /> para Ana
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;