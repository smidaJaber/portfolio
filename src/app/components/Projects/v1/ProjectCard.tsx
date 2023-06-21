import React, { MouseEventHandler } from "react";
import Skills, { Skill } from "./Skills";
import ProjectCardFooter from "./ProjectCardFooter";

export type ProjectT = {
	handleSetMainImage: Function | null;
	handleResetMainImage: MouseEventHandler | null;
	title: string;
	description: string;
	startedAt: string;
	skills?: Skill[];
	specialButtonText?: string;
	sourceLink?: string;
	previewLink?: string;
	isWIP?: boolean;
	imageSrc: string;
};
interface ProjectCardProps {
	project: ProjectT;
}
export default function ProjectCard({ project }: ProjectCardProps) {
	const {
		handleSetMainImage,
		handleResetMainImage,
		title,
		description,
		startedAt,
		skills,
		sourceLink,
		previewLink,
		isWIP,
		imageSrc,
		specialButtonText,
	} = project;
	return (
		<div
			onMouseOver={() => {
				handleSetMainImage && handleSetMainImage(imageSrc);
			}}
			onMouseLeave={(e) => {
				handleResetMainImage && handleResetMainImage(e);
			}}
			className="pt-6 pb-4 space-y-2"
		>
			<span>{startedAt}</span>
			<h1 className="text-3xl font-bold">{title}</h1>

			<p>
				{description}
				<br />
			</p>
			<a
				rel="noopener noreferrer"
				href="#"
				className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400 hidden"
			>
				<span>Read more</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					className="w-4 h-4"
				>
					<path
						fillRule="evenodd"
						d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
						clipRule="evenodd"
					></path>
				</svg>
			</a>
			<Skills skills={skills} />
			<ProjectCardFooter
				sourceLink={sourceLink}
				previewLink={previewLink}
				isWIP={isWIP}
				specialBtnTxt={specialButtonText}
			/>
		</div>
	);
}
