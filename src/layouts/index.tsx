import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import { ConsultationIcon } from "assets/svg";

type Props = {};

const Layout = (props: Props) => {
	return (
		<div className="min-h-screen relative grid grid-rows-[auto,1fr,auto] [&>:not(.bleed)]:px-8 md:[&>:not(.bleed)]:px-16">
			<TopNav />
			<Outlet />
			<BottomNav />
			<button className="flex items-center gap-3 text-white bg-[#01237D] fixed rounded-[60px] text-[1.6rem] font-semibold py-[1.4rem] px-[1.6rem] bottom-28 right-16">
				<ConsultationIcon />
				Book a consultation
			</button>
		</div>
	);
};

export default Layout;
