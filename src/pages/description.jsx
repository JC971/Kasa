import React from "react";
import products from "../data/products.json";
import { useParams } from "react-router-dom";
import "../styles/description.scss";
import RatingStars from "../component/Stars";

const Description = () => {
	const { id } = useParams();
	const apartment = products.find((ap) => ap.id.toString() === id);
	if (!apartment) return <p>apartment not found </p>;
	return (
		<div>
			<div className="description">
				<img src={apartment.cover} alt={apartment.title} />
				<div className="localisation">
					<div className="title-host-container"> </div>
					<h2>{apartment.title}</h2>
					<h3>{apartment.host.name}</h3>
					<div className="host-image">
						<img src={apartment.host.picture} alt={apartment.host.name} />
					</div>
					<p>{apartment.location}</p>

					<button>Button 1</button>
					<button>Button 2</button>
					<button>Button 2</button>

					<RatingStars rating={apartment.rating} />

					<button className="description">Description</button>
					<button className="equipement">Equipement</button>
				</div>
			</div>
		</div>
	);
};

export default Description;
