import React, { useEffect, useState } from "react";
import Image from "next/image";

import LogoImage from "@/assets/logo.png";

import { FaGem, FaParachuteBox } from "react-icons/fa";

const Hero = () => {
	const [timeLeft, setTime] = useState({ days: 0, minutes: 0, seconds: 0, hours: 0 });
	const targetDate = new Date("Apr 1 2024").getTime();
	useEffect(() => {
		const timer = setInterval(() => {
			const now = new Date().getTime();
			const difference = (targetDate - now) / 1000;

			// Calculate days, hours, minutes, and seconds
			const days = Math.floor(difference / (3600 * 24));
			const hours = Math.floor((difference % (3600 * 24)) / 3600);
			const minutes = Math.floor((difference % 3600) / 60);
			const seconds = Math.floor(difference % 60);

			// Display the countdown
			setTime({ hours, minutes, days, seconds });
			// Stop the timer when difference reaches 0
			if (difference <= 0) {
				clearInterval(timer);
			}
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	});

	const padNumber = (number: number) => {
		return number < 10 ? `0${number}` : number;
	};
	return (
		<section className="mt-24 pb-24 border-b-[0.5px] border-opacity-20 border-desc hero-bg" id="introduce">
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
					<a href="#presale" className="flex bg-[#F9DA00] rounded-full relative hover:-top-2 transition-all duration-300 py-4 px-8 items-center justify-between gap-2">
						<span className="w-6 h-6 flex items-center justify-center">
							<FaGem className="text-white text-xl" />
						</span>
						<p className="text-black text-sm font-bold">Pre-Sale</p>
					</a>
					<a href="#airdrop" className="flex bg-blue relative rounded-full hover:-top-2 transition-all duration-300 py-4 px-8 items-center justify-between gap-2">
						<span className="w-6 h-6 flex items-center justify-center">
							<FaParachuteBox className="text-white text-xl" />
						</span>
						<p className="text-white text-sm font-bold">Airdrop</p>
					</a>
				</div>

				<div className="w-full flex items-center justify-center  h-auto font-bold  mt-4">
					<p className="text-[#ffac02] text-sm">Binance will list AEVO (AEVO) at 2024-03-13 10:00 (UTC)</p>
				</div>

				<article className="bg-[#191B28] max-w-3xl mt-16 h-auto w-full flex items-stretch justify-between gap-8">
					<div className="w-[30%] h-auto flex flex-col justify-center border-r-[0] z-[1] p-5 border-[2px] border-[#2c2f42] rounded-tl-[5px] rounded-bl-[5px] relative">
						<p className="text-lg mb-6">Current Price</p>
						<h3 className="font-bold">1 BNB = 25,000 AEVO</h3>

						<div className="absolute w-[3px] h-[52%] -right-[22px] bg-[#2c2f42] -top-[2px] skew-x-[30deg]"></div>
						<div className="absolute w-[3px] h-[52%] -right-[22px] bg-[#2c2f42] -bottom-[2px] skew-x-[-30deg]"></div>
					</div>
					<div className="w-1/2 py-6">
						<p className="mb-3 text-xl">Airdrop ending</p>
						<div className="flex items-center justify-start gap-4">
							<div>
								<p className="text-4xl font-bold text-white">{padNumber(timeLeft?.days)}</p>
								<p className="text-[15px] ml-[4px]">Days</p>
							</div>
							<div>
								<p className="text-4xl font-bold text-white">{padNumber(timeLeft?.hours)}</p>
								<p className="text-[15px] ml-[4px]">Hours</p>
							</div>
							<div>
								<p className="text-4xl font-bold text-white">{padNumber(timeLeft?.minutes)}</p>
								<p className="text-[15px] ml-[4px]">Minutes</p>
							</div>
							<div>
								<p className="text-4xl font-bold text-blue">{padNumber(timeLeft?.seconds)}</p>
								<p className="text-[15px] ml-[4px] text-blue">Seconds</p>
							</div>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Hero;
