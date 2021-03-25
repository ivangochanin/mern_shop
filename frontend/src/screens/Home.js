import React from "react";
import products from "../products";
import ProductCard from "../components/productCard/ProductCard";
const HomeScreen = () => {
	return (
		<div className="screen screenHome">
			<p className="title">Welcome To ProShop</p>
			<div className="homeCardsWrapper">
				{products.map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
			</div>
		</div>
	);
};

export default HomeScreen;
