import React from "react";
import Image from "next/image";

import { IClaim } from "./Claim";

interface IClaimCard extends IClaim {
	index: number;
}

const ClaimCard = ({ name, list, index, image }: IClaimCard) => {
	return (
		<div
			className={`md:border-desc md:border-opacity-50 ${index % 2 === 1 ? "md:border-l-[1px] " : " "} ${
				index < 2 ? "md:border-b-[1px]" : ""
			} flex flex-col md:flex-row items-center md:items-start justify-start p-6 py-12 gap-8`}>
			<div className="w-14 h-12 relative fill">
				<Image src={image} alt={name} fill />
			</div>
			<div className="w-full lg:w-[90%] h-auto">
				<h3 className="text-2xl md:text-xl text-center md:text-left mb-3 font-medium">{name}</h3>
				<ul className="list-disc">
					{list?.map((item, index) => (
						<li className="mb-2 text-center md:text-left leading-[25px]" key={index}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ClaimCard;
