import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <WhatsAppButton/>
      <Footer/>
    </Router>
  );
}

export default App;