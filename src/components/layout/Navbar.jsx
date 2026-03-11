import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Iconos para el menú

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    if (isOpen) {
      // Bloqueamos el scroll y evitamos saltos visuales de la scrollbar
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = 'var(--scrollbar-gutter, 0px)'; 
    } else {
      // Restauramos el scroll
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }

    // Cleanup function: Si el componente se desmonta, nos aseguramos de liberar el scroll
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  // Cerrar menú cuando cambia la ruta
  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl text-brand-green font-bold tracking-tighter">
          ASPA
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-xs uppercase tracking-[0.2em] font-sans hover:text-brand-rose transition-colors ${location.pathname === link.path ? 'text-brand-rose font-bold' : 'text-brand-dark'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contacto" className="bg-brand-green text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-brand-rose transition-all">
            Turnos
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-green" onClick={() => setIsOpen(!isOpen)}>
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
            className="md:hidden bg-white absolute top-full left-0 w-full overflow-hidden"
          >
            <div className="flex flex-col items-center pt-10 space-y-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="text-lg uppercase tracking-widest font-sans text-brand-dark"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contacto" className="bg-brand-rose text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest">
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