import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "../components/productCard/Rating";
import axios from 'axios'

const Product = ({match}) => {
	// Match what is in App.js /product/:id - <Route path='/product/:id' component={Product} />
	// const product = products.find((item) => item._id === props.match.params.id);
	const [product, setProduct] = useState({})
	useEffect(() => {
		const fetchProduct = async () => {
		  const {data} = await axios.get(`/api/products/${match.params.id}`)
          setProduct(data)
		}
		fetchProduct()
	}, [match])
	return (
		<div className="screen screenProduct">
            <div className="buttonGoBack"><Link to="/">Go Back To All Products</Link></div>
					<div className="screenProductTitle"><p>{product.name}</p></div>
			<div className="screenProductWrapper">
				<div className="screenProductLeft">
					<div className="screenProductLeftImage"><img src={product.image} alt={product.name} /></div>
				</div>

				<div className="screenProductRight">
					<div className="screenProductRightText"><p>{product.description}</p></div>
					<div className="screenProductRightRating">
					    <Rating
    						value={product.rating}
    						text={`${product.numReviews} reviews`}
    					/>
					</div>
					<div className="screenProductRightPrice"><h3>Price: $ {product.price}</h3></div>
					<div className="screenProductRightCard">
						<div>
							<p>Price: $ {product.price}</p>
						</div>
						<div>
							<p>
								Stock: ${" "}
								{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
							</p>
						</div>

						<button
						
							type="button"
							className={
								product.countInStock > 0 ? "enabledButton" : "disabledButton"
							}
							disabled={product.countInStock === 0}
						>
							{product.countInStock > 0 ? "Add to Cart" : "Out Of Stock"}
						</button>
					</div>
				</div>
			</div>

			
		</div>
	);
};

export default Product;
