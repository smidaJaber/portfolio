import {
	ArrowTopRightOnSquareIcon,
	ArrowUpOnSquareIcon,
	CodeBracketIcon,
} from "@heroicons/react/24/solid";
import React, { Fragment } from "react";

type ProjectCardFooterProps = {
	sourceLink?: string;
	previewLink?: string;
	isWIP?: boolean;
};

export default function ProjectCardFooter({
	isWIP,
	sourceLink,
	previewLink,
}: ProjectCardFooterProps) {
	return (
		<div className="inline-flex items-center py-2 space-x-2 float-right ">
			{(isWIP && (
				<a
					className="inline-flex items-center px-2 mx-2 space-x-2 text-sm  text-blue-900 hover:border-white border-black border-2  rounded-md p-1 m-1"
					href="#"
					target="_blank"
				>
					Work In progress
					<ArrowUpOnSquareIcon
						fontSize={"7px"}
						className="ml-2 h-6 w-6"
						title="Preview project"
					/>
				</a>
			)) || (
				<Fragment>
					<a
						className="inline-flex items-center px-2 mx-2 space-x-2 text-sm  text-blue-900 hover:border-white border-black border-2  rounded-md p-1 m-1"
						href={sourceLink || "#"}
						target="_blank"
					>
						Source{" "}
						<CodeBracketIcon
							className="ml-2 h-5 w-5 right-0"
							title="View source code"
						/>
					</a>
					<a
						className="inline-flex items-center px-2 mx-2 space-x-2 text-sm  text-blue-900 hover:border-white border-black border-2  rounded-md p-1 m-1"
						href={previewLink || "#"}
						target="_blank"
					>
						Live
						<ArrowTopRightOnSquareIcon
							fontSize={"7px"}
							className="ml-2 sh-5 w-5"
							title="Preview project"
						/>
					</a>
				</Fragment>
			)}
		</div>
	);
}
