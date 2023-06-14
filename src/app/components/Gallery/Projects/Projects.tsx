import React, { useEffect, useState } from "react";
import {
	ArrowTopRightOnSquareIcon,
	ArrowUpOnSquareIcon,
} from "@heroicons/react/24/solid";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
type ProjectsProps = {};

const now = new Date();
now.setDate(now.getDate() - 7);
const lastupdated = now.toLocaleDateString("en-us", {
	month: "long",
	day: "numeric",
});
export default function Projects({}: ProjectsProps) {
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
		<div className="dark:bg-gray-200 dark:text-gray-800">
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
						<h1 className="py-4 text-5xl font-bold">
							Monthly updated Project List
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
					<div
						onMouseOver={() => {
							handleChangeMainImage(
								"https://i.ibb.co/SQ2BQrz/Capture-d-cran-2023-06-14-001509.png"
							);
						}}
						onMouseLeave={handleResetMainImage}
						className="pt-6 pb-4 space-y-2"
					>
						<span>12 June 2020</span>
						<h1 className="text-3xl font-bold">Insurance Agency</h1>

						<p>
							this a website for an insurance agency that handles the agency
							presentation; in term of services, achievements, etc. As well as
							users subscription, connection and account managment.
							<br />
						</p>
						<a
							rel="noopener noreferrer"
							href="#"
							className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400"
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
						<div className="group top-0 left-0  flex items-start justify-start   ">
							<div className="text-white   flex items-center justify-center p-1  rounded-md  bg-green-900 z-50 absolute  ">
								Skills
							</div>

							<div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:translate-x-16   flex  p-2 hover:p-3 bg-green-300 scale-100 hover:bg-green-400 text-white">
								HTML
							</div>
							<div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:translate-x-24 group-hover:-translate-y-10  flex  p-2 hover:p-3 bg-yellow-600 scale-100 hover:bg-green-400 text-white">
								Mantine
							</div>

							<div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:translate-y-16  flex  p-2 hover:p-3 bg-blue-300 hover:bg-blue-400  text-white">
								CSS
							</div>

							<div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:translate-y-14 group-hover:translate-x-14   flex  p-2 hover:p-3 bg-yellow-400 hover:bg-yellow-400 text-black font-extrabold">
								Javascript
							</div>
							<div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:translate-x-18   flex  p-2 hover:p-3 bg-green-800 hover:bg-green-800 text-white">
								Supabase
							</div>
						</div>
						<div className="inline-flex items-center py-2 space-x-2 float-right ">
							<a
								className="inline-flex items-center px-2 mx-2 space-x-2 text-sm  text-blue-900 hover:border-white border-black border-2  rounded-md p-1 m-1"
								href="https://github.com/smidaJaber/insurance-agency"
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
								href="https://insurance-agency-js.vercel.app/"
								target="_blank"
							>
								Live
								<ArrowTopRightOnSquareIcon
									fontSize={"7px"}
									className="ml-2 sh-5 w-5"
									title="Preview project"
								/>
							</a>
						</div>
					</div>
					<div
						onMouseOver={() => {
							handleChangeMainImage(
								"https://www.trustedreviews.com/wp-content/uploads/sites/54/2018/10/Forza-Horizon-4-Aston-Martin-Vulcan_1080x1920.jpg"
							);
						}}
						onMouseLeave={handleResetMainImage}
						className="pt-6 pb-4 space-y-2"
					>
						<span>01 June 2019</span>
						<h1 className="text-3xl font-bold">Racing game</h1>
						<p>A web site for a racing game available on playstore and web.</p>
						<a
							rel="noopener noreferrer"
							href="#"
							className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400"
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
						<div className="group top-0 left-0  flex items-start justify-start   ">
							<div className="text-white   flex items-center justify-center p-1  rounded-md  bg-green-900 z-50 absolute  ">
								Skills
							</div>

							<div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:translate-x-16   flex  p-2 hover:p-3 bg-green-300 scale-100 hover:bg-green-400 text-white">
								HTML
							</div>
							<div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:translate-x-24 group-hover:-translate-y-10  flex  p-2 hover:p-3 bg-yellow-600 scale-100 hover:bg-green-400 text-white">
								MySQL
							</div>

							<div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:translate-y-16  flex  p-2 hover:p-3 bg-blue-300 hover:bg-blue-400  text-white">
								CSS
							</div>

							<div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:translate-y-14 group-hover:translate-x-14   flex  p-2 hover:p-3 bg-yellow-400 hover:bg-yellow-400 text-black font-extrabold">
								Javascript
							</div>
							<div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:translate-x-18   flex  p-2 hover:p-3 bg-blue-800 hover:bg-blue-800 text-white">
								ElectronJs
							</div>
						</div>
						<div className="inline-flex items-center py-2 space-x-2 float-right ">
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
						</div>
					</div>
					<div
						onMouseOver={() => {
							handleChangeMainImage(
								"https://www.ixchelent.com/web/images/products/palm/dashboard.png"
							);
						}}
						onMouseLeave={handleResetMainImage}
						className="pt-6 pb-4 space-y-2"
					>
						<span>12 June</span>
						<h1 className="text-3xl font-bold">
							Grau! An electron+Reactjs app to manage Agriculture inventory
						</h1>
						<p>
							this app started as a local business for an inventory that
							collects and resell dates (palm tree).
						</p>
						<a
							rel="noopener noreferrer"
							href="#"
							className="inline-flex items-center   space-x-2 text-sm dark:text-violet-400"
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
						<div className="group top-0 left-0  flex items-start justify-start   ">
							<div className="text-white   flex items-center justify-center p-1  rounded-md  bg-green-900 z-50 absolute  ">
								Skills
							</div>

							<div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:translate-x-16   flex  p-2 hover:p-3 bg-green-300 scale-100 hover:bg-green-400 text-white">
								HTML
							</div>
							<div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:translate-x-24 group-hover:-translate-y-10  flex  p-2 hover:p-3 bg-yellow-600 scale-100 hover:bg-green-400 text-white">
								MySQL
							</div>

							<div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:translate-y-16  flex  p-2 hover:p-3 bg-blue-300 hover:bg-blue-400  text-white">
								CSS
							</div>

							<div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:translate-y-14 group-hover:translate-x-14   flex  p-2 hover:p-3 bg-yellow-400 hover:bg-yellow-400 text-black font-extrabold">
								Javascript
							</div>
							<div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:translate-x-18   flex  p-2 hover:p-3 bg-blue-800 hover:bg-blue-800 text-white">
								ElectronJs
							</div>
						</div>

						<div className="inline-flex items-center py-2 space-x-2 float-right ">
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
