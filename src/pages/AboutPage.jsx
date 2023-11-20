import "../styles/about.scss";
import { Collapse } from "../component/Collapse";

function AboutPage() {
	return (
		<div className="about">
			<div className="button-container">
				<Collapse title="Fiabilité">
					<div className="texteBtn">
						Les annonces postées sur Kasa garantissent une fiabilité totale
					</div>
				</Collapse>
				<Collapse title="Respect">
					<div className="texteBtn">
						la bienveillance fait partie des valeurs fondatrices de Kasa. Tout
						comportement descriminatoire ou de <br /> perturbation du voisinage
						entraînera une exclusion de notre plateforme.
					</div>
				</Collapse>
				<Collapse title="Service">
					<div className="texteBtn">
						la bienveillance fait partie des valeurs fondatrices de Kasa. Tout
						comportement descriminatoire ou de <br /> perturbation du voisinage
						entraînera une exclusion de notre plateforme.
					</div>
				</Collapse>
				<Collapse title="Sécurité">
					<div className="texteBtn">
						La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
						pour les voyageurs, chaque logement <br /> correspond aux critères
						de sécurité établis par nos services. En laissant une note aussi
						bien à l'hôte qu'au <br />
						locataire, cela permet à nos équipes de vérifier que les standards
						sont bien respectés. Nous organisons <br /> également des ateliers
						sur la sécurité domestique pour nos hôtes.
					</div>
				</Collapse>
			</div>
		</div>
	);
}

export default AboutPage;
