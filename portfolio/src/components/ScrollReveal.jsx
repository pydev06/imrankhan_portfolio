import { motion } from 'framer-motion';

const ScrollReveal = ({ children, width = "fit-content", delay = 0.2, direction = "up" }) => {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 },
    };

    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, ...directions[direction] },
                    visible: { opacity: 1, y: 0, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay, ease: [0.17, 0.67, 0.83, 0.67] }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
