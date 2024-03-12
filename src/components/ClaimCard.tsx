import React from "react";
import { IClaim } from "./Claim";

interface IClaimCard extends IClaim {
	index: number;
}

const ClaimCard = ({ name, list, index }: IClaimCard) => {
	return (
		<div className={`border-desc border-opacity-50 ${index % 2 === 1 ? "border-l-[1px] " : " "} ${index < 2 ? "border-b-[1px]" : ""} flex items-start justify-start p-6 py-12 gap-8`}>
			<div className="w-16 h-14 bg-[green]"></div>
			<div className="w-[90%] h-auto">
				<h3 className="text-xl mb-3 font-medium">{name}</h3>
				<ul className="list-disc">
					{list?.map((item, index) => (
						<li className="mb-2 leading-[25px]" key={index}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ClaimCard;
