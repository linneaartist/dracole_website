import { useState, useEffect } from "react";

const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState({
		x: 0,
		y: 0,
		direction: null,
		lastY: 0,
	});

	useEffect(() => {
		let lastScrollY = window.scrollY;
		let ticking = false;

		const updateScrollPosition = () => {
			const currentScrollY = window.scrollY;
			const currentScrollX = window.scrollX;

			const direction = currentScrollY > lastScrollY ? "down" : "up";

			setScrollPosition({
				x: currentScrollX,
				y: currentScrollY,
				direction: direction,
				lastY: lastScrollY,
			});

			lastScrollY = currentScrollY;
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollPosition);
				ticking = true;
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return scrollPosition;
};

export default useScrollPosition;
