"use client";
import React from "react";
import Menu from "./Menu";

const Navbar = () => {
	return (
		<nav className=" bg-gray-100">
			<div className="bg-[#f81e28] h-2 w-full"></div>
			<div className="max-w-7xl mx-auto px-6 md:px-10">
				<div className=" flex items-center justify-between text-[#f81e28]">
					.{/*<h3 className="text-2xl font-bold text-white">JSjeber</h3>*/}
					<Menu />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
