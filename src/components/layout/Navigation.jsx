import React from "react";
import "../styles/Navigation.css";

const Navigation = ({ activeSection, isMenuOpen, toggleMenu }) => {
	const navLinks = [
		{ name: "HOME", section: "home" },
		{ name: "ABOUT", section: "about" },
		{ name: "TOUR", section: "tour" },
		{ name: "MUSIC", section: "music" },
		{ name: "STORE", section: "store" },
	];

	const handleLinkClick = () => {
		if (window.innerWidth < 768) {
			toggleMenu();
		}
	};

	return (
		<>
			{/* Desktop Navigation */}
			<nav className="desktop-nav">
				<ul className="nav-list">
					{navLinks.map((link) => (
						<li key={link.section} className="nav-item">
							<a
								href={`#${link.section}`}
								className={`nav-link ${
									activeSection === link.section ? "active" : ""
								}`}
								onClick={handleLinkClick}
							>
								{link.name}
								<span className="nav-link-underline"></span>
							</a>
						</li>
					))}
				</ul>
			</nav>

			{/* Mobile Navigation */}
			<nav className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
				<div className="mobile-nav-backdrop"></div>
				<ul className="mobile-nav-list">
					{navLinks.map((link, index) => (
						<li
							key={link.section}
							className="mobile-nav-item"
							style={{ animationDelay: `${0.1 + index * 0.1}s` }}
						>
							<a
								href={`#${link.section}`}
								className={`mobile-nav-link ${
									activeSection === link.section ? "active" : ""
								}`}
								onClick={handleLinkClick}
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};

export default Navigation;
