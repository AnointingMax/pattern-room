/* eslint-disable jsx-a11y/anchor-is-valid */
type Props = {};

const TopNav = (props: Props) => {
	return (
		<header className="header">
			<a href="#" className="logo">
				LR
			</a>
			<input className="side-menu" type="checkbox" id="side-menu" />
			<label className="hamb" htmlFor="side-menu">
				<span className="hamb-line"></span>
			</label>
			<nav className="nav">
				<ul className="menu">
					<li>
						<a href="#">Gallery</a>
					</li>
					<li className="subnav">
						<a className="subnavbtn">Contact</a>
						<div className="subnav-content">
							<a href="#">Email</a>
							<a href="#">Twitter</a>
							<a href="#">Phone</a>
						</div>
					</li>
					<li>
						<a href="#">Blog</a>{" "}
					</li>
					<li>
						<a href="#">About</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default TopNav;
