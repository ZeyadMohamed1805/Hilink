import CTA from "../reusable/cta/CTA";
import { NAV_LINKS } from "../../constants/constants";

const Navbar = () => {
	return (
		<nav className="flexBetween max-container padding-container relative z-30 py-5">
			<a href="/">
				<img src="/hilink-logo.svg" width={74} height={29} alt="Logo" />
			</a>
			<ul className="hidden h-full gap-12 lg:flex">
				{NAV_LINKS.map((link) => (
					<li key={link.key}>
						<a
							href={link.href}
							className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:text-gray-900"
						>
							{link.label}
						</a>
					</li>
				))}
			</ul>

			<div className="lg:flexCenter hidden">
				<CTA
					type="button"
					title="Login"
					icon="/user.svg"
					variant="btn_dark_green"
				/>
			</div>

			<img
				src="/menu.svg"
				alt="menu"
				width={32}
				height={32}
				className="inline-block cursor-pointer lg:hidden"
			/>
		</nav>
	);
};

export default Navbar;
