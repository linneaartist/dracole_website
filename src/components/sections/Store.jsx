import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import Button from "../ui/Button";
import ScrollAnimation from "../animations/ScrollAnimation";
import "../styles/Store.css";
import collectionMockup from "../../assets/images/dracole_final_mockup_comp.jpg";
import vinylDesign from "../../assets/images/dracole_vinyl_designs.png";
import tshirtMockup from "../../assets/images/tshirt-mockup.png";
import hoodieMockup from "../../assets/images/hoodie-mockup.png";
import beanieMockup from "../../assets/images/beanie-mockup.png";
import candleMockup from "../../assets/images/candles-mockup.png";

const Store = () => {
	const [selectedCategory, setSelectedCategory] = useState("all");

	// Product categories data
	const categories = [
		{ id: "all", name: "All" },
		{ id: "shirts", name: "T-Shirts" },
		{ id: "vinyl", name: "Vinyl" },
		{ id: "cds", name: "CDs" },
		{ id: "patches", name: "Patches" },
		{ id: "stickers", name: "Stickers" },
		{ id: "accessories", name: "Accessories" },
	];

	// Products data
	const products = [
		{
			id: 1,
			name: "Dripping Blood T-Shirt",
			category: "shirts",
			price: "350 SEK",
			image: tshirtMockup,
			isNew: true,
			isBestSeller: false,
		},
		{
			id: 2,
			name: "The Anticosmic Chiropteran Swarm Vinyl",
			category: "vinyl",
			price: "300 SEK",
			image: vinylDesign,
			isNew: false,
			isBestSeller: true,
		},
		{
			id: 3,
			name: "Dracole Crest Patch",
			category: "patches",
			price: "100 SEK",
			image: "",
			isNew: false,
			isBestSeller: false,
		},
		{
			id: 4,
			name: "The Anticosmic Chiropteran Swarm CD",
			category: "cds",
			price: "150 SEK",
			image: "",
			isNew: false,
			isBestSeller: false,
		},
		{
			id: 5,
			name: "Dracole Logo Sticker Pack",
			category: "stickers",
			price: "50 SEK",
			image: "",
			isNew: true,
			isBestSeller: false,
		},
		{
			id: 6,
			name: "Chiropteran Hoodie",
			category: "shirts",
			price: "500 SEK",
			image: hoodieMockup,
			isNew: false,
			isBestSeller: true,
		},
		{
			id: 7,
			name: "Bat Beanie",
			category: "accessories",
			price: "190 SEK",
			image: beanieMockup,
			isNew: false,
			isBestSeller: false,
		},
		{
			id: 8,
			name: "Ritual Candle Set",
			category: "accessories",
			price: "250 SEK",
			image: candleMockup,
			isNew: true,
			isBestSeller: false,
		},
	];

	// Filter products based on selected category
	const filteredProducts =
		selectedCategory === "all"
			? products
			: products.filter((product) => product.category === selectedCategory);

	const handleCategoryClick = (categoryId) => {
		setSelectedCategory(categoryId);
	};

	return (
		<section id="store" className="store-section">
			<div className="store-background"></div>

			<div className="container">
				<ScrollAnimation animation="fade-down">
					<SectionTitle title="Unholy Merchandise" highlight="orange" />
				</ScrollAnimation>

				{/* Featured Collection Banner */}
				<ScrollAnimation animation="fade-up" delay={200}>
					<div className="featured-collection">
						<div
							className="featured-collection-backdrop"
							style={{ backgroundImage: `url(${collectionMockup})` }}
						></div>
						<div className="featured-collection-content">
							<div className="featured-collection-info">
								<span className="featured-badge">Latest Collection</span>
								<h3 className="featured-title">Anticosmic</h3>
								<p className="featured-description">
									Ascend with our newest collection. Limited edition merch
									inspired by our latest album "The Anticosmic Chiropteran
									Swarm".
								</p>
								<Button href="#" variant="primary" size="large" color="orange">
									Shop Collection
								</Button>
							</div>
						</div>
					</div>
				</ScrollAnimation>

				{/* Category Filters */}
				<ScrollAnimation animation="fade-up" delay={300}>
					<div className="category-filters">
						<h3 className="category-filters-title section-title-highlight-blue">
							Browse By Category
						</h3>
						<div className="category-buttons">
							{categories.map((category) => (
								<button
									key={category.id}
									className={`category-button ${
										selectedCategory === category.id ? "active" : ""
									}`}
									onClick={() => handleCategoryClick(category.id)}
								>
									{category.name}
								</button>
							))}
						</div>
					</div>
				</ScrollAnimation>

				{/* Products Grid */}
				<div className="products-grid">
					{filteredProducts.map((product, index) => (
						<ScrollAnimation
							key={product.id}
							animation="fade-up"
							delay={400 + index * 100}
							className="product-wrapper"
						>
							<div className="product">
								<div className="product-image-container">
									<img
										src={product.image}
										alt={product.name}
										className="product-image"
									/>
								</div>
								<div className="product-info">
									<span className="product-price">{product.price}</span>
								</div>
								<h3 className="product-name">{product.name}</h3>
							</div>
						</ScrollAnimation>
					))}
				</div>

				{/* Newsletter Signup */}
				<ScrollAnimation animation="fade-up" delay={800}>
					<div className="newsletter-signup">
						<div className="newsletter-content">
							<h3 className="newsletter-title section-title-highlight-blue">
								Join the Swarm
							</h3>
							<p className="newsletter-description">
								Subscribe to our newsletter and be the first to know about new
								releases, exclusive merch, and upcoming shows.
							</p>
							<form className="newsletter-form">
								<input
									type="email"
									placeholder="Enter your email address"
									className="newsletter-input"
									required
								/>
								<Button
									type="submit"
									variant="primary"
									size="medium"
									color="orange"
								>
									Subscribe
								</Button>
							</form>
							<p className="newsletter-disclaimer">
								By subscribing, you agree to join our swarm. We promise not to
								spam your inbox.
							</p>
						</div>
					</div>
				</ScrollAnimation>
			</div>
		</section>
	);
};

export default Store;
