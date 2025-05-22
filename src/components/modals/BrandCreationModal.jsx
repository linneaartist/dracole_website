import React, { useEffect, useState } from "react";
import ScrollAnimation from "../animations/ScrollAnimation";
import "../styles/BrandCreationModal.css";
import initialSketch from "../../assets/images/initial-sketch.jpg";
import logoEvolution from "../../assets/images/dracole-logo-evolution.png";
import aiImplementation1 from "../../assets/images/ai-implementation1.png";
import aiImplementation2 from "../../assets/images/ai-implementation2.png";
import dracoleCover from "../../assets/images/church-process.png";
import packaging from "../../assets/images/packaging.png";
import packaging2 from "../../assets/images/packshot.png";
import cursor from "../../assets/images/cursor.png";

const BrandCreationModal = ({ isOpen, onClose }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		{
			image: initialSketch,
			title: "Initial logo sketches",
			description:
				"The first iterations of the Dracole brand identity, exploring different concepts and visual directions. I like to begin my process with a few rough sketches on paper to get an idea of what I want to create. I then scan the sketches and use them as a reference for the digital design.",
		},
		{
			image: logoEvolution,
			title: "Logo evolution",
			description:
				"The progression of the logo design, showing how the final 'bat' was refined and perfected. I used Adobe Illustrator to create all iterations of the logo. I went through many different ideas, testing out different shapes and styles.",
		},
		{
			image: aiImplementation1,
			title: "AI Implementation",
			description:
				"Adobe Firefly was used to create the photo of the band members. I then used Adobe Photoshop's AI tools to remove unnecessary items in the photo and generative fill to expand the canvas. I also used it to add the logo to the image alongside filters. The final prompt used was '35mm grainy film; grunge; 4 young adults with long hair; dark black metal band promotional image, forest; black and white.'",
		},
		{
			image: aiImplementation2,
			title: "AI Implementation",
			description:
				"For some of the mockups, I prompted ChatGPT to create three human models with plain clothing and some candles. I then used Adobe Photoshop to add the logo to the image. For this specific mockup, the prompt was 'please create a hoodie mockup. this should include a man with long hair and a beard wearing a plain black hoodie.'",
		},
		{
			image: dracoleCover,
			title: "Album artwork sketch",
			description:
				"Like the logo, I began the album artwork process with a few rough sketches on paper using both pencil and a ballpoint pen. I then scanned the sketches and used them as a reference for the digital design, which was drawn in Clip Studio Paint (with a Wacom Cintiq) and translated to Adobe Photoshop for colouring. I really love to draw, so being able to incorporate many drawings into this project was exciting to me!",
		},
		{
			image: packaging,
			title: "Packaging layout",
			description:
				"This was part of the development of the physical packaging design using Esko Studio within Adobe Illustrator. This specific mockup is the box containing the double vinyl. The image shows the fold lines for both the front and back of the box.",
		},
		{
			image: packaging2,
			title: "Packshot",
			description:
				"Some initial pen sketches and a screenshot of the packshot created in Esko Studio. This was the first time I used Esko Studio, and I was able to create a 3D box mockup.",
		},
		{
			image: cursor,
			title: "Cursor",
			description:
				"I used Cursor to help me write most of the code for the website. I have knowledge in basic JavaScript, HTML, and CSS, but I am not well-versed with React at all, so this is something Cursor made possible.",
		},
	];

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

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

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
					<ScrollAnimation animation="fade-up" delay={200}>
						<div className="carousel-container">
							<button
								className="carousel-button prev"
								onClick={prevSlide}
								aria-label="Previous slide"
							>
								‹
							</button>
							<div className="carousel-slide">
								<div className="brand-image-item">
									<img
										src={slides[currentSlide].image}
										alt={slides[currentSlide].title}
									/>
									<h3>{slides[currentSlide].title}</h3>
									<p>{slides[currentSlide].description}</p>
								</div>
							</div>
							<button
								className="carousel-button next"
								onClick={nextSlide}
								aria-label="Next slide"
							>
								›
							</button>
							<div className="carousel-dots">
								{slides.map((_, index) => (
									<button
										key={index}
										className={`carousel-dot ${
											index === currentSlide ? "active" : ""
										}`}
										onClick={() => setCurrentSlide(index)}
										aria-label={`Go to slide ${index + 1}`}
									/>
								))}
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
};

export default BrandCreationModal;
