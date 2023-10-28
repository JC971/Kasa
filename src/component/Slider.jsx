/*
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft,faChevronRight,} from "@fortawesome/free-solid-svg-icons";
import "../styles/Slider.scss"


function Slider({ data }) {
        console.log("Slider is rendering!");
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const prevImage = () => {
		setCurrentImageIndex(
			currentImageIndex === 0 ? data.pictures.length - 1 : currentImageIndex - 1
		);
	};

    const nextImage = () => {
		setCurrentImageIndex(
			currentImageIndex === data.pictures.length - 1 ? 0 : currentImageIndex + 1
		);
	};

	return (
		<div style={{ position: "relative", maxWidth: "600px"}}>
			<FontAwesomeIcon
				icon={faChevronLeft}
				onClick={prevImage}
				style={{
					position: "absolute",
					top: "50%",
					left: "10px",
                    cursor: "pointer",
                    color: "red",
				}}
			/>
			<img
				src={data.pictures[currentImageIndex]}
				alt={data.title}
				style={{ width: "100%", height: "auto", backgroundColor: "red" }}
			/>
			<FontAwesomeIcon
				icon={faChevronRight}
				onClick={nextImage}
				style={{
					position: "absolute",
					top: "50%",
					right: "10px",
					cursor: "pointer",
				}}
			/>
		</div>
	);
}

export default Slider;
*/

/*
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import "../styles/Slider.scss";

const { id } = useParams();
 

function Slider () {
	return (
		<Carousel>
		
		</Carousel>
	);
}

export default Slider
*/