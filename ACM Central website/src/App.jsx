import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SIGs from './components/SIGs';
import Marquee from './components/Marquee';
import Events from './components/Events';
import Projects from './components/Projects';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MARQUEE_WORDS } from './mock';

const Home = () => {
  useEffect(() => {
    // Smooth-scroll for hash links
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (id && id.length > 1 && document.querySelector(id)) {
        e.preventDefault();
        document.querySelector(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="App grain relative bg-[#030814]">
      <Navbar />
      <Hero />
      <Marquee words={MARQUEE_WORDS} />
      <About />
      <SIGs />
      <Marquee words={['sig.dev', 'sig.ai', 'sig.cp', 'sig.sec', 'sig.des']} slow reverse />
      <Events />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
