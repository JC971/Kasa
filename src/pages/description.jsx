import React, { useState } from "react";
import products from "../data/products.json";
import { useParams } from "react-router-dom";
import "../styles/description.scss";
import RatingStars from "../component/Stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ChevronIcon from "../component/ChevronIcon";
import ApartmentNotFound from "../component/OpsHeader";

const Description = () => {
	const { id } = useParams();
	const apartment = products.find((ap) => ap.id.toString() === id);
	const [showEquipments, setShowEquipments] = useState(false);
	const [showDescription, setShowDescription] = useState(false);

	// Image actuelle de home
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	if (!apartment) return <ApartmentNotFound />;

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
						<div className="description-btn-container">
							<button
								className="descriptionBtn"
								onClick={() => setShowDescription(!showDescription)}
							>
								Description
								<span className={`icon ${showDescription ? "rotated" : ""}`}>
									<FontAwesomeIcon icon={faChevronUp} />
								</span>
							</button>
							{showDescription && (
								<div className="description-text">{apartment.description}</div>
							)}
						</div>
						<div className="equipment-btn-container">
							<button
								className="equipementBtn"
								onClick={() => setShowEquipments(!showEquipments)}
							>
								Equipement
								<span className={`icon ${showEquipments ? "rotated" : ""}`}>
									<FontAwesomeIcon icon={faChevronUp} />
								</span>
							</button>
							{showEquipments && (
								<ul className="equipments-list">
									{apartment.equipments.map((equipment, index) => (
										<li key={index}>{equipment}</li>
									))}
								</ul>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Description;
