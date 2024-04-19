import product1 from "assets/product-1.png";
import { Link } from "react-router-dom";

type Props = {};

const ProductCard = (props: Props) => {
	return (
		<Link to="/shop/asd">
			<img src={product1} className="object-cover w-full max-h-[400px]" alt="product" />
			<p className="text-black text-[1.6rem] leading-[145%] mt-[0.9rem] mb-[1.4rem]">
				PDF Basic Bodice Printable Sewing Patterns U.K. Size 6 - 16
			</p>
			<p className="text-black text-[1.8rem] font-semibold leading-[145%]">₦27,000.00 NGN</p>
		</Link>
	);
};

export default ProductCard;
