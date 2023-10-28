import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/about.scss";

function AboutPage() {
	const [showFiabilite, setShowFiabilite] = useState(false);
	const [showRespect, setShowRespect] = useState(false);
	const [showService, setShowService] = useState(false);
	const [showSecurite, setShowSecurite] = useState(false);

	return (
		<div className="about">
			<div className="button-container">
				<div className="button-container__texte">
					<button
						className="fiabiliteBtn"
						onClick={() => setShowFiabilite(!showFiabilite)}
					>
						Fiabilité
						<span className={`icon ${showFiabilite ? "rotated" : ""}`}>
							<FontAwesomeIcon icon={faChevronUp} />
						</span>
					</button>
					{showFiabilite && (
						<div className="texteBtn">
							Les annonces postées sur Kasa garantissent une fiabilité totale
						</div>
					)}
				</div>
				<div className="button-container__texte">
					<button
						className="respectBtn"
						onClick={() => setShowRespect(!showRespect)}
					>
						Respect
						<span className={`icon ${showRespect ? "rotated" : ""}`}>
							<FontAwesomeIcon icon={faChevronUp} />
						</span>
					</button>
					{showRespect && (
						<div className="texteBtn">
							la bienveillance fait partie des valeurs fondatrices de Kasa. Tout
							comportement descriminatoire ou de <br /> perturbation du
							voisinage entraînera une exclusion de notre plateforme.
						</div>
					)}
				</div>
				<div className="button-container__texte">
					<button
						className="serviceBtn"
						onClick={() => setShowService(!showService)}
					>
						Service
						<span className={`icon ${showService ? "rotated" : ""}`}>
							<FontAwesomeIcon icon={faChevronUp} />
						</span>
					</button>
					{showService && (
						<div className="texteBtn">
							la bienveillance fait partie des valeurs fondatrices de Kasa. Tout
							comportement descriminatoire ou de <br /> perturbation du
							voisinage entraînera une exclusion de notre plateforme.
						</div>
					)}
				</div>
				<div className="button-container__texte">
					<button
						className="securiteBtn"
						onClick={() => setShowSecurite(!showSecurite)}
					>
						Sécurité
						<span className={`icon ${showSecurite ? "rotated" : ""}`}>
							<FontAwesomeIcon icon={faChevronUp} />
						</span>
					</button>
					{showSecurite && (
						<div className="texteBtn">
							La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
							pour les voyageurs, chaque logement <br /> correspond aux critères
							de sécurité établis par nos services. En laissant une note aussi
							bien à l'hôte qu'au <br />
							locataire, cela permet à nos équipes de vérifier que les standards
							sont bien respectés. Nous organisons <br /> également des ateliers
							sur la sécurité domestique pour nos hôtes.
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default AboutPage;
