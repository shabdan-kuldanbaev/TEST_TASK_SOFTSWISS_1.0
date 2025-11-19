import { Logo } from "./logo";
import { NavDesktop } from "./nav-desktop";
import { NavMobile } from "./nav-mobile";

export const Header = () => {
	return (
		<header className="header">
			<div className="header__container container">
				<a href="/public" className="header__logo">
					<Logo />
				</a>

				<NavDesktop />
				<NavMobile />
			</div>
		</header>
	);
};
