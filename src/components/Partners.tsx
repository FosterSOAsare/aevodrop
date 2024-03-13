import React from "react";
import Image from "next/image";

import partners from "@/data/partners";

const Partners = () => {
	return (
		<section className="w-full py-20 md:py-36 bg-[#191B28]  relative">
			<div className="absolute z-[1] top-0 left-0 partners-bg opacity-5 w-full h-full"></div>
			<div className="w-full relative z-[2] max-w-5xl mx-auto flex flex-col items-center justify-center">
				<h3 className="text-3xl font-medium text-white">Partners</h3>

				<div className="w-full mt-16 grid grid-cols-2 md:grid-cols-4">
					{partners?.map((partner, index) => (
						<div
							key={index}
							className={`w-full p-8 h-auto ${index < 8 ? "border-b-[1px]" : ""} ${index < 10 && index >= 8 ? "border-b-[1px] md:border-b-0" : ""} ${
								index % 4 !== 0 ? "border-l-[1px]" : ""
							} flex items-center justify-center border-slate-100 border-opacity-10`}>
							<div className={`l ${[2, 5, 9].includes(index) ? "w-20 h-14" : "w-4/5 h-20"} relative`}>
								<Image fill src={partner} alt="Partner Image" />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Partners;
