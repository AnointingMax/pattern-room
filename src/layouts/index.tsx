import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

type Props = {};

const Layout = (props: Props) => {
	return (
		<div className="min-h-screen grid grid-rows-[auto,1fr,auto] [&>:not(.bleed)]:px-8 md:[&>:not(.bleed)]:px-16">
			<TopNav />
			<Outlet />
			<BottomNav />
		</div>
	);
};

export default Layout;
