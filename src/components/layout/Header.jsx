import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import "../styles/Header.css";
import dracoleLogo from "../../assets/images/dracule_svg.svg";

const Header = ({ activeSection }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Handle scroll effect for header
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className={`header ${isScrolled ? "scrolled" : ""}`}>
			<div className="container header-container">
				<div className="logo-container">
					<a href="#home" className="logo-link">
						<img src={dracoleLogo} alt="Dracole" className="header-logo" />
					</a>
					<div className="logo-underline"></div>
				</div>

				{/* Mobile Menu Button */}
				<button
					className="menu-toggle"
					onClick={toggleMenu}
					aria-label="Toggle navigation menu"
				>
					<div className={`menu-icon ${isMenuOpen ? "open" : ""}`}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</button>

				<Navigation
					activeSection={activeSection}
					isMenuOpen={isMenuOpen}
					toggleMenu={toggleMenu}
				/>
			</div>
		</header>
	);
};

export default Header;
