import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
	return (
		<div className="productCard">
			<Link to={`/product/${product._id}`}>
				<h3 className="cardName">{product.name}</h3>
				<img src={product.image} alt={product.name} />
				<p className="cardDescription">{product.description}</p>
				<h4>{product.price} $</h4>
			</Link>
		</div>
	);
};

export default ProductCard;
