import React from "react";
import "../styles/SectionTitle.css";

const SectionTitle = ({
	title,
	highlight = "orange",
	alignment = "center",
}) => {
	// Split the title text to apply highlight to the first word
	const words = title.split(" ");
	const firstWord = words[0];
	const restOfTitle = words.slice(1).join(" ");

	const highlightClass =
		highlight === "blue"
			? "section-title-highlight-blue"
			: "section-title-highlight-orange";
	const alignmentClass = `section-title-${alignment}`;

	return (
		<div className={`section-title-container ${alignmentClass}`}>
			<h2 className="section-title">
				<span className={highlightClass}>{firstWord}</span> {restOfTitle}
			</h2>
			<div className="section-title-divider">
				<div className="drip-1"></div>
				<div className="drip-2"></div>
				<div className="drip-3"></div>
			</div>
		</div>
	);
};

export default SectionTitle;
