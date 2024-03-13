import React from "react";
import PresaleCard from "./PresaleCard";

const Presale = () => {
	return (
		<section className="py-12 md:py-24 px-4" id="presale">
			<div className="w-full max-w-4xl mx-auto  flex items-center justify-center flex-col">
				<h3 className="text-white text-3xl mb-4">Pre-sale is live</h3>

				<div className="w-full md:w-1/2 rounded-[5px] bg-[#1A1B26] p-6 flex flex-col items-center justify-center">
					<p className="text-white mb-3">Pre-Sale Address</p>
					<p className="text-blue text-sm md:text-[16px] mb-2 font-medium">0xFEe2a278c7c483Ff7c4241f79a7B14F5FE4E3c5e</p>
					<button className="px-4 py-2 text-[15px] hover:opacity-70 rounded-full bg-blue mt-4 text-white font-medium">Copy Address</button>
				</div>

				<ul className="mt-5 w-full md:auto pl-5 md:pl-0 flex items-center list-disc flex-col">
					<li>Pre-sale quantity: 150,000,000 AEVO (15% of total supply).</li>
					<li>Pre-sale price: 1 BNB = 25,000 AEVO.</li>
				</ul>
				<p className="text-center w-full md:w-2/3">
					Mini buy is 0.1 BNB, and max buy is 100 BNB.
					<br /> Send BNB from your wallet to the presale address above. Our system will send AEVO tokens to your wallet immediately.
					<br /> You can also send from exchange like Binance
				</p>

				<article className="mt-12 w-full grid grid-cols-2 md:grid-cols-3 gap-8">
					<PresaleCard name="Token Name" desc="AEVO" />
					<PresaleCard name="Token Symbol" desc="AEVO" />
					<PresaleCard name="Decimals" desc="18" />
					<div className="w-full bg-[#1A1B26] p-4 md:p-8 rounded-[5px]">
						<h3 className="mb-3 text-white text-[15px] font-medium">Contract Address</h3>
						<p className="text-blue text-[15px] break-words font-bold">
							0xcbc85352fe90051edef5aaf55172ffea561c0d95 <span className=""></span>
						</p>
					</div>
					<PresaleCard name="Blockchain" desc="ETH (ERC-20)" />
					<PresaleCard name="Total Supply" desc="1,000,000,000" />
				</article>

				<article className="w-full mt-8 bg-[#1A1B26] rounded-[5px]" id="airdrop">
					<div className="w-full border-b-[1px] py-10 border-slate-100 border-opacity-25 flex items-center justify-center">
						<h3 className="text-3xl font-medium">AEVO Airdrop is live</h3>
					</div>

					<div className="p-8 py-16 flex flex-col items-center justify-between max-w-2xl mx-auto">
						<input type="text" className="w-full h-10 text-sm font-medium border-[1px] rounded-[5px] bg-[#1E202D] text-white px-4" placeholder="Enter your ERC20 wallet address" />
						<button className="flex items-center justify-center mt-6 w-[125px] py-3 bg-yellow hover:bg-opacity-70 font-bold rounded-[5px]">Submit</button>
						<p className="mt-8 text-white text-sm">How to get your wallet address?</p>
						<p className="text-yellow text-center font-medium text-[15px]">
							Open Binance &gt; Click Deposit &gt; Search AEVO &gt; Copy Ethereum (ERC20) Address &gt; Paste Here Or you can get it from{" "}
							<a href="" className="text-[#007bff] font-bold">
								here
							</a>
						</p>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Presale;
