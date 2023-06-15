import React from "react";

export type ExperienceT = {
	company: string;
	post: string;
	startDate: string;
	endDate?: string;
	pointColor?: string;
	tasks: string[];
};

interface ExperienceProps {
	experience: ExperienceT;
}
export default function ExperiencePoint({ experience }: ExperienceProps) {
	const { company, post, startDate, endDate, pointColor, tasks } = experience;
	return (
		<div
			key={post + company + startDate + "#experPoint"}
			className={`flex flex-col sm:relative sm:before:absolute 
        sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full 
        sm:before:left-[-35px] sm:before:z-[1] before:bg-${
					pointColor || "cyan-800"
				}`}
		>
			<h3 className="text-xl font-semibold tracki">
				{company}, {post}{" "}
			</h3>
			<time className="text-sm mb-4 tracki uppercase text-gray-600">
				{startDate} - {endDate || "Now"}
			</time>
			<ul className="list-disc md:text-lg text-xl list-inside">
				{tasks.map((task, i) => (
					<li key={"#tasknumber#" + i}>{task}</li>
				))}
			</ul>
		</div>
	);
}
