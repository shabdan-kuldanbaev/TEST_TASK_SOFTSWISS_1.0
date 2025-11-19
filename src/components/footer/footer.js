export const Footer = () => {
	return (
		<footer className="footer">
			<div className="container footer__container">
				<img
					className="footer__icon"
					src={`${process.env.PUBLIC_URL}/assets/rocket.svg`}
					alt="Rocket"
				/>
				<p className="footer__paragraph">Exciting space adventure!</p>
			</div>
		</footer>
	);
};
