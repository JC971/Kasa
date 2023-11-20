import React, { useState } from "react";
import products from "../data/products.json";
import { useParams } from "react-router-dom";
import "../styles/description.scss";
import RatingStars from "../component/Stars";
import ChevronIcon from "../component/ChevronIcon";
import { Collapse } from "../component/Collapse";

const Description = () => {
	const { id } = useParams();
	const apartment = products.find((ap) => ap.id.toString() === id);

	// Image actuelle de home
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Image précédente
	const handlePreviousImage = () => {
		if (currentImageIndex > 0) {
			setCurrentImageIndex(currentImageIndex - 1);
		}
	};

	// Image suivante
	const handleNextImage = () => {
		if (currentImageIndex < apartment.pictures.length - 1) {
			setCurrentImageIndex(currentImageIndex + 1);
		} else {
			setCurrentImageIndex(0);
		}
	};

	return (
		<div>
			<div className="description-container">
				<div className="description">
					<div className="description-image">
						<div className="image-container">
							<img
								src={apartment.pictures[currentImageIndex]}
								alt={apartment.title}
							/>
							<ChevronIcon
								className="centre-icon left-chevron"
								onClick={handlePreviousImage}
							/>
							<ChevronIcon
								className="centre-icon right-chevron"
								onClick={handleNextImage}
							/>
						</div>
					</div>
					<div className="localisation">
						<h2>{apartment.title}</h2>
						<h3>{apartment.host.name}</h3>
						<div className="host-image">
							<img src={apartment.host.picture} alt={apartment.host.name} />
						</div>
						<p>{apartment.location}</p>
						<div className="button-container">
							{apartment.tags &&
								apartment.tags.length > 0 &&
								apartment.tags.map((tag, index) => (
									<button key={index} className="button-top">
										{tag}
									</button>
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
