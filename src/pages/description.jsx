/*
import React, { useState } from "react";
import products from "../data/products.json";
import { useParams } from "react-router-dom";
import "../styles/description.scss";
import RatingStars from "../component/Stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";


const Description = () => {
	const { id } = useParams();
	const apartment = products.find((ap) => ap.id.toString() === id);
	const [showEquipments, setShowEquipments] = useState(false);
	const [showDescription, setShowDescription] = useState(false);

	if (!apartment) return <p>apartment not found </p>;

	return (
		<div>
			<div className="description">
				<div className="description-image">
					<img src={apartment.cover} alt={apartment.title} />
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

					<button
						className={`descriptionBtn`}
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

					<button
						className={`equipementBtn `}
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
	);
};

export default Description;
*/
import React, { useState } from "react";
import products from "../data/products.json";
import { useParams } from "react-router-dom";
import "../styles/description.scss";
import RatingStars from "../component/Stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ChevronIcon from "../component/ChevronIcon";


const Description = () => {
	const { id } = useParams();
	const apartment = products.find((ap) => ap.id.toString() === id);
	const [showEquipments, setShowEquipments] = useState(false);
	const [showDescription, setShowDescription] = useState(false);

	
	if (!apartment) return <p>apartment not found </p>;

	return (
		<div>
			<div className="description">
				<div className="description-image">
					<img src={apartment.cover} alt={apartment.title} />
					<ChevronIcon src={apartment.cover} className="centre-icon" />
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

					<button
						className={`descriptionBtn`}
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

					<button
						className={`equipementBtn `}
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
	);
};

export default Description;
