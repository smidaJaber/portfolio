import Head from "next/head";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Bensmida Jaber - Portfolio",
	description: "my portfolio",
};
const isProd = process.env.NODE_ENV === "production";
const gtag = isProd
	? `https://www.googletagmanager.com/gtag/js?id=G-RZ71FLN5HY`
	: "";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
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
			<div className={inter.className}>
				<Navbar />

				<div className="py-10 ">
					<Container>
						<div className=" ">{children}</div>
					</Container>
				</div>
			</div>
		</div>
	);
}
