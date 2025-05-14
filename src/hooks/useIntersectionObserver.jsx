import { useState, useEffect, useRef } from "react";

const useIntersectionObserver = (options = {}) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const [hasIntersected, setHasIntersected] = useState(false);
	const targetRef = useRef(null);

	const defaultOptions = {
		root: null,
		rootMargin: "0px",
		threshold: 0.1,
		triggerOnce: true,
	};

	const mergedOptions = { ...defaultOptions, ...options };

	useEffect(() => {
		const target = targetRef.current;

		if (!target) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setIsIntersecting(entry.isIntersecting);

					if (entry.isIntersecting && !hasIntersected) {
						setHasIntersected(true);

						if (mergedOptions.triggerOnce) {
							observer.unobserve(target);
						}
					}
				});
			},
			{
				root: mergedOptions.root,
				rootMargin: mergedOptions.rootMargin,
				threshold: mergedOptions.threshold,
			}
		);

		observer.observe(target);

		return () => {
			if (target) {
				observer.unobserve(target);
			}
		};
	}, [
		mergedOptions.root,
		mergedOptions.rootMargin,
		mergedOptions.threshold,
		mergedOptions.triggerOnce,
		hasIntersected,
	]);

	return { targetRef, isIntersecting, hasIntersected };
};

export default useIntersectionObserver;
