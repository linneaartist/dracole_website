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
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<circle cx="12" cy="12" r="10" />
						<circle cx="12" cy="12" r="4" />
						<line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
						<line x1="19.07" y1="4.93" x2="14.83" y2="9.17" />
						<line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
						<line x1="9.17" y1="14.83" x2="4.93" y2="19.07" />
					</svg>
				);
			case "apple":
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
						<path d="M9 18V5l12-2v13" />
						<circle cx="6" cy="18" r="3" />
						<circle cx="18" cy="16" r="3" />
					</svg>
				);
			case "bandcamp":
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
						<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
						<path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
						<path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
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
