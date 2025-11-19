import { useState } from "react";
import { Basket } from "./basket";
import { Burger } from "./burger";
import { Dropdown } from "./dropdown";

export const NavMobile = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen((pv) => !pv);

	return (
		<nav className="header__nav__mobile">
			<Burger open={open} onClick={handleOpen} />

			<Dropdown isOpen={open} className="header__dropdown">
				<ul className="header__nav-list">
					<li className="header__nav-item">
						<a href="#home" className="header__nav-link">
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
			</Dropdown>
		</nav>
	);
};
