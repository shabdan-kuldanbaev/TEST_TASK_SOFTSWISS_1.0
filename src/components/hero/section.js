import { HeroContent } from "./content";

export const HeroSection = () => {
	return (
		<section className="hero">
			<div className="container hero__container">
				<HeroContent />
				<img
					className="hero__image"
					alt="Space"
					src={`${process.env.PUBLIC_URL}/assets/earth.png`}
				/>
			</div>
		</section>
	);
};
