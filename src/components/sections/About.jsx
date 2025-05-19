import React, { useState } from "react";
import ScrollAnimation from "../animations/ScrollAnimation";
import Button from "../ui/Button";
import "../styles/About.css";
import DracoleLogo from "../../assets/images/dracule_svg.svg";
import DracoleBody from "../../assets/images/dracole-body-svg.svg";
import DracoleAltLogos from "../../assets/images/dracole-alt-logos.svg";
import SectionTitle from "../common/SectionTitle";
import BrandCreationModal from "../modals/BrandCreationModal";

const About = () => {
	const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);

	return (
		<section id="about" className="about-section">
			<div className="container">
				<div className="hero-content">
					<div className="band-description">
						<div className="description-content">
							<ScrollAnimation animation="fade-up" delay={600}>
								<p className="hero-description">
									Formed in 2024, Dracole aims to bring the 90s black metal
									scene back.
								</p>
								<div className="description-text">
									<p>
										Dracole emerged from the depths of the underground metal
										scene, channeling the energy of 90s black metal while
										infusing it with contemporary elements. Our music is a call
										back to darkness and an attempt to return to the uncensored
										black metal scene. We were founded on the principles of the
										Satanic or anti-Christ movement that is stereotypical of
										other black metal bands, the anticosmic principle based on
										the beliefs of the misanthropic Luciferian order founded by
										Dissection musician Jon Noedtveidt. Dracole stands as a
										monument to these roots of black metal.
									</p>
								</div>
							</ScrollAnimation>
						</div>
					</div>

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
							<Button
								variant="outline"
								size="large"
								color="orange"
								onClick={() => setIsBrandModalOpen(true)}
							>
								Brand History
							</Button>
						</div>
					</ScrollAnimation>
				</div>

				<h2 className="section-subtitle section-title-highlight-orange">
					Brand Identity
				</h2>

				<div className="brand-grid">
					<div className="brand-item">
						<div className="brand-item-border-top"></div>
						<div className="brand-item-border-right"></div>
						<div className="brand-item-border-bottom"></div>
						<div className="brand-item-border-left"></div>
						<h3>Dark Aesthetic</h3>
						<p>
							We aim to showcase an unfiltered black metal aesthetic through
							sinister imagery and design elements. Our visual language draws
							from Transylvanian folklore, occult symbolism, and the beauty of
							decay and destruction.
						</p>
						<p>
							The Dracole aesthetic merges traditional black metal elements with
							contemporary ones. We are not afraid to veer from the norm and
							evolve as time goes on, but at our core, Translyvania will always
							be a major part of our identity.
						</p>
					</div>
					<div className="brand-item">
						<div className="brand-item-border-top"></div>
						<div className="brand-item-border-right"></div>
						<div className="brand-item-border-bottom"></div>
						<div className="brand-item-border-left"></div>
						<h3>Musical Heritage</h3>
						<p>
							Within the black metal scene, taking a trip to Transylvania is
							euphemism for taking a final journey into the afterlife. Paying
							homage to the 90s black metal scene, we draw from the powerful
							sounds of Marduk and Dark Throne, two bands that popularised the
							Transylvanian subject matter. Our sound is characterized by
							haunting passages that invoke the cold emptiness of forgotten
							castles.
						</p>
					</div>
					<div className="brand-item">
						<div className="brand-item-border-top"></div>
						<div className="brand-item-border-right"></div>
						<div className="brand-item-border-bottom"></div>
						<div className="brand-item-border-left"></div>
						<h3>Cultural Impact</h3>
						<p>
							Creating a movement to spread the message of hate. Dracole serves
							as a vessel for exploration of darkness, mysticism, and breaking
							free from societal constraints.
						</p>
						<p>
							We reject the superficial and embrace the profound, offering
							listeners not merely music but a gateway to spiritual liberation.
						</p>
					</div>
				</div>

				<div className="target-audience">
					<h2 className="section-subtitle section-title-highlight-orange">
						Target Audience
					</h2>
					<div className="audience-grid">
						<div className="audience-item">
							<div className="audience-item-border-top"></div>
							<div className="audience-item-border-right"></div>
							<div className="audience-item-border-bottom"></div>
							<div className="audience-item-border-left"></div>
							<h3>Metal Enthusiasts</h3>
							<p>
								Fans of black metal (and metal-adjacent music) who appreciate
								the genre's energy and lyrical depth. Individuals with deep
								knowledge of underground metal and its history, who value
								authenticity over commercial appeal and censorship.
							</p>
						</div>
						<div className="audience-item">
							<div className="audience-item-border-top"></div>
							<div className="audience-item-border-right"></div>
							<div className="audience-item-border-bottom"></div>
							<div className="audience-item-border-left"></div>
							<h3>Alternative Culture</h3>
							<p>
								Those who embrace non-mainstream music and cultural movements;
								who reject conventional aesthetics; who are drawn to darkness,
								chaos, and taboo subjects.
							</p>
						</div>
						<div className="audience-item">
							<div className="audience-item-border-top"></div>
							<div className="audience-item-border-right"></div>
							<div className="audience-item-border-bottom"></div>
							<div className="audience-item-border-left"></div>
							<h3>Artistic Community</h3>
							<p>
								People who value artistic expression and are drawn to dark,
								grungy aesthetics. Creators who work in various mediums, both
								physical and musical, but share an appreciation for the macabre.
							</p>
						</div>
					</div>
				</div>

				<div className="visual-elements">
					<h2 className="section-subtitle section-title-highlight-orange">
						Visual Language
					</h2>
					<div className="visual-grid">
						<div className="visual-item">
							<h3>Logo</h3>
							<div className="logo-text-content">
								<div className="logo-section">
									<div className="logo-full">
										<img
											src={DracoleLogo}
											alt="Dracole Logo"
											className="logo-svg"
										/>
										<p className="logo-caption">Full Logo</p>
									</div>
									<div className="logo-text">
										<p>
											This name was chosen with Transylvania and Count Dracula
											in mind. What is associated with these things? Bats.
											Hence, the Dracole sigil takes the form of a bat in
											flight, embodying both predator and prey. The design
											incorporates the letters D-R-A-C-O-L-E within its
											anatomy—the left wing forming the D, the body containing
											R-A-C-O, and the right wing creating both the L and E.
										</p>
									</div>
								</div>
								<div className="logo-section">
									<div className="logo-standalone">
										<img
											src={DracoleBody}
											alt="Dracole Body"
											className="logo-svg"
										/>
										<p className="logo-caption">Standalone Symbol</p>
									</div>
									<div className="logo-text">
										<p>
											As a standalone symbol, the bat can "fold" its wings,
											retaining its distinct silhouette with its pointed ears,
											fangs, and tapered body. The sharp lines evoke the
											piercing of bat fangs.
										</p>
										<div className="alt-logos">
											<img
												src={DracoleAltLogos}
												alt="Alternative Logo Variations"
												className="alt-logos-svg"
											/>
											<p className="alt-logos-caption">
												The logotype can be increased in thickness or tweaked
												(distressing, extra stroke, different color) to be
												placed on merchandise or album covers while maintaining
												its recognizability.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="visual-item">
							<h3>Color Palette</h3>
							<div className="color-grid">
								<div className="color-item">
									<div
										className="color-circle"
										style={{ backgroundColor: "#FF4500" }}
									></div>
									<p>Firey Orange (#FF4500)</p>
									<p className="color-description">
										The vibrant hue of freshly spilled blood catching firelight,
										used for primary accents.
									</p>
								</div>
								<div className="color-item">
									<div
										className="color-circle"
										style={{ backgroundColor: "var(--color-accent-blue)" }}
									></div>
									<p>Midnight Cloud Blue (#58719f)</p>
									<p className="color-description">
										The color of the clouds in the sky during a full moon,
										serving as our primary background.
									</p>
								</div>
								<div className="color-item">
									<div
										className="color-circle"
										style={{ backgroundColor: "#8B0000" }}
									></div>
									<p>Bloody Crimson (#8B0000)</p>
									<p className="color-description">
										Deep and rich like aged blood, employed for emphasis and
										dramatic effect.
									</p>
								</div>
								<div className="color-item">
									<div
										className="color-circle"
										style={{ backgroundColor: "#C0C0C0" }}
									></div>
									<p>Moonlight Silver (#C0C0C0)</p>
									<p className="color-description">
										The cold glow of the moon on a winter night, used for subtle
										highlights and metallic elements.
									</p>
								</div>
								<div className="color-item">
									<div
										className="color-circle"
										style={{ backgroundColor: "#000000" }}
									></div>
									<p>Abyssal Black (#000000)</p>
									<p className="color-description">
										The absence of light, the void from which we emerged, used
										for text and negative space.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="typography">
					<h2 className="section-subtitle section-title-highlight-orange">
						Typography
					</h2>
					<div className="typography-grid">
						<div className="typography-item">
							<h3>Typeface Selection</h3>
							<p className="typography-text">
								Our typography system is designed to reflect the band's dark and
								mysterious aesthetic while maintaining readability and visual
								hierarchy. The combination of these typefaces creates a unique
								visual identity that complements our musical style.
							</p>
							<div className="font-example">
								<h4>Headings and Decorative Elements</h4>
								<p className="font-preview decorative">Kenarock</p>
								<p className="font-info">
									Used for decorative headings and special elements. This choice
									may evolve in style as the band grows and new albums are
									created.
								</p>
							</div>
							<div className="font-example">
								<h4>Headings</h4>
								<p className="font-preview heading">Gza Regular Compressed</p>
								<p className="font-info">
									Employed for subheadings and body text. Its condensed form
									creates a bold impression that draws attention to important
									sections.
								</p>
							</div>
							<div className="font-display">
								<div className="font-example">
									<h4>Body Text</h4>
									<p className="font-preview body">Gza Regular</p>
									<p className="font-info">
										Used for packaging body text and general content. Its clean,
										readable design ensures our messages are always clear.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<BrandCreationModal
				isOpen={isBrandModalOpen}
				onClose={() => setIsBrandModalOpen(false)}
			/>
		</section>
	);
};

export default About;
