import React, { useState } from "react";
import Image from "next/image";

import LogoImage from "@/assets/logo.png";
import ProfileImage from "@/assets/pp.jpg";

import { FaGem } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import PhoneMenu from "./PhoneMenu";

const Header = () => {
	const [displayPhoneMenu, setDisplayPhoneMenu] = useState(false);
	return (
		<header className="sticky top-0 left-0 bg-bg z-[3] w-full px-4 py-4">
			<div className="w-full relative max-w-6xl mx-auto h-full flex items-center justify-between">
				<div className="w-[120px] h-10 relative">
					<Image alt="Logo" src={LogoImage} fill />
				</div>
				<nav className="hidden md:flex items-center justify-between gap-8">
					<a href="#introduce" className="font-medium text-sm hover:text-white">
						Introduce
					</a>
					<a href="#tokenomics" className="font-medium text-sm hover:text-white">
						Tokenomics
					</a>
					<a href="#roadmap" className="font-medium text-sm hover:text-white">
						Roadmap
					</a>
					<a href="" className="font-medium text-sm hover:text-white">
						Whitepaper
					</a>
				</nav>

				<div className="hidden md:flex items-center justify-between gap-4">
					<a href="#presale" className="flex relative hover:-top-2 transition-all duration-300 bg-[#F9DA00] rounded-full py-2 px-8 items-center justify-between gap-2">
						<FaGem className="text-white " />
						<p className="text-black text-sm font-bold">Pre-Sale</p>
					</a>
					<button className="w-10 h-10 border-[2px] border-white relative overflow-auto rounded-full">
						<Image src={ProfileImage} fill alt="Profile Image" />
					</button>
				</div>

				<button className="md:hidden" onClick={() => setDisplayPhoneMenu(true)}>
					<HiOutlineMenuAlt3 className="text-white text-3xl rounded-full" />
				</button>
			</div>
			{displayPhoneMenu && <PhoneMenu setDisplayPhoneMenu={setDisplayPhoneMenu} />}
		</header>
	);
};

export default Header;
