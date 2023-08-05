interface WebsitePreviewProps {
	palette: { name: string; colors: string[] };
}
const WebsitePreviewCard = ({ palette }: WebsitePreviewProps) => {
	const main = palette.colors[0];
	const accent = palette.colors[1];
	const neutral = palette.colors[2];
	const highlight = palette.colors[3];
	const background = palette.colors[4];

	return (
		<div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-white">
			<div className="px-6 py-4"></div>
			<div className="px-6 py-3 bg-gray-100">
				<div
					className="rounded-lg p-4 flex justify-center items-center"
					style={{ backgroundColor: main }}
				>
					<p className="text-white font-semibold text-[6px] text-left">
						SEQUIGEM
					</p>
				</div>
				<div className="flex justify-between mt-2">
					<div
						className="rounded-lg   flex-grow mx-2"
						style={{ backgroundColor: accent }}
					></div>
					<div className="rounded-lg p-0 flex-grow mx-4 flex justify-between mt-2">
						<div>
							<div
								className="rounded-lg p-2  mx-1"
								style={{ backgroundColor: neutral }}
							></div>
							<div
								className="rounded-sm p-2 flex-grow m-2"
								style={{ backgroundColor: highlight }}
							></div>
							<div
								className="rounded-sm p-2 flex-grow m-2"
								style={{ backgroundColor: highlight }}
							></div>
							<div
								className="rounded-sm p-2 flex-grow m-2"
								style={{ backgroundColor: highlight }}
							></div>
						</div>
						<div>
							<div
								className="rounded-lg p-2  mx-1"
								style={{ backgroundColor: neutral }}
							></div>
							<div
								className="rounded-sm p-2 flex-grow m-2"
								style={{ backgroundColor: highlight }}
							></div>
							<div
								className="rounded-sm p-2 flex-grow m-2"
								style={{ backgroundColor: highlight }}
							></div>
							<div
								className="rounded-sm p-2 flex-grow m-2"
								style={{ backgroundColor: highlight }}
							></div>
						</div>
						<div>
							<div
								className="rounded-lg p-2  mx-1"
								style={{ backgroundColor: neutral }}
							></div>
							<div
								className="rounded-sm p-2 flex-grow m-2"
								style={{ backgroundColor: highlight }}
							></div>
							<div
								className="rounded-sm p-2 flex-grow m-2"
								style={{ backgroundColor: highlight }}
							></div>
							<div
								className="rounded-sm p-2 flex-grow m-2"
								style={{ backgroundColor: highlight }}
							></div>
						</div>
						<div>
							<div
								className="rounded-lg p-2  mx-1"
								style={{ backgroundColor: neutral }}
							></div>
							<div
								className="rounded-sm p-2 flex-grow m-2"
								style={{ backgroundColor: highlight }}
							></div>
							<div
								className="rounded-sm p-2 flex-grow m-2"
								style={{ backgroundColor: highlight }}
							></div>
							<div
								className="rounded-sm p-2 flex-grow m-2"
								style={{ backgroundColor: highlight }}
							></div>
						</div>
					</div>
				</div>
				<div
					className="rounded-lg p-4 mt-2 flex justify-center items-center"
					style={{ backgroundColor: background }}
				>
					<p className="text-white font-semibold"></p>
				</div>
			</div>
		</div>
	);
};

export default WebsitePreviewCard;
