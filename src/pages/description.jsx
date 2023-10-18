import React from "react";
import products from "../data/products.json";
import { useParams } from "react-router-dom";
import "../styles/description.scss";

const Description = () => {
	const { id } = useParams();
	const apartment = products.find((ap) => ap.id.toString() === id);
	if (!apartment) return <p>apartment not found </p>;
	return (
		<div>
			<div className="description-img">
				<img src={apartment.cover} alt={apartment.title} />

				<h2>{apartment.title}</h2>
				<p>{apartment.description}</p>
			</div>
		</div>
	);
};

export default Description;
