import React from "react";
import Image from "next/image";
type GalleryProps = {};

export default function Gallery({}: GalleryProps) {
	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-24 mx-auto flex flex-wrap">
				<div className="flex w-full mb-20 flex-wrap">
					<h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
						Enjoy a short trip and know my city better in pictures
					</h1>
					<p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
						In case you are a travel geeky or just curious about places arround
						the word, here you can find some photos by which I am trying to help
						you have a more clear and filterless picture of this city
					</p>
				</div>
				<div className="flex flex-wrap md:-m-2 -m-1">
					<div className="flex flex-wrap w-1/2">
						<div className="md:p-2 p-1 w-1/2">
							<Image
								width={500}
								height={300}
								alt="gallery"
								className="w-full object-cover h-full object-center block"
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/4b/e2/44/pansea-ksar-ghilane.jpg?w=1200&h=-1&s=1"
							/>
						</div>
						<div className="md:p-2 p-1 w-1/2">
							<Image
								width={501}
								height={301}
								alt="gallery"
								className="w-full object-cover h-full object-center block"
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/5a/66/90/yadis-ksar-ghilane.jpg?w=1200&h=-1&s=1"
							/>
						</div>
						<div className="md:p-2 p-1 w-full">
							<Image
								width={600}
								height={360}
								alt="gallery"
								className="w-full h-full object-cover object-center block"
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/b3/e5/57/zaafrane-region-de-tozeur.jpg?w=1200&h=-1&s=1"
							/>
						</div>
					</div>
					<div className="flex flex-wrap w-1/2">
						<div className="md:p-2 p-1 w-full">
							<Image
								width={601}
								height={361}
								alt="gallery"
								className="w-full h-full object-cover object-center block"
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/b1/f8/47/20170622-100611-largejpg.jpg?w=1200&h=-1&s=1"
							/>
						</div>
						<div className="md:p-2 p-1 w-1/2">
							<Image
								width={502}
								height={302}
								alt="gallery"
								className="w-full object-cover h-full object-center block"
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/e5/f2/ab/douz.jpg?w=1000&h=-1&s=1"
							/>
						</div>
						<div className="md:p-2 p-1 w-1/2">
							<Image
								width={503}
								height={303}
								alt="gallery"
								className="w-full object-cover h-full object-center block"
								src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/f9/f4/61/camp-yadis-ksar-guilane.jpg?w=800&h=-1&s=1"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
