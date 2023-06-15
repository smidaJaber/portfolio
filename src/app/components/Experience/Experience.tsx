import React from "react";
import { ExperienceT } from "./ExperiencePoint";
import ExperienceList from "./ExperienceList";
import SectionHeader from "../SectionHeader";

type ExperienceProps = {};
const experiences: ExperienceT[] = [
	{
		company: "ZS Consulting",
		post: "Software Developer",
		startDate: "Apr 2021",
		endDate: "Feb 2022",
		tasks: [
			"Developed Desktop app (ElectronJS)",
			"Used real-time, analytic and charts libraries (i.e. Socket.IO, Chart.JS)",
			"Automated Microsoft Office Word and Excel tasks",
			"Practice agile development methodologies",
			"Integrate code changes, test code changes, and document code changes",
		],
	},
	{
		company: "Mariem Traiding",
		post: "Software Developer (ElectronJs)",
		startDate: "Aug 2018",
		endDate: "Jul 2019",
		tasks: [
			"Developed, modified, and debugged JavaScript apps(+HTML +CSS)",
			"Wrote Python scripts to load data and parse XML documents",
			"Developed web apps to use locally and manage resources with a small team",
			"Launched “GRAU” (Nodejs+ReactJS) for inventory stock management",
			"Mentored by USAID agents to follow ISO measures in apps",
		],
	},
	{
		company: "Freelancing",
		post: "Full stack web developer",
		startDate: "Aug 2017",
		endDate: "Jul 2018",
		tasks: [
			"Delivering digital products, mostly stock management apps",
			"Automating any repeated tasks using python",
			"Migrating and updating existing products",
			"Implementing API and consume open API’s (i.e. The Yahoo! Search Marketing API + Google API’s)",
			"Integrate code changes, test code changes, and document code changes",
		],
	},
];
export default function Experience({}: ExperienceProps) {
	return (
		<section className="bg-gray-100 text-gray-800 pt-6 -mb-8 pb-8">
			<div className="container max-w-5xl px-4 py-12 mx-auto">
				<div className="grid gap-4 mx-4 sm:grid-cols-12">
					<div className="col-span-12 sm:col-span-3 group">
						<SectionHeader title="Brief story" subtitle="My experience" />
					</div>
					<ExperienceList experiences={experiences} />
				</div>
			</div>
		</section>
	);
}
