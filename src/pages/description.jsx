import React from "react";
import products from '../data/products.json';
import { useParams } from "react-router-dom";

const Description = ()=> {
    const { id } = useParams();
    const apartment = products.find(ap => ap.id.toString() === id);
    if (!apartment) return <p>apartment not found </p>;
    return (
			<div>
				<h2>{apartment.title}</h2>
				<img src={apartment.cover} alt={apartment.title} />
				<p>{apartment.description}</p>
			</div>
		);
}

export default Description