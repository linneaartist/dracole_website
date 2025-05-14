import React, { useEffect } from "react";
import SectionTitle from "../common/SectionTitle";
import ScrollAnimation from "../animations/ScrollAnimation";
import "../styles/AboutModal.css";

const AboutModal = ({ isOpen, onClose }) => {
	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === "Escape") {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "unset";
		};
	}, [isOpen, onClose]);

	return (
		<div
			className={`modal-overlay ${isOpen ? "active" : ""}`}
			onClick={onClose}
		>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button
					className="modal-close"
					onClick={onClose}
					aria-label="Close modal"
				>
					×
				</button>
				<div className="modal-body">
					<ScrollAnimation animation="fade-down">
						<SectionTitle title="About Dracole" highlight="orange" />
					</ScrollAnimation>

					{/* Brand Identity Section */}
					<ScrollAnimation animation="fade-up" delay={200}>
						<div className="brand-identity">
							<h2 className="section-subtitle">Brand Identity</h2>
							<div className="brand-grid">
								<div className="brand-item">
									<h3>Visual Aesthetic</h3>
									<p>
										Dark, atmospheric imagery combining gothic architecture with
										modern metal aesthetics. Blood-red accents against deep
										blacks create our signature look.
									</p>
								</div>
								<div className="brand-item">
									<h3>Sound Identity</h3>
									<p>
										Blending traditional metal elements with contemporary
										production, creating a unique sonic landscape that bridges
										classic and modern metal.
									</p>
								</div>
								<div className="brand-item">
									<h3>Visual Language</h3>
									<p>
										Symbolism of bats, blood, and cosmic elements creates a
										cohesive narrative across all visual touchpoints.
									</p>
								</div>
								<div className="brand-item">
									<h3>Brand Values</h3>
									<p>
										Authenticity, artistic integrity, and a commitment to
										pushing boundaries in metal music and visual expression.
									</p>
								</div>
							</div>
						</div>
					</ScrollAnimation>

					{/* Band Description Section */}
					<ScrollAnimation animation="fade-up" delay={400}>
						<div className="band-description">
							<h2 className="section-subtitle">The Band</h2>
							<div className="description-content">
								<div className="description-text">
									<p>
										Dracole emerged from the depths of Stockholm's underground
										metal scene, bringing a fresh perspective to the genre. Our
										music weaves together elements of black metal, death metal,
										and progressive metal, creating a sound that's both familiar
										and innovative.
									</p>
									<p>
										The band's name, Dracole, represents our dual nature -
										drawing inspiration from both the mythical and the cosmic,
										the ancient and the modern. Our lyrics explore themes of
										cosmic horror, existential dread, and the eternal struggle
										between light and darkness.
									</p>
								</div>
							</div>
						</div>
					</ScrollAnimation>

					{/* Target Audience Section */}
					<ScrollAnimation animation="fade-up" delay={600}>
						<div className="target-audience">
							<h2 className="section-subtitle">Our Audience</h2>
							<div className="audience-grid">
								<div className="audience-item">
									<h3>Metal Enthusiasts</h3>
									<p>
										Fans of both classic and modern metal who appreciate
										technical proficiency and emotional depth in music.
									</p>
								</div>
								<div className="audience-item">
									<h3>Art Lovers</h3>
									<p>
										Those who value the visual and conceptual aspects of music,
										appreciating the complete artistic package.
									</p>
								</div>
								<div className="audience-item">
									<h3>Cultural Explorers</h3>
									<p>
										Individuals who seek music that challenges conventions and
										offers new perspectives on the metal genre.
									</p>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
};

export default AboutModal;
