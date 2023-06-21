import React from "react";
interface BlogMenuItemProps {
	label: string;
	linkPath: string;
}
const BlogMenuItem: React.FC<BlogMenuItemProps> = ({ label, linkPath }) => {
	return (
		<a
			href={linkPath}
			className="text-xl underline underline-offset-2 font-[400] font-mono px-4 py-2 
            rounded-full transition duration-300 ease-in-out
			 hover:bg-none hover:no-underline"
		>
			{label}
		</a>
	);
};

export default BlogMenuItem;
