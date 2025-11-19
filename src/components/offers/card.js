export const OfferCard = ({ offer, index }) => {
	return (
		<li className={`offers__card offers__card--${index + 1}`}>
			<article className="offers__card-content">
				<h3 className="offers__card-title">{offer.title}</h3>
				<p className="offers__card-description">{offer.description}</p>
				<button type="button" className="btn btn--outlined">
					Learn more
				</button>
			</article>
		</li>
	);
};
