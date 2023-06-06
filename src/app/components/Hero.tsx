"use client";
import Image from "next/image";
import imageme from "../../public/hero-pc-phone-tab.png";
import cookingimg from "../../public/rocket.json";
import { useEffect, useState } from "react";
import { useScrollDirection } from "./useScrollDirection";
import Lottie from "lottie-react";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
	const [tr, setTr] = useState(0);
	const scrollDirection = useScrollDirection();
	useEffect(() => {
		setTr((prev) => prev + 1);
	}, [scrollDirection]);
	return (
		<div className="grid m-1">
			<div>
				<div className="absolute -left-40 -top-5">
					<Lottie animationData={cookingimg} />
				</div>

				<article className=" rounded-md">
					<h1 className="  text-4xl font-extrabold tracking-tight lg:text-5xl">
						Welcome to Augmentic
					</h1>
					<legend className="bg-[#f9f104]">Bensmida Jaber</legend>
					<p className="leading-7 [&:not(:first-child)]:mt-6  text-extrabold">
						<span className="uppercase tracking-widest">
							Hold on tight, we're busy building something epic!
						</span>
						<br />
						Our website is still baking in the digital oven, We're infusing it
						with authentic Tunisian "fazeet".
						<br />
						We promise it'll be worth the wait.
						<br />
						We're excited to show you what we've got cooking, so stay tuned and
						get ready for a digital feast!
					</p>
				</article>
			</div>
		</div>
	);
};

export default Hero;
