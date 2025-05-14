import React, { useEffect, useRef } from "react";
import ParticleBackground from "../animations/ParticleBackground";
import "../styles/Hero.css";
import heroVideo from "../../assets/videos/dracole.mp4";

const Hero = () => {
	const heroRef = useRef(null);

	return (
		<section id="home" className="hero-section" ref={heroRef}>
			<ParticleBackground amount={70} speed={0.5} />

			<video className="hero-backdrop" autoPlay muted loop playsInline>
				<source src={heroVideo} type="video/mp4" />
			</video>
			<div className="hero-vignette"></div>

			{/* Scroll down indicator */}
			<a href="#about" className="scroll-indicator">
				<span className="scroll-indicator-text">Scroll Down</span>
				<div className="scroll-indicator-icon"></div>
			</a>
		</section>
	);
};

export default Hero;
