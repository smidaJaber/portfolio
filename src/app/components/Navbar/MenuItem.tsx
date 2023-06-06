import React from "react";
interface MenuItemProps {
	label: string;
	linkPath: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ label, linkPath }) => {
	return (
		<a
			href={linkPath}
			className="text-xl font-[800] font-sans px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-blue-600"
		>
			{label}
		</a>
	);
};

export default MenuItem;
