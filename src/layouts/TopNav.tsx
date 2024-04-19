import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "assets/logo.png";
import { BurgerIcon, CartIcon, DownArrowIcon } from "assets/svg";
import { Link } from "react-router-dom";

type Props = {};

const TopNav = (props: Props) => {
	return (
		<Navbar expand="md" collapseOnSelect>
			<Navbar.Toggle aria-controls="basic-navbar-nav" className="!p-4 !rounded-full !border-0 hover:bg-gray-200">
				<BurgerIcon />
			</Navbar.Toggle>
			<Navbar.Brand as={Link} to="/">
				<img src={logo} alt="logo" />
			</Navbar.Brand>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="gap-3 mx-auto">
					<NavDropdown
						title={
							<>
								Sewing Patterns <DownArrowIcon className="w-7 h-7" />
							</>
						}
						className="text-[1.3rem]"
						id="basic-nav-dropdown"
					>
						<NavDropdown.Item as={Link} to="/guide">
							Shop all
						</NavDropdown.Item>
						<NavDropdown.Item as={Link} to="/guide">
							Tops
						</NavDropdown.Item>
						<NavDropdown.Item as={Link} to="/guide">
							Jackets / Coats
						</NavDropdown.Item>
						<NavDropdown.Item as={Link} to="/guide">
							Bottoms
						</NavDropdown.Item>
						<NavDropdown.Item as={Link} to="/guide">
							Kids
						</NavDropdown.Item>
						<NavDropdown.Item as={Link} to="/guide">
							Dresses
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown
						title={
							<>
								Consultation <DownArrowIcon className="w-7 h-7" />
							</>
						}
						className="text-[1.3rem]"
						id="basic-nav-dropdown"
					>
						<NavDropdown.Item as={Link} to="/guide">
							Custom Pattern Design
						</NavDropdown.Item>
						<NavDropdown.Item as={Link} to="/guide">
							Trend Forecasting
						</NavDropdown.Item>
						<NavDropdown.Item as={Link} to="/guide">
							Material Selection
						</NavDropdown.Item>
						<NavDropdown.Item as={Link} to="/guide">
							Color Palette Development
						</NavDropdown.Item>
						<NavDropdown.Item as={Link} to="/guide">
							Size Chart Development
						</NavDropdown.Item>
						<NavDropdown.Item as={Link} to="/guide">
							Seasonal Collection Planning
						</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link as={Link} to="/about" className="!text-[1.3rem]">
						About
					</Nav.Link>
					<Nav.Link as={Link} to="/shop" className="!text-[1.3rem] nav-shop">
						Shop
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			<Navbar.Brand as={Link} className="!p-4 rounded-full cart-icon hover:bg-gray-200" to="/guide">
				<CartIcon />
			</Navbar.Brand>
		</Navbar>
	);
};

export default TopNav;
