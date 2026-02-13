import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { resumeData } from '../data/resume';
import profileImg from '../assets/ik.jpeg';

const ScrambleText = ({ text }) => {
    const symbols = "!@#$%^&*()_+{}:\"<>?|1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const [display, setDisplay] = React.useState('');
    const [isLocked, setIsLocked] = React.useState(false);

    React.useEffect(() => {
        let iteration = 0;
        let interval = null;
        let mainCycle = null;

        const startScramble = () => {
            setIsLocked(false);
            iteration = 0;
            clearInterval(interval);

            interval = setInterval(() => {
                setDisplay(text.split('')
                    .map((char, index) => {
                        if (index < iteration) return text[index];
                        return symbols[Math.floor(Math.random() * symbols.length)];
                    })
                    .join('')
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                    setIsLocked(true);
                }

                iteration += 1 / 3;
            }, 30);
        };

        // Initial trigger
        const timeout = setTimeout(startScramble, 1000);

        // Persistent 5s cycle
        mainCycle = setInterval(startScramble, 5000);

        return () => {
            clearInterval(interval);
            clearInterval(mainCycle);
            clearTimeout(timeout);
        };
    }, [text]);

    return (
        <span className={`relative ${isLocked ? 'glow-text' : 'font-mono text-accent-energon'}`}>
            {display}
            {!isLocked && (
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.1, repeat: Infinity }}
                    className="absolute right-[-1ch] top-0 w-[1ch] h-full bg-accent-energon"
                />
            )}
        </span>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const { name, title } = resumeData.personalInfo;
    const [glitchKey, setGlitchKey] = React.useState(0);
    const [isSystemGlitching, setIsSystemGlitching] = React.useState(false);

    React.useEffect(() => {
        const interval = setInterval(() => {
            // Trigger synchronized pulse every 8 seconds
            setIsSystemGlitching(true);
            setGlitchKey(prev => prev + 1);

            // End the visual "unstable" signal after the initial scramble/glitch burst
            setTimeout(() => {
                setIsSystemGlitching(false);
            }, 1500);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen flex flex-col items-start justify-center px-12 md:px-32 lg:px-48 overflow-hidden border-b border-white/5">
            {/* MECHANICAL BACKGROUND ELEMENTS */}
            <div className="absolute top-10 right-10 w-64 h-64 border border-accent-energon/10 rounded-full animate-mech-rotate pointer-events-none blur-[1px]" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 border border-accent-hazard/10 rounded-full animate-mech-rotate pointer-events-none blur-[1px]" style={{ animationDirection: 'reverse' }} />

            {/* TRANSFORMERS PROFILE IMAGE HUD */}
            <motion.div
                style={{ y: y1, opacity }}
                className="absolute inset-0 z-0 select-none pointer-events-none flex items-center justify-end overflow-hidden"
            >
                {/* Strengthened gradient for asymmetric layout and legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/95 to-transparent z-10 w-full md:w-3/5" />
                <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/30 via-transparent to-bg-primary z-10" />

                <div className="relative h-full w-full md:w-3/4 flex items-center justify-end px-12">
                    {/* HUD SCANNER LOCKED TO IMAGE FRAME */}
                    <div className="relative h-full md:h-[110vh] aspect-[3/4] md:aspect-auto">
                        {/* Targeting HUD Brackets */}
                        <div className="absolute inset-8 border border-accent-energon/20 z-20 pointer-events-none backdrop-blur-[2px]">
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-energon drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent-energon drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent-energon drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-energon drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
                            <div className="scan-bar opacity-40 bg-gradient-to-r from-transparent via-accent-energon to-transparent" />

                            {/* HUD DATA STRIP */}
                            <div className="absolute top-4 left-4 font-mono text-[8px] text-accent-energon/80 uppercase tracking-tighter hidden md:block leading-tight">
                                TARGET_ACQUIRED: IMRAN_KHAN<br />
                                ROLE: BACKEND_ENGR<br />
                                STATUS: {isSystemGlitching ? <span className="text-accent-hazard animate-pulse">SIGNAL_UNSTABLE...</span> : 'OPTIMIZING_CORE_LOGIC...'}
                            </div>
                        </div>

                        <div className="relative h-full w-full overflow-hidden group/image">
                            {/* RGB Split Layers */}
                            <img
                                key={`red-${glitchKey}`}
                                src={profileImg}
                                alt=""
                                className="absolute inset-0 h-full w-auto object-cover grayscale brightness-[0.7] contrast-125 opacity-20 mix-blend-screen animate-rgb-red pointer-events-none"
                            />
                            <img
                                key={`blue-${glitchKey}`}
                                src={profileImg}
                                alt=""
                                className="absolute inset-0 h-full w-auto object-cover grayscale brightness-[0.7] contrast-125 opacity-20 mix-blend-screen animate-rgb-blue pointer-events-none"
                            />

                            {/* Main Glitching Layer */}
                            <img
                                key={`main-${glitchKey}`}
                                src={profileImg}
                                alt="Imran Khan"
                                className="h-full w-auto object-cover grayscale brightness-[0.7] contrast-125 transition-all duration-700 opacity-60 md:opacity-90 mix-blend-screen animate-image-glitch"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* CONTENT ASSEMBLY (With Indented Start Space) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="z-10 max-w-4xl ml-2 md:ml-8"
            >
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="h-[2px] w-24 bg-accent-hazard mb-8 origin-left shadow-[0_0_10px_rgba(204,255,0,0.5)]"
                />

                <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-accent-energon font-heading text-xs md:text-sm mb-4 uppercase tracking-[0.5em] flex items-center gap-4 glow-text"
                >
                    <span className="w-2 h-2 bg-accent-energon animate-pulse shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
                    {isSystemGlitching ? <span className="text-accent-hazard">Syncing Tactical Feed</span> : 'System Authorization Required'}
                </motion.p>

                <h1 className="font-heading text-4xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter overflow-hidden leading-[0.85] italic text-text-primary">
                    <ScrambleText key={glitchKey} text={name} />
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="flex flex-col md:flex-row md:items-center gap-6"
                >
                    <div className="text-lg md:text-2xl text-text-muted max-w-xl font-mono tracking-tight leading-loose border-l-2 border-accent-hazard pl-6">
                        <span className="text-accent-hazard">&gt;</span> [INITIALIZING_CORE_DIRECTIVES]...<br />
                        <span className="text-text-primary uppercase font-bold tracking-widest bg-accent-energon/10 px-2">{title}</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="mt-16 flex items-center gap-8"
                >
                    <a
                        href="#about"
                        className="group relative px-10 py-4 font-heading text-xs font-bold tracking-[0.3em] uppercase overflow-hidden transition-all duration-300 active:scale-95 bg-accent-energon/5 backdrop-blur-sm"
                    >
                        <div className="absolute inset-0 bg-accent-energon translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                        <div className="absolute inset-0 border border-accent-energon/50 group-hover:border-accent-energon shadow-[inset_0_0_10px_rgba(255,0,255,0.1)]" />
                        <span className="relative z-10 group-hover:text-bg-primary transition-colors text-accent-energon">Initialize Mission</span>
                    </a>

                    <div className="hidden md:flex flex-col gap-1">
                        <div className="h-1 w-32 bg-accent-hazard/20 animate-pulse" />
                        <div className="h-1 w-24 bg-accent-energon/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                </motion.div>
            </motion.div>

            {/* HAZARD FOOTER */}
            <div className="absolute bottom-0 left-0 w-full h-1 hazard-stripes opacity-30 shadow-[0_0_15px_rgba(204,255,0,0.3)]" />
        </section>
    );
};

export default Hero;
