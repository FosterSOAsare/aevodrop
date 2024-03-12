import React from "react";
import PresaleCard from "./PresaleCard";

const Presale = () => {
	return (
		<section className="py-24">
			<div className="w-full max-w-5xl mx-auto  flex items-center justify-center flex-col">
				<h3 className="text-white text-3xl mb-4">Pre-sale is live</h3>

				<div className="w-1/2 bg-[#1A1B26] p-6 flex flex-col items-center justify-center">
					<p className="text-white mb-3">Pre-Sale Address</p>
					<p className="text-blue mb-2 font-medium">0xFEe2a278c7c483Ff7c4241f79a7B14F5FE4E3c5e</p>
					<button className="px-4 py-2 rounded-full bg-blue mt-4 text-white font-medium">Copy Address</button>
				</div>

				<ul className="mt-5 flex items-center list-disc flex-col">
					<li>Pre-sale quantity: 150,000,000 AEVO (15% of total supply).</li>
					<li>Pre-sale price: 1 BNB = 25,000 AEVO.</li>
				</ul>
				<p className="text-center w-2/3">
					Mini buy is 0.1 BNB, and max buy is 100 BNB.
					<br /> Send BNB from your wallet to the presale address above. Our system will send AEVO tokens to your wallet immediately.
					<br /> You can also send from exchange like Binance
				</p>

				<div className="mt-12 w-full grid grid-cols-3 gap-8">
					<PresaleCard name="Token Name" desc="AEVO" />
					<PresaleCard name="Token Symbol" desc="AEVO" />
					<PresaleCard name="Decimals" desc="18" />
					<div className="w-full bg-[#1A1B26] p-10 rounded-[5px]">
						<h3 className="mb-4 text-white font-medium">Contract Address</h3>
						<p className="text-blue break-words font-bold">0xcbc85352fe90051edef5aaf55172ffea561c0d95 <span className=""></span></p>
					</div>
					<PresaleCard name="Blockchain" desc="ETH (ERC-20)" />
					<PresaleCard name="Total Supply" desc="1,000,000,000" />
				</div>
			</div>
		</section>
	);
};

export default Presale;
