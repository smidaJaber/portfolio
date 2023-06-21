import React, { useEffect, useState } from "react";

import ProjectCard, { ProjectT } from "./ProjectCard";
import { FaHtml5, FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import {
	SiElectron,
	SiTailwindcss,
	SiJavascript,
	SiFirebase,
	SiMysql,
	SiSupabase,
	SiElasticsearch,
	SiSwagger,
} from "react-icons/si";
import {
	TbBrandMantine,
	TbBrandNextjs,
	TbBrandVite,
	TbHelmet,
} from "react-icons/tb";
const now = new Date();
now.setDate(now.getDate() - 7);
const lastupdated = now.toLocaleDateString("en-us", {
	month: "long",
	day: "numeric",
});

type ProjectListProps = {};
const projects: ProjectT[] = [
	{
		handleSetMainImage: null,
		handleResetMainImage: null,
		startedAt: "April 2023",
		title: "Insurance Agency",
		description:
			"this a website for an insurance agency that handles the agency\
						presentation; in term of services, achievements, etc. As well as\
						users subscription, connection and account managment.",
		skills: [
			{ icon: <FaHtml5 />, name: "HTML" },
			{ icon: <TbBrandMantine />, name: "Mantine" },
			{ icon: <TbBrandVite />, name: "Vite" },
			{ icon: <SiJavascript />, name: "Javascript" },
			{ icon: <SiSupabase />, name: "SupaBase" },
		],
		sourceLink: "https://github.com/smidaJaber/insurance-agency",
		previewLink: "https://insurance-agency-js.vercel.app/",
		isWIP: false,
		imageSrc: "https://i.ibb.co/SQ2BQrz/Capture-d-cran-2023-06-14-001509.png",
	},
	{
		handleSetMainImage: null,
		handleResetMainImage: null,
		startedAt: "June 2022",
		title: "Dook 24 Tech store e-commerce",
		description:
			"A web site for an online Computer hardware store. This an example to show the usage of backend + API (Dook 24 means 24 Karat as an indice of gold purity)",
		skills: [
			{ icon: <FaHtml5 />, name: "HTML" },
			{ icon: <TbBrandMantine />, name: "Mantine" },
			{ icon: <SiTailwindcss />, name: "TailwindCSS" },
			{ icon: <SiJavascript />, name: "Javascript" },
			{ icon: <SiSupabase />, name: "SupaBase" },
			{ icon: <FaNodeJs />, name: "Node.Js" },
			{ icon: null, name: "Helmet.Js" },
			{ icon: <SiSwagger />, name: "Swagger" },
		],
		sourceLink: "https://github.com/smidaJaber/insurance-agency",
		previewLink: "https://insurance-agency-js.vercel.app/",
		isWIP: true,
		imageSrc:
			"https://www.trustedreviews.com/wp-content/uploads/sites/54/2018/10/Forza-Horizon-4-Aston-Martin-Vulcan_1080x1920.jpg",
	},
	{
		handleSetMainImage: null,
		handleResetMainImage: null,
		startedAt: "Done by Sep. 2020",
		title: "Invoice Generator",
		description:
			"this app help in generating invoices and manages them through a user account. It is extensible in term of invoice templates",
		skills: [
			{ icon: <FaHtml5 />, name: "HTML" },
			{ icon: <SiMysql />, name: "MySQL" },
			{ icon: <FaCss3Alt />, name: "CSS" },
			{ icon: <SiJavascript />, name: "Javascript" },
			{ icon: <SiElectron />, name: "Electron.Js" },
			{ icon: <FaNodeJs />, name: "Node.Js" },
		],
		sourceLink: "https://github.com/smidaJaber/insurance-agency",
		previewLink: "https://insurance-agency-js.vercel.app/",
		isWIP: true,
		specialButtonText: "Cleaning & Open-sourcing",
		imageSrc:
			"https://www.ixchelent.com/web/images/products/palm/dashboard.png",
	},
];
export { projects };
export default function ProjectList({}: ProjectListProps) {
	const defaultMainImage =
		"https://images.unsplash.com/flagged/photo-1575663849788-ded5a98f9ee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80";
	const [mainImageSrc, setMainImageSrc] = useState(defaultMainImage);
	const handleChangeMainImage = (img: string) => {
		setMainImageSrc(img);
	};
	const handleResetMainImage = () => {
		setMainImageSrc(defaultMainImage);
	};
	useEffect(() => {
		if (mainImageSrc == "") {
			handleResetMainImage();
		}
	}, [mainImageSrc]);
	return (
		<div className="container grid grid-cols-12 mx-auto">
			<div
				className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-6 lg:h-auto"
				style={{
					backgroundImage: `url('${mainImageSrc}')`,
					backgroundPosition: "center center",
					backgroundBlendMode: "multiply",
					backgroundSize: "cover",
					transition: "ease-in-out 0.7s",
				}}
			>
				<div className="flex flex-col items-center p-8 py-12 text-center dark:text-gray-50 ">
					<span>Project list as {lastupdated}</span>
					<h1 className="py-4 text-5xl md:text-7xl font-bold">
						Monthly updated
						<br />
						Project List
					</h1>
					<p className="pb-6">Here goes my portfolio</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-7 h-7"
					>
						<path
							fillRule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						></path>
					</svg>
				</div>
			</div>

			<div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
				{projects.map((project, i) => {
					project.handleSetMainImage = handleChangeMainImage;
					project.handleResetMainImage = handleResetMainImage;
					return <ProjectCard key={"projListing" + i} project={project} />;
				})}
			</div>
		</div>
	);
}
