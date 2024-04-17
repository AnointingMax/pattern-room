import { ReactNode } from "react";

type Props = {
	label?: string;
	labelClassNames?: string;
	icon?: ReactNode;
	containerClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CustomTextInput = ({ label, labelClassNames, icon, containerClassName, ...props }: Props) => {
	return (
		<div className={containerClassName}>
			{!!label && <label className={`text-gray-light text-[1.4rem] leading-[150%] tracking-[2%] mb-3 block ${labelClassNames}`}>{label}</label>}
			<div className={`p-[1.4rem] flex border border-[#7D7D7D] items-center justify-between gap-4 text-gray-dark`}>
				<input className="placeholder:text-gray-light  text-[1.4rem] tracking-[4%]" {...props} />
				{icon}
			</div>
		</div>
	);
};

export default CustomTextInput;
