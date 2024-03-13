import React from "react";

const PresaleCard = ({ name, desc }: { name: string; desc: string }) => {
	return (
		<div className="w-full bg-[#1A1B26] p-8 rounded-[3px]">
			<h3 className="mb-3 text-white text-[15px] font-medium">{name}</h3>
			<p className="text-blue text-xl font-bold">{desc}</p>
		</div>
	);
};

export default PresaleCard;
