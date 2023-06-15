const PROJECTLIST: ProjectType[] = [
	{
		id: 1,
		title: "e-commerce thing",
		content:
			"The Interactive Recipe Recommender is a web application designed to revolutionize the way users discover and explore new recipes.",
		previewImage:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
		previewLink: "http://agencevoyage.vercel.app",
		codeSource: "http://github.com",
	},
	{
		id: 2,
		title: "Agence Assurance",
		content:
			"bs project content content contenennnt, therefore content contientetpo",
		previewImage:
			"https://images.unsplash.com/photo-1501676491272-7bbd3e71f7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=838&q=80",
		previewLink: "http://agencevoyage.vercel.app",
		codeSource: "http://github.com",
		tags: ["Javascript", "TailwindCSS", "Zustand"],
	},
	{
		id: 3,
		title: "Agence Assurance",
		content:
			"The Interactive Recipe Recommender is a web application designed to revolutionize the way users discover and explore new recipes.",
		previewImage:
			"https://images.unsplash.com/photo-1501676491272-7bbd3e71f7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=838&q=80",
		previewLink: "http://agencevoyage.vercel.app",
		codeSource: "http://github.com",
		tags: ["Javascript", "TailwindCSS", "Zustand"],
	},
];
export type ProjectType = {
	id: number;
	title: string;
	content: string;
	previewImage: string;
	previewLink: string;
	codeSource: string;
	tags?: string[];
};
interface ProjectsProps {
	projects: ProjectType[];
}
const Projects: React.FC<ProjectsProps> = ({ projects }) => {
	const projectList = projects?.length
		? projects
		: PROJECTLIST.length
		? PROJECTLIST
		: null;
	return (
		<div className=" container w-100 lg:w-4/5 mx-auto flex flex-col"></div>
	);
};

export default Projects;
