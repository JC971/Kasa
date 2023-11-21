import React from "react";
import products from "../data/products.json";
import { useParams } from "react-router-dom";
import "../styles/description.scss";
import RatingStars from "../component/Stars";
import { Collapse } from "../component/Collapse";
import ApartmentNotFound from "../component/ApartmentNotFound.jsx";
import { Gallery } from "../component/Gallery.jsx";

const Description = () => {
	const { id } = useParams();
	const apartment = products.find((ap) => ap.id.toString() === id);

	if (!apartment) return <ApartmentNotFound />;

	return (
		<div>
			<div className="description-container">
				<div className="description">
					<div className="description-image">
						<Gallery pictures={apartment.pictures} title={apartment.title} />
					</div>
					<div className="localisation">
						<h2>{apartment.title}</h2>
						<h3>{apartment.host.name}</h3>
						<div className="host-image">
							<img src={apartment.host.picture} alt={apartment.host.name} />
						</div>
						<p>{apartment.location}</p>
						<div className="tag-container">
							{apartment.tags &&
								apartment.tags.length > 0 &&
								apartment.tags.map((tag, index) => (
									<span key={index} className="tag-span">
										{tag}
									</span>
								))}
						</div>
						<RatingStars rating={apartment.rating} />
					</div>
					<div className="buttons-container">
						<Collapse title="Description">
							<div className="description-text">{apartment.description}</div>
						</Collapse>
						<Collapse title="Equipement">
							<ul className="equipments-list">
								{apartment.equipments.map((equipment, index) => (
									<li key={index}>{equipment}</li>
								))}
							</ul>
						</Collapse>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Description;
