import React from 'react';
import ScrollReveal from './ScrollReveal';
import { resumeData } from '../data/resume';

const About = () => {
    return (
        <section id="about" className="py-32 px-6 md:px-16 lg:px-32 relative flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto overflow-hidden">
            {/* Decorative HUD Element */}
            <div className="hidden lg:block w-1/3 relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-accent-energon animate-pulse shadow-[0_0_10px_rgba(255,0,255,0.5)]" />
                <div className="text-[10px] font-mono text-accent-energon/60 space-y-2 uppercase tracking-[0.2em] pt-4">
                    <div className="glow-text">// SESSION_ID: ALPHA_7</div>
                    <div className="glow-text">// LOG_KEY: IMRAN_KHAN_CORE</div>
                    <div className="pt-4 space-y-1">
                        <div className="h-1 w-full bg-accent-energon/20" />
                        <div className="h-1 w-3/4 bg-accent-energon/30" />
                        <div className="h-1 w-1/2 bg-accent-energon/20" />
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-2/3 ml-2 md:ml-8">
                <ScrollReveal direction="left">
                    <div className="inline-block px-4 py-1 bg-accent-hazard/10 border-l-4 border-accent-hazard mb-8 backdrop-blur-sm shadow-[0_0_10px_rgba(204,255,0,0.1)]">
                        <h2 className="text-xs uppercase tracking-[0.5em] text-accent-hazard font-heading font-black">
                            Mission Briefing
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="space-y-10 relative">
                    {resumeData.about.map((paragraph, i) => (
                        <ScrollReveal key={i} delay={0.2 + i * 0.1} direction="up" width="100%">
                            <div className="relative group p-8 bg-bg-panel/20 backdrop-blur-md panel-cut border-l border-accent-energon/20 hover:border-accent-energon/60 active:border-accent-energon/60 transition-all duration-500 shadow-[inset_0_0_20px_rgba(255,0,255,0.02)]">
                                <div className="absolute top-4 left-4 font-mono text-[8px] text-accent-energon/40">DATA_BLOCK.0{i + 1}</div>
                                <p className="text-lg md:text-xl leading-relaxed text-text-primary font-mono tracking-tight">
                                    <span className="text-accent-energon font-bold mr-2">&gt;</span>
                                    {paragraph}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-16">
                    <ScrollReveal delay={0.6}>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-mono text-[10px] uppercase tracking-[0.3em]">
                            <div className="p-4 bg-bg-panel/40 backdrop-blur-sm border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-accent-hazard group-hover:w-full group-active:w-full transition-all duration-300 opacity-20" />
                                <div className="text-accent-hazard mb-2 font-black">Experience</div>
                                <div className="text-text-primary text-sm font-bold">9+ Orbital Cycles</div>
                            </div>
                            <div className="p-4 bg-bg-panel/40 backdrop-blur-sm border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-accent-energon group-hover:w-full group-active:w-full transition-all duration-300 opacity-20" />
                                <div className="text-accent-energon mb-2 font-black">Location</div>
                                <div className="text-text-primary text-sm font-bold">Sector_Bangalore</div>
                            </div>
                            <div className="p-4 bg-bg-panel/40 backdrop-blur-sm border border-white/5 relative overflow-hidden group col-span-2 md:col-span-1">
                                <div className="absolute top-0 left-0 w-1 h-full bg-accent-core group-hover:w-full group-active:w-full transition-all duration-300 opacity-20" />
                                <div className="text-accent-core mb-2 font-black">Deployment</div>
                                <div className="text-text-primary text-sm font-bold">Global Ready</div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default About;
