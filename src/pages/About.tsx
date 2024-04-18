type Props = {};

const About = (props: Props) => {
	return (
		<>
			<div className="grid sm:grid-cols-3 gap-6 py-[6.4rem]">
				<div className="bg-no-repeat bg-cover min-h-[280px] sm:min-h-[350px] bg-about1"></div>
				<div className="bg-no-repeat bg-cover min-h-[350px] bg-about2"></div>
				<div className="bg-no-repeat bg-cover min-h-[350px] bg-about3"></div>
			</div>
			<div className="max-w-[720px] mx-auto pb-[5rem]">
				<h1 className="text-[4rem] leading-[130%] text-gray-dark text-left mb-5">About</h1>
				<p className="text-[1.6rem] text-gray-dark leading-[172%]">
					Mlouye’s founder and creative director Meb Rure hails from an industrial design background. In 2015, Meb decided to change gears
					and turn her energy towards Mlouye, a collection of exceptional handbags. Focusing on quality material, good design, craftsmanship
					and sustainability, Mlouye reflects the epitome of quality over quantity. <br />
					<br />
					Meb was highly inspired by the Bauhaus Movement's artists and architects. From Mies van der Rohe's works to Kandinsky's paintings,
					to Aalto's furniture, she acquired a rationalist vision of design by gleaning how they served a utilitarian purpose in a cleverly
					simple way. Mlouye merges industrial design and fashion, creating functional handbags made of luxurious and honest materials to
					improve people's lives in small but important ways. <br />
					<br />
					Innovation being the key factor alongside aesthetic, Mlouye has brought unexpected shapes with smart details, functionality and a
					new luxury feel with a contemporary price point. <br />
					<br />
					Istanbul is where Mlouye was born, the company's headquarters is now split between the US, and Turkey.
				</p>
			</div>
			<div className="bg-black py-[6.4rem] text-white [&>*]:max-w-[720px] text-center flex items-center flex-col gap-[3rem]">
				<p className="text-[2.8rem]">Our quality promise</p>
				<p className="text-[1.8rem]">
					Quality is never an accident. It is always the result of intelligent effort. We spend most of our time and energy for good design
					and to achieve high quality. Every single detail from material to technique is thought through with obsessive attention. If our
					product doesn't satisfy you, we'll take it back.
				</p>
			</div>
		</>
	);
};

export default About;
