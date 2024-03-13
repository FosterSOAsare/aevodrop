import React, { useEffect, useState } from "react";
import Image from "next/image";

import LogoImage from "@/assets/logo.png";

import { FaGem, FaParachuteBox } from "react-icons/fa";

const Hero = () => {
	const [timeLeft, setTime] = useState();
	useEffect(() => {
		const interval = setInterval(() => {
			// const time = new Date("Tue Mar 13 2024 12:28:43").getTime();
			// const today = new Date().getTime();
			// const diff = time - today;
			// console.log(diff);
			// const hours = diff % (3600 * 60);
			// const minutes = today % 3600;
			// const seconds = today % 60;
			// console.log(hours, minutes, seconds);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
	return (
		<section className="py-24 border-b-[0.5px] border-desc border-opacity-50">
			<div className="w-full max-w-4xl  flex items-center flex-col justify-center mx-auto">
				<div className="w-[180px] h-16 mb-6 relative">
					<Image alt="Logo" src={LogoImage} fill />
				</div>
				<p className="text-center w-[70%] leading-[30px]">
					Aevo is a decentralized derivatives exchange platform, focused on options and perpetual trading. The DEX runs on Aevo L2, an Ethereum roll-up based on the OP Stack. Aevo supports
					options, perpetual futures, and many other products within a single margin account. Combining off-chain matching with on-chain settlement, the platform allows traders to have
					unparalleled performance and latency while inheriting the security of Ethereum.
				</p>

				<div className="flex items-center justify-between gap-8 mt-10">
					<button className="flex bg-[#F9DA00] rounded-full relative hover:-top-2 transition-all duration-300 py-4 px-8 items-center justify-between gap-2">
						<span className="w-6 h-6 flex items-center justify-center">
							<FaGem className="text-white text-xl" />
						</span>
						<p className="text-black text-sm font-bold">Pre-Sale</p>
					</button>
					<button className="flex bg-blue relative rounded-full hover:-top-2 transition-all duration-300 py-4 px-8 items-center justify-between gap-2">
						<span className="w-6 h-6 flex items-center justify-center">
							<FaParachuteBox className="text-white text-xl" />
						</span>
						<p className="text-white text-sm font-bold">Airdrop</p>
					</button>
				</div>

				<div className="w-full flex items-center justify-center  h-auto font-bold  mt-4">
					<p className="text-[#ffac02] text-sm">Binance will list AEVO (AEVO) at 2024-03-13 10:00 (UTC)</p>
				</div>

				<article className="bg-[#191B28] max-w-3xl mt-16 h-auto w-full flex items-stretch justify-between gap-8">
					<div className="w-[30%] h-auto flex flex-col justify-center  p-5 border-[2px] rounded-[5px]">
						<p className="text-lg mb-6">Current Price</p>
						<h3 className="font-bold">1 BNB = 25,000 AEVO</h3>
					</div>
					<div className="w-1/2 py-6">
						<p className="mb-3 text-xl">Airdrop ending</p>
						<div className="flex items-center justify-start gap-4">
							<div>
								<p className="text-4xl font-bold text-white">00</p>
								<p className="text-[15px] ml-[4px]">Days</p>
							</div>
							<div>
								<p className="text-4xl font-bold text-white">00</p>
								<p className="text-[15px] ml-[4px]">Hours</p>
							</div>
							<div>
								<p className="text-4xl font-bold text-white">00</p>
								<p className="text-[15px] ml-[4px]">Minutes</p>
							</div>
							<div>
								<p className="text-4xl font-bold text-white">00</p>
								<p className="text-[15px] ml-[4px]">Seconds</p>
							</div>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Hero;
