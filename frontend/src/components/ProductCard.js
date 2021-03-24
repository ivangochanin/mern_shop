import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
	return (
		<div className="productCard">
			<Link to={`/product/${product._id}`}>
				<h3 className="cardName">{product.name}</h3>
			</Link>
			<Link to={`/product/${product._id}`}>
				<img src={product.image} alt={product.name} />
			</Link>
				<p>{product.rating} from {product.numReviews}</p>
				<h3>$ {product.price}</h3>
		</div>
	);
};

export default ProductCard;
