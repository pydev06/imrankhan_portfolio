import React, { useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { resumeData } from '../data/resume';

const Experience = () => {
    const [enableStickyTap, setEnableStickyTap] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const mq = window.matchMedia('(hover: none) and (pointer: coarse)');

        const update = () => setEnableStickyTap(mq.matches);
        update();

        if (mq.addEventListener) {
            mq.addEventListener('change', update);
            return () => mq.removeEventListener('change', update);
        }

        mq.addListener(update);
        return () => mq.removeListener(update);
    }, []);

    return (
        <section id="experience" className="py-32 px-8 md:px-16 lg:px-32 relative max-w-7xl mx-auto border-t border-white/5 bg-bg-metal/30">
            <ScrollReveal direction="up" width="100%">
                <div className="flex flex-col items-start mb-20 ml-2 md:ml-8">
                    <div className="h-1 w-32 bg-accent-core mb-4 shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
                    <h2 className="text-xl md:text-3xl font-heading uppercase tracking-[0.5em] text-text-primary font-black italic">
                        Deployment_Timeline
                    </h2>
                    <p className="text-xs font-mono text-text-muted mt-2 tracking-widest uppercase glow-text-dim">// ACCESSING_SYSTEM_EXTRACTS_...</p>
                </div>
            </ScrollReveal>

            <div className="relative">
                <div className="space-y-32">
                    {resumeData.experience.map((exp, i) => (
                        <div
                            key={i}
                            className={`relative grid grid-cols-1 lg:grid-cols-12 gap-12 group ${enableStickyTap ? 'cursor-pointer' : ''}`}
                            onClick={() => {
                                if (!enableStickyTap) return;
                                setActiveIndex((prev) => (prev === i ? null : i));
                            }}
                            role={enableStickyTap ? 'button' : undefined}
                            tabIndex={enableStickyTap ? 0 : undefined}
                            onKeyDown={(e) => {
                                if (!enableStickyTap) return;
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setActiveIndex((prev) => (prev === i ? null : i));
                                }
                            }}
                        >
                            {/* Year Marker */}
                            <div className="lg:col-span-2 relative hidden lg:block">
                                <div className="sticky top-48 flex flex-col items-end pr-8">
                                    <div className="text-accent-hazard font-heading text-lg tracking-tighter glow-text-hazard">{exp.duration.split(' – ')[0]}</div>
                                    <div className="h-[2px] w-12 bg-accent-hazard/20 mt-2" />
                                </div>
                            </div>

                            {/* Main Content Card */}
                            <div className="lg:col-span-10 relative">
                                <ScrollReveal direction="up" width="100%">
                                    <div className="relative p-1 bg-gradient-to-br from-white/10 via-transparent to-white/5 panel-cut">
                                        <div className="bg-bg-panel/20 backdrop-blur-md p-8 md:p-12 relative overflow-hidden shadow-[inset_0_0_30px_rgba(255,0,255,0.03)] border border-white/5">
                                            {/* Industrial Background Grid for inner card */}
                                            <div className="absolute inset-0 bg-grid opacity-5" />

                                            <div className="relative z-10">
                                                {/* Stabilized Header Grid */}
                                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 items-end border-b border-white/5 pb-8">
                                                    <div className="md:col-span-8">
                                                        <div className="flex flex-col gap-2">
                                                            <div className="flex items-center gap-3">
                                                                <span className="w-2 h-2 bg-accent-energon shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
                                                                <span className="text-accent-energon font-mono text-[11px] uppercase tracking-[0.3em] font-black">
                                                                    {exp.duration}
                                                                </span>
                                                            </div>
                                                            <h3 className={`text-3xl md:text-5xl lg:text-6xl font-heading text-text-primary tracking-tighter group-hover:text-accent-energon group-active:text-accent-energon transition-colors duration-300 uppercase leading-[0.8] mt-2 italic font-black ${activeIndex === i ? 'text-accent-energon' : ''}`}>
                                                                {exp.role}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-4 md:text-right">
                                                        <p className="text-xl md:text-2xl font-heading text-accent-hazard leading-none glow-text-hazard">{exp.company}</p>
                                                        <p className="text-[10px] font-mono text-text-muted uppercase tracking-[0.3em] mt-3 italic opacity-60">{exp.location}</p>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                                    <div>
                                                        <h4 className="font-heading text-xs text-accent-energon/80 uppercase tracking-[0.3em] mb-6 flex items-center gap-2 font-black">
                                                            <span className="w-1.5 h-1.5 bg-accent-energon shadow-[0_0_5px_rgba(255,0,255,0.5)]" />
                                                            Directive_Execution
                                                        </h4>
                                                        <p className="text-lg text-text-muted leading-relaxed font-mono">
                                                            {exp.description}
                                                        </p>

                                                        <div className="mt-10 pt-10 border-t border-white/5 flex flex-wrap gap-3">
                                                            {exp.stack.map((item, k) => (
                                                                <span key={k} className={`text-[10px] font-mono px-3 py-1 border border-white/10 text-text-dim group-hover:text-accent-hazard group-hover:border-accent-hazard/30 group-active:text-accent-hazard group-active:border-accent-hazard/30 transition-colors bg-white/5 ${activeIndex === i ? 'text-accent-hazard border-accent-hazard/30' : ''}`}>
                                                                    {item}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="bg-black/40 backdrop-blur-sm p-8 border border-white/5 panel-cut-reverse relative h-full">
                                                        <div className="absolute top-0 right-10 w-24 h-1 hazard-stripes shadow-[0_0_10px_rgba(204,255,0,0.2)]" />
                                                        <h4 className="font-heading text-[10px] text-accent-hazard/80 uppercase tracking-[0.3em] mb-6 italic font-black">Core_Deliveries</h4>
                                                        <ul className="space-y-6">
                                                            {exp.achievements.map((ach, j) => (
                                                                <li key={j} className="text-sm font-mono text-text-muted flex gap-4 leading-relaxed group/item">
                                                                    <span className={`text-accent-hazard mt-1.5 font-bold group-hover/item:translate-x-1 group-active/item:translate-x-1 transition-transform ${activeIndex === i ? 'translate-x-1' : ''}`}>&gt;_</span>
                                                                    {ach}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
