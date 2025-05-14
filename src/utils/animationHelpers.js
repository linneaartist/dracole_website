/**
 * Animation helper functions for the Dracole website
 */

// Utility to check if an element is in viewport
export const isInViewport = (element, offset = 0) => {
	if (!element) return false;

	const rect = element.getBoundingClientRect();
	const windowHeight =
		window.innerHeight || document.documentElement.clientHeight;

	return rect.top <= windowHeight - offset && rect.bottom >= 0 + offset;
};

// Add active class to elements when they enter viewport
export const revealOnScroll = (
	selector,
	activeClass = "active",
	offset = 100
) => {
	const elements = document.querySelectorAll(selector);

	const handleScroll = () => {
		elements.forEach((element) => {
			if (
				isInViewport(element, offset) &&
				!element.classList.contains(activeClass)
			) {
				element.classList.add(activeClass);
			}
		});
	};

	// Initialize on first load
	handleScroll();

	// Listen for scroll events
	window.addEventListener("scroll", handleScroll);

	// Return cleanup function
	return () => window.removeEventListener("scroll", handleScroll);
};

// Parallax effect for background elements
export const parallaxEffect = (element, speed = 0.5) => {
	if (!element) return;

	const handleScroll = () => {
		const scrollPosition = window.pageYOffset;
		element.style.transform = `translateY(${scrollPosition * speed}px)`;
	};

	window.addEventListener("scroll", handleScroll);

	// Return cleanup function
	return () => window.removeEventListener("scroll", handleScroll);
};

// Create blood drip effect
export const createBloodDrip = (
	container,
	count = 10,
	duration = { min: 3, max: 8 }
) => {
	if (!container) return;

	// Create initial drops
	for (let i = 0; i < count; i++) {
		createBloodDrop(container, duration);
	}

	// Add new drops periodically
	const interval = setInterval(() => {
		createBloodDrop(container, duration);
	}, 1000);

	// Return cleanup function
	return () => clearInterval(interval);
};

// Helper to create a single blood drop
const createBloodDrop = (container, duration = { min: 3, max: 8 }) => {
	const drop = document.createElement("div");
	drop.classList.add("blood-drop");

	// Random positioning and timing
	drop.style.left = `${Math.random() * 100}%`;
	drop.style.animationDuration = `${
		Math.random() * (duration.max - duration.min) + duration.min
	}s`;
	drop.style.opacity = Math.random() * 0.7 + 0.3;

	// Append to container
	container.appendChild(drop);

	// Remove the drop after animation
	setTimeout(() => {
		drop.remove();
	}, parseFloat(drop.style.animationDuration) * 1000 + 500);
};

// Text scramble effect
export const textScramble = (
	element,
	text,
	duration = 2000,
	chars = "!<>-_\\/[]{}—=+*^?#________"
) => {
	if (!element) return;

	let frame = 0;
	const frameRate = 30;
	const frameCount = Math.floor(duration / (1000 / frameRate));

	let currentText = "";

	const update = () => {
		let output = "";
		const complete = frame >= frameCount;

		if (complete) {
			output = text;
		} else {
			for (let i = 0; i < text.length; i++) {
				// Calculate how far through the animation we are for this character
				const progress = frame / frameCount;
				const charProgress = Math.max(
					0,
					Math.min(1, progress * 2 - i / text.length)
				);

				if (charProgress === 1) {
					// Character has settled
					output += text[i];
				} else if (charProgress > 0) {
					// Character is being scrambled
					output += chars[Math.floor(Math.random() * chars.length)];
				} else {
					// Character hasn't started animating yet
					output += "";
				}
			}
		}

		element.textContent = output;

		if (!complete) {
			frame++;
			requestAnimationFrame(update);
		}
	};

	update();
};

// Pulse effect for elements
export const pulseElement = (element, intensity = 1.1, duration = 1000) => {
	if (!element) return;

	const pulse = () => {
		element.animate(
			[
				{ transform: "scale(1)" },
				{ transform: `scale(${intensity})` },
				{ transform: "scale(1)" },
			],
			{
				duration,
				easing: "ease-in-out",
			}
		);
	};

	// Pulse once
	pulse();

	// Return the pulse function so it can be called again if needed
	return pulse;
};

// Smooth scroll to element
export const smoothScrollTo = (elementId, offset = 0, duration = 1000) => {
	const element = document.getElementById(elementId);
	if (!element) return;

	const targetPosition =
		element.getBoundingClientRect().top + window.pageYOffset - offset;
	const startPosition = window.pageYOffset;
	const distance = targetPosition - startPosition;
	let startTime = null;

	const animation = (currentTime) => {
		if (startTime === null) startTime = currentTime;
		const timeElapsed = currentTime - startTime;
		const progress = Math.min(timeElapsed / duration, 1);
		const easeInOutQuad = (progress) =>
			progress < 0.5
				? 2 * progress * progress
				: 1 - Math.pow(-2 * progress + 2, 2) / 2;

		window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

		if (timeElapsed < duration) {
			requestAnimationFrame(animation);
		}
	};

	requestAnimationFrame(animation);
};

// Export all functions for use in the application
export default {
	isInViewport,
	revealOnScroll,
	parallaxEffect,
	createBloodDrip,
	textScramble,
	pulseElement,
	smoothScrollTo,
};
