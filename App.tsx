import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ValueProposition from './components/ValueProposition';
import Comparison from './components/Comparison';
import Services from './components/Services';
import ServiceShowcase from './components/ServiceShowcase';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [prefillMessage, setPrefillMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <CustomCursor />

      <Navbar
        isScrolled={isScrolled}
        onToggleAI={() => setIsAIOpen(v => !v)}   // ✅ toggle
        isAIActive={isAIOpen}                    // ✅ état actif pour le style
      />

      <main>
        <Hero />
        <ServiceShowcase />
        <TrustBar />
        <ValueProposition />
        <Comparison />
        <Stats />
        <Services />
        <Process />
        <Pricing />
        <Team />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact initialMessage={prefillMessage} />
      </main>

      <Footer />
      <BackToTop />

      <AIAssistant
        isOpen={isAIOpen}
        setIsOpen={setIsAIOpen}
      />

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[5%] w-80 h-80 bg-cyan-600 rounded-full blur-[120px]" />
      </div>
    </div>
  );
};

export default App;

// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import TrustBar from './components/TrustBar';
// import ValueProposition from './components/ValueProposition';
// import Comparison from './components/Comparison';
// import Services from './components/Services';
// import ServiceShowcase from './components/ServiceShowcase';
// import Process from './components/Process';
// import Pricing from './components/Pricing';
// import Stats from './components/Stats';
// import Portfolio from './components/Portfolio';
// import Team from './components/Team';
// import Testimonials from './components/Testimonials';
// import FAQ from './components/FAQ';
// import Contact from './components/Contact';
// import FinalCTA from './components/FinalCTA';
// import Footer from './components/Footer';
// import BackToTop from './components/BackToTop';
// import CustomCursor from './components/CustomCursor';
// import AIAssistant from './components/AIAssistant';

// const App: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isAIOpen, setIsAIOpen] = useState(false);
//   const [prefillMessage, setPrefillMessage] = useState('');

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen selection:bg-blue-500/30">
//       <CustomCursor />
//       <Navbar 
//         isScrolled={isScrolled} 
//         onToggleAI={() => setIsAIOpen(true)} 
//       />
      
//       <main>
//         <Hero />
//         <ServiceShowcase />
//         <TrustBar />
//         <ValueProposition />
//         <Comparison />
//         <Stats />
//         <Services />
//         <Process />
//         <Pricing />
//         <Team />
//         <Portfolio />
//         <Testimonials />
//         <FAQ />
//         <FinalCTA />
//         <Contact initialMessage={prefillMessage} />
//       </main>

//       <Footer />
//       <BackToTop />
//       <AIAssistant 
//         isOpen={isAIOpen} 
//         setIsOpen={setIsAIOpen} 
//       />
      
//       {/* Decorative Background Elements */}
//       <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none opacity-20">
//         <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
//         <div className="absolute bottom-[20%] right-[5%] w-80 h-80 bg-cyan-600 rounded-full blur-[120px]" />
//       </div>
//     </div>
//   );
// };

// export default App;
