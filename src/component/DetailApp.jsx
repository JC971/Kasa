
import React from "react";
import Slider from "./Slider.jsx";
import products from "../data/products.json";
import { useParams } from "react-router-dom";

function DetailAppartement() {
	const { id } = useParams();
	const apartment = products.find((ap) => ap.id === id);

	if (!apartment) return <div>Appartement non trouvé</div>;

	return (
		<div>
			<Slider data={apartment} />
		</div>
	);
}

export default DetailAppartement;
