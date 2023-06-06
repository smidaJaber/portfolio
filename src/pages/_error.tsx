"use client";

import { useEffect } from "react";

interface ErrorPageProps {
	error: Error;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return <div>Something went wrong!</div>;
};

export default ErrorPage;
