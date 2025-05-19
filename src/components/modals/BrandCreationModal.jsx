import React, { useEffect } from "react";
import SectionTitle from "../common/SectionTitle";
import ScrollAnimation from "../animations/ScrollAnimation";
import "../styles/BrandCreationModal.css";
import initialSketch from "../../assets/images/initial-sketch.jpg";
import logoEvolution from "../../assets/images/dracole-logo-evolution.png";
import aiImplementation1 from "../../assets/images/ai-implementation1.png";
import aiImplementation2 from "../../assets/images/ai-implementation2.png";
import dracoleCover from "../../assets/images/cover-sketch.jpg";
import packaging from "../../assets/images/packaging.png";

const BrandCreationModal = ({ isOpen, onClose }) => {
	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === "Escape") {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "unset";
		};
	}, [isOpen, onClose]);

	return (
		<div
			className={`modal-overlay ${isOpen ? "active" : ""}`}
			onClick={onClose}
		>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button
					className="modal-close"
					onClick={onClose}
					aria-label="Close modal"
				>
					×
				</button>
				<div className="modal-body">
					<ScrollAnimation animation="fade-down">
						<SectionTitle title="Brand History" highlight="orange" />
					</ScrollAnimation>

					<ScrollAnimation animation="fade-up" delay={200}>
						<div className="brand-images-grid">
							<div className="brand-image-item">
								<img src={initialSketch} alt="Initial logo sketches" />
								<p>Initial logo sketches</p>
							</div>
							<div className="brand-image-item">
								<img src={logoEvolution} alt="Logo evolution" />
								<p>Logo evolution</p>
							</div>
							<div className="brand-image-item">
								<img src={aiImplementation1} alt="AI Implementation" />
								<p>AI Implementation</p>
							</div>
							<div className="brand-image-item">
								<img src={aiImplementation2} alt="AI Implementation" />
								<p>AI Implementation</p>
							</div>
							<div className="brand-image-item">
								<img src={dracoleCover} alt="Album artwork sketch" />
								<p>Album artwork sketch</p>
							</div>
							<div className="brand-image-item">
								<img src={packaging} alt="Album artwork sketch" />
								<p>Packaging layout</p>
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
};

export default BrandCreationModal;
