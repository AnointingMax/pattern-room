import { DownArrowIcon } from "assets/svg";

type Options = {
	label: string;
	value: string;
};
type Props = {
	label?: string;
	labelClassNames?: string;
	containerClassName?: string;
	options: Options[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const CustomSelect = ({ label, labelClassNames, containerClassName, options, ...props }: Props) => {
	return (
		<div className={containerClassName}>
			{!!label && <label className={`text-gray-light text-[1.4rem] leading-[150%] tracking-[2%] mb-4 block ${labelClassNames}`}>{label}</label>}
			<div className="py-[1.4rem] pl-[1.4rem] pr-[4rem] border border-[#7D7D7D] text-gray-dark relative">
				<select className="appearance-none" {...props}>
					{options.map(({ label, value }, index) => (
						<option value={value} key={index}>
							{label}
						</option>
					))}
				</select>
				<DownArrowIcon className="absolute top-1/2 translate-y-[-50%] right-[1.4rem]" />
			</div>
		</div>
	);
};

export default CustomSelect;
