import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    // Core tracking (sharp)
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Aura tracking (lazy/buggle)
    const springConfig = { damping: 20, stiffness: 250 };
    const auraX = useSpring(cursorX, springConfig);
    const auraY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleHover = (e) => {
            const isClickable = e.target.closest('a, button, input, [role="button"]');
            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHover);
        };
    }, [cursorX, cursorY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* ENERGON CORE (Central Dot) */}
            <motion.div
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                className="w-1.5 h-1.5 bg-accent-energon rounded-full shadow-[0_0_10px_#00d4ff]"
            >
                {/* Internal HUD crosshair */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-accent-energon/20 rounded-full" />
            </motion.div>

            {/* SPACE BUGGLE AURA (Lagging Ring) */}
            <motion.div
                style={{
                    x: auraX,
                    y: auraY,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: isHovering ? 2.5 : 1,
                }}
                className="absolute w-8 h-8 flex items-center justify-center transition-transform duration-300"
            >
                {/* The "Buggle" Pulse Layer */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 border border-accent-energon/40 rounded-full"
                />

                {/* Secondary Pulse Layer (Faster) */}
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.3, 0.1],
                        rotate: [0, 90, 180]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute inset-2 border border-accent-hazard/20 rounded-sm"
                />

                {/* HUD Data Bits around cursor */}
                {isHovering && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute -top-6 -right-12 font-mono text-[6px] text-accent-energon whitespace-nowrap"
                    >
                        [SYS_LINK_READY]
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default CustomCursor;
