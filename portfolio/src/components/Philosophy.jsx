import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Philosophy = () => {
    return (
        <section className="py-64 px-4 relative overflow-hidden bg-gradient-to-b from-bg-metal/50 to-bg-primary border-y border-white/5">
            {/* Industrial Background Markings */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.04] pointer-events-none flex items-center justify-center">
                <div className="text-[35vw] font-black font-heading text-white whitespace-nowrap leading-none select-none italic glow-text-dim">
                    CYBERTRON
                </div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="flex flex-col items-center mb-24">
                    <div className="px-6 py-2 bg-bg-panel/40 backdrop-blur-sm border border-accent-core/30 text-[10px] font-heading text-accent-core uppercase tracking-[0.5em] mb-4 font-black italic shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                        Authorized_Directives
                    </div>
                    <div className="h-1 w-24 hazard-stripes shadow-[0_0_10px_rgba(204,255,0,0.3)]" />
                </div>

                <div className="space-y-48">
                    {resumeData.philosophy.map((statement, i) => (
                        <div key={i} className="flex justify-center group">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                                className="relative text-center px-8"
                            >
                                {/* HUD Targeting Elements around each quote */}
                                <div className="absolute -top-10 -left-10 w-16 h-16 border-t-2 border-l-2 border-accent-energon opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_10px_rgba(255,0,255,0.5)]" />
                                <div className="absolute -bottom-10 -right-10 w-16 h-16 border-b-2 border-r-2 border-accent-energon opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_10px_rgba(255,0,255,0.5)]" />

                                <h3 className={`text-3xl md:text-8xl font-heading font-black italic tracking-tighter uppercase leading-none transition-all duration-700 chromatic-text
                  ${i % 2 === 0 ? 'text-text-primary group-hover:text-accent-energon' : 'text-accent-hazard glow-text-hazard group-hover:text-white'}
                `}>
                                    "{statement}"
                                </h3>

                                <div className="mt-8 font-mono text-[9px] text-accent-energon/40 uppercase tracking-[1em] opacity-40 italic font-bold">
                                    DIRECTIVE_KEY: X00_{i + 1}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pulsing Energy Core decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-accent-energon/5 blur-[150px] rounded-full pointer-events-none -z-10 system-pulse" />
        </section>
    );
};

export default Philosophy;
