import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-brand-dark text-brand-cream py-16 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-brand-cream/10 pb-12">
      <div className="space-y-4">
        <h3 className="font-serif text-2xl">Ana Sol</h3>
        <p className="text-sm opacity-70 leading-relaxed font-sans">
          Licenciada en Kinesiología y Fisioterapia. <br />
          Matrícula Profesional XXXX.
        </p>
      </div>
      
      <div className="space-y-4">
        <h4 className="font-sans font-bold text-xs uppercase tracking-widest">Navegación</h4>
        <ul className="text-sm space-y-2 opacity-70 font-sans">
          <li><a href="/" className="hover:text-brand-rose transition-colors">Inicio</a></li>
          <li><a href="/servicios" className="hover:text-brand-rose transition-colors">Servicios</a></li>
          <li><a href="/contacto" className="hover:text-brand-rose transition-colors">Contacto</a></li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="font-sans font-bold text-xs uppercase tracking-widest">Redes</h4>
        <div className="flex space-x-4">
          <a href="#" className="p-2 bg-brand-cream/5 rounded-full hover:bg-brand-rose transition-colors"><Instagram size={20} /></a>
          <a href="#" className="p-2 bg-brand-cream/5 rounded-full hover:bg-brand-rose transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="p-2 bg-brand-cream/5 rounded-full hover:bg-brand-rose transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </div>
    
    <div className="max-w-6xl mx-auto mt-8 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] opacity-40">
      <p>© 2026 Ana Sol Pereyra Alvarez. Todos los derechos reservados.</p>
      <p>Hecho con ❤️ para Ana</p>
    </div>
  </footer>
);

export default Footer;