"use client";
import { useEffect, useState } from "react";
import { useScrollDirection } from "./useScrollDirection";
import Image from "next/image";
interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
	const [tr, setTr] = useState(0);
	const scrollDirection = useScrollDirection();
	useEffect(() => {
		setTr((prev) => prev + 1);
	}, [scrollDirection]);
	return (
		<section className="p-6 dark:bg-gray-200 dark:text-gray-200">
			<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
				<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:text-gray-900 dark:bg-gray-100">
					<span className="block mb-2 dark:text-violet-400">Hello world!</span>
					<h1 className="text-5xl text-right   font-extrabold dark:text-gray-950">
						Bensmida Jaber
					</h1>
					<p className="my-8 text-left">
						A very talented{" "}
						<span className="font-medium dark:text-gray-700">
							Web developer{" "}
						</span>
						who like to solve problems. At least after somehow getting in there
						in the first place. Because, you know.
						<br /> I like space; giving things space to breath.
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
