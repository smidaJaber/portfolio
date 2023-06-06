import React from "react";

interface CustomButtonProps {
	label: string;
	color: string;
	onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
	label,
	color,
	onClick,
}) => {
	return (
		<button
			className={`custom-button bg-${color}-500 hover:bg-${color}-600 transition-colors duration-300`}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default CustomButton;
