import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../../data/posts';
import { Layers, ArrowRight } from 'lucide-react';

const BlogPreview = () => {
  const navigate = useNavigate();
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-brand-cream/10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-brand-rose font-sans font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Aprende con Ana</span>
            <h2 className="text-4xl font-serif text-brand-green italic">Wellness Journal</h2>
          </div>
          <button 
            onClick={() => navigate('/blog')}
            className="group flex items-center gap-2 text-brand-green font-sans font-bold uppercase tracking-widest text-[10px] hover:text-brand-rose transition-colors"
          >
            Ver todo el contenido <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <motion.div 
              key={post.id}
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/blog?id=${post.id}`)}
              className="cursor-pointer group relative aspect-square rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white"
            >
              <img src={post.images[0]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={post.title} />
              <div className="absolute inset-0 bg-brand-green/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-white p-6 text-center">
                <Layers className="mb-2 text-brand-tan" />
                <h3 className="font-serif text-xl">{post.title}</h3>
                <p className="text-[10px] uppercase tracking-widest mt-2 bg-white/20 px-3 py-1 rounded-full">Abrir Carrusel</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;