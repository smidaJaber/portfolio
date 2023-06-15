import React from "react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import SectionHeader from "../SectionHeader";
import ProjectList from "./ProjectList";
type ProjectsProps = {};

export default function Projects({}: ProjectsProps) {
	return (
		<div className="dark:bg-gray-200 dark:text-gray-800 pt-8 mb-24">
			<div className="container max-w-5xl px-4 py-4 mx-auto">
				<div className="grid gap-4 mx-4 sm:grid-cols-12">
					<div className="col-span-12 sm:col-span-3">
						<SectionHeader
							title="Projects"
							icon={
								<ArrowDownCircleIcon className="animate-[bounce_1.5s_ease-in-out_infinite] h-14 w-14 transition ease-in-out hover:translate-y-1 ml-6 left-0 self-baseline" />
							}
						/>
					</div>
					<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9"></div>
				</div>
			</div>
			<ProjectList />
		</div>
	);
}
