import RootLayout from "@/app/layout";
import "../app/globals.css";
import { AppProps } from "next/app";

interface CustomProps {}
const MyApp: React.FC<AppProps<CustomProps>> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default MyApp;
