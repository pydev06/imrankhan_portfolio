import React, { useEffect, useState } from 'react';
import ParticleField from './components/ParticleField';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';

import CustomCursor from './components/CustomCursor';
import TransformersFlyover from './components/TransformersFlyover';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [enableFinePointerEffects, setEnableFinePointerEffects] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');

    const update = () => setEnableFinePointerEffects(mq.matches);
    update();

    if (mq.addEventListener) {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    }

    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  return (
    <div className={`bg-bg-primary text-text-primary min-h-screen relative ${enableFinePointerEffects ? 'cursor-none' : ''}`}>
      <div className="crt-overlay" />
      <div className="fixed inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary pointer-events-none z-10" />

      {enableFinePointerEffects && <CustomCursor />}
      <TransformersFlyover />
      <AudioPlayer />
      {/* Ambient background that stays fixed */}
      <ParticleField />

      {/* Story Sections */}
      <div className="relative z-10 overflow-hidden">
        <Hero />

        <div className="section-divider"></div>
        <About />

        <div className="section-divider"></div>
        <Skills />

        <div className="section-divider"></div>
        <Experience />

        <div className="section-divider"></div>
        <Projects />

        <Philosophy />

        <div className="section-divider"></div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
