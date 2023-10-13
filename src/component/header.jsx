import "../styles/style.scss";
import image from "../assets/banner.png";
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div>
			<div className="nav">
				<img src={logo} alt="{logo.name}" />
				<ul>
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/about">À propos de</Link>
					</li>
				</ul>
			</div>
			<div className="image-container">
				<img className="header-banner" src={image} alt="banner" />
				<div className="textImage">Chez vous, partout et ailleurs</div>
			</div>
		</div>
	);
}

export default Header;
