import React, { ReactNode } from "react";
import { text } from "stream/consumers";

export type Skill = {
	name: string;
	color?: string;
	icon?: ReactNode;
};
type SkillsProps = {
	skills?: Skill[];
};

export default function Skills({ skills }: SkillsProps) {
	return (
		<div className=" flex items-start justify-start ">
			{skills?.map((skill, i) => (
				<span
					key={"skillProj" + skill.name + "#i"}
					className={`inline-flex items-center rounded-md
								 bg-gray-50 px-2 py-2   ${skill.icon ? "text-md" : "text-xs"} font-medium 
								 text-gray-600 ring-1 ring-inset ring-gray-500/10`}
					title={skill.name}
				>
					{skill.icon ?? skill.name}
				</span>
			))}
		</div>
	);
}
