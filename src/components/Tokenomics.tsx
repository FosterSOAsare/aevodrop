import React from "react";


const Tokenomics = () => {
	return (
		<section className="py-24 bg-[#191B28]">
			<div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
				<h3 className="text-3xl font-medium mb-6">AEVO Tokenomics</h3>
				<p className="text-center w-[70%] text-lg">A total of 1,000,000,000 AEVO tokens that will be distributed. Here's a breakdown of the AEVO token:</p>
				<div className="flex w-full justify-center gap-4 mt-16 items-center">
					<div className="w-[30%] h-64 bg-[red]"></div>
					<div className="w-[30%] h-64 bg-[red]"></div>
				</div>
			</div>
		</section>
	);
};

export default Tokenomics;
