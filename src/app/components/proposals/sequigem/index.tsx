import { Cog6ToothIcon, FlagIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import {
	FaCalendar,
	FaCalendarDay,
	FaCameraRetro,
	FaCaravan,
	FaCode,
	FaCodeBranch,
	FaMobileAlt,
	FaMoneyCheckAlt,
	FaPalette,
	FaRegBuilding,
	FaUserAstronaut,
	FaUsers,
} from "react-icons/fa";
import { SiSpeedtest } from "react-icons/si";
import WebsitePreviewCard from "./PreviewCard/inde";
import Lottie from "react-lottie";
import animationData from "../../../../lotties/rocket.json";
import { TbAlertCircle, TbBlockquote } from "react-icons/tb";
type SEQUIGEMProposalProps = {};

export default function SEQUIGEMProposal({}: SEQUIGEMProposalProps) {
	const colorPalettes = [
		{
			name: "Argent et Bleu",
			colors: ["#C0C0C0", "#4169E1", "#FFFFFF", "#D3D3D3", "#2F4F4F"],
		},
		{
			name: "Palette M&eacute;tallique",
			colors: ["#C0C0C0", "#CD7F32", "#FFFFFF", "#E0E0E0", "#2C3539"],
		},
		{
			name: "Minimaliste",
			colors: ["#C0C0C0", "#000000", "#FFFFFF", "#E0E0E0", "#A9A9A9"],
		},
		{
			name: "Tons Frais",
			colors: ["#C0C0C0", "#4682B4", "#FFFFFF", "#E0E0E0", "#708090"],
		},
	];
	const colorPalettes2 = [
		{
			name: "Acier Industriel",
			colors: ["#2E3B4E", "#556877", "#8AA1B1", "#D1DCE5", "#F3F7FA"],
		},
		{
			name: "Machines &eacute;pur&eacute;es",
			colors: ["#313131", "#4A4A4A", "#6B6B6B", "#999999", "#E0E0E0"],
		},
		{
			name: "Outils Vibrants",
			colors: ["#FF595E", "#FFCA3A", "#8AC926", "#1982C4", "#6A4C93"],
		},
		{
			name: "Oc&eacute;an Profond",
			colors: ["#004A7C", "#0083B0", "#B6D6F2", "#64A3C7", "#00263E"],
		},
		{
			name: "Industrie Urbaine",
			colors: ["#2E4057", "#6A4C93", "#00A896", "#EF476F", "#FFD166"],
		},
		{
			name: "Outils Dynamiques",
			colors: ["#FF5F58", "#FFC145", "#665191", "#29BEE3", "#1B998B"],
		},
	];
	const LottieOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<div className="space-y-8 md:space-y-16 bg-gray-100 text-gray-800">
			<section className="bg-gray-100 text-gray-800">
				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
						<h1 className="text-5xl font-bold leadi sm:text-6xl">
							Proposition de Site Web{" "}
							<span className="text-blue-600">SEQUIGEM</span>Business
						</h1>
						<p className="mt-6 mb-8 text-lg sm:mb-12">
							Je suis ravi de vous pr&eacute;senter une proposition sur mesure
							pour le d&eacute;veloppement d&apos;un site Web e-commerce
							innovant et ax&eacute; sur l&apos;utilisateur pour{" "}
							<span className=" text-blue-500">SEQUIGEM BUSINESS</span>, votre
							societ&eacute; de premier choix pour les outils de quincaillerie.
						</p>
					</div>
					<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
						<Image
							className="rounded-xl"
							src={
								"https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/299032799_441712067971096_5031530851901054091_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PrbMGwGo6MQAX_VzQ66&_nc_ht=scontent.ftun9-1.fna&oh=00_AfBFro2QVWLlxi0l5s8aXTGgnKscMlh3uVReTQuo1Gggug&oe=64D252AD"
							}
							height={500}
							width={500}
							alt="SEQUIGEM"
						/>
					</div>
				</div>
			</section>
			<section className="bg-gray-100 text-gray-800">
				<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
					<div>
						<h2 className="text-3xl font-bold tracki text-center sm:text-5xl text-gray-900">
							Objectifs du Projet
						</h2>
						<p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600">
							Viser la Croissance en Ligne et cr&eacute;er une Exp&eacute;rience
							Utilisateur Exceptionnelle
						</p>
					</div>
					<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
						<div>
							<p className=" text-orange-400 font-semibold border-orange-600 border-2 m-1 p-2">
								* L&apos;estimation du temps et des co&ucirc;ts concerne un site
								web de complexit&eacute; moyenne.
								<br />* La proposition est encore en cours de
								d&eacute;veloppement.
							</p>
							<h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-900">
								Pr&eacute;sence Num&eacute;rique Solide
							</h3>
							<p className="mt-3 text-lg text-gray-600">
								Mon objectif est d&apos;amplifier vos ventes,
								d&apos;&eacute;largir votre base de clients et de rehausser
								votre visibilit&eacute; en ligne grâce &agrave; une plateforme
								en ligne strat&eacute;gique et bien ex&eacute;cut&eacute;e.
							</p>
							<div className="mt-12 space-y-12">
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-50">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												className="w-7 h-7"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M5 13l4 4L19 7"
												></path>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg font-medium leadi text-gray-900">
											Identit&eacute;
										</h4>
										<p className="mt-2 text-gray-600">
											Concevoir et construire un site Web e-commerce &agrave; la
											pointe de la technologie qui refl&egrave;te
											l&apos;excellence et l&apos;engagement de SEQUIGEM.
										</p>
									</div>
								</div>
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-50">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												className="w-7 h-7"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M5 13l4 4L19 7"
												></path>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg font-medium leadi text-gray-900">
											Clients
										</h4>
										<p className="mt-2 text-gray-600">
											Cr&eacute;er une interface utilisateur intuitive
											permettant aux clients d&apos;explorer, de
											d&eacute;couvrir et d&apos;acheter facilement des outils
											de quincaillerie.
										</p>
									</div>
								</div>
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-50">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												className="w-7 h-7"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M5 13l4 4L19 7"
												></path>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg font-medium leadi text-gray-900">
											Securit&eacute;
										</h4>
										<p className="mt-2 text-gray-600">
											&eacute;tablir des protocoles de s&eacute;curit&eacute;
											robustes pour garantir des transactions en ligne
											s&eacute;curis&eacute;es et prot&eacute;ger les
											donn&eacute;es des clients.
										</p>
									</div>
								</div>
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-50">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												className="w-7 h-7"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M5 13l4 4L19 7"
												></path>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg font-medium leadi text-gray-900">
											Rentabilit&eacute;
										</h4>
										<p className="mt-2 text-gray-600">
											Optimiser l&apos;exp&eacute;rience de paiement pour
											renforcer la satisfaction des clients et minimiser
											l&apos;abandon de panier.
										</p>
									</div>
								</div>
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-50">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												className="w-7 h-7"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M5 13l4 4L19 7"
												></path>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg font-medium leadi text-gray-900">
											Organisation
										</h4>
										<p className="mt-2 text-gray-600">
											Fournir un syst&egrave;me de gestion de contenu (CMS)
											intuitif pour rationaliser la gestion des produits, des
											cat&eacute;gories et des commandes.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div aria-hidden="true" className="mt-10 lg:mt-0">
							<Lottie options={LottieOptions} speed={0.5} />
						</div>
					</div>
				</div>
			</section>
			<div
				className="w-full bg-gray-600"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1501516069922-a9982bd6f3bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');",
					backgroundPosition: "center center",
					backgroundBlendMode: "multiply",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				<div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:py-28">
					<h1 className="text-5xl antialiased font-bold leadi text-center md:text-6xl text-gray-100">
						&eacute;tendue des Travaux
					</h1>
					<p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100"></p>
				</div>
			</div>

			<section className="bg-gray-100 text-gray-800">
				<div className="container flex flex-col p-6 mx-auto">
					<div className="divide-y divide-gray-300">
						<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
							<div className="flex items-center justify-center lg:col-span-1 col-span-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									fill="currentColor"
									className="w-16 h-16"
								>
									<path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
									<path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
									<path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
								</svg>
							</div>
							<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
								<span className="text-xl font-bold md:text-2xl">
									Conception et D&eacute;veloppement du Site Web
								</span>
								<span className="mt-4 text-gray-700">
									<ul className="list-disc ml-7">
										<li>
											Concevoir un design de site Web distinctif et
											r&eacute;actif en harmonie avec l&apos;identit&eacute; de
											la marque SEQUIGEM.
										</li>
										<li>
											D&eacute;velopper une interface utilisateur
											r&eacute;active adapt&eacute;e &agrave; diff&eacute;rents
											appareils et tailles d&apos;&eacute;cran.
										</li>
										<li>
											Mettre en place un CMS convivial pour des mises &agrave;
											jour de produits et de contenu fluides.
										</li>
									</ul>
								</span>
							</div>
						</div>
						<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
							<div className="flex items-center justify-center lg:col-span-1 col-span-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									fill="currentColor"
									className="w-16 h-16"
								>
									<path d="M285.177,179l15.513-3.914-7.827-31.028-15.514,3.913a176.937,176.937,0,0,0-129.3,133.557l-3.407,15.633,31.266,6.814,3.406-15.634A145.559,145.559,0,0,1,285.177,179Z"></path>
									<path d="M363.624,147.871C343.733,72.077,274.643,16,192.7,16,95.266,16,16,95.266,16,192.7c0,82.617,57,152.163,133.735,171.4A176.769,176.769,0,0,0,320.7,496c97.431,0,176.7-79.266,176.7-176.695C497.392,238.071,441.64,167.336,363.624,147.871ZM48,192.7C48,112.91,112.91,48,192.7,48s144.7,64.91,144.7,144.7-64.911,144.7-144.7,144.7S48,272.481,48,192.7ZM320.7,464c-60.931,0-115.21-38.854-135.843-94.792,2.6.115,5.214.184,7.843.184a176.862,176.862,0,0,0,32.7-3.047l97.625,97.625C322.247,463.983,321.473,464,320.7,464Zm41.528-6.083L260.26,355.954a176.9,176.9,0,0,0,43.662-26.072L408.37,434.33A144.385,144.385,0,0,1,362.223,457.917Zm69.3-45.692L326.851,307.557a177.082,177.082,0,0,0,27.911-44.5L457.67,365.964A144.661,144.661,0,0,1,431.519,412.225Zm33.594-84.073-99.42-99.42a176.785,176.785,0,0,0,3.7-36.036c0-3.285-.1-6.547-.276-9.787a145.054,145.054,0,0,1,96.276,136.4C465.392,322.276,465.291,325.224,465.113,328.152Z"></path>
								</svg>
							</div>
							<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
								<span className="text-xl font-bold md:text-2xl">
									Fonctionnalit&eacute;s E-commerce
								</span>
								<span className="mt-4 text-gray-700">
									<ul className="list-disc ml-7">
										<li>
											Cr&eacute;er un vaste catalogue de produits avec des
											cat&eacute;gories structur&eacute;es, des descriptions
											vivantes et des images captivantes.
										</li>
										<li>
											Int&eacute;grer un m&eacute;canisme de recherche et de
											filtrage robuste pour acc&eacute;l&eacute;rer la
											d&eacute;couverte de produits.
										</li>
										<li>
											Concevoir un panier d&apos;achat convivial permettant
											d&apos;ajouter, de supprimer des articles et
											d&apos;ajuster les quantit&eacute;s facilement.
										</li>
										<li>
											Impl&eacute;menter un processus de paiement
											s&eacute;curis&eacute; et fluide avec plusieurs options de
											passerelle de paiement.
										</li>
										<li>
											Fournir un syst&egrave;me de suivi de commandes et de
											notifications pour la commodit&eacute; des clients.
										</li>
										<li>
											Introduire une fonctionnalit&eacute; de liste de souhaits
											pour des exp&eacute;riences d&apos;achat
											personnalis&eacute;es.
										</li>
										<li>
											Introduire une fonctionnalit&eacute; de comparaison des
											produits pour des exp&eacute;riences d&apos;achat
											avanc&eacute;es.
										</li>
									</ul>
								</span>
							</div>
						</div>
						<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
							<div className="flex items-center justify-center lg:col-span-1 col-span-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									fill="currentColor"
									className="w-16 h-16"
								>
									<path d="M412.284,294.37l-12.5,15.642c-8.354,10.454-50.027,64.208-50.027,95.883,0,36.451,28.049,66.105,62.526,66.105s62.527-29.654,62.527-66.105c0-31.675-41.673-85.429-50.028-95.883Zm0,145.63c-16.832,0-30.526-15.3-30.526-34.105,0-11.662,15.485-37.883,30.531-59.2,15.043,21.3,30.522,47.509,30.522,59.2C442.811,424.7,429.116,440,412.284,440Z"></path>
									<path d="M122.669,51.492,96.133,124.4,30.092,97.205,17.908,126.8l67.271,27.7L26.9,314.606a48.056,48.056,0,0,0,28.689,61.523l184.719,67.232a48,48,0,0,0,61.523-28.688L397.6,151.56Zm149.1,352.236a16,16,0,0,1-20.508,9.563L66.537,346.059a16,16,0,0,1-9.563-20.507L73.553,280H316.8ZM85.2,248l29.594-81.311,36.333,14.961a32.644,32.644,0,1,0,11.236-29.98l-36.615-15.077,16.046-44.085,214.79,78.177L328,249.219V248Z"></path>
								</svg>
							</div>
							<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
								<span className="text-xl font-bold md:text-2xl">
									Exp&eacute;rience Utilisateur et Interface
								</span>
								<span className="mt-4 bg-gray-100 text-gray-700">
									<ul className="list-disc ml-7">
										<li>
											Concevoir un syst&egrave;me de navigation intuitif
											simplifiant les parcours des clients et am&eacute;liorant
											l&apos;exp&eacute;rience utilisateur.
										</li>
										<li>
											Pr&eacute;senter des images haute r&eacute;solution avec
											des fonctionnalit&eacute;s de zoom interactif pour mettre
											en &eacute;vidence les d&eacute;tails des produits.
										</li>
										<li>
											Cr&eacute;er des pages produits engageantes enrichies en
											sp&eacute;cifications, tarifs et disponibilit&eacute; des
											stocks.
										</li>
										<li>
											Rationaliser le processus de paiement pour garantir une
											utilisation facile et minimiser les frictions pour les
											clients.
										</li>
									</ul>
								</span>
							</div>
						</div>
						<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
							<div className="flex items-center justify-center lg:col-span-1 col-span-full">
								<SiSpeedtest size={50} />
							</div>
							<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
								<span className="text-xl font-bold md:text-2xl">
									S&eacute;curit&eacute; et Performance
								</span>
								<span className="mt-4 text-gray-700">
									<ul className="list-disc ml-7">
										<li>
											Renforcer la s&eacute;curit&eacute; du site Web avec le
											chiffrement SSL pour prot&eacute;ger les donn&eacute;es
											sensibles des clients.
										</li>
										<li>
											Mettre &agrave; jour r&eacute;guli&egrave;rement les
											protocoles de s&eacute;curit&eacute; et effectuer des
											&eacute;valuations de vuln&eacute;rabilit&eacute; pour
											maintenir une d&eacute;fense robuste.
										</li>
										<li>
											Optimiser les temps de chargement et les performances
											g&eacute;n&eacute;rales du site pour une exp&eacute;rience
											utilisateur exceptionnelle.
										</li>
									</ul>
								</span>
							</div>
						</div>
						<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
							<div className="flex items-center justify-center lg:col-span-1 col-span-full">
								<FaCameraRetro size={50} />
							</div>
							<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
								<span className="text-xl font-bold md:text-2xl">
									Gestion de Contenu et Photographie de Produits
								</span>
								<span className="mt-4 text-gray-700">
									<ul className="list-disc ml-7">
										<li>
											Fournir une assistance compl&egrave;te en mati&egrave;re
											de photographie de produits et de cr&eacute;ation de
											contenu pour rehausser l&apos;attrait visuel.
										</li>
										<li>
											R&eacute;diger des descriptions de produits engageantes
											qui r&eacute;sonnent aupr&egrave;s de votre public et
											mettent en avant les caract&eacute;ristiques uniques.
										</li>
									</ul>
								</span>
							</div>
						</div>
						<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
							<div className="flex items-center justify-center lg:col-span-1 col-span-full">
								<FaMobileAlt size={50} />
							</div>
							<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
								<span className="text-xl font-bold md:text-2xl">
									D&eacute;veloppement d&apos;Applications Mobiles
								</span>
								<span className="mt-4 text-gray-700">
									<ul className="list-disc ml-7">
										<li>
											Offrir la possibilit&eacute; de d&eacute;velopper des
											applications mobiles d&eacute;di&eacute;es pour une
											gestion am&eacute;lior&eacute;e des commandes et une
											interaction renforc&eacute;e avec les clients.
										</li>
										<li>
											Les applications mobiles permettront un traitement
											efficace des commandes, un acc&egrave;s bas&eacute; sur
											les rôles et des fonctionnalit&eacute;s de gestion des
											stocks.
										</li>
									</ul>
								</span>
							</div>
						</div>
						<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
							<div className="flex items-center justify-center lg:col-span-1 col-span-full">
								<Cog6ToothIcon width={50} />
							</div>
							<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
								<span className="text-xl font-bold md:text-2xl">
									Fonctionnalit&eacute;s Avanc&eacute;es
								</span>
								<span className="mt-4 text-gray-700">
									<ul className="list-disc ml-7">
										<li>
											Int&eacute;gration transparente avec vos syst&egrave;mes
											de gestion de stocks existants pour garantir des niveaux
											de stock pr&eacute;cis.
										</li>
										<li>
											Mise en place de filtres de recherche avanc&eacute;s pour
											une d&eacute;couverte pr&eacute;cise des produits,
											am&eacute;liorant la satisfaction des utilisateurs
										</li>
										<li>
											Permettre aux clients de laisser des avis,
											renfor&ccedil;ant la confiance et cr&eacute;ant une
											communaut&eacute; en ligne dynamique.
										</li>
										<li>
											Mise en &oelig;uvre de notifications SMS et de mises
											&agrave; jour par e-mail pour tenir les clients
											inform&eacute;s de l&apos;&eacute;tat de leurs commandes.
										</li>
									</ul>
								</span>
							</div>
						</div>
						<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
							<div className="flex items-center justify-center lg:col-span-1 col-span-full">
								<FlagIcon width={50} />
							</div>
							<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
								<span className="text-xl font-bold md:text-2xl">
									Int&eacute;gration de l&apos;Identit&eacute; Visuelle
								</span>
								<span className="mt-4 text-gray-700">
									<ul className="list-disc ml-7">
										<li>
											Incorporer le logo, la palette de couleurs et les
											directives de branding de SEQUIGEM dans la conception du
											site Web pour une identit&eacute; de marque
											coh&eacute;rente.
										</li>
									</ul>
								</span>
							</div>
						</div>
						<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
							<div className="flex items-center justify-center lg:col-span-1 col-span-full">
								<FaCalendarDay size={50} />
							</div>
							<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
								<span className="text-xl font-bold md:text-2xl">
									Calendrier et Date de Lancement
								</span>
								<span className="mt-4 text-gray-700">
									<ul className="list-disc ml-7">
										<li>
											Lancement du Projet : <b>Inconnu</b>
										</li>
										<li>
											Phase de Conception et de D&eacute;veloppement :{" "}
											<b>2 mois</b>{" "}
											<span className=" text-sm">
												(peut n&eacute;cessiter jusqu&apos;&agrave; 2 semaines
												de temps suppl&eacute;mentaire)
											</span>
										</li>
										<li>
											Test et Assurance Qualit&eacute; : <b>10 jours</b>
										</li>
										<li>
											Lancement et D&eacute;ploiement : <b>2-4 jours</b>
										</li>
										<li>
											Support Post-Lancement et Formation : <b>Continu</b>
										</li>
									</ul>
									<span className="text-sm font-semibold text-blue-600 inline-block">
										<TbAlertCircle size={20} className="m-0 p-0 absolute" />
										<span className="relative ml-8">
											Veuillez noter que les &eacute;tapes ne sont pas
											forc&eacute;ment r&eacute;alis&eacute;es en s&eacute;rie.
											Une ex&eacute;cution parall&egrave;le peut &ecirc;tre
											envisag&eacute;e.
										</span>
									</span>
								</span>
							</div>
						</div>
						<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
							<div className="flex items-center justify-center lg:col-span-1 col-span-full">
								<FaMoneyCheckAlt size={50} />
							</div>
							<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
								<span className="text-xl font-bold md:text-2xl">Budget</span>
								<span className="mt-4 text-gray-700">
									<ul className="list-disc ml-7">
										<li>
											L&apos;investissement requis pour ce projet sera
											d&eacute;termin&eacute; en fonction de
											l&apos;&eacute;tendue des travaux et des
											fonctionnalit&eacute;s requises. Un d&eacute;tail complet
											des co&ucirc;ts sera fourni sur demande.
										</li>
										<li>
											Le budget estim&eacute; pour ce projet est de [3,000 TND].
											Cela inclut la conception, le d&eacute;veloppement, les
											tests et la mise en ligne.
										</li>
									</ul>
									<span className="text-sm font-semibold text-blue-600 inline-block">
										<TbAlertCircle size={20} className="m-0 p-0 absolute" />
										<span className="relative ml-8">
											Des co&ucirc;ts suppl&eacute;mentaires peuvent
											s&apos;appliquer aux services mis en place
											n&eacute;cessitant un abonnement, tels que les
											notifications par SMS.
										</span>
									</span>
								</span>
							</div>
						</div>
						<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
							<div className="flex items-center justify-center lg:col-span-1 col-span-full">
								<FaUserAstronaut size={50} />
							</div>
							<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
								<span className="text-xl font-bold md:text-2xl">
									Demandes Additionnelles et Consid&eacute;rations
								</span>
								<span className="mt-4 text-gray-700">
									<ul className="list-disc ml-7">
										<li>
											L&apos;int&eacute;gration transparente d&apos;options de
											paiement par carte de cr&eacute;dit pourra &ecirc;tre
											prise en compte ult&eacute;rieurement.
										</li>
										<li>
											Des services premium tels que les notifications SMS
											peuvent &ecirc;tre ajout&eacute;s pour am&eacute;liorer la
											communication avec les clients.
										</li>
									</ul>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-gray-100 text-gray-800" hidden>
				<div className="container flex flex-col p-6 mx-auto">
					{/* Design et Identit&eacute;  de Marque */}
					<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
						<div className="flex items-center justify-center lg:col-span-1 col-span-full">
							<FaPalette size={50} />
						</div>
						<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
							<span className="text-xl font-bold md:text-2xl">
								Design et Identit&eacute; de Marque
							</span>
							<span className="mt-4 text-gray-700">
								Dans cette section, je vais explorer le design visuel qui
								donnera au site Web de SEQUIGEM son aspect unique. (En cours)
							</span>
						</div>
					</div>

					{/* Processus de D&eacute;veloppement */}
					<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
						<div className="flex items-center justify-center lg:col-span-1 col-span-full">
							<FaCode size={50} />
						</div>
						<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
							<span className="text-xl font-bold md:text-2xl">
								Processus de D&eacute;veloppement
							</span>
							<span className="mt-4 text-gray-700">
								Mon processus de D&eacute;veloppement se compose de plusieurs
								&eacute; tapes bien d&eacute; finies pour garantir un r&eacute;
								sultat final de qualit&eacute; sup&eacute; rieure:
								<ul className="list-disc ml-7">
									<li>
										Conception Initiale: Nous travaillerons ensemble pour
										cr&eacute; er des maquettes de conception initiales qui
										captureront l&apos;apparence globale du site.
									</li>
									<li>
										D&eacute;veloppement Frontend: j&apos;utilise le framework
										React pour cr&eacute;er une interface utilisateur r&eacute;
										active et conviviale.
									</li>
									<li>
										D&eacute;veloppement Backend: Le backend sera g&eacute;
										r&eacute; par Node.js, ce qui permettra une gestion efficace
										des donn&eacute; es et des requ&ecirc;tes.
									</li>
									<li>
										Tests et R&eacute; visions: Chaque aspect du site sera
										test&eacute; pour assurer sa fonctionnalit&eacute; et sa
										convivialit&eacute; . Les r&eacute; visions seront
										effectu&eacute; es si n&eacute; cessaire.
									</li>
									<li>
										Lancement et Formation: Une fois que le site est pr&ecirc;t,
										je vous fournirai une formation compl&egrave;te pour
										g&eacute; rer le contenu et les fonctionnalit&eacute; s.
									</li>
								</ul>
							</span>
						</div>
					</div>

					{/* Gestion de Projet */}
					<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
						<div className="flex items-center justify-center lg:col-span-1 col-span-full">
							<FaUsers size={50} />
						</div>
						<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
							<span className="text-xl font-bold md:text-2xl">
								Gestion de Projet
							</span>
							<span className="mt-4 text-gray-700">
								Un chef de projet d&eacute; di&eacute; sera assign&eacute; pour
								coordonner toutes les phases du projet. Ils seront votre
								principal point de contact et vous tiendront inform&eacute; de
								chaque &eacute; tape, de la conception &agrave; la mise en
								ligne. Vous serez invit&eacute; &agrave; fournir des
								commentaires &agrave; chaque &eacute; tape pour garantir que le
								r&eacute;sultat final correspond &agrave; vos attentes.
							</span>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-gray-100 text-gray-800">
				<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
					<p className="p-2 text-sm font-medium tracki text-center  "></p>
					<h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">
						Inspiration pour le design
					</h2>
					<div className="py-8 px-4 bg-gray-100">
						<h2 className="text-2xl font-semibold mb-4">
							Proposition de Palette de Couleurs bas&eacute; sur le logo
							SEQUIGEM (Gris)
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{colorPalettes.map((palette, index) => (
								<div key={index}>
									<div className="bg-white rounded shadow p-4">
										<h3 className="text-lg font-semibold mb-2">
											{palette.name}
										</h3>
										<div className="grid grid-cols-5 gap-1">
											{palette.colors.map((color, colorIndex) => (
												<div
													key={colorIndex}
													className="w-8 h-8 rounded-md"
													style={{ backgroundColor: color }}
												/>
											))}
										</div>
									</div>
									<WebsitePreviewCard palette={palette} />
								</div>
							))}
						</div>
					</div>
					<div className="py-8 px-4 bg-gray-100">
						<h2 className="text-2xl font-semibold mb-4">
							Autre Proposition de Palette de Couleurs
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{colorPalettes2.map((palette, index) => (
								<div key={index}>
									<div className="bg-white rounded shadow p-4">
										<h3 className="text-lg font-semibold mb-2">
											{palette.name}
										</h3>
										<div className="grid grid-cols-5 gap-1">
											{palette.colors.map((color, colorIndex) => (
												<div
													key={colorIndex}
													className="w-8 h-8 rounded-md"
													style={{ backgroundColor: color }}
												/>
											))}
										</div>
									</div>
									<WebsitePreviewCard palette={palette} />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<div
				className="w-full bg-gray-600"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1501516069922-a9982bd6f3bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');",
					backgroundPosition: "center center",
					backgroundBlendMode: "multiply",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				<div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:py-28">
					<h1 className="text-5xl antialiased font-bold leadi text-center md:text-6xl text-gray-100">
						Sp&eacute;cifications de Projet
					</h1>
					<p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100"></p>
				</div>
			</div>

			<section className="bg-gray-100 text-gray-800">
				<div className="container flex flex-col p-6 mx-auto">
					<div className="divide-y divide-gray-300">
						<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
							<div className="flex items-center justify-center lg:col-span-1 col-span-full">
								<FaCodeBranch size={50} />
							</div>
							<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
								<span className="text-xl font-bold md:text-2xl">
									Sp&eacute;cifications Techniques et Espace Administrateur
								</span>
								<span className="mt-4 text-gray-700">
									<ul className="list-disc ml-7">
										<li>
											Langages de Programmation: Le site sera
											d&eacute;velopp&eacute; en utilisant les derni&egrave;res
											normes HTML, CSS et JavaScript pour garantir une
											compatibilit&eacute; et une accessibilit&eacute;
											maximales.
										</li>
										<li>
											Technologies Frontend: Nous utiliserons le framework
											React, Next.js et Solid.js pour cr&eacute;er une interface
											utilisateur dynamique, rapide et r&eacute;active.
										</li>
										<li>
											Technologies Backend: Le backend du site sera
											g&eacute;r&eacute; par Node.js et Rust permettant une
											gestion efficace des requ&ecirc;tes et des donn&eacute;es.
										</li>
										<li>
											Base de Donn&eacute;es: Nous utiliserons PostgreSQL,
											GraphQl et planetScale pour stocker les informations des
											produits, des utilisateurs et des commandes.
										</li>
										<li>
											Espace Administrateur: Un espace administrateur
											s&eacute;curis&eacute; sera mis en place pour g&eacute;rer
											les produits, les commandes et les utilisateurs.
										</li>
										<li>
											H&eacute;bergement: Le site sera h&eacute;berg&eacute; sur
											un serveur s&eacute;curis&eacute; avec des mesures de
											s&eacute;curit&eacute; avanc&eacute;es pour
											prot&eacute;ger les donn&eacute;es des utilisateurs(a
											discuter en fontion de budget).
										</li>
										<li>
											Performances: Nous optimiserons les performances du site
											en utilisant des techniques de chargement asynchrone(Rust
											Tokio) et de mise en cache (redis) pour une
											exp&eacute;rience utilisateur rapide.
										</li>
										<li>
											S&eacute;curit&eacute;: Des protocoles de
											s&eacute;curit&eacute; avanc&eacute;s, tels que le
											chiffrement SSL, seront mis en place pour prot&eacute;ger
											les informations sensibles.
										</li>
									</ul>
								</span>
							</div>
						</div>
						<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
							<div className="flex items-center justify-center lg:col-span-1 col-span-full">
								<FaCaravan size={50} />
							</div>
							<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
								<span className="text-xl font-bold md:text-2xl">
									Sp&eacute;cifications Fonctionnelles
								</span>
								<span className="mt-4 text-gray-700">
									<ul className="list-disc ml-7">
										<li>
											Catalogue de Produits: Les utilisateurs pourront parcourir
											une vaste gamme de produits de quincaillerie et
											d&apos;outils, tri&eacute;s par cat&eacute;gories et avec
											des informations d&eacute;taill&eacute;es.
										</li>
										<li>
											Recherche Avanc&eacute;e: Une fonction de recherche
											puissante permettra aux utilisateurs de trouver rapidement
											les produits qu&apos;ils recherchent.
										</li>
										<li>
											Panier d&apos;Achat: Les utilisateurs pourront ajouter des
											produits &agrave; leur panier d&apos;achat et passer
											facilement &agrave; la caisse.
										</li>
										<li>
											Comptes Utilisateurs: Les clients pourront cr&eacute;er
											des comptes personnels pour suivre leurs commandes,
											g&eacute;rer leurs informations et simplifier le processus
											d&apos;achat.
										</li>
										<li>
											Suivi des Commandes: Les utilisateurs pourront suivre
											l&apos;&eacute;tat de leurs commandes et recevoir des
											notifications par e-mail &agrave; chaque &eacute;tape du
											processus.
										</li>
										<li>
											Int&eacute;gration de Stocks: Le site sera
											int&eacute;gr&eacute; &agrave; votre syst&egrave;me de
											gestion des stocks existant pour assurer la
											disponibilit&eacute; pr&eacute;cise des produits.
										</li>
										<li>
											Espace Administrateur: L&apos;espace administrateur
											permettra de g&eacute;rer les produits, les commandes, les
											utilisateurs et de visualiser des rapports essentiels pour
											optimiser les op&eacute;rations.
										</li>
									</ul>
								</span>
							</div>
						</div>
						<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
							<div className="flex items-center justify-center lg:col-span-1 col-span-full">
								<TbBlockquote size={50} />
							</div>
							<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
								<span className="text-xl font-bold md:text-2xl">
									Structure Intuitive et Espace Administratif
								</span>
								<span className="mt-4 bg-gray-100 text-gray-700">
									<ul className="list-disc ml-7">
										<li>
											Page d&apos;Accueil: Pr&eacute;sentation des offres
											sp&eacute;ciales, des nouveaut&eacute;s et des produits en
											vedette.
										</li>
										<li>
											Catalogue de Produits: Cat&eacute;gories de produits
											clairement organis&eacute;es pour une navigation
											ais&eacute;e.
										</li>
										<li>
											Pages de Produits: Chaque produit aura sa propre page
											d&eacute;taill&eacute;e avec des images, des
											sp&eacute;cifications et des avis.
										</li>
										<li>
											Panier d&apos;Achat: Les utilisateurs pourront afficher et
											modifier les articles de leur panier avant de passer
											&agrave; la caisse.
										</li>
										<li>
											Espace Client: Les clients pourront se connecter,
											consulter leurs commandes pass&eacute;es et mettre
											&agrave; jour leurs informations personnelles.
										</li>
										<li>
											Espace Administratif: Un espace d&eacute;di&eacute;
											permettra aux administrateurs de g&eacute;rer les
											produits, les commandes et les utilisateurs de
											mani&egrave;re efficace et s&eacute;curis&eacute;e.
										</li>
									</ul>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer className="py-6 bg-gray-100 text-gray-900">
				<div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
					<div className="grid grid-cols-12 gap-6"></div>
					<div className="grid justify-center pt-6  ">
						<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
							<span>
								Pour plus d&apos;information, merci de contactez Bensmida Jaber:{" "}
								<b>24 784 771</b>
							</span>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
