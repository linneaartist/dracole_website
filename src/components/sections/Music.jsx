import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import ScrollAnimation from "../animations/ScrollAnimation";
import StreamingIcon from "../common/StreamingIcon";
import "../styles/Music.css";
import anticosmicCover from "../../assets/images/dracole_cover_blue.jpg";

const Music = () => {
	const [activeAlbum, setActiveAlbum] = useState(null);

	// Streaming platforms data
	const streamingPlatforms = [
		{
			id: "spotify",
			name: "Spotify",
			icon: "spotify",
			url: "https://open.spotify.com/artist/dracole",
		},
		{
			id: "apple",
			name: "Apple Music",
			icon: "apple",
			url: "https://music.apple.com/artist/dracole",
		},
		{
			id: "bandcamp",
			name: "Bandcamp",
			icon: "bandcamp",
			url: "https://dracole.bandcamp.com",
		},
		{
			id: "youtube",
			name: "YouTube",
			icon: "youtube",
			url: "https://www.youtube.com/dracoleband",
		},
	];

	// Albums data
	const albums = [
		{
			id: 1,
			title: "The Anticosmic Chiropteran Swarm",
			year: "2025",
			type: "Album",
			coverImage: anticosmicCover,
			streamUrl: "https://open.spotify.com/album/dracole",
			tracks: [
				{ title: "Christ Shall Fall", duration: "4:32" },
				{ title: "Beneath the Icy Mire", duration: "5:17" },
				{ title: "Vampyric Lust", duration: "3:58" },
				{ title: "Undead Carnal Pleasure", duration: "6:21" },
				{ title: "Bewitched by Satan", duration: "4:45" },
				{ title: "Nosferatu", duration: "2:30" },
				{ title: "No Reflection In My Mirror", duration: "9:05" },
				{ title: "Fangs", duration: "5:46" },
				{ title: "Coffin Slut", duration: "4:18" },
			],
		},
	];

	const handleAlbumClick = (albumId) => {
		if (activeAlbum === albumId) {
			setActiveAlbum(null);
		} else {
			setActiveAlbum(albumId);
		}
	};

	return (
		<section id="music" className="music-section">
			<div className="container">
				<ScrollAnimation animation="fade-down">
					<SectionTitle title="Music" highlight="orange" />
				</ScrollAnimation>

				{/* Streaming Platforms */}
				<ScrollAnimation animation="fade-up" delay={200}>
					<div className="streaming-platforms">
						<div className="streaming-icons">
							{streamingPlatforms.map((platform) => (
								<a
									key={platform.id}
									href={platform.url}
									className="streaming-link"
									target="_blank"
									rel="noopener noreferrer"
								>
									<StreamingIcon icon={platform.icon} size={40} />
									<span className="streaming-name">{platform.name}</span>
								</a>
							))}
						</div>
					</div>
				</ScrollAnimation>

				{/* Albums Grid */}
				<div className="albums-container">
					{albums.map((album, index) => (
						<ScrollAnimation
							key={album.id}
							animation="fade-up"
							delay={300 + index * 100}
							className="album-wrapper"
						>
							<div
								className={`album ${activeAlbum === album.id ? "active" : ""}`}
								onClick={() => handleAlbumClick(album.id)}
							>
								<div className="album-cover">
									<img
										src={album.coverImage}
										alt={`${album.title} album cover`}
										className="album-image"
									/>
									<div className="album-overlay">
										<div className="album-play-button">
											<span className="play-icon"></span>
										</div>
									</div>
								</div>

								<div className="album-info">
									<h3 className="album-title">{album.title}</h3>
									<p className="album-meta">
										{album.year} • {album.type}
									</p>

									<a href={album.streamUrl} className="album-stream-link">
										Listen Now
									</a>
								</div>

								{/* Track list - shown when active */}
								<div className="album-tracks">
									<div className="tracks-header">
										<span className="track-number">#</span>
										<span className="track-title">Title</span>
										<span className="track-duration">Duration</span>
									</div>

									<ul className="tracks-list">
										{album.tracks.map((track, trackIndex) => (
											<li key={trackIndex} className="track-item">
												<span className="track-number">{trackIndex + 1}</span>
												<span className="track-title">{track.title}</span>
												<span className="track-duration">{track.duration}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</ScrollAnimation>
					))}
				</div>

				{/* Latest Release Banner */}
				<ScrollAnimation animation="fade-up" delay={600}>
					<div className="latest-release">
						<div className="latest-release-backdrop"></div>
						<div className="latest-release-content">
							<div className="latest-release-info">
								<span className="latest-release-label">Latest Release</span>
								<h3 className="latest-release-title">
									The Anticosmic Chiropteran Swarm
								</h3>
								<p className="latest-release-description">Our first album.</p>
								<a href="#" className="latest-release-link">
									Listen Now
								</a>
							</div>
							<div className="latest-release-artwork">
								<img
									src={anticosmicCover}
									alt="Anticosmic album artwork"
									className="latest-release-image"
								/>
							</div>
						</div>
					</div>
				</ScrollAnimation>
			</div>
		</section>
	);
};

export default Music;
