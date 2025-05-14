import React, { useRef, useEffect } from "react";
import "../styles/TextReveal.css";

const TextReveal = ({
	children,
	duration = 1000,
	delay = 0,
	direction = "up",
	stagger = 50,
	className = "",
	...props
}) => {
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		// Split text into spans for each character
		const text = container.textContent;
		container.textContent = "";

		const characters = text.split("");
		const charSpans = characters.map((char, index) => {
			const span = document.createElement("span");
			span.textContent = char;
			span.style.animationDelay = `${delay + index * stagger}ms`;
			span.style.animationDuration = `${duration}ms`;
			span.className = `text-reveal-char text-reveal-${direction}`;
			return span;
		});

		charSpans.forEach((span) => container.appendChild(span));

		// Start animation
		setTimeout(() => {
			charSpans.forEach((span) => {
				span.classList.add("active");
			});
		}, 100);
	}, [children, duration, delay, direction, stagger]);

	return (
		<span ref={containerRef} className={`text-reveal ${className}`} {...props}>
			{children}
		</span>
	);
};

export default TextReveal;
