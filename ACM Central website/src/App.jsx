import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SIGSection from './components/SIGSection';
import SIGPortal from './components/SIGPortal';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    let lastTime = 0;
    const raf = (time) => {
      if (time - lastTime > 1000 / 60) {
        lenis.raf(time);
        lastTime = time;
      }
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-acm-black overflow-x-hidden">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* SIG Section */}
        <SIGSection />

        {/* SIG Portal */}
        <SIGPortal />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;