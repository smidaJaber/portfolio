"use client";
import { useEffect, useState } from "react";

export const useScrollDirection = (): "up" | "down" => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		setScrollY(window.pageYOffset);

		const handleScroll = () => {
			setScrollY(window.pageYOffset);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollDirection = scrollY > 0 ? (scrollY > 1 ? "down" : "up") : "up";

	return scrollDirection;
};
