"use client";
import Gallery from "@/app/components/Gallery/Gallery";
import Projects from "@/app/components/Projects/v1/Projects";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Experience from "@/app/components/Experience/Experience";

export default function Home() {
	return (
		<div className="bg-gray-200">
			<Navbar />
			<Hero />
			<Projects />
			<div
				className="before:content-['']
		 before:left-0 before:right-0  
		 before:absolute
		 before:h-[60px] before:bg-gray-100
		 before:-skew-y-2
		 pb-8 
		 pt-8
		 "
			></div>
			<Experience />
			<div
				className="before:content-['']
		 before:left-0 before:right-0  
		 before:absolute
		 before:h-[60px] before:bg-gray-100
		 before:skew-y-2
		 pb-24
		 
		 "
			></div>
			<Gallery />
		</div>
	);
}
