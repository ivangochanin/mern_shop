import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating"

const ProductCard = ({product}) => {
	return (
		<div className="productCard">
			<Link to={`/product/${product._id}`}>
				<h3 className="cardName">{product.name}</h3>
			</Link>
			<Link to={`/product/${product._id}`}>
				<div className="productImageWrapper"><img src={product.image} alt={product.name} /></div>
			</Link>
				<Rating value={product.rating} text={`${product.numReviews} reviews`}/>
				<h3>$ {product.price}</h3>
		</div>
	);
};

export default ProductCard;
