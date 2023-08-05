export function HeroTitle() {
	return (
		<section className=" ">
			<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
				<h1 className="text-4xl font-bold leadi sm:text-5xl">
					Proposition de Site Web pour
					<span className="dark:text-violet-400">SEQUIGEM </span>
				</h1>
				<p className="px-8 mt-8 mb-12 text-md text-left">
					Je suis ravi de vous présenter une proposition sur mesure pour le
					développement d'un site Web e-commerce innovant et axé sur
					l'utilisateur pour SEQUI, votre magasin de premier choix pour les
					outils de quincaillerie. Mon objectif est d'amplifier vos ventes,
					d'élargir votre base de clients et de rehausser votre visibilité en
					ligne grâce à une plateforme en ligne stratégique et bien exécutée.
				</p>
				<div className="flex flex-wrap justify-center">
					<button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
						Détailles
					</button>
				</div>
			</div>
		</section>
	);
}
