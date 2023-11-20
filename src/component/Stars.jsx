import "../styles/stars.scss";

function RatingStars({ rating }) {
	const totalStars = 5;

	return (
		<div className="stars-container">
			{[...Array(totalStars)].map((_, index) => (
				<span key={index} className={`star ${index < rating ? "filled" : ""}`}>
					★
				</span>
			))}
		</div>
	);
}

export default RatingStars;
