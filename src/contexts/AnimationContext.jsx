import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const AnimationContext = createContext();

// Animation provider component
export const AnimationProvider = ({ children }) => {
	const [animationsEnabled, setAnimationsEnabled] = useState(true);
	const [reducedMotion, setReducedMotion] = useState(false);
	const [loadingComplete, setLoadingComplete] = useState(false);

	// Check for reduced motion preference
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

		const handleChange = (e) => {
			setReducedMotion(e.matches);
			// If user prefers reduced motion, disable animations
			if (e.matches) {
				setAnimationsEnabled(false);
			}
		};

		// Set initial value
		handleChange(mediaQuery);

		// Listen for changes
		mediaQuery.addEventListener("change", handleChange);

		return () => {
			mediaQuery.removeEventListener("change", handleChange);
		};
	}, []);

	// Simulate initial loading
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoadingComplete(true);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	// Toggle animations function
	const toggleAnimations = () => {
		setAnimationsEnabled((prev) => !prev);
	};

	// Value to be provided
	const value = {
		animationsEnabled,
		reducedMotion,
		loadingComplete,
		toggleAnimations,
	};

	return (
		<AnimationContext.Provider value={value}>
			{children}
		</AnimationContext.Provider>
	);
};

// Custom hook to use the animation context
export const useAnimation = () => {
	const context = useContext(AnimationContext);

	if (!context) {
		throw new Error("useAnimation must be used within an AnimationProvider");
	}

	return context;
};

export default AnimationContext;
