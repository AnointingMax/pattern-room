import { AddIcon, LeftArrow, PadlockIcon, ReturnIcon, RightArrow, WorldIcon } from "assets/svg";
import { ReactNode } from "react";
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
	AccordionItemState,
} from "react-accessible-accordion";
import { CarouselProvider, Slider, Slide, Image, Dot, ButtonBack, ButtonNext } from "pure-react-carousel";
import product1 from "assets/product-1.png";
import product2 from "assets/product-2.png";
import product3 from "assets/product-3.png";
import { ProductCard } from "components";
import { useMediaQuery } from "react-responsive";

type Props = {};

const Product = (props: Props) => {
	const isMobile = useMediaQuery({ query: "(max-width: 475px)" });

	return (
		<>
			<div className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-[2.5rem] py-[6.4rem]">
				<CarouselProvider
					naturalSlideWidth={100}
					naturalSlideHeight={80}
					totalSlides={6}
					visibleSlides={1}
					className="relative isolate grid grid-cols-[auto,1fr] gap-4 h-fit max-h-[350px] md:max-h-[500px] [&_div]:max-h-[350px] md:[&_div]:max-h-[500px]"
					infinite
					isPlaying
					isIntrinsicHeight
				>
					<div className="flex flex-col items-center gap-10 overflow-y-scroll">
						<Dot slide={0} className="w-32 rounded-lg bg-primary-light">
							<Image hasMasterSpinner src={product1} />
						</Dot>
						<Dot slide={1} className="w-32 rounded-lg bg-primary-light">
							<Image hasMasterSpinner src={product2} />
						</Dot>
						<Dot slide={2} className="w-32 rounded-lg bg-primary-light">
							<Image hasMasterSpinner src={product3} />
						</Dot>
						<Dot slide={3} className="w-32 rounded-lg bg-primary-light">
							<Image hasMasterSpinner src={product1} />
						</Dot>
						<Dot slide={4} className="w-32 rounded-lg bg-primary-light">
							<Image hasMasterSpinner src={product2} />
						</Dot>
						<Dot slide={5} className="w-32 rounded-lg bg-primary-light">
							<Image hasMasterSpinner src={product3} />
						</Dot>
					</div>
					<Slider classNameTrayWrap="h-full [&_div]:h-full" className="flex-1 [&_img]:object-contain md:[&_img]:object-contain">
						<Slide index={0}>
							<Image hasMasterSpinner src={product1} />
						</Slide>
						<Slide index={1}>
							<Image hasMasterSpinner src={product2} />
						</Slide>
						<Slide index={2}>
							<Image hasMasterSpinner src={product3} />
						</Slide>
						<Slide index={3}>
							<Image hasMasterSpinner src={product1} />
						</Slide>
						<Slide index={4}>
							<Image hasMasterSpinner src={product2} />
						</Slide>
						<Slide index={5}>
							<Image hasMasterSpinner src={product3} />
						</Slide>
					</Slider>
				</CarouselProvider>
				<div className="flex flex-col gap-[1.5rem]">
					<h1 className="text-[4.8rem] leading-[115%] text-gray-dark text-balance">ERATO DRESS . Sizes 10-18 . PDF SEWING PATTERN</h1>
					<p className="text-gray-light text-[1.6rem] leading-[150%]">
						Classic and elegant, the ALMIRALL coat is inspired by the military great coat. Long cut and double breasted with lapel collar.
						Long sleeves with cuffs. Buttonned center back vent and half back belt. Patch pockets with flap or welt pockets with flap.
						Fully lined.
					</p>
					<p className="text-black text-[2.6rem] font-semibold">€10.00</p>
					<button className="w-full py-5 text-white bg-[#302C22] rounded-lg mt-3">Buy now</button>
					<Accordion className="border-0 w-full max-w-[1200px] product-accordion" allowZeroExpanded>
						<AccordionItem>
							<AccordionItemHeading>
								<NewButton>DRESS PATTERN</NewButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p className="text-[#6D6D6D] text-[1.4rem] max-w-[600px]">
									After completing your purchase, you will receive an email with a download link for your digital patterns. You can
									also access your purchases by logging into your Pattern Room account and navigating to the "My Downloads" section.
								</p>
							</AccordionItemPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionItemHeading>
								<NewButton>Fabric suggestion:</NewButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p className="text-[#6D6D6D] text-[1.6rem] max-w-[600px]">
									In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed
									adipisicing eu esse duis nulla non.
								</p>
							</AccordionItemPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionItemHeading>
								<NewButton>Please note:</NewButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p className="text-[#6D6D6D] text-[1.6rem] max-w-[600px]">
									In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed
									adipisicing eu esse duis nulla non.
								</p>
							</AccordionItemPanel>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
			<div className="py-[5rem] flex flex-col items-center">
				<p className="text-[1.8rem] font-semibold text-black leading-[400%] text-center underline underline-offset-[1.5rem]">Description</p>
				<div className="grid gap-[1.5rem] max-w-[1080px] sm:grid-cols-3 [&>div]:bg-[#EDE5DE] [&>div:nth-child(4n+4)]:bg-[#FEFCF6] [&>div:nth-child(4n+3)]:bg-[#FEFCF6] [&>div]:px-[1.5rem] [&>div]:py-[1.2rem] [&>div]:text-[1.5rem] sm:[&>div:nth-child(2n)]:col-span-2 [&>div:nth-child(2n)]:text-[#666666] [&>div:nth-child(2n+1)]:uppercase [&>div:nth-child(2n+1)]:font-semibold [&>div:nth-child(2n+1)]:text-[#333333] max-sm:text-center">
					<div>sizes</div>
					<div>34-52</div>
					<div>format</div>
					<div>PDF A4, A0 and projector files</div>
					<div>FABRIC</div>
					<div>Medium to heavy weight fabrics for coating such as woolen, boiled wool, tweed ...</div>
					<div>FABRIC REQUIREMENT & NOTIONS</div>
					<div>- Main fabric (width 150 cm/60”) s.34-48: 3,6 m (3 yd 3 ft) </div>
					<div>ADDITIONAL INFORMATION</div>
					<div>
						PDF pattern : 101 pattern pages (plan included) + 26 instructions pages. Also includes an A0 copyshop PDF and a projector
						file. PDF is layered with separate sizes, it also includes stitching lines layers.
					</div>
					<div>FINISHED PROJECTS</div>
					<div>Publish your sewing project on social media with the hashtag #AlmirallCoat.</div>
				</div>
			</div>
			<div className="bleed border-y border-y-[#DFDFDF] pt-[6rem] max-md:pt-[3rem] pb-[6rem] grid gap-y-[2rem] md:grid-cols-3 px-[4rem] md:divide-x max-md:divide-y divide-[#DFDFDF] text-center">
				<div className="flex flex-col items-center flex-1 px-[3rem] max-md:pt-[3rem]">
					<WorldIcon className="mb-[2rem]" />
					<p className="text-[2rem] leading-[2.4rem] mb-[1rem]">Free Shipping</p>
					<p className="text-gray-light text-[1.5rem] leading-[1.8rem] max-w-[300px] text-wrap">
						Enjoy free shipping when shop more! All orders over $250 are delivered to doorstep at no extra charge.
					</p>
				</div>
				<div className="flex flex-col items-center flex-1 px-[3rem] max-md:pt-[3rem]">
					<ReturnIcon className="mb-[2rem]" />
					<p className="text-[2rem] leading-[2.4rem] mb-[1rem]">30-Days Free Returns</p>
					<p className="text-gray-light text-[1.5rem] leading-[1.8rem] max-w-[300px] text-wrap">
						Enjoy the freedom of stress-free shopping with our hassle-free and complimentary return policy.
					</p>
				</div>
				<div className="flex flex-col items-center flex-1 px-[3rem] max-md:pt-[3rem]">
					<PadlockIcon className="mb-[2rem]" />
					<p className="text-[2rem] leading-[2.4rem] mb-[1rem]">Secure Payment</p>
					<p className="text-gray-light text-[1.5rem] leading-[1.8rem] max-w-[300px] text-wrap">
						Shop with confidence knowing your payments are secure and your information is safeguarded.
					</p>
				</div>
			</div>
			<div className="py-[6rem] flex flex-col items-center">
				<p className="text-[2.8rem] font-semibold uppercase text-gray-dark text-center mb-[2.4rem]">
					Customers who bought this product also bought
				</p>
				<div className="grid grid-cols-[repeat(auto-fit,_minmax(165px,_1fr))] min-[1001px]:grid-cols-[repeat(auto-fit,_minmax(290px,_1fr))] gap-[2.4rem] mb-[4rem] w-full">
					<CarouselProvider
						naturalSlideWidth={100}
						naturalSlideHeight={45}
						totalSlides={8}
						className="relative"
						infinite
						isPlaying
						visibleSlides={isMobile ? 1 : 3}
						isIntrinsicHeight
					>
						<Slider classNameTray="extraSM:gap-[3rem]">
							{Array(8)
								.fill("")
								.map((_, index) => (
									<Slide className="!w-full" key={index} index={index + 1}>
										<ProductCard />
									</Slide>
								))}
						</Slider>
						<ButtonBack className="absolute p-5 bg-white rounded-full left-8 top-1/2 translate-y-[-50%] bg-gray">
							<LeftArrow className="w-7 h-7 text-gray-light" />
						</ButtonBack>
						<ButtonNext className="absolute p-5 bg-white rounded-full bg-gray right-8 top-1/2 translate-y-[-50%]">
							<RightArrow className="w-7 h-7 text-gray-light" />
						</ButtonNext>
					</CarouselProvider>
				</div>
			</div>
		</>
	);
};

const NewButton = ({ children }: { children: ReactNode }) => {
	return (
		<AccordionItemButton className="!py-[1.6rem] accordion__button !text-[1.5rem] ">
			{children}
			<AccordionItemState>{({ expanded }) => <AddIcon className={`accordion__icon ${expanded && "active"}`} />}</AccordionItemState>
		</AccordionItemButton>
	);
};

export default Product;
