"use client";

import { WheelEvent, WheelEventHandler } from "react";
import Button from "../Button";

interface ProjectCardProps {
	title: string;
	content: string;
	image: string;
	previewLink: string;
	codeSource: string;
	KeyFeatures?: string[];
	tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	content,
	image,
	previewLink,
	codeSource,
	tags,
	KeyFeatures,
}) => {
	const handleScroll = (event: WheelEvent) => {
		const container = event.target as HTMLElement;
		const scrollValue = event.deltaY;
		container.scrollTo({
			top: 0,
			left: container.scrollLeft + scrollValue,
			behavior: "smooth",
		});
	};
	return (
		<div
			className="flex flex-col md:flex-row overflow-hidden
                     bg-white rounded-lg mt-4 w-100 mx-2
                    shadow-md shadow-slate-100"
		>
			<div className="h-40 max-h-40 md:w-1/2 ">
				<img
					className="inset-0 h-full w-full object-cover object-center"
					src={image}
				/>
			</div>
			<div className="w-fullpy-2 px-6 text-gray-800 flex flex-col justify-between">
				<h1 className="font-semibold text-lg leading-tight truncate">
					{title}
				</h1>
				<p className="mt-2  ">{content}</p>
				{tags && (
					<div>
						<p className="text-xs font-light text-black m-2">
							{tags?.map((tag) => (
								<span className=" hover:underline hover:cursor-pointer bg-yellow-300 m-1 p-1 rounded-md">
									#{tag}
								</span>
							))}
						</p>
					</div>
				)}
				<div className="inline-flex max-w-xs">
					<Button label="Code Source" onClick={() => {}} outline small></Button>
					<Button label="Preview" onClick={() => {}} outline small></Button>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
