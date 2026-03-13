import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // La magia: forzamos al navegador a ir a la coordenada (0,0)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Usamos 'instant' para que no haya un scroll animado molesto al cambiar de página
    });
  }, [pathname]); // Se ejecuta cada vez que el pathname (la URL) cambia

  return null; // Este componente no renderiza nada en el DOM
};

export default ScrollToTop;