import React, { useState, useEffect } from "react";
import ProductCard from "../components/productCard/ProductCard";
import axios from 'axios'
const HomeScreen = () => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		const fetchProducts = async () => {
		  const {data} = await axios.get('/api/products')
          setProducts(data)
		}
		fetchProducts()
	}, [])
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
