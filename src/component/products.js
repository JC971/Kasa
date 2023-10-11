import React from "react";
import products from "../data/products.json";
import '../styles/container.scss';

function ProductList() {
	return (
		<div className="container">
			{products.map((apartment) => (
				<div key={apartment.id}>
					<h2>{apartment.title}</h2>
					<img src={apartment.cover} alt={apartment.title} />
					<p>{apartment.description}</p>
					<p>Lieu : {apartment.location}</p>
					<div>
						<h3>Hôte : {apartment.host.name}</h3>
						<img src={apartment.host.picture} alt={apartment.host.name} />
					</div>
					<p>Note : {apartment.rating}/5</p>
					<h3>Équipements :</h3>
					<ul>
						{apartment.equipments.map((equipment) => (
							<li key={equipment}>{equipment}</li>
						))}
					</ul>
					<h3>Tags :</h3>
					<ul>
						{apartment.tags.map((tag) => (
							<li key={tag}>{tag}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

export default ProductList;
