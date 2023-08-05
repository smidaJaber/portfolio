import React from "react";

type EtenduProps = {};

export default function Etendu({}: EtenduProps) {
	return (
		<section className=" ">
			<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
				<h2 className="text-2xl font-semibold sm:text-4xl">
					Étendue des Travaux :
				</h2>
				<p className="mt-4 mb-8 dark:text-gray-400">
					text to be add here for intro
				</p>
				<div className="space-y-4">
					<details className="w-full border rounded-lg" open>
						<summary className="px-4 py-6 focus:outline-none focus-visible:ri">
							Conception et Développement du Site Web :
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
							<ul>
								<li>
									Concevoir un design de site Web distinctif et réactif en
									harmonie avec l'identité de la marque SEQUI.
								</li>
								<li>
									Développer une interface utilisateur réactive adaptée à
									différents appareils et tailles d'écran.
								</li>
								<li>
									Mettre en place un CMS convivial pour des mises à jour de
									produits et de contenu fluides.
								</li>
							</ul>
						</p>
					</details>
					<details className="w-full border rounded-lg" open>
						<summary className="px-4 py-6 focus:outline-none focus-visible:ri">
							Fonctionnalités E-commerce :
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
							<ul>
								<li>
									Créer un vaste catalogue de produits avec des catégories
									structurées, des descriptions vivantes et des images
									captivantes.
								</li>
								<li>
									Intégrer un mécanisme de recherche et de filtrage robuste pour
									accélérer la découverte de produits.
								</li>
								<li>
									Concevoir un panier d'achat convivial permettant d'ajouter, de
									supprimer des articles et d'ajuster les quantités facilement.
								</li>
								<li>
									Implémenter un processus de paiement sécurisé et fluide avec
									plusieurs options de passerelle de paiement.
								</li>
								<li>
									Fournir un système de suivi de commandes et de notifications
									pour la commodité des clients.
								</li>
								<li>
									Introduire une fonctionnalité de liste de souhaits pour des
									expériences d'achat personnalisées.
								</li>
							</ul>
						</p>
					</details>
					<details className="w-full border rounded-lg" open>
						<summary className="px-4 py-6 focus:outline-none focus-visible:ri">
							Expérience Utilisateur et Interface :
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
							<ul>
								<li>
									Concevoir un système de navigation intuitif simplifiant les
									parcours des clients et améliorant l'expérience utilisateur.
								</li>
								<li>
									Présenter des images haute résolution avec des fonctionnalités
									de zoom interactif pour mettre en évidence les détails des
									produits.
								</li>
								<li>
									Créer des pages produits engageantes enrichies en
									spécifications, tarifs et disponibilité des stocks.
								</li>
								<li>
									Rationaliser le processus de paiement pour garantir une
									utilisation facile et minimiser les frictions pour les
									clients.
								</li>
							</ul>
						</p>
					</details>

					<details className="w-full border rounded-lg" open>
						<summary className="px-4 py-6 focus:outline-none focus-visible:ri">
							Sécurité et Performance :
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
							- Renforcer la sécurité du site Web avec le chiffrement SSL pour
							protéger les données sensibles des clients. - Mettre à jour
							régulièrement les protocoles de sécurité et effectuer des
							évaluations de vulnérabilité pour maintenir une défense robuste. -
							Optimiser les temps de chargement et les performances générales du
							site pour une expérience utilisateur exceptionnelle.
						</p>
					</details>
					<details className="w-full border rounded-lg" open>
						<summary className="px-4 py-6 focus:outline-none focus-visible:ri">
							Gestion de Contenu et Photographie de Produits :
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
							- Fournir une assistance complète en matière de photographie de
							produits et de création de contenu pour rehausser l'attrait
							visuel. - Rédiger des descriptions de produits engageantes qui
							résonnent auprès de votre public et mettent en avant les
							caractéristiques uniques.
						</p>
					</details>
					<details className="w-full border rounded-lg" open>
						<summary className="px-4 py-6 focus:outline-none focus-visible:ri">
							Développement d'Applications Mobiles :
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
							- Offrir la possibilité de développer des applications mobiles
							dédiées pour une gestion améliorée des commandes et une
							interaction renforcée avec les clients. - Les applications mobiles
							permettront un traitement efficace des commandes, un accès basé
							sur les rôles et des fonctionnalités de gestion des stocks.
						</p>
					</details>
					<details className="w-full border rounded-lg" open>
						<summary className="px-4 py-6 focus:outline-none focus-visible:ri">
							Fonctionnalités Avancées :
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
							- Intégration transparente avec vos systèmes de gestion de stocks
							existants pour garantir des niveaux de stock précis. - Mise en
							place de filtres de recherche avancés pour une découverte précise
							des produits, améliorant la satisfaction des utilisateurs. -
							Permettre aux clients de laisser des avis, renforçant la confiance
							et créant une communauté en ligne dynamique. - Mise en œuvre de
							notifications SMS et de mises à jour par e-mail pour tenir les
							clients informés de l'état de leurs commandes.
						</p>
					</details>
					<details className="w-full border rounded-lg" open>
						<summary className="px-4 py-6 focus:outline-none focus-visible:ri">
							Intégration de l'Identité Visuelle :
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
							- Incorporer le logo, la palette de couleurs et les directives de
							branding de SEQUI dans la conception du site Web pour une identité
							de marque cohérente.
						</p>
					</details>
					<details className="w-full border rounded-lg" open>
						<summary className="px-4 py-6 focus:outline-none focus-visible:ri">
							Calendrier et Date de Lancement :
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
							- Lancement du Projet : [Date] - Phase de Conception et de
							Développement : [Date de Début] - [Date de Fin] - Test et
							Assurance Qualité : [Date de Début] - [Date de Fin] - Lancement et
							Déploiement : [Date] - Support Post-Lancement et Formation :
							Continu
						</p>
					</details>
					<details className="w-full border rounded-lg" open>
						<summary className="px-4 py-6 focus:outline-none focus-visible:ri">
							Budget :
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
							- L'investissement requis pour ce projet sera déterminé en
							fonction de l'étendue des travaux et des fonctionnalités requises.
							Un détail complet des coûts sera fourni sur demande.
						</p>
					</details>
					<details className="w-full border rounded-lg" open>
						<summary className="px-4 py-6 focus:outline-none focus-visible:ri">
							Demandes Additionnelles et Considérations :
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
							- L'intégration transparente d'options de paiement par carte de
							crédit pourra être prise en compte ultérieurement. - Des services
							premium tels que les notifications SMS peuvent être ajoutés pour
							améliorer la communication avec les clients.
						</p>
					</details>
					<details className="w-full border rounded-lg" open>
						<summary className="px-4 py-6 focus:outline-none focus-visible:ri">
							Gestion de Contenu et Photographie de Produits :
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"> etc</p>
					</details>
				</div>
			</div>
		</section>
	);
}
