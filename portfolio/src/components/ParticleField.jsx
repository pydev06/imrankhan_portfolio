import React, { useEffect, useRef } from 'react';

const ParticleField = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let particles = [];
        const particleCount = 250; // More stars for density

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.15;
                this.vy = (Math.random() - 0.5) * 0.15;
                this.size = Math.random() * 2.5;
                this.alpha = Math.random() * 0.5 + 0.1;
                this.glitterSpeed = Math.random() * 0.02 + 0.005;
                this.glitterDir = Math.random() > 0.5 ? 1 : -1;

                // Glitch Nebula color palette
                const colors = [
                    'rgba(255, 0, 255,', // Magenta
                    'rgba(204, 255, 0,', // Lime
                    'rgba(0, 212, 255,'  // Cyan
                ];
                this.colorBase = colors[Math.floor(Math.random() * colors.length)];
                this.glowColor = this.colorBase.includes('255, 0, 255') ? 'rgba(255, 0, 255, 0.5)' :
                    this.colorBase.includes('204, 255') ? 'rgba(204, 255, 0, 0.5)' :
                        'rgba(0, 212, 255, 0.5)';
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Glittering/Twinkling logic
                this.alpha += this.glitterSpeed * this.glitterDir;
                if (this.alpha > 0.8 || this.alpha < 0.1) {
                    this.glitterDir *= -1;
                }

                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `${this.colorBase}${this.alpha})`;
                ctx.shadowBlur = this.size * 3;
                ctx.shadowColor = this.glowColor;
                ctx.fill();
            }
        }

        const init = () => {
            resize();
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.6 }}
        />
    );
};

export default ParticleField;
