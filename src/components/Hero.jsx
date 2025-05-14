import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import "../components/styles/Hero.css";
import AboutModal from "./modals/AboutModal";

const Hero = () => {
	const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

	return (
		<>
			<section className="hero-section">
				<div className="hero-backdrop"></div>
				<div className="hero-vignette"></div>
				<div className="hero-content">
					<ScrollAnimation
						animateIn="fadeIn"
						duration={1}
						delay={500}
						className="hero-subtitle"
					>
						Welcome to the World of
					</ScrollAnimation>

					<ScrollAnimation
						animateIn="fadeIn"
						duration={1.5}
						delay={1000}
						className="hero-logo"
					>
						<img
							src="/images/dracole-logo.png"
							alt="Dracole"
							className="logo-image"
						/>
					</ScrollAnimation>

					<div className="hero-divider-container">
						<ScrollAnimation
							animateIn="fadeIn"
							duration={1}
							delay={1500}
							className="hero-divider"
						>
							<div className="divider-line"></div>
							<div className="divider-icon">
								<i className="fas fa-skull"></i>
							</div>
							<div className="divider-line"></div>
						</ScrollAnimation>
					</div>

					<ScrollAnimation
						animateIn="fadeIn"
						duration={1}
						delay={2000}
						className="hero-description"
					>
						<p>
							Experience the dark and atmospheric world of Dracole, where metal
							meets mysticism.
						</p>
					</ScrollAnimation>

					<div className="hero-buttons">
						<ScrollAnimation animateIn="fadeInUp" duration={1} delay={2500}>
							<Link to="/tour" className="cta-button">
								Upcoming Shows
							</Link>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp" duration={1} delay={2700}>
							<button
								className="cta-button"
								onClick={() => setIsAboutModalOpen(true)}
							>
								About
							</button>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp" duration={1} delay={2900}>
							<Link to="/music" className="cta-button">
								Listen Now
							</Link>
						</ScrollAnimation>
					</div>

					<div className="scroll-indicator">
						<ScrollAnimation animateIn="fadeIn" duration={1} delay={3200}>
							<div className="scroll-text">Scroll to Explore</div>
							<div className="scroll-arrow">
								<i className="fas fa-chevron-down"></i>
							</div>
						</ScrollAnimation>
					</div>
				</div>
			</section>

			<AboutModal
				isOpen={isAboutModalOpen}
				onClose={() => setIsAboutModalOpen(false)}
			/>
		</>
	);
};

export default Hero;
