export const Burger = ({ open, onClick }) => {
	return (
		<button
			type="button"
			className={`burger ${open ? "burger_open" : ""}`}
			onClick={onClick}
		>
			<span className="burger-line"></span>
			<span className="burger-line"></span>
			<span className="burger-line"></span>
		</button>
	);
};
