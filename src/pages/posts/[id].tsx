import { getAllPostIds, getPostData } from "@/lib/localposts";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export async function getStaticPaths() {
	const paths = await getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}
export async function getStaticProps({ params }: any) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}
export default function Post({ postData }: any) {
	return (
		<div className="bg-[#e9de9e] h-full">
			<div className="flex text-lg text-blue-600 p-2 fixed bg-yellow-600">
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
				<Link href="/blog">
					<span className="pl-4 font-mono"> Back</span>
				</Link>
			</div>
			{(postData && (
				<div>
					<div className="container font-mono ">
						<main className="md:pt-8 pt-14 pb-16 lg:pt-16 lg:pb-24   ">
							<div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
								<article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
									<header className="mb-4 lg:mb-6 not-format">
										<address className="flex items-center mb-6 not-italic ">
											<div className="inline-flex items-center mr-3 text-xs text-gray-900 ">
												<img
													className="mr-4 w-16 h-16 rounded-full"
													src={postData.author.image}
													alt={postData.author.name}
												/>
												<div>
													<a
														href="#"
														rel="author"
														className="text-xs font-bold text-gray-900 "
													>
														{postData.author.name}
													</a>
													<p className="text-xs font-light text-gray-500 ">
														{postData.author.description}
													</p>
													<p className="text-base font-light text-gray-500 ">
														<time dateTime="2023-02-08" title="May 8th, 2023">
															May 8, 2023
														</time>
													</p>
												</div>
											</div>
										</address>
									</header>
									<div className="md:flex items-center ">
										<div className="">
											<h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-5xl ">
												{postData.title}
											</h1>
										</div>
										<figure>
											<Image
												className="rounded-md m-2 object-cover h-full"
												src={postData.image}
												width={1024}
												height={200}
												alt={postData.title.replaceAll("-", " ")}
											/>
											<figcaption className="inline-flex content-center self-center text-xs text-center text-gray[400]">
												Digital art from {postData.image.split("/")[2]}
											</figcaption>
										</figure>
									</div>

									<div
										dangerouslySetInnerHTML={{ __html: postData.body }}
									></div>
								</article>
							</div>
						</main>
						Comments related
					</div>
				</div>
			)) ||
				"Blog post indisponible pour le moment."}
		</div>
	);
}
