import React from 'react';
import ScrollReveal from './ScrollReveal';
import { resumeData } from '../data/resume';

const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 md:px-16 lg:px-32 relative max-w-7xl mx-auto overflow-hidden">
            <ScrollReveal direction="up" width="100%">
                <div className="flex items-center justify-between mb-24 border-b border-white/5 pb-8 ml-2 md:ml-8">
                    <h2 className="text-xl md:text-2xl font-heading uppercase tracking-[0.3em] text-accent-energon">
                        Proprietary_Tech_Archive // My_Own_Projects
                    </h2>
                    <div className="hidden md:flex gap-4">
                        <div className="w-8 h-8 border border-white/10 flex items-center justify-center font-mono text-[8px] text-accent-hazard">S_01</div>
                        <div className="w-8 h-8 border border-white/10 flex items-center justify-center font-mono text-[8px] text-accent-energon">S_02</div>
                    </div>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                {resumeData.projects.map((project, i) => (
                    <ScrollReveal key={i} direction="up" width="100%">
                        <div className="group relative glass-panel p-8 md:p-10 border border-white/5 hover:border-accent-energon/30 active:border-accent-energon/30 transition-all duration-500 overflow-hidden h-full flex flex-col">
                            {/* Project Index HUD */}
                            <div className="absolute top-4 right-6 font-mono text-[10px] text-accent-energon/40 group-hover:text-accent-energon group-active:text-accent-energon transition-colors">
                                [OP_0{i + 1}]
                            </div>

                            <div className="flex flex-col gap-6 flex-grow">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <div className="h-4 w-1 bg-accent-energon group-hover:h-8 group-active:h-8 transition-all duration-500" />
                                        <h3 className="text-2xl md:text-3xl font-heading font-black text-text-primary uppercase tracking-tighter group-hover:text-accent-energon group-active:text-accent-energon transition-colors">
                                            {project.name}
                                        </h3>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <p className="text-[10px] md:text-xs font-mono text-text-muted leading-relaxed">
                                            <span className="text-accent-hazard font-bold mr-2">// PROB:</span>
                                            {project.problem}
                                        </p>
                                        <p className="text-[10px] md:text-xs font-mono text-text-primary leading-relaxed italic">
                                            <span className="text-accent-energon font-bold mr-2">// SOLU:</span>
                                            {project.solution}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tag, k) => (
                                            <span
                                                key={k}
                                                className="px-2 py-0.5 bg-white/5 border border-white/10 text-[8px] font-mono text-text-dim uppercase tracking-widest group-hover:border-accent-energon/20 group-hover:text-accent-energon/60 group-active:border-accent-energon/20 group-active:text-accent-energon/60 transition-all"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* PROJECT INTERFACE LINKS */}
                            <div className="mt-8 pt-6 border-t border-white/5 flex gap-6">
                                {project.live && (
                                    <div className="relative overflow-hidden luxury-link-container">
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-mono text-[10px] text-accent-hazard flex items-center gap-2 hover:glow-text-hazard transition-all group/link px-3 py-1 bg-accent-hazard/5 border border-accent-hazard/20 animate-interaction-pulse animate-scan-sweep"
                                        >
                                            <span className="opacity-50">[</span>
                                            <span className="font-black italic">ACCESS_LIVE</span>
                                            <span className="opacity-50">]</span>
                                        </a>
                                    </div>
                                )}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-[10px] text-accent-energon flex items-center gap-2 hover:glow-text transition-all group/link"
                                >
                                    <span className="opacity-50">[</span>
                                    <span>SOURCE_CODE</span>
                                    <span className="opacity-50">]</span>
                                </a>
                            </div>

                            {/* Decorative Background HUD */}
                            <div className="absolute -bottom-6 -right-6 text-6xl font-heading font-black text-white/[0.02] pointer-events-none select-none group-hover:text-accent-energon/[0.03] group-active:text-accent-energon/[0.03] transition-colors">
                                0{i + 1}
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            {/* Industrial Watermark */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] -rotate-90 pointer-events-none select-none uppercase">
                Combat_Log
            </div>
        </section>
    );
};

export default Projects;
