import React, { useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

const PhoneMenu = ({ setDisplayPhoneMenu }: { setDisplayPhoneMenu: React.Dispatch<React.SetStateAction<boolean>> }) => {
	const [inner, setInner] = useState(false);
	useEffect(() => {
		setInner(true);
	}, []);

	const closeMenu = () => {
		setInner(false);
		setTimeout(() => {
			setDisplayPhoneMenu(false);
		}, 500);
	};
	return (
		<aside className="w-full md:hidden fixed h-screen top-0 left-0 bg-[#191B28] bg-opacity-40 z-[3]">
			<div className={`${inner ? "left-[25%]" : "left-[100%]"} w-3/4 transition-all duration-500 relative  h-full bg-[#191B28] `}>
				<header className="h-8 flex justify-end p-4">
					<button className="flex tems-center justify-center h-5 w-5" onClick={closeMenu}>
						<AiOutlineClose className="text-white text-3xl" />
					</button>
				</header>
				<nav className="items-center flex-col justify-between gap-8">
					<a href="#introduce" className="font-medium block p-3 text-white border-b-[1px] text-md hover:text-white" onClick={closeMenu}>
						Introduce
					</a>
					<a href="#tokenomics" className="font-medium block p-3 text-white border-b-[1px] text-md hover:text-white" onClick={closeMenu}>
						Tokenomics
					</a>
					<a href="#roadmap" className="font-medium block p-3 text-white border-b-[1px] text-md hover:text-white" onClick={closeMenu}>
						Roadmap
					</a>
					<a href="" className="font-medium block p-3 text-white border-b-[1px] text-md hover:text-white" onClick={closeMenu}>
						Whitepaper
					</a>
				</nav>
			</div>
		</aside>
	);
};

export default PhoneMenu;
