"use client";
import { useEffect, useState } from "react";
import { useScrollDirection } from "./useScrollDirection";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/solid";
interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
	const [tr, setTr] = useState(0);
	const scrollDirection = useScrollDirection();
	useEffect(() => {
		setTr((prev) => prev + 1);
	}, [scrollDirection]);
	return (
		<section className=" p-6 dark:bg-gray-100 dark:text-gray-200 ">
			<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
				<div className="group relative border w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:text-gray-900 dark:bg-gray-100">
					<span className="block mb-2 dark:text-green-800 font-mono">
						Hello world!
					</span>
					<h1 className="text-5xl text-right   font-extrabold dark:text-gray-950">
						Bensmida Jaber
					</h1>
					<div className="text-sm mb-4 align-text-top inline-flex float-right uppercase text-gray-400">
						<MapPinIcon className="w-4 h-4 m-0 p-0" />
						Kebili, Tunisia 1992
					</div>

					<p className="my-8 text-left">
						Focused and quick-learning{" "}
						<span className="font-bold dark:text-gray-700 ">
							Web developer{" "}
						</span>
						with 4+ years of experience.
						<br />
						Committed to continuous learning and willing to share my knowledge
						with others and to learn from them as well.
					</p>
				</div>

				<Image
					height={500}
					width={500}
					src="https://i.ibb.co/PhYPntH/youtube-video-gif.gif"
					alt="bensmida jaber bloopers video"
					className="object-cover bg-cover  w-full rounded-md xl:col-span-3 dark:bg-gray-500"
				/>
			</div>
		</section>
	);
};

export default Hero;
