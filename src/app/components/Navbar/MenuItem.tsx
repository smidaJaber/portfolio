import React from "react";
interface MenuItemProps {
	label: string;
	linkPath: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ label, linkPath }) => {
	return (
		<a
			href={linkPath}
			className="text-xl font-[800] font-sans  
			rounded-full transition duration-300 ease-in-out
			hover:bg-none hover:text-gray-50 text-black  
			underline underline-offset-8
			hover:drop-shadow-[-1px_-1px_2px_rgba(0,0,0,1)] 
			drop-shadow-[-1px_-1px_2px_rgba(255,255,255,1)] 
			"
		>
			{label}
		</a>
	);
};

export default MenuItem;
