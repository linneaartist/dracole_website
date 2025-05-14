import React from "react";
import "../styles/Button.css";

const Button = ({
	children,
	variant = "primary",
	size = "medium",
	color = "orange",
	className = "",
	href,
	onClick,
	...props
}) => {
	const buttonClass = `button button-${variant} button-${size} button-${color} ${className}`;

	const Tag = href ? "a" : "button";
	const linkProps = href ? { href } : {};
	const eventProps = onClick ? { onClick } : {};

	return (
		<Tag className={buttonClass} {...linkProps} {...eventProps} {...props}>
			<span className="button-text">{children}</span>
			{variant === "primary" && <span className="button-glow"></span>}
		</Tag>
	);
};

export default Button;
