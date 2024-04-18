import { RightIcon } from "assets/svg";
import { ProductCard } from "components";
import ReactPaginate from "react-paginate";

type Props = {};

const Shop = (props: Props) => {
	const count = 217;
	const per_page = 20;

	const pageCount = Math.ceil(count / per_page);

	return (
		<div className="py-[6rem]">
			<p className="text-[3rem] md:text-[4rem] font-semibold text-gray-dark mb-[2.4rem]">PDF Printable Sewing Patterns</p>
			<div className="grid grid-cols-[repeat(auto-fit,_minmax(165px,_1fr))] min-[1001px]:grid-cols-[repeat(auto-fit,_minmax(290px,_1fr))] gap-[2.4rem] mb-[4rem] w-full">
				{Array(20)
					.fill("")
					.map((_, index) => (
						<ProductCard key={index} />
					))}
			</div>
			<div className="flex flex-wrap items-center gap-6 max-sm:flex-col-reverse sm:justify-between">
				<p className="text-[#888888] text-[1.6rem]">Showing 1-12 of 51 item(s)</p>
				<ReactPaginate
					breakLabel="..."
					nextLabel={<RightIcon className="text-[#888888] !stroke-2" />}
					// onPageChange={handlePageClick}
					pageRangeDisplayed={2}
					marginPagesDisplayed={2}
					pageCount={pageCount}
					previousLabel={<RightIcon className="rotate-180 text-[#888888] !stroke-2" />}
					renderOnZeroPageCount={null}
					containerClassName="flex gap-6 items-center"
					pageLinkClassName="text-[#888888] text-[1.8rem] font-semibold"
					activeLinkClassName="!text-black"
				/>
			</div>
		</div>
	);
};

export default Shop;
