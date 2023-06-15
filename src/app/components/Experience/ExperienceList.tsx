import React from "react";
import ExperiencePoint, { ExperienceT } from "./ExperiencePoint";

type ExperienceListProps = {
	experiences: ExperienceT[];
};

export default function ExperienceList({ experiences }: ExperienceListProps) {
	return (
		<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
			<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
				{experiences.map((experience, i) => (
					<ExperiencePoint key={"experrr" + i} experience={experience} />
				))}
			</div>
		</div>
	);
}
