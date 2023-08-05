"use client";

import Container from "@/app/components/Container";
import SequigemProposal from "@/app/components/proposals/sequigem";
import Etendu from "@/app/components/proposals/sequigem/Etendu";
import { HeroTitle } from "@/app/components/proposals/sequigem/Hero";
import { Objectifs } from "@/app/components/proposals/sequigem/objectifs";

interface SEQUIGEMgemProps {}
const SEQUIGEMgem: React.FC<SEQUIGEMgemProps> = ({}) => {
	return (
		<div className="bg-gray-100 font-sans">
			<SequigemProposal />
		</div>
	);
};

export default SEQUIGEMgem;
