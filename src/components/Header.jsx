import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/styles/Header.css";
import AboutModal from "./modals/AboutModal";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<header className={`header ${isScrolled ? "scrolled" : ""}`}>
				<div className="header-content">
					<Link to="/" className="logo">
						<img
							src="/images/dracole-logo-small.png"
							alt="Dracole"
							className="logo-image"
						/>
					</Link>

					<nav className="nav-menu">
						<Link to="/" className="nav-link">
							Home
						</Link>
						<button
							className="nav-link"
							onClick={() => setIsAboutModalOpen(true)}
						>
							About
						</button>
						<Link to="/music" className="nav-link">
							Music
						</Link>
						<Link to="/tour" className="nav-link">
							Tour
						</Link>
						<Link to="/store" className="nav-link">
							Store
						</Link>
					</nav>
				</div>
			</header>

			<AboutModal
				isOpen={isAboutModalOpen}
				onClose={() => setIsAboutModalOpen(false)}
			/>
		</>
	);
};

export default Header;
