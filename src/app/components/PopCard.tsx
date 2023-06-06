"use client";
import { useEffect, useState } from "react";
import { useScrollDirection } from "./useScrollDirection";

interface PopupCardProps {
	title: string;
	content: string;
}

const PopupCard: React.FC<PopupCardProps> = ({ title, content }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [pos, setPos] = useState(0);
	const scrollDirection = useScrollDirection();

	useEffect(() => {
		setIsVisible(scrollDirection === "down");
		setPos((prec) => prec + 1);
	}, [scrollDirection]);

	return (
		<div
			className={`absolute ${
				pos < 10 ? "bottom-0" : pos < 20 ? "bottom-10" : "bottom-20."
			} left-0 right-0 p-4 bg-white rounded-t-lg shadow-lg transition-all duration-500 ${
				isVisible
					? "rounded-md opacity-100 translate-y-0"
					: "opacity-0 translate-y-full"
			}`}
		>
			<div className="mb-4">
				<h2 className="text-xl font-bold">
					{pos}-{title}
				</h2>
			</div>
			<hr />
			<div className="text-gray-700">{content}</div>
		</div>
	);
};

export default PopupCard;
