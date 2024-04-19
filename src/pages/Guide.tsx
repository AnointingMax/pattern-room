import YTPlaceholder from "assets/youtube-placeholder.png";

type Props = {};

const Guide = (props: Props) => {
	return (
		<>
			<div className="py-[6.4rem]">
				<img src={YTPlaceholder} alt="youtube" />
			</div>
			<div className="max-w-[720px] mx-auto pb-[5rem]">
				<h1 className="text-[4rem] leading-[130%] text-gray-dark text-left mb-5">Here’s a tutorial on how to print our PDF patterns!</h1>
				<p className="text-[1.6rem] text-gray-dark leading-[172%]">
					When you buy a Pauline Alice PDF pattern, it will be sent to you through email as a .zip file you’ll need to download and
					decompress*. It will also be available from your personal account on the shop, under “my downloads”.
					<br />
					<br />
					*Decompress a .zip file In the Windows browser, open the ZIP compressed file by double-clicking on it.
					<br />
					<br />
					In the window that opens, you’ll find the list of files included in the archive. Right-click the folder and choose “Extract all
					the files » in the new location. <br />
					<br />
					The PDF pattern folder will contain 3 files/folders : <br />
					<br />
				</p>
				<ol className="pl-8 list-disc list-outside">
					<li>The A4 format PDF pattern to be printed at home with a printing plan included (only for the new patterns).</li>
					<li>The A0 format PDF pattern to be printed at a copyshop.</li>
					<li>The pattern instructions in French, English and Spanish.</li>
				</ol>
			</div>
		</>
	);
};

export default Guide;
