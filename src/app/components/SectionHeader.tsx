import React, { Fragment, ReactNode } from "react";

type SectionHeaderProps = {
	title: string;
	subtitle?: string;
	color?: string;
	icon?: ReactNode;
};

export default function SectionHeader({
	title,
	subtitle,
	color,
	icon,
}: SectionHeaderProps) {
	return (
		<div
			className={`text-center sm:text-left mb-12 before:block before:w-24 before:h-3 before:mb-5 before:rounded-sm before:mx-auto sm:before:mx-0 before:bg-cyan-600`}
		>
			{(icon && (
				<div className=" inline-flex justify-items-center">
					<h3 className="text-3xl font-semibold group-hover:translate-x-2 ease-in-out transition duration-300">
						{title}
					</h3>
					{subtitle && (
						<h6 className="text-sm font-bold tracki uppercase text-gray-600 group-hover:translate-x-2 ease-in-out transition delay-100 duration-500">
							{subtitle}
						</h6>
					)}
					{icon && <Fragment>{icon}</Fragment>}
				</div>
			)) || (
				<Fragment>
					<h3 className="text-3xl font-semibold group-hover:translate-x-2 ease-in-out transition duration-300">
						{title}
					</h3>
					{subtitle && (
						<h6 className="text-sm font-bold tracki uppercase text-gray-600 group-hover:translate-x-2 ease-in-out transition delay-100 duration-500">
							{subtitle}
						</h6>
					)}
				</Fragment>
			)}
		</div>
	);
}
