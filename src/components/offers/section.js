import { OfferCard } from "./card";

const offers = [
	{
		id: 1,
		title: "Move the borders of reality!",
		description: "Go on a space adventure - it's possible with us!",
	},
	{
		id: 2,
		title: "Space is not just stars and planets",
		description: "Go on a space adventure ",
	},
	{
		id: 3,
		title: "For those who dream of stars",
		description: "Our offer: make your dream come true",
	},
	{
		id: 4,
		title: "Fulfill your fantastic dreams",
		description: "Space has never been so close",
	},
];

export const OffersSection = () => {
	return (
		<section className="offers">
			<div className="container">
				<h2 className="offers__title">Offers</h2>
				<ul className="offers__list">
					{offers.map((offer, index) => (
						<OfferCard offer={offer} index={index} key={offer.id} />
					))}
				</ul>
			</div>
		</section>
	);
};
