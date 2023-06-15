import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React, { ReactNode } from "react";

export type Skill = {
	name: string;
	color?: string;
	icon?: ReactNode;
};
type SkillsProps = {
	skills?: Skill[];
};

export default function Skills({ skills }: SkillsProps) {
	let skillspadY = 20;
	const valuesXY = [
		{ x: 0, y: 40 },
		{ x: 30, y: 40 },
		{ x: 50, y: 40 },
		{ x: 0, y: 70 },
		{ x: 30, y: 70 },
		{ x: 50, y: 70 },
		{ y: 80 },
	];
	return (
		<div className="group top-0 left-0  flex items-start justify-start ">
			<div
				className="text-white flex items-center justify-center 
			p-1  rounded-md  bg-black z-50 absolute  "
			>
				Skills
				<small className="text-sm text-gray-400 visible md:hidden">
					(hold)
				</small>
			</div>
			{skills?.map((skill, i) => {
				skillspadY += 42;
				const classTranslateX = valuesXY[i].x
					? `group-hover:translate-x-[${valuesXY[i].x}px]`
					: "";
				const classTranslateY = valuesXY[i].y
					? `group-hover:-translate-y-[${valuesXY[i].y}px]`
					: "";
				console.log(skillspadY);
				return (
					<div
						key={"skillProj" + skill.name + "#i"}
						className={`absolute rounded-full transition-all duration-[0.2s] 
						ease-out scale-y-0 group-hover:scale-y-100  
						${classTranslateX}  ${classTranslateY}
						flex  p-2 hover:p-3 
						 border-black
						 border-2
						 text-slate-700
                        bg-gray-100 scale-100 hover:bg-green-400 `}
						title={skill.name}
					>
						{skill.icon ?? skill.name}
					</div>
				);
			})}
		</div>
	);
}
