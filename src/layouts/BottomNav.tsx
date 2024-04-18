import { Link } from "react-router-dom";
import footerLogo from "assets/footer-logo.png";
import { CustomSelect, CustomTextInput } from "components";
import {
	ApplePayIcon,
	FaceBookIcon,
	GooglePayIcon,
	InstagramIcon,
	MasterCardIcon,
	PinterestIcon,
	RightIcon,
	TikTokIcon,
	TwitterIcon,
	VisaCardIcon,
	WhatsappIcon,
	YoutubeIcon,
} from "assets/svg";

type Props = {};

const BottomNav = (props: Props) => {
	return (
		<div className="[&>*]:pb-16">
			<div className="flex flex-wrap justify-between gap-12 border-t border-[#D0D0D0] pt-16 min-[620px]:px-12">
				<div className="flex-1 min-w-[250px]">
					<p className="text-3xl leading-[116%] text-gray-dark mb-[2.4rem]">Quick links</p>
					<ul className="flex flex-col gap-6">
						<li className="text-gray-light text-[1.4rem] leading-[150%] tracking-[2%]">
							<Link to="/">Buy Digital Patterns</Link>
						</li>
						<li className="text-gray-light text-[1.4rem] leading-[150%] tracking-[2%]">
							<Link to="/">Book a Consultation</Link>
						</li>
						<li className="text-gray-light text-[1.4rem] leading-[150%] tracking-[2%]">
							<Link to="/">FAQs</Link>
						</li>
					</ul>
				</div>
				<div className="flex-1 min-w-[250px]">
					<p className="text-3xl leading-[116%] text-gray-dark mb-[2.4rem]">Info</p>
					<ul className="flex flex-col gap-6">
						<li className="text-gray-light text-[1.4rem] leading-[150%] tracking-[2%]">
							<Link to="/">About</Link>
						</li>
						<li className="text-gray-light text-[1.4rem] leading-[150%] tracking-[2%]">
							<Link to="/">Contact Us</Link>
						</li>
						<li className="text-gray-light text-[1.4rem] leading-[150%] tracking-[2%]">
							<Link to="/">Shipping Policy</Link>
						</li>
					</ul>
				</div>
				<div className="flex-1 hidden lg:block">
					<img src={footerLogo} alt="alternate-logo" />
				</div>
			</div>
			<div className="flex justify-between items-center gap-12 min-[620px]:px-12 max-[768px]:flex-col ">
				<CustomTextInput
					label="Subscribe to our emails"
					labelClassNames="!text-3xl !leading-[116%] !text-gray-dark !mb-[1.6rem] max-[620px]:text-center"
					placeholder="Email"
					containerClassName="w-[350px] max-[425px]:w-full"
					icon={<RightIcon />}
				/>
				<ul className="flex items-center gap-8">
					<li className="text-gray-light text-[1.4rem] leading-[150%] tracking-[2%]">
						<Link to="/">
							<TwitterIcon />
						</Link>
					</li>
					<li className="text-gray-light text-[1.4rem] leading-[150%] tracking-[2%]">
						<Link to="/">
							<WhatsappIcon />
						</Link>
					</li>
					<li className="text-gray-light text-[1.4rem] leading-[150%] tracking-[2%]">
						<Link to="/">
							<FaceBookIcon />
						</Link>
					</li>
					<li className="text-gray-light text-[1.4rem] leading-[150%] tracking-[2%]">
						<Link to="/">
							<PinterestIcon />
						</Link>
					</li>
					<li className="text-gray-light text-[1.4rem] leading-[150%] tracking-[2%]">
						<Link to="/">
							<InstagramIcon />
						</Link>
					</li>
					<li className="text-gray-light text-[1.4rem] leading-[150%] tracking-[2%]">
						<Link to="/">
							<TikTokIcon />
						</Link>
					</li>
					<li className="text-gray-light text-[1.4rem] leading-[150%] tracking-[2%]">
						<Link to="/">
							<YoutubeIcon />
						</Link>
					</li>
				</ul>
			</div>
			<div className="flex items-center justify-between gap-12 border-t max-[550px]:flex-col border-[#D0D0D0] pt-16 min-[620px]:px-12">
				<div className="flex gap-6">
					<CustomSelect
						label="Country/region"
						options={[
							{ value: "", label: "Country" },
							{ value: "EN", label: "Nigeria(NGN)" },
							{ value: "GR", label: "Ghana(GH)" },
						]}
					/>
					<CustomSelect
						label="Language"
						options={[
							{ value: "", label: "Language" },
							{ value: "EN", label: "English" },
							{ value: "GR", label: "German" },
						]}
					/>
				</div>
				<ul className="flex items-center gap-8">
					<li className="text-gray-light text-[1.4rem] leading-[150%] tracking-[2%]">
						<Link to="/">
							<VisaCardIcon />
						</Link>
					</li>
					<li className="text-gray-light text-[1.4rem] leading-[150%] tracking-[2%]">
						<Link to="/">
							<MasterCardIcon />
						</Link>
					</li>
					<li className="text-gray-light text-[1.4rem] leading-[150%] tracking-[2%]">
						<Link to="/">
							<ApplePayIcon />
						</Link>
					</li>
					<li className="text-gray-light text-[1.4rem] leading-[150%] tracking-[2%]">
						<Link to="/">
							<GooglePayIcon />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default BottomNav;
