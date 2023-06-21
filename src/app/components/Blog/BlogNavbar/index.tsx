"use client";
import React from "react";
import Menu from "./BlogMenu";

const BlogNavbar = () => {
	return (
		<nav className="fixed h-2 w-full bg-[#581ef8]  z-10  ">
			<div className="max-w-7xl mx-auto px-6 md:px-10">
				<div className="flex relative justify-between text-[#242424]">
					<h3 className=" font-serif font-bold text-gray-800 text-xl ">
						Blog smida
					</h3>
					<Menu />
				</div>
			</div>
		</nav>
	);
};
export default BlogNavbar;
