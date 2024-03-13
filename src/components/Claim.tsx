import React from "react";

import claims from "@/data/claim";

import ClaimCard from "./ClaimCard";

export interface IClaim {
	name: string;
	list: string[];
	image: string;
}

const Claim = () => {
	return (
		<section className="py-12 md:py-24 w-full bg-[#191B28] px-4">
			<div className="max-w-5xl w-full mx-auto flex items-start justify-center flex-col">
				<div>
					<h3 className="text-4xl md:text-3xl font-medium mb-4 text-center md:text-left">How to claim AEVO?</h3>
					<p className="w-full text-center md:text-left md:w-2/3 leading-[30px]">
						AEVO is the governance token of AEVO, with a total issuance of only 1,000,000,000. Among them, 50,000,000 AEVO tokens for community airdrop, and distributed to community users
						for free. 150,000,000 AEVO tokens for presale, and the presale price is 1 BNB = 10,000 AEVO. After the presale is completed, AEVO will be listed on Uniswap, Hotbit, Binance and
						Coinbase exchanges immediately. AEVO tokens can now be obtained by participating in AEVO airdrop or presale. After presale is completed, you can buy AEVO through exchanges.
					</p>

					<div className="w-full grid grid-cols-1 md:grid-cols-2 mt-12">
						{claims?.map((claim: IClaim, index) => (
							<ClaimCard key={index} {...claim} index={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Claim;
