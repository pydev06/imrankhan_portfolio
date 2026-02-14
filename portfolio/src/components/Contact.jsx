import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { resumeData } from '../data/resume';

const Contact = () => {
    const { email, github, linkedin, instagram } = resumeData.personalInfo;

    return (
        <section id="contact" className="py-32 px-8 md:px-16 lg:px-32 relative max-w-7xl mx-auto text-center overflow-hidden">
            <ScrollReveal direction="up" width="100%">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-sm font-heading uppercase tracking-[0.5em] text-accent-energon mb-6 ml-2 md:ml-8 font-black italic glow-text">
                        // End_Of_Transmission
                    </h2>
                    <div className="flex gap-2">
                        <div className="w-2 h-2 bg-accent-hazard animate-pulse shadow-[0_0_8px_rgba(204,255,0,0.8)]" />
                        <div className="w-12 h-[2px] bg-accent-energon/30 mt-1" />
                        <div className="w-2 h-2 bg-accent-core animate-pulse shadow-[0_0_8px_rgba(14,165,233,0.8)]" style={{ animationDelay: '0.5s' }} />
                    </div>
                </div>
            </ScrollReveal>

            <div className="bg-bg-panel/20 backdrop-blur-md p-12 md:p-24 panel-cut border border-white/5 relative group mb-32 shadow-[inset_0_0_40px_rgba(255,0,255,0.03)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 hazard-stripes opacity-40 group-hover:opacity-100 group-active:opacity-100 transition-opacity" />

                <ScrollReveal delay={0.2} direction="up" width="100%">
                    <h3 className="text-5xl md:text-8xl font-heading font-black mb-16 tracking-tighter text-text-primary uppercase leading-none italic group-hover:text-accent-energon transition-all duration-500 chromatic-text">
                        Join the <span className="text-accent-hazard glow-text-hazard">Resistance.</span>
                    </h3>
                </ScrollReveal>

                <ScrollReveal delay={0.4} direction="up" width="100%">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-mono">
                        <a
                            href={`mailto:${email}`}
                            className="group/link flex flex-col items-center gap-4 p-8 border border-white/5 hover:border-accent-energon/50 active:border-accent-energon/50 transition-all bg-white/5 backdrop-blur-sm shadow-[inset_0_0_10px_rgba(255,0,255,0.02)]"
                        >
                            <div className="text-[10px] uppercase tracking-widest text-accent-energon font-black italic">COMMS_LINK</div>
                            <div className="text-sm text-text-muted group-hover/link:text-white group-active/link:text-white transition-colors truncate w-full">{email}</div>
                            <div className="h-[1px] w-8 bg-accent-energon/30 group-hover/link:w-full group-active/link:w-full transition-all duration-500 shadow-[0_0_5px_rgba(255,0,255,0.5)]" />
                        </a>

                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex flex-col items-center gap-4 p-8 border border-white/5 hover:border-accent-hazard/50 active:border-accent-hazard/50 transition-all bg-white/5 backdrop-blur-sm shadow-[inset_0_0_10px_rgba(204,255,0,0.02)]"
                        >
                            <div className="text-[10px] uppercase tracking-widest text-accent-hazard font-black italic">GITHUB_NODE</div>
                            <div className="text-lg text-text-muted group-hover/link:text-white group-active/link:text-white transition-colors">/pydev06</div>
                            <div className="h-[1px] w-8 bg-accent-hazard/30 group-hover/link:w-full group-active/link:w-full transition-all duration-500 shadow-[0_0_5px_rgba(204,255,0,0.5)]" />
                        </a>

                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex flex-col items-center gap-4 p-8 border border-white/5 hover:border-accent-core/50 active:border-accent-core/50 transition-all bg-white/5 backdrop-blur-sm shadow-[inset_0_0_10px_rgba(14,165,233,0.02)]"
                        >
                            <div className="text-[10px] uppercase tracking-widest text-accent-core font-black italic">LINKEDIN_SIGNAL</div>
                            <div className="text-lg text-text-muted group-hover/link:text-white group-active/link:text-white transition-colors">/imrankhan06</div>
                            <div className="h-[1px] w-8 bg-accent-core/30 group-hover/link:w-full group-active/link:w-full transition-all duration-500 shadow-[0_0_5px_rgba(14,165,233,0.5)]" />
                        </a>

                        <a
                            href={instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex flex-col items-center gap-4 p-8 border border-white/5 hover:border-accent-energon/50 active:border-accent-energon/50 transition-all bg-white/5 backdrop-blur-sm shadow-[inset_0_0_10px_rgba(255,0,255,0.02)]"
                        >
                            <div className="text-[10px] uppercase tracking-widest text-accent-energon font-black italic">INSTA_FEED</div>
                            <div className="text-lg text-text-muted group-hover/link:text-white group-active/link:text-white transition-colors">/i_am_rkstr</div>
                            <div className="h-[1px] w-8 bg-accent-energon/30 group-hover/link:w-full group-active/link:w-full transition-all duration-500 shadow-[0_0_5px_rgba(255,0,255,0.5)]" />
                        </a>
                    </div>
                </ScrollReveal>

                {/* HUD Data Accents */}
                <div className="absolute top-10 right-10 flex gap-1 items-center">
                    <div className="w-1 h-3 bg-accent-energon/20 glow-text-dim" />
                    <div className="w-1 h-5 bg-accent-energon/40 glow-text" />
                    <div className="w-1 h-3 bg-accent-energon/20 glow-text-dim" />
                </div>
            </div>

            <ScrollReveal delay={0.6} direction="up" width="100%">
                <div className="space-y-12">
                    <button
                        className="group relative px-20 py-6 font-heading text-sm font-black tracking-[0.5em] uppercase transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.2)] animate-interaction-pulse animate-scan-sweep"
                    >
                        <div className="absolute inset-0 bg-accent-hazard" />
                        <div className="absolute inset-0 border-2 border-accent-hazard group-hover:inset-[-8px] group-active:inset-[-8px] transition-all duration-300 opacity-30 shadow-[0_0_30px_rgba(204,255,0,0.4)]" />
                        <span className="relative z-10 text-bg-primary italic">Download_Directive_CV</span>
                    </button>

                    <div className="pt-24 font-mono text-[9px] uppercase tracking-[0.6em] text-text-dim/60 leading-loose flex flex-col items-center gap-4">
                        <div className="h-[1px] w-48 bg-white/5" />
                        <div>
                            <span className="text-accent-hazard font-bold">Constructed_By:</span> <br />
                            <span className="text-accent-energon font-bold glow-text text-lg tracking-widest">IMRAN KHAN</span> <br />
                            <span className="text-[7px] text-text-dim/40 block mt-4 tracking-tighter glow-text-dim uppercase">ENCRYPTED_SIGNATURE || NO_FABRICATION_DETECTED || ALL_RIGHTS_RESERVED_2026</span>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Background Energy Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-accent-hazard/5 blur-[120px] rounded-full pointer-events-none -z-10 system-pulse" />
        </section>
    );
};

export default Contact;
