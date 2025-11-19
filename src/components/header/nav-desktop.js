import { Basket } from "./basket";

export const NavDesktop = () => {
	return (
		<nav className="header__nav__desktop">
			<ul className="header__nav-list">
				<li className="header__nav-item">
					<a
						href="#home"
						className="header__nav-link header__nav-link-gradient"
					>
						Home
					</a>
				</li>
				<li className="header__nav-item">
					<a href="#products" className="header__nav-link">
						Products
					</a>
				</li>
			</ul>
			<Basket />
		</nav>
	);
};
