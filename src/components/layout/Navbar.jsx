import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo_sin_titulo2.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Efecto 1: Controlar el scroll de la ventana
  useEffect(() => {
    const handleScroll = () => {
      // Umbral de 20px para que la transición sea casi inmediata al bajar
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto 2: Bloqueo de scroll del body (Scroll Lock)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = 'var(--scrollbar-gutter, 0px)';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Efecto 3: Cerrar menú al navegar
  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || isOpen 
          ? 'bg-white/95 backdrop-blur-md py-2 shadow-md' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO CON ESCALADO DINÁMICO */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Logo Ana Sol" 
            className={`transition-all duration-500 ease-in-out object-contain ${
              isScrolled 
                ? 'h-14 md:h-16' // Tamaño cuando haces scroll
                : 'h-20 md:h-28' // Tamaño inicial (protagonismo total)
            }`} 
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-xs uppercase tracking-[0.2em] font-sans hover:text-brand-rose transition-colors ${
                location.pathname === link.path ? 'text-brand-rose font-bold' : 'text-brand-dark'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contacto" 
            className="bg-brand-green text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-brand-rose transition-all shadow-md"
          >
            Turnos
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-green p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white absolute top-full left-0 w-full overflow-hidden shadow-inner"
          >
            <div className="flex flex-col items-center pt-12 space-y-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="text-lg uppercase tracking-widest font-sans text-brand-dark hover:text-brand-rose transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contacto" 
                className="bg-brand-rose text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest shadow-lg"
              >
                Agendar Turno
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;