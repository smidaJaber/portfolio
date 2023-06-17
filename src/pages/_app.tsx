import RootLayout from "@/app/layout";
import "../app/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
const isProd = process.env.NODE_ENV === "production";
const gtag = isProd
	? `https://www.googletagmanager.com/gtag/js?id=G-RZ71FLN5HY`
	: "";
interface CustomProps {}
const MyApp: React.FC<AppProps<CustomProps>> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<script async src={gtag} />
				<script
					id="google-analytics"
					defer
					dangerouslySetInnerHTML={{
						__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-RZ71FLN5HY', {
                  page_path: window.location.pathname
                });
              `,
					}}
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
