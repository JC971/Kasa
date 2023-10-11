import '../styles/style.scss'
import image from'../assets/banner.png'

function Header() {
	return (
		<div>
			<div className="nav">
				<h1>LOGO KASA</h1>
				<div className="menu">
					<ul>
						<li>Accueil</li>
						<li>A propos</li>
					</ul>
				</div>
            </div>
            <img src={image} alt="Logo" />;
        </div>
		
	);
}

export default Header;
