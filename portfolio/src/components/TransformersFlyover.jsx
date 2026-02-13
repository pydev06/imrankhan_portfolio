import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useVelocity, useTransform, useSpring } from 'framer-motion';
import nemesisEyes from '../assets/nemesis_eyes.gif';

const TransformersFlyover = () => {
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    // Physics-based smoothing for the velocity
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });

    // Map velocity to opacity: Higher velocity = more visible Nemesis
    // We use a threshold so it only appears during significant movement
    const nemesisOpacity = useTransform(
        smoothVelocity,
        [-1000, -100, 0, 100, 1000],
        [0.4, 0.1, 0, 0.1, 0.4]
    );

    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let scrollTimeout;
        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => setIsScrolling(false), 1000);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden select-none">
            <AnimatePresence>
                {/* NEMESIS PRIME SCROLL AWAKENING */}
                <motion.div
                    style={{
                        opacity: nemesisOpacity,
                        scale: useTransform(smoothVelocity, [-2000, 0, 2000], [1, 1.05, 1])
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-32"
                >
                    <img
                        src={nemesisEyes}
                        alt="Nemesis Prime Awakening"
                        className="w-full h-auto brightness-110 shadow-[0_0_30px_rgba(255,0,60,0.2)]"
                    />

                    {/* Dynamic System Alert */}
                    <motion.div
                        animate={{
                            opacity: isScrolling ? 0.8 : 0,
                            y: isScrolling ? 0 : 20
                        }}
                        className="mt-8 font-mono text-sm text-accent-energon tracking-[1em] text-center uppercase drop-shadow-[0_0_10px_rgba(255,0,255,0.5)] font-black italic"
                    >
                        // SYSTEM_SENTIENCE_ACTIVE_...
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            {/* STATIC HUD OVERLAYS FOR BLENDING */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary opacity-20" />
        </div>
    );
};

export default TransformersFlyover;
