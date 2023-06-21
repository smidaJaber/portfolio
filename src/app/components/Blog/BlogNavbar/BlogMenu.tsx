import React from "react";
import MenuItem from "./BlogMenuItem";

const BlogMenu = () => {
	return (
		<div className="">
			<MenuItem label="Blog" linkPath="#blog" />
			<MenuItem label="Archive" linkPath="#archive" />
			<MenuItem label="Discussion" linkPath="#discussions" />
			<MenuItem label="About" linkPath="#archive" />
		</div>
	);
};

export default BlogMenu;
