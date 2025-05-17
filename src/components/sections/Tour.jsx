import React from "react";
import SectionTitle from "../common/SectionTitle";
import Button from "../ui/Button";
import ScrollAnimation from "../animations/ScrollAnimation";
import "../styles/Tour.css";

const Tour = () => {
	// Tour dates data
	const tourDates = [
		{
			id: 1,
			date: "May 15, 2025",
			venue: "Blood Moon Theater",
			location: "Stockholm, Sweden",
			ticketLink: "#",
			soldOut: false,
		},
		{
			id: 2,
			date: "May 20, 2025",
			venue: "Crypt of Shadows",
			location: "Oslo, Norway",
			ticketLink: "#",
			soldOut: false,
		},
		{
			id: 3,
			date: "May 25, 2025",
			venue: "Nosferatu's Lair",
			location: "Helsinki, Finland",
			ticketLink: "#",
			soldOut: true,
		},
		{
			id: 4,
			date: "June 1, 2025",
			venue: "Dark Cathedral",
			location: "Berlin, Germany",
			ticketLink: "#",
			soldOut: false,
		},
		{
			id: 5,
			date: "June 5, 2025",
			venue: "Impaler's Den",
			location: "Prague, Czech Republic",
			ticketLink: "#",
			soldOut: false,
		},
		{
			id: 6,
			date: "June 10, 2025",
			venue: "The Sanctuary",
			location: "Vienna, Austria",
			ticketLink: "#",
			soldOut: false,
		},
	];

	return (
		<section id="tour" className="tour-section">
			<div className="tour-background"></div>

			<div className="container">
				<ScrollAnimation animation="fade-down">
					<SectionTitle title="Tour Dates" highlight="orange" />
				</ScrollAnimation>

				<div className="tour-dates-container">
					{tourDates.map((show, index) => (
						<ScrollAnimation
							key={show.id}
							animation="fade-up"
							delay={100 * index}
							className="tour-date-wrapper"
						>
							<div className={`tour-date ${show.soldOut ? "sold-out" : ""}`}>
								<div className="tour-date-info">
									<div className="tour-date-primary">
										<span className="tour-date-day">{show.date}</span>
										<span className="tour-date-venue">{show.venue}</span>
									</div>
									<div className="tour-date-location">{show.location}</div>
								</div>
								<div className="tour-date-action">
									{show.soldOut ? (
										<div className="sold-out-badge">SOLD OUT</div>
									) : (
										<Button
											href={show.ticketLink}
											variant="primary"
											size="medium"
											color="orange"
										>
											Tickets
										</Button>
									)}
								</div>

								{/* Animated border effect */}
								<div className="tour-date-border-top"></div>
								<div className="tour-date-border-right"></div>
								<div className="tour-date-border-bottom"></div>
								<div className="tour-date-border-left"></div>
							</div>
						</ScrollAnimation>
					))}
				</div>

				<ScrollAnimation animation="fade-up" delay={600} className="tour-cta">
					<p className="tour-cta-text">
						Join us on our first ever tour. Tickets are available now. In this
						age of social media and censorship, our concerts are strictly
						no-phone environments. Put them down and focus on the music. We want
						to see you in the pit! 🤘
					</p>
					<Button href="#" variant="outline" size="large" color="blue">
						See All Dates
					</Button>
				</ScrollAnimation>
			</div>
		</section>
	);
};

export default Tour;
