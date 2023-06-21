"use client";

import BlogNavbar from "@/app/components/Blog/BlogNavbar";
import Container from "@/app/components/Container";
import Skills from "@/app/components/Projects/v1/Skills";

interface BlogProps {}
const Blog: React.FC<BlogProps> = ({}) => {
	return (
		<div className="bg-[#efecdb] min-h-screen">
			<BlogNavbar />
			<Container>
				<div className="relative  p-16">
					<div className="flex text-xl text-blue-600">
						<svg
							fill="#000000"
							height="34px"
							width="34px"
							version="1.1"
							id="Layer_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							viewBox="-51.2 -51.2 614.40 614.40"
							xmlSpace="preserve"
							stroke="#000000"
							stroke-width="0.00512"
							transform="rotate(45)"
						>
							<g
								id="SVGRepo_bgCarrier"
								stroke-width="0"
								transform="translate(0,0), scale(1)"
							></g>
							<g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke="#CCCCCC"
								stroke-width="6.144"
							></g>
							<g id="SVGRepo_iconCarrier">
								<g>
									<g>
										<path d="M0,0v512h512V0H0z M384,277.333H179.499l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165 c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933 c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0 s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333S395.776,277.333,384,277.333z"></path>{" "}
									</g>
								</g>
							</g>
						</svg>
						<a href="./">
							<span className="pl-4 font-mono"> Back</span>
						</a>
					</div>
					<p className="pt-6 text-xl">
						⚠️ Blog is under construction! stay tuned.
					</p>
					<div className=" pt-16">
						<legend className="text-2xl font-extrabold font-mono mb-6 border-t-8 border-b-8 border-double border-black border-x-0">
							Upcoming titles:
						</legend>
						<ul className="list-inside font-mono font-extralight list-decimal">
							<li>
								<span className="underline underline-offset-4">
									Beside language and color schema, some new user preferences to
									think about
								</span>
								<div className="ml-14 m-0 p-0 space-x-2">
									<span
										className={`inline-flex items-center  
								 bg-gray-50 px-2 py-0 text-xs  font-medium 
								 text-gray-600 ring-1 ring-inset ring-gray-500/10`}
									>
										AI
									</span>
									<span
										className={`inline-flex items-center 
								 bg-gray-50 px-2 py-0 text-xs  font-medium 
								 text-gray-600 ring-1 ring-inset ring-gray-500/10`}
									>
										Realtime Analytics
									</span>
									<span
										className={`inline-flex items-center 
								 bg-gray-50 px-2 py-0 text-xs  font-medium 
								 text-gray-600 ring-1 ring-inset ring-gray-500/10`}
									>
										ML
									</span>
									<span
										className={`inline-flex items-center 
								 bg-gray-50 px-2 py-0 text-xs  font-medium 
								 text-gray-600 ring-1 ring-inset ring-gray-500/10`}
									>
										UI/UX
									</span>
								</div>

								<div className=" text-xs border-l-2 ml-14 pl-4 sm:pl-6 dark:border-gray-400">
									Welcome to a digital universe where user preferences extend
									beyond the realm of language and color schemes. <br />
									When we think about user preferences, we often picture
									language choices and visual styles. But let us set our sights
									higher and deeper, my friends. Religion introduces a whole new
									dimension to the digital landscape. Imagine visiting a website
									where believers from various faiths can navigate effortlessly
									through personalized sections tailored to their religious
									needs..
								</div>
							</li>
							<li>
								<span className="underline underline-offset-4">
									Backend Responsiveness : Building a Decision-Less Code Base
								</span>
								<div className="ml-14 m-0 p-0 space-x-2">
									<span
										className={`inline-flex items-center  
								 bg-gray-50 px-2 py-0 text-xs  font-medium 
								 text-gray-600 ring-1 ring-inset ring-gray-500/10`}
									>
										Backend
									</span>
									<span
										className={`inline-flex items-center 
								 bg-gray-50 px-2 py-0 text-xs  font-medium 
								 text-gray-600 ring-1 ring-inset ring-gray-500/10`}
									>
										Dependency Injection
									</span>
									<span
										className={`inline-flex items-center 
								 bg-gray-50 px-2 py-0 text-xs  font-medium 
								 text-gray-600 ring-1 ring-inset ring-gray-500/10`}
									>
										Software Architecture
									</span>
									<span
										className={`inline-flex items-center 
								 bg-gray-50 px-2 py-0 text-xs  font-medium 
								 text-gray-600 ring-1 ring-inset ring-gray-500/10`}
									>
										AI
									</span>
								</div>
								<div className=" text-xs border-l-2 ml-14 pl-4 sm:pl-6 dark:border-gray-400">
									I beleived I can break free from the shackles of stack choices
									and create a code base that effortlessly adapts to the
									ever-changing technological landscape.
									<br />
									Stack choices can often become bottlenecks, locking us into
									specific technologies and limiting our ability to respond to
									shifting industry trends.
									<br />
									By decoupling our code from stack-specific dependencies and
									providing configuration as an external resource, we create a
									modular architecture that effortlessly adapts to changing
									stack preferences.
								</div>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Blog;
