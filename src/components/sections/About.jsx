import React from "react";
import ScrollAnimation from "../animations/ScrollAnimation";
import Button from "../ui/Button";
import "../styles/About.css";

const About = () => {
	return (
		<section id="about" className="about-section">
			<div className="container">
				<div className="hero-content">
					<ScrollAnimation animation="fade-up" delay={600}>
						<p className="hero-description">
							Formed in 2024, Dracole aims to bring the 90s black metal scene
							back.
						</p>
					</ScrollAnimation>

					<ScrollAnimation animation="fade-up" delay={800}>
						<div className="hero-buttons">
							<Button
								href="#tour"
								variant="primary"
								size="large"
								color="orange"
							>
								Upcoming Shows
							</Button>
							<Button href="#music" variant="outline" size="large" color="blue">
								Listen Now
							</Button>
						</div>
					</ScrollAnimation>
				</div>

				<h2 className="section-subtitle">Brand Identity</h2>
				<div className="brand-grid">
					<div className="brand-item">
						<h3>Dark Aesthetic</h3>
						<p>
							Embracing the raw, unfiltered essence of black metal through
							visually striking imagery and atmospheric design elements.
						</p>
					</div>
					<div className="brand-item">
						<h3>Musical Heritage</h3>
						<p>
							Paying homage to the 90s black metal scene while pushing
							boundaries with modern production techniques.
						</p>
					</div>
					<div className="brand-item">
						<h3>Cultural Impact</h3>
						<p>
							Creating a movement that resonates with metal enthusiasts and
							challenges mainstream music conventions.
						</p>
					</div>
				</div>

				<div className="band-description">
					<h2 className="section-subtitle">Band Description</h2>
					<div className="description-content">
						<div className="description-text">
							<p>
								Dracole emerged from the depths of the underground metal scene,
								channeling the raw energy and dark atmosphere of 90s black metal
								while infusing it with contemporary elements. Our music is a
								journey through the shadows, exploring themes of darkness,
								mysticism, and the human condition.
							</p>
							<p>
								With a commitment to authenticity and artistic integrity, we
								create an immersive experience that transcends traditional metal
								boundaries. Our live performances are intense, atmospheric
								events that leave a lasting impression on our audience.
							</p>
						</div>
					</div>
				</div>

				<div className="target-audience">
					<h2 className="section-subtitle">Target Audience</h2>
					<div className="audience-grid">
						<div className="audience-item">
							<h3>Metal Enthusiasts</h3>
							<p>
								Fans of black metal and extreme metal who appreciate the genre's
								raw energy and artistic depth.
							</p>
						</div>
						<div className="audience-item">
							<h3>Alternative Culture</h3>
							<p>
								Individuals who embrace non-mainstream music and cultural
								movements.
							</p>
						</div>
						<div className="audience-item">
							<h3>Artistic Community</h3>
							<p>
								People who value artistic expression and are drawn to dark,
								atmospheric aesthetics.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
