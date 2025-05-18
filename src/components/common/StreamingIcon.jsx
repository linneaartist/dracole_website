import React from "react";
import "../styles/StreamingIcon.css";

const StreamingIcon = ({ icon, size = 24 }) => {
	const renderIcon = () => {
		switch (icon) {
			case "spotify":
				return (
					<svg
						width={size}
						height={size}
						xmlns="http://www.w3.org/2000/svg"
						shapeRendering="geometricPrecision"
						textRendering="geometricPrecision"
						imageRendering="optimizeQuality"
						fillRule="evenodd"
						clipRule="evenodd"
						viewBox="0 0 512 511.991"
					>
						<path
							fill="currentColor"
							fillRule="nonzero"
							d="M255.998.003C114.616.003 0 114.616 0 255.997c0 141.385 114.616 255.994 255.998 255.994C397.395 511.991 512 397.386 512 255.997 512 114.624 397.395.015 255.994.015l.004-.015v.003zm117.4 369.22c-4.585 7.519-14.427 9.908-21.949 5.288-60.104-36.714-135.771-45.027-224.882-24.668-8.587 1.954-17.146-3.425-19.104-12.015-1.967-8.591 3.394-17.15 12.003-19.104 97.518-22.28 181.164-12.688 248.645 28.55 7.522 4.616 9.907 14.427 5.288 21.95l-.001-.001zm31.335-69.703c-5.779 9.389-18.067 12.353-27.452 6.578-68.813-42.298-173.703-54.548-255.096-29.837-10.556 3.187-21.704-2.761-24.906-13.298-3.18-10.556 2.772-21.68 13.309-24.891 92.971-28.208 208.551-14.546 287.574 34.015 9.385 5.779 12.35 18.067 6.575 27.441v-.004l-.004-.004zm2.692-72.584c-82.511-49.006-218.635-53.51-297.409-29.603-12.649 3.837-26.027-3.302-29.86-15.955-3.832-12.656 3.303-26.023 15.96-29.867 90.428-27.452 240.753-22.149 335.747 34.245 11.401 6.754 15.133 21.446 8.375 32.809-6.728 11.378-21.462 15.13-32.802 8.371h-.011z"
						/>
					</svg>
				);
			case "apple":
				return (
					<svg
						width={size}
						height={size}
						viewBox="0 0 122.88 122.88"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill="currentColor"
							d="M47.76,86.16v-38.4c0-1.44,0.8-2.32,2.4-2.64l33.12-6.72c1.76-0.32,2.72,0.48,2.88,2.4v29.28 c0,2.4-3.6,4-10.8,4.8c-13.68,2.16-11.52,25.2,7.2,18.96c7.2-2.64,8.4-9.6,8.4-16.56V21.12c0,0,0-4.8-4.08-3.6l-40.8,8.4 c0,0-3.12,0.48-3.12,4.32v48.72c0,2.4-3.6,4-10.8,4.8c-13.68,2.16-11.52,25.2,7.2,18.96C46.56,100.08,47.76,93.12,47.76,86.16 L47.76,86.16z"
						/>
					</svg>
				);
			case "bandcamp":
				return (
					<svg
						width={size}
						height={size}
						viewBox="0 0 48 48"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="24" cy="24" r="20" fill="currentColor" />
						<path
							d="M28.36 31.1025H12L19.6398 16.9999H36L28.36 31.1025Z"
							fill="var(--color-background)"
						/>
					</svg>
				);
			case "youtube":
				return (
					<svg
						width={size}
						height={size}
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
						<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
					</svg>
				);
			case "soundcloud":
				return (
					<svg
						width={size}
						height={size}
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M2 12h1" />
						<path d="M5 12h1" />
						<path d="M8 12h1" />
						<path d="M11 12h1" />
						<path d="M14 12h1" />
						<path d="M17 12h1" />
						<path d="M20 12h1" />
						<path d="M3 6v12" />
						<path d="M6 6v12" />
						<path d="M9 6v12" />
						<path d="M12 6v12" />
						<path d="M15 6v12" />
						<path d="M18 6v12" />
						<path d="M21 6v12" />
					</svg>
				);
			default:
				return null;
		}
	};

	return <div className="streaming-icon">{renderIcon()}</div>;
};

export default StreamingIcon;
