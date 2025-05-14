import React from "react";
import SocialIcons from "../ui/SocialIcons";
import "../styles/Footer.css";
import dracoleLogo from "../../assets/images/dracule_svg.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-branding">
						<img src={dracoleLogo} alt="Dracole" className="footer-logo" />
						<p className="footer-tagline">Embrace the Darkness</p>
					</div>

					<div className="footer-navigation">
						<div className="footer-section">
							<h3 className="footer-heading">Navigation</h3>
							<ul className="footer-links">
								<li>
									<a href="#home" className="footer-link">
										Home
									</a>
								</li>
								<li>
									<a href="#tour" className="footer-link">
										Tour
									</a>
								</li>
								<li>
									<a href="#music" className="footer-link">
										Music
									</a>
								</li>
								<li>
									<a href="#store" className="footer-link">
										Store
									</a>
								</li>
							</ul>
						</div>

						<div className="footer-section">
							<h3 className="footer-heading">Connect</h3>
							<SocialIcons className="footer-social-icons" />
						</div>

						<div className="footer-section">
							<h3 className="footer-heading">Contact</h3>
							<p className="footer-contact-info">
								<span>Booking:</span> booking@dracole.com
							</p>
							<p className="footer-contact-info">
								<span>Management:</span> management@dracole.com
							</p>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<p className="copyright">
						© {new Date().getFullYear()} Dracole. All Rights Reserved.
					</p>
					<div className="footer-legal">
						<a href="/privacy-policy" className="footer-legal-link">
							Privacy Policy
						</a>
						<a href="/terms" className="footer-legal-link">
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
