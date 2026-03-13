import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Instagram, Layers } from 'lucide-react';
import { blogPosts } from '../data/posts';

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Detectar ID en URL y abrir modal automáticamente
  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const post = blogPosts.find(p => p.id === parseInt(id));
      if (post) {
        setSelectedPost(post);
        setCurrentImgIndex(0);
      }
    }
  }, [searchParams]);

  const closeModal = () => {
    setSelectedPost(null);
    setSearchParams({}); // Limpia la URL al cerrar
  };

  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % selectedPost.images.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + selectedPost.images.length) % selectedPost.images.length);
  };

  return (
    // Agregamos bg-brand-cream/20 y un pt-40 para que el Navbar no tape el título
    <div className="pt-32 md:pt-44 pb-24 px-6 min-h-screen bg-brand-cream/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabecera de Página */}
        <header className="max-w-2xl mx-auto text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-rose font-sans font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block"
          >
            Wellness Journal
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif text-brand-green italic leading-tight"
          >
            Contenido Educativo
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[1px] bg-brand-tan/30 w-24 mx-auto mt-8"
          ></motion.div>
        </header>
        
        {/* Grilla de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer aspect-square rounded-[2.5rem] overflow-hidden relative shadow-md hover:shadow-2xl transition-all border-4 border-white bg-white"
            >
              <img 
                src={post.images[0]} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={post.title} 
              />
              <div className="absolute inset-0 bg-brand-green/20 group-hover:bg-brand-green/50 transition-colors flex flex-col items-center justify-center p-6 text-center">
                <Layers className="text-brand-tan mb-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-white font-serif text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                   {post.title}
                </h3>
                <p className="text-[10px] text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity mt-2 bg-white/20 px-3 py-1 rounded-full">Abrir Carrusel</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL DEL CARRUSEL */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-brand-dark/95 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.button 
              whileHover={{ rotate: 90 }}
              className="absolute top-8 right-8 text-white/50 hover:text-white z-[110]"
            >
              <X size={40}/>
            </motion.button>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-6xl h-[85vh] md:h-[75vh] bg-white rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row" 
              onClick={e => e.stopPropagation()}
            >
               {/* Área del Visualizador */}
               <div className="relative w-full md:w-2/3 bg-black flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentImgIndex}
                      initial={{ opacity: 0, scale: 1.1 }} 
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      src={selectedPost.images[currentImgIndex]} 
                      className="w-full h-full object-contain" 
                    />
                  </AnimatePresence>

                  {/* Navegación */}
                  <button onClick={prevImg} className="absolute left-6 p-4 rounded-full bg-white/10 hover:bg-brand-rose text-white transition-all backdrop-blur-md">
                    <ChevronLeft size={24}/>
                  </button>
                  <button onClick={nextImg} className="absolute right-6 p-4 rounded-full bg-white/10 hover:bg-brand-rose text-white transition-all backdrop-blur-md">
                    <ChevronRight size={24}/>
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-8 flex gap-3">
                    {selectedPost.images.map((_, i) => (
                      <div key={i} className={`h-1.5 transition-all duration-300 rounded-full ${i === currentImgIndex ? 'bg-brand-rose w-8' : 'bg-white/30 w-2'}`} />
                    ))}
                  </div>
               </div>

               {/* Área de Información */}
               <div className="w-full md:w-1/3 p-12 flex flex-col justify-between bg-white">
                  <div className="space-y-8">
                    <div className="flex items-center gap-3 text-brand-rose">
                      <Instagram size={20} />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-tan">Instagram Series</span>
                    </div>
                    <h3 className="text-4xl font-serif text-brand-green leading-tight italic">{selectedPost.title}</h3>
                    <div className="w-16 h-[1px] bg-brand-tan/30"></div>
                    <p className="text-brand-dark/70 font-sans leading-relaxed text-sm">
                      {selectedPost.description}
                    </p>
                  </div>
                  
                  <button className="w-full py-5 bg-brand-green text-white rounded-2xl font-sans font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-brand-rose transition-all shadow-lg flex items-center justify-center gap-3">
                    <Instagram size={16}/> Ver en Instagram
                  </button>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;