import Container from "./components/Container";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Bensmida Jaber - Portfolio",
	description: "my portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
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
