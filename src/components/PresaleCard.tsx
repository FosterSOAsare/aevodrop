import React from "react";

const PresaleCard = ({ name, desc }: { name: string; desc: string }) => {
	return (
		<div className="w-full bg-[#1A1B26] p-10 rounded-[5px]">
			<h3 className="mb-4 text-white font-medium">{name}</h3>
			<p className="text-blue text-2xl font-bold">{desc}</p>
		</div>
	);
};

export default PresaleCard;
