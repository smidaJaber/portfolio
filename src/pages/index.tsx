"use client";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import ProjectCard from "@/app/components/ProjectCard";

export default function Home() {
	return (
		<div>
			<Navbar />
			<main className="   flex min-h-screen  flex-col items-center justify-between p-24">
				<div className="relative flex place-items-center  ">
					<Hero />
				</div>
			</main>
		</div>
	);
}
