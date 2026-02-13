import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import missionAudio from '../assets/Daft Punk - End Of Line (TikTok Slowed Version).mp3';
// Import your cinematic voice intro here (e.g., introVoice from '../assets/intro_voice.mp3')
// import introVoice from '../assets/intro_voice.mp3';

const AudioPlayer = () => {
    const audioRef = useRef(null);
    const introRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isPlayingIntro, setIsPlayingIntro] = useState(false);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.4;
            audioRef.current.loop = true;
        }
    }, []);

    const handleIntroEnd = () => {
        setIsPlayingIntro(false);
        if (audioRef.current) {
            // Restore volume smoothly
            const fadeUp = setInterval(() => {
                if (audioRef.current.volume < 0.38) {
                    audioRef.current.volume += 0.02;
                } else {
                    audioRef.current.volume = 0.4;
                    clearInterval(fadeUp);
                }
            }, 50);
        }
    };

    const toggleAudio = () => {
        if (!hasInteracted) {
            setHasInteracted(true);
            setIsPlaying(true);
            setIsMuted(false);

            const introAlreadyPlayed = localStorage.getItem('MISSION_INTRO_PLAYED');

            if (audioRef.current) {
                audioRef.current.muted = false;

                // If intro hasn't played this session, duck the music and play intro
                if (!introAlreadyPlayed && introRef.current && introRef.current.src) {
                    setIsPlayingIntro(true);
                    audioRef.current.volume = 0.1; // Duck background
                    audioRef.current.play().catch(err => console.log("Audio play blocked by browser:", err));

                    introRef.current.play().catch(err => {
                        console.log("Intro playback failed, restoring volume:", err);
                        handleIntroEnd();
                    });

                    localStorage.setItem('MISSION_INTRO_PLAYED', 'true');
                } else {
                    audioRef.current.play().catch(err => console.log("Audio play blocked by browser:", err));
                }
            }
        } else {
            const newMuteState = !isMuted;
            setIsMuted(newMuteState);
            if (audioRef.current) {
                audioRef.current.muted = newMuteState;
                if (!newMuteState && audioRef.current.paused) {
                    audioRef.current.play();
                }
            }
            if (introRef.current) {
                introRef.current.muted = newMuteState;
            }
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex items-center gap-4">
            {/* HTML5 Audio Elements (Hidden) */}
            <audio ref={audioRef} src={missionAudio} />
            {/* User can drop intro_voice.mp3 in assets and link it here */}
            <audio
                ref={introRef}
                src="" // Add path to intro voice over here
                onEnded={handleIntroEnd}
            />

            <AnimatePresence>
                {!isMuted && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="bg-bg-primary/80 backdrop-blur-md border border-accent-energon/30 px-4 py-2 flex flex-col items-end gap-1 shadow-[0_0_20px_rgba(255,0,255,0.1)]"
                    >
                        <span className="text-[10px] font-mono text-accent-energon uppercase tracking-tighter opacity-70">
                            {isPlayingIntro ? 'Signal Type: ENCRYPTED_VOICE' : 'Signal Tracking: ACTIVE'}
                        </span>
                        <div className="flex items-center gap-3">
                            <span className="text-[9px] font-mono text-white/50 animate-pulse">
                                {isPlayingIntro ? '[SYSTEM_GREETING_IN_PROGRESS]' : '[MISSION_AUDIO_READY] >>'}
                            </span>
                            <div className="flex gap-[2px] h-3 items-end">
                                {[...Array(isPlayingIntro ? 8 : 4)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: [4, 12, 6, 12, 4] }}
                                        transition={{
                                            duration: isPlayingIntro ? 0.4 : 0.8,
                                            repeat: Infinity,
                                            delay: i * 0.1,
                                            ease: "easeInOut"
                                        }}
                                        className={`w-[2px] ${isPlayingIntro ? 'bg-accent-hazard' : 'bg-accent-energon'} shadow-[0_0_5px_rgba(255,0,255,0.5)]`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Tactical HUD Speaker Toggle */}
            <button
                onClick={toggleAudio}
                className={`w-12 h-12 flex items-center justify-center border transition-all duration-500 relative group overflow-hidden ${isMuted ? 'border-white/10 text-white/40' : 'border-accent-energon text-accent-energon shadow-[0_0_15px_rgba(255,0,128,0.3)]'
                    }`}
            >
                {/* HUD Data Bars */}
                <div className="absolute top-1 left-1 flex gap-[1px]">
                    <div className={`w-[2px] h-1 ${!isMuted ? 'bg-accent-energon animate-pulse' : 'bg-white/10'}`} />
                    <div className={`w-[2px] h-2 ${!isMuted ? 'bg-accent-energon animate-pulse' : 'bg-white/10'}`} style={{ animationDelay: '0.2s' }} />
                </div>

                <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {isMuted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                            <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.08" />
                        </svg>
                    )}
                </div>

                {/* Glitch Overlay on Hover */}
                <div className="absolute inset-0 bg-accent-energon/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                {/* Tactical Scanning Line */}
                {!isMuted && (
                    <motion.div
                        initial={{ top: -10 }}
                        animate={{ top: "110%" }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 w-full h-[1px] bg-accent-energon/30 blur-[1px]"
                    />
                )}
            </button>
        </div>
    );
};

export default AudioPlayer;
