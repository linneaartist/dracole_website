import React, { useEffect, useState, useRef } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Tour from "./components/sections/Tour";
import Music from "./components/sections/Music";
import Store from "./components/sections/Store";
import "./styles/global.css";

const App = () => {
	const [activeSection, setActiveSection] = useState("home");
	const scrollTimeoutRef = useRef(null);
	const lastScrollPositionRef = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");
			const scrollPosition = window.scrollY + 100;

			// Clear any existing timeout
			if (scrollTimeoutRef.current) {
				clearTimeout(scrollTimeoutRef.current);
			}

			// Add a slight delay to the scroll end
			scrollTimeoutRef.current = setTimeout(() => {
				// Check if we've actually stopped scrolling
				if (Math.abs(window.scrollY - lastScrollPositionRef.current) < 1) {
					// Find the closest section
					let closestSection = null;
					let closestDistance = Infinity;

					sections.forEach((section) => {
						const sectionTop = section.offsetTop;
						const sectionHeight = section.offsetHeight;
						const sectionCenter = sectionTop + sectionHeight / 2;
						const distance = Math.abs(scrollPosition - sectionCenter);

						if (distance < closestDistance) {
							closestDistance = distance;
							closestSection = section;
						}
					});

					if (closestSection) {
						setActiveSection(closestSection.id);
					}
				}
			}, 150); // 150ms delay after scroll stops

			lastScrollPositionRef.current = window.scrollY;
		};

		// Set up intersection observer for fade effect
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
					} else {
						entry.target.classList.remove("visible");
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: "-50px 0px",
			}
		);

		// Observe all sections
		document.querySelectorAll("section").forEach((section) => {
			observer.observe(section);
		});

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			observer.disconnect();
			if (scrollTimeoutRef.current) {
				clearTimeout(scrollTimeoutRef.current);
			}
		};
	}, []);

	return (
		<div className="app">
			<Header activeSection={activeSection} />
			<main>
				<Hero />
				<About />
				<Tour />
				<Music />
				<Store />
			</main>
			<Footer />
		</div>
	);
};

export default App;
