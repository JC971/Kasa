import React, { useState } from "react";
import ChevronIcon from "./ChevronIcon";
import "../styles/gallery.scss";

export const Gallery = ({ pictures, title }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handlePreviousImage = () => {
		if (currentImageIndex > 0) {
			setCurrentImageIndex(currentImageIndex - 1);
		} else {
			setCurrentImageIndex(pictures.length - 1); 
		}  
	};
	
	const handleNextImage = () => {
		if (currentImageIndex < pictures.length - 1) {
			setCurrentImageIndex(currentImageIndex + 1);
		} else {
			setCurrentImageIndex(0);
		} 
	};

	return (
		<div className="gallery">
			<div className="gallery__content">
				<img src={pictures[currentImageIndex]} alt={title} />
				<ChevronIcon
					onLeftClick={handlePreviousImage}
					onRightClick={handleNextImage}
				/>

				<p className="image-counter">
					{currentImageIndex + 1} / {pictures.length}
				</p>
			</div>
		</div>
	);
};
