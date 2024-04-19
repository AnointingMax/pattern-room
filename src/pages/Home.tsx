/* eslint-disable jsx-a11y/alt-text */
import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "react-accessible-accordion/dist/fancy-example.css";
import hero1 from "assets/hero-1.png";
import { DownArrowIcon, LeftArrow, PadlockIcon, ReturnIcon, RightArrow, WorldIcon } from "assets/svg";
import StarRatings from "react-star-ratings";
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
	AccordionItemState,
} from "react-accessible-accordion";
import { ReactNode } from "react";
import { ProductCard } from "components";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
	const isMobile = useMediaQuery({ query: "(max-width: 475px)" });

	return (
		<>
			<div className="bleed">
				<CarouselProvider
					naturalSlideWidth={100}
					naturalSlideHeight={45}
					totalSlides={3}
					className="relative flex flex-col my-auto mb-[4rem]"
					infinite
					isPlaying
					isIntrinsicHeight
				>
					<Slider>
						<Slide className="max-md:min-h-[350px]" index={0}>
							<Image hasMasterSpinner src={hero1} />
							<div className="absolute inset-0 flex items-center justify-center backdrop-brightness-[75%]">
								<div className="z-50 text-center bg-[#372B0680] py-16 px-32 flex flex-col items-center gap-4">
									<h1 className="text-[3.5rem] md:text-[4.4rem] lg:text-[5.2rem] text-white">New to Sewing</h1>
									<p className="text-[1.6rem] text-white leading-[172%] tracking-[4%] max-w-[300px]">
										Try the Row skirt Pattern, designed for true beginners
									</p>
									<Link to="/shop" className="border border-white p-[1.6rem] text-[1.6rem] tracking-[4%] text-white">
										Shop Now
									</Link>
								</div>
							</div>
						</Slide>
						<Slide className="max-md:min-h-[350px]" index={1}>
							<Image hasMasterSpinner src={hero1} />
							<div className="absolute inset-0 flex items-center justify-center backdrop-brightness-[75%]">
								<div className="z-50 text-center bg-[#372B0680] py-16 px-32 flex flex-col items-center gap-4">
									<h1 className="text-[3.5rem] md:text-[4.4rem] lg:text-[5.2rem] text-white">New to Sewing</h1>
									<p className="text-[1.6rem] text-white leading-[172%] tracking-[4%] max-w-[300px]">
										Try the Row skirt Pattern, designed for true beginners
									</p>
									<Link to="/shop" className="border border-white p-[1.6rem] text-[1.6rem] tracking-[4%] text-white">
										Shop Now
									</Link>
								</div>
							</div>
						</Slide>
						<Slide className="max-md:min-h-[350px]" index={2}>
							<Image hasMasterSpinner src={hero1} />
							<div className="absolute inset-0 flex items-center justify-center backdrop-brightness-[75%]">
								<div className="z-50 text-center bg-[#372B0680] py-16 px-32 flex flex-col items-center gap-4">
									<h1 className="text-[3.5rem] md:text-[4.4rem] lg:text-[5.2rem] text-white">New to Sewing</h1>
									<p className="text-[1.6rem] text-white leading-[172%] tracking-[4%] max-w-[300px]">
										Try the Row skirt Pattern, designed for true beginners
									</p>
									<Link to="/shop" className="border border-white p-[1.6rem] text-[1.6rem] tracking-[4%] text-white">
										Shop Now
									</Link>
								</div>
							</div>
						</Slide>
					</Slider>
					<ButtonBack className="absolute p-[1.25rem] text-white rounded-full left-8 top-1/2 translate-y-[-50%] bg-gray">
						<LeftArrow />
					</ButtonBack>
					<ButtonNext className="absolute p-[1.25rem] text-white rounded-full bg-gray right-8 top-1/2 translate-y-[-50%]">
						<RightArrow />
					</ButtonNext>
				</CarouselProvider>
			</div>
			<div className="flex flex-col items-center gap-[1.6rem] py-[6.4rem]">
				<h2 className="text-6xl text-center text-gray-dark">WELCOME TO PATTERN ROOM BY BERRY KUSH</h2>
				<p className="text-[1.6rem] text-gray-dark tracking-[4%] leading-9 text-center max-w-[600px]">
					Your destination for premium digital patterns crafted with creativity and precision.Discover endless possibilities and bring your
					projects to life!
				</p>
			</div>
			<div className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-[1.6rem] py-[6.4rem]">
				<div className="bg-design-pattern bg-no-repeat bg-cover flex gap-[3rem] flex-col items-center py-[5rem] px-[3rem] text-center rounded-lg">
					<p className="text-white uppercase text-[1.4rem] font-bold">design patterns</p>
					<p className="max-w-[500px] text-wrap text-[2.4rem] lg:text-[3.6rem] text-white leading-tight">
						Explore our curated digital patterns, crafted to inspire and elevate your projects.
					</p>
					<Link to="/shop" className="border border-white py-[1.6rem] px-[5rem] rounded-lg text-[1.6rem] tracking-[4%] text-white">
						Shop Now
					</Link>
				</div>
				<div className="bg-consultation bg-no-repeat bg-cover flex gap-[3rem] flex-col items-center py-[5rem] px-[3rem] text-center rounded-lg">
					<p className="text-white uppercase text-[1.4rem] font-bold">consultations</p>
					<p className="max-w-[505px] text-[2.4rem] lg:text-[3.6rem] text-wrap text-white leading-tight">
						Ready to level up your fashion brand? Let's create amazing patterns together. Get in touch now!
					</p>
					<button className="border border-white py-[1.6rem] px-[5rem] rounded-lg text-[1.6rem] tracking-[4%] text-white">
						Book Consultation
					</button>
				</div>
			</div>
			<div className="py-[6rem] flex flex-col items-center">
				<p className="text-[2.8rem] font-semibold text-gray-dark text-center mb-[2.4rem]">NEWEST ARRIVALS</p>
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
									<Slide key={index} index={index + 1}>
										<ProductCard />
									</Slide>
								))}
						</Slider>
						<ButtonBack className="absolute p-[1.25rem] bg-white rounded-full left-8 top-1/2 translate-y-[-50%] bg-gray">
							<LeftArrow className="w-7 h-7 text-gray-light" />
						</ButtonBack>
						<ButtonNext className="absolute p-[1.25rem] bg-white rounded-full bg-gray right-8 top-1/2 translate-y-[-50%]">
							<RightArrow className="w-7 h-7 text-gray-light" />
						</ButtonNext>
					</CarouselProvider>
				</div>
			</div>
			<div className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-[1.6rem] py-[6.4rem]">
				<div className="bg-guide1 bg-no-repeat bg-contain flex gap-[3rem] flex-col items-center py-[5rem] px-[3rem] text-center rounded-lg">
					<p className="text-gray-dark text-[2rem] md:text-[3rem] lg:text-[3.4rem] leading-[125%]">
						From creating custom size charts to optimizing fit across all sizes, we'll help you craft garments that delight your customers
						and elevate your brand.
					</p>
					<button className="border border-gray-dark py-[1.6rem] px-[5rem] rounded-lg text-[1.6rem] tracking-[4%] text-gray-daborder-gray-dark">
						Book Now
					</button>
				</div>
				<div className="grid min-[600px]:grid-cols-2 gap-[1.6rem]">
					<div className="min-[600px]:col-span-2 bg-no-repeat bg-cover rounded-lg p-[6rem] bg-guide2 min-h-[180px]"></div>
					<div className="bg-no-repeat bg-cover rounded-lg p-[3rem] flex items-end min-h-[180px] bg-guide3">
						<div className="px-[2rem] py-[1rem] bg-[#FFFFFF80] text-[1.3rem] font-bold text-gray-dark w-fit">PRINTING GUIDE</div>
					</div>
					<div className="bg-no-repeat bg-cover rounded-lg p-[3rem] flex items-end min-h-[180px] bg-guide4">
						<div className="px-[2rem] py-[1rem] bg-[#FFFFFF80] text-[1.3rem] font-bold text-gray-dark w-fit">INSPIRATION</div>
					</div>
				</div>
			</div>
			<div className="py-[6rem] flex flex-col items-center">
				<p className="text-[2.8rem] font-semibold text-gray-dark text-center mb-[2.4rem]">FEATURED PATTERNS</p>
				<div className="grid grid-cols-[repeat(auto-fit,_minmax(165px,_1fr))] min-[1001px]:grid-cols-[repeat(auto-fit,_minmax(290px,_1fr))] gap-[2.4rem] mb-[4rem] w-full">
					{Array(8)
						.fill("")
						.map((_, index) => (
							<ProductCard key={index} />
						))}
				</div>
				<button className="bg-black py-[1.6rem] px-[3.8rem] text-[1.6rem] text-white">View All</button>
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
			<div className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] py-[6.4rem]">
				<div className="flex flex-col p-[2.5rem] md:p-[4rem] bg-[#F3F2EC] max-[740px]:order-2">
					<p className="text-gray-light uppercase text-[1.4rem] font-bold mb-[1rem]">Reviews</p>
					<p className="text-gray-dark text-[2.4rem] md:text-[2.8rem] lg:text-[3.6rem] leading-[119%] mb-[0.7rem]">
						We Appreciate Your Feedback and Always Listen to Your Opinion
					</p>
					<p className="text-gray-dark text-[1.5rem]">4.5 Out of 5 Stars from Over 325 Reviews</p>
					<CarouselProvider
						naturalSlideWidth={100}
						naturalSlideHeight={30.2}
						totalSlides={3}
						className="relative flex flex-col my-auto mt-[3rem]"
						infinite
						interval={2500}
						isPlaying
						isIntrinsicHeight
					>
						<Slider>
							<Slide innerClassName="" index={0}>
								<div className="">
									<StarRatings
										rating={3.5}
										starRatedColor="#131313"
										starDimension="15px"
										starSpacing="2px"
										numberOfStars={5}
										name="rating"
									/>
									<p className="text-[1.4rem] md:text-[1.6rem] lg:text-[1.6rem] text-gray-dark leading-[140%] max-w-[480px] text-wrap mt-[2.2rem] mb-[0.6rem]">
										Pattern Room by Berry Kush is a game-changer! The designs are exquisite, and the instructions are easy to
										follow. It's become my go-to for unique digital patterns. Highly recommended!
									</p>
									<p className="text-[#6D6D6D] text-[1.5rem]">Reviewed by Aya Nakuruma</p>
								</div>
							</Slide>
							<Slide index={1}>
								<div className="">
									<StarRatings
										rating={3.5}
										starRatedColor="#131313"
										starDimension="15px"
										starSpacing="2px"
										numberOfStars={5}
										name="rating"
									/>
									<p className="text-[1.4rem] md:text-[1.6rem] lg:text-[1.6rem] text-gray-dark leading-[140%] max-w-[480px] text-wrap mt-[2.2rem] mb-[0.6rem]">
										Pattern Room by Berry Kush is a game-changer! The designs are exquisite, and the instructions are easy to
										follow. It's become my go-to for unique digital patterns. Highly recommended!
									</p>
									<p className="text-[#6D6D6D] text-[1.5rem]">Reviewed by Aya Nakuruma</p>
								</div>
							</Slide>
							<Slide index={2}>
								<div className="">
									<StarRatings
										rating={3.5}
										starRatedColor="#131313"
										starDimension="15px"
										starSpacing="2px"
										numberOfStars={5}
										name="rating"
									/>
									<p className="text-[1.4rem] md:text-[1.6rem] lg:text-[1.6rem] text-gray-dark leading-[140%] max-w-[480px] text-wrap mt-[2.2rem] mb-[0.6rem]">
										Pattern Room by Berry Kush is a game-changer! The designs are exquisite, and the instructions are easy to
										follow. It's become my go-to for unique digital patterns. Highly recommended!
									</p>
									<p className="text-[#6D6D6D] text-[1.5rem]">Reviewed by Aya Nakuruma</p>
								</div>
							</Slide>
						</Slider>
						<ButtonBack className="absolute px-5 rounded-full top-0 right-[4rem]">
							<LeftArrow className="text-[#6D6D6D] w-5 h-8" />
						</ButtonBack>
						<ButtonNext className="absolute top-0 right-0 px-5 rounded-full">
							<RightArrow className="text-[#6D6D6D] w-5 h-8" />
						</ButtonNext>
					</CarouselProvider>
				</div>
				<div className="bg-testimonials bg-no-repeat bg-cover flex gap-[3rem] flex-col items-center py-[5rem] px-[3rem] text-center min-h-[250px] max-[740px]:order-1"></div>
			</div>
			<div className="flex flex-col items-center gap-[1.6rem] py-[6.4rem]">
				<p className="text-[3.6rem] text-gray-dark mb-[3rem]">Frequently Asked Questions</p>
				<Accordion className="border-0 w-full max-w-[1200px]" allowMultipleExpanded allowZeroExpanded>
					<AccordionItem>
						<AccordionItemHeading>
							<NewButton>How do I access my purchased digital patterns?</NewButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p className="text-[#6D6D6D] text-[1.6rem] max-w-[600px]">
								After completing your purchase, you will receive an email with a download link for your digital patterns. You can also
								access your purchases by logging into your Pattern Room account and navigating to the "My Downloads" section.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<NewButton>Are the digital patterns compatible with all sewing machines?</NewButton>
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
							<NewButton>What if I encounter issues with downloading or printing my digital patterns?</NewButton>
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
		</>
	);
};

const NewButton = ({ children }: { children: ReactNode }) => {
	return (
		<AccordionItemButton>
			{children}
			<AccordionItemState>{({ expanded }) => <DownArrowIcon className={`accordion__icon ${expanded && "active"}`} />}</AccordionItemState>
		</AccordionItemButton>
	);
};

export default Home;
