import React from "react";
import products from "../data/products.json";
import "../styles/container.scss";
import {Link} from 'react-router-dom'

function ProductList() {
	return (
		<div className="container">
			{products.map((apartment) => (
				<div className="card" key={apartment.id}>
					<Link to={`/apartment/${apartment.id}`}>
					<img src={apartment.cover} alt={apartment.title} />
						<h2>{apartment.title}</h2>
						</Link>
				</div>
			))}
		</div>
	);
}

export default ProductList;
