import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";

type Props = {};

const Layout = (props: Props) => {
	return (
		<div>
			<TopNav />
			<Outlet />
		</div>
	);
};

export default Layout;
