import React, { useEffect, useRef } from "react";
import "../styles/ScrollAnimation.css";

const ScrollAnimation = ({
	children,
	animation = "fade-up",
	duration = "normal",
	delay = 0,
	threshold = 0.1,
	once = true,
	className = "",
	...props
}) => {
	const elementRef = useRef(null);

	useEffect(() => {
		const element = elementRef.current;

		if (!element) return;

		const animationClass = `animate-${animation}`;
		const durationClass = `duration-${duration}`;
		const delayClass = delay ? `delay-${delay}` : null;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const classesToAdd = [animationClass, durationClass];
						if (delayClass) classesToAdd.push(delayClass);
						element.classList.add(...classesToAdd);

						if (once) {
							observer.unobserve(element);
						}
					} else if (!once) {
						element.classList.remove(animationClass);
					}
				});
			},
			{
				threshold,
				rootMargin: "0px 0px -10% 0px",
			}
		);

		observer.observe(element);

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	}, [animation, duration, delay, threshold, once]);

	return (
		<div
			ref={elementRef}
			className={`scroll-animation ${className}`}
			data-animation={animation}
			{...props}
		>
			{children}
		</div>
	);
};

export default ScrollAnimation;
