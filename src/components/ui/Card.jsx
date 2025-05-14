import React from "react";
import "../styles/Card.css";

const Card = ({
	children,
	className = "",
	variant = "default",
	hoverEffect = true,
	...props
}) => {
	const cardClass = `card card-${variant} ${
		hoverEffect ? "card-hover" : ""
	} ${className}`;

	return (
		<div className={cardClass} {...props}>
			{children}
		</div>
	);
};

export const CardMedia = ({
	src,
	alt = "",
	aspectRatio = "1/1",
	className = "",
	...props
}) => {
	const mediaClass = `card-media ${className}`;

	return (
		<div className={mediaClass} style={{ aspectRatio }} {...props}>
			<img src={src} alt={alt} className="card-image" />
			<div className="card-media-overlay"></div>
		</div>
	);
};

export const CardContent = ({ children, className = "", ...props }) => {
	const contentClass = `card-content ${className}`;

	return (
		<div className={contentClass} {...props}>
			{children}
		</div>
	);
};

export const CardTitle = ({ children, className = "", ...props }) => {
	const titleClass = `card-title ${className}`;

	return (
		<h3 className={titleClass} {...props}>
			{children}
		</h3>
	);
};

export const CardDescription = ({ children, className = "", ...props }) => {
	const descriptionClass = `card-description ${className}`;

	return (
		<p className={descriptionClass} {...props}>
			{children}
		</p>
	);
};

export const CardActions = ({ children, className = "", ...props }) => {
	const actionsClass = `card-actions ${className}`;

	return (
		<div className={actionsClass} {...props}>
			{children}
		</div>
	);
};

export default Card;
