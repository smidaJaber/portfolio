import React from "react";
import ProjectCard from "../v1/ProjectCard";
import { projects } from "../v1/ProjectList";
type ProjectsProps = {};

export default function Projects({}: ProjectsProps) {
	return (
		<div className="external">
			<div className="horizontal-scroll-wrapper">
				<div className="img-wrapper slower">
					<a
						href="https://altphotos.com/photo/stylish-parisian-cafe-terrace-279/"
						target="_blank"
						rel="noopener"
					>
						<img
							className=" rounded-2xl"
							src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-cafe-terrace.jpg"
							alt=""
						/>
					</a>
				</div>

				<div className="img-wrapper faster">
					<a
						href="https://altphotos.com/photo/retro-boy-doll-wearing-elegant-clothes-330/"
						target="_blank"
						rel="noopener"
					>
						<ProjectCard project={projects[0]} />
					</a>
				</div>

				<div className="img-wrapper slower last">
					<a
						href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/"
						target="_blank"
						rel="noopener"
					>
						<ProjectCard project={projects[0]} />
					</a>
				</div>
			</div>
			<p className="scroll-info">
				<span className="icon">Projects</span>
			</p>
			<header>
				<p>List of projects</p>
				<h1>Worked on, some may be partially shared due to </h1>
				<p>
					Client preferences. always check my{" "}
					<a href="#" target="_blank" rel="noopener">
						Github
					</a>
				</p>
			</header>
		</div>
	);
}
