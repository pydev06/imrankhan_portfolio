import React from 'react';
import ScrollReveal from './ScrollReveal';
import { resumeData } from '../data/resume';

const Skills = () => {
    return (
        <section id="skills" className="py-32 px-8 md:px-16 lg:px-32 relative max-w-7xl mx-auto overflow-hidden">
            <ScrollReveal direction="up" width="100%">
                <div className="flex items-center gap-6 mb-16 justify-center ml-2 md:ml-8">
                    <div className="h-[1px] w-24 bg-accent-energon/30 shadow-[0_0_10px_rgba(255,0,255,0.2)]" />
                    <h2 className="text-sm font-heading uppercase tracking-[0.6em] text-accent-energon text-center font-black italic glow-text">
                        Technical_Arsenal_v2.0
                    </h2>
                    <div className="h-[1px] w-24 bg-accent-energon/30 shadow-[0_0_10px_rgba(255,0,255,0.2)]" />
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                {resumeData.skills.map((skillGroup, i) => (
                    <ScrollReveal key={i} delay={i * 0.1} direction="up" width="100%">
                        <div className="group relative p-10 border border-white/5 bg-bg-panel/20 backdrop-blur-md hover:bg-bg-panel/40 transition-all duration-300 panel-cut shadow-[inset_0_0_20px_rgba(255,0,255,0.02)]">
                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 w-16 h-1 hazard-stripes opacity-20 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(204,255,0,0.3)]" />

                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-1.5 h-6 bg-accent-energon shadow-[0_0_8px_rgba(255,0,255,0.6)]" />
                                <h3 className="text-[10px] font-heading uppercase tracking-[0.3em] text-accent-energon opacity-80 font-black italic">
                                    {skillGroup.category.replace(' & ', '_')}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-x-6 gap-y-4">
                                {skillGroup.items.map((skill, j) => (
                                    <div
                                        key={j}
                                        className="relative text-xs font-mono text-text-muted hover:text-accent-hazard transition-colors cursor-default flex items-center gap-2 group/skill"
                                    >
                                        <span className="text-[8px] text-accent-energon opacity-0 group-hover/skill:opacity-100 transition-opacity font-bold">&gt;</span>
                                        {skill}
                                    </div>
                                ))}
                            </div>

                            {/* HUD Decoration */}
                            <div className="absolute bottom-4 right-4 text-[8px] font-mono text-accent-energon/20 uppercase tracking-tighter pointer-events-none">
                                MODULE_0{i + 1}_ACTIVE
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            {/* Industrial Background Markings */}
            <div className="absolute -z-10 top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-white/10 whitespace-nowrap italic">
                    TECHNOLOGY
                </div>
            </div>
        </section>
    );
};

export default Skills;
