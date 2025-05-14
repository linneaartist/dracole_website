import React, { useEffect, useRef } from "react";
import "../styles/ParticleBackground.css";

const ParticleBackground = ({
	amount = 50,
	color1 = "#e18056",
	color2 = "#58719f",
	speed = 1,
}) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		let particles = [];
		let animationFrameId;

		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			initParticles();
		};

		const initParticles = () => {
			particles = [];
			for (let i = 0; i < amount; i++) {
				const particle = {
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					radius: Math.random() * 2 + 0.5,
					color: Math.random() > 0.5 ? color1 : color2,
					velocityX: (Math.random() - 0.5) * 0.5 * speed,
					velocityY: (Math.random() - 0.5) * 0.5 * speed,
					opacity: Math.random() * 0.5 + 0.2,
				};
				particles.push(particle);
			}
		};

		const connectParticles = () => {
			const maxDistance = 150;
			for (let i = 0; i < particles.length; i++) {
				for (let j = i + 1; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < maxDistance) {
						const opacity = 1 - distance / maxDistance;
						ctx.beginPath();
						ctx.strokeStyle = `rgba(${
							particles[i].color === color1 ? "225, 128, 86" : "88, 113, 159"
						}, ${opacity * 0.2})`;
						ctx.lineWidth = 0.5;
						ctx.moveTo(particles[i].x, particles[i].y);
						ctx.lineTo(particles[j].x, particles[j].y);
						ctx.stroke();
					}
				}
			}
		};

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (const particle of particles) {
				// Update position
				particle.x += particle.velocityX;
				particle.y += particle.velocityY;

				// Bounce off edges
				if (particle.x < 0 || particle.x > canvas.width) {
					particle.velocityX *= -1;
				}

				if (particle.y < 0 || particle.y > canvas.height) {
					particle.velocityY *= -1;
				}

				// Draw particle
				ctx.beginPath();
				ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
				ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
					.toString(16)
					.padStart(2, "0")}`;
				ctx.fill();
			}

			connectParticles();
			animationFrameId = requestAnimationFrame(animate);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		animate();

		return () => {
			window.removeEventListener("resize", handleResize);
			cancelAnimationFrame(animationFrameId);
		};
	}, [amount, color1, color2, speed]);

	return <canvas ref={canvasRef} className="particle-background" />;
};

export default ParticleBackground;
