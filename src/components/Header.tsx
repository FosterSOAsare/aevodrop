import React from "react";
import Image from "next/image";

import LogoImage from "@/assets/logo.png";

const Header = () => {
	return (
		<header className="sticky top-0 left-0 bg-bg z-[3] w-full  py-2">
			<div className="w-full max-w-6xl mx-auto h-full flex items-center justify-between">
				<div className="w-[120px] h-10 relative">
					<Image alt="Logo" src={LogoImage} fill />
				</div>
				<nav className="flex items-center justify-between gap-8">
					<a href="" className="font-medium text-sm hover:text-white">
						Introduce
					</a>
					<a href="" className="font-medium text-sm hover:text-white">
						Tokenomics
					</a>
					<a href="" className="font-medium text-sm hover:text-white">
						Roadmap
					</a>
					<a href="" className="font-medium text-sm hover:text-white">
						Whitepaper
					</a>
				</nav>

				<div className="flex items-center justify-between gap-4">
					<button className="flex bg-[#F9DA00] rounded-full py-3 px-6 items-center justify-between gap-4">
						<span className="w-6 bg-[green] h-6 block"></span>
						<p className="text-black text-sm font-bold">Pre-Sale</p>
					</button>
					<button className="w-10 h-10 border-[2px] border-white rounded-full bg-[green]"></button>
				</div>
			</div>
		</header>
	);
};

export default Header;
