"use client";
import Gallery from "@/app/components/Gallery/Gallery";
import Projects from "@/app/components/Gallery/Projects/Projects";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import ProjectCard from "@/app/components/ProjectCard";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Projects />
			<Gallery />
		</div>
	);
}
