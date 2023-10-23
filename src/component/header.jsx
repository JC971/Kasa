import "../styles/header.scss";
import image from "../assets/banner.png";
import logo from "../assets/logo.svg";
import { Link, useLocation } from 'react-router-dom';
import newImage from '../assets/banner2.jpg';


function Header() {
	const location = useLocation()

	
	const displayImage = location.pathname === "/About" ? newImage : image;

	return (
		
		<div>
			<div className="nav">
				<img src={logo} alt="{logo.name}" />
				<ul>
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/About">À propos de</Link>
					</li>
				</ul>
			</div>

			{!location.pathname.startsWith("/apartment/") && (
				<div className="image-container">
					<img className="header-banner" src={displayImage} alt="banner" />
					<div className="textImage">Chez vous, partout et ailleurs</div>
				</div>
			)}
		</div>
	);
}

export default Header;
