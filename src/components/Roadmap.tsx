import React, { useState } from "react";

import roadmap from "@/data/roadmap";

import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Roadmap = () => {
	const [active, setActive] = useState(1);
	const [mobileSlider, setMobileSlider] = useState(1);
	return (
		<section className="w-full py-24" id="roadmap">
			<h3 className="text-3xl text-center">Project Roadmap</h3>
			<div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
				<aside className="md:w-1/5">
					<h3 className="font-bold text-2xl mt-6 md:mt-0 md:text-3xl lg:text-6xl md:-rotate-90"> 2024</h3>
				</aside>
				<div>
					{/* For desktop */}
					<div className="hidden md:block w-full h-[100vh] overflow-hidden relative mt-8">
						<div className={`relative ${active === 1 ? "top-0" : "-top-[32%]"} transition-all duration-700`}>
							{roadmap?.map((item, index) => (
								<div className="flex items-stretch justify-center" key={index}>
									<div className="w-[30%]  border-r-[1px] border-slate-200 border-opacity-40 flex flex-col items-start justify-center">
										<h3 className="opacity-50 font-medium mb-2">{item?.time}</h3>
										<h1 className="text-2xl text-white font-bold">Phase {index + 1}</h1>
									</div>
									<div className="w-[70%] flex items-center gap-2 justify-between">
										<div className="w-[10%] h-8 flex items-center justify-center">
											<div className="w-5 h-5  rotate-45 flex items-center justify-center border-[2px]  border-slate-500 border-opacity-10">
												<div className="w-4 h-4 flex items-center justify-center border-[2px]  border-slate-500 border-opacity-30">
													<div className="w-3 h-3 bg-white  border-[3px]  border-slate-600 border-opacity-60"></div>
												</div>
											</div>
										</div>
										<ul className="list-disc w-[90%] ml-5 pb-10">
											{item?.features?.map((feature, index) => (
												<li className="w-full text-[18px] mb-[5px]" key={index}>
													{feature}
												</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</div>
					</div>
					{/* For mobile */}
					<div className="w-[100vw] overflow-hidden relative mt-8">
						<div
							className={`relative transition-all duration-700 flex items-stretch justify-between`}
							style={{ width: `${roadmap?.length * 100}%`, marginLeft: `-${(mobileSlider - 1) * 100}%` }}>
							{roadmap?.map((item, index) => (
								<div className="w-full p-4" key={index}>
									<h3 className="opacity-50 font-medium mb-2">{item?.time}</h3>
									<h1 className="text-2xl text-white font-bold mb-6">Phase {index + 1}</h1>
									<ul className="list-disc w-[90%] ml-5 pb-10">
										{item?.features?.map((feature, index) => (
											<li className="w-full text-[18px] mb-[5px]" key={index}>
												{feature}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
				{/* For desktop */}
				<div className="hidden md:block w-1/5">
					<button
						className={`w-12 h-12 border-[1px] border-blue text-blue  ${active === 2 ? "opacity-100 " : "opacity-20"} flex items-center justify-center mb-2 rounded-full`}
						onClick={() => setActive(1)}>
						<MdOutlineKeyboardArrowUp className={`text-3xl`} />
					</button>
					<button
						className={`w-12 h-12 border-[1px] border-blue text-blue ${active === 1 ? "opacity-100 " : "opacity-20"} flex items-center justify-center mb-2 rounded-full`}
						onClick={() => setActive(2)}>
						<MdOutlineKeyboardArrowDown className={`text-3xl`} />
					</button>
				</div>

				{/* For mobile  */}
				<div className="md:hidden mt-6 flex items-center gap-4 justify-center">
					<button
						disabled={mobileSlider == 0}
						className={`w-12 h-12 border-[1px] border-blue text-blue  ${mobileSlider > 1 ? "opacity-100 " : "opacity-20"} flex items-center justify-center mb-2 rounded-full`}
						onClick={() => setMobileSlider((prev) => --prev)}>
						<MdOutlineKeyboardArrowLeft className={`text-3xl`} />
					</button>
					<button
						disabled={mobileSlider == roadmap?.length}
						className={`w-12 h-12 border-[1px] border-blue text-blue ${mobileSlider < roadmap.length ? "opacity-100 " : "opacity-20"} flex items-center justify-center mb-2 rounded-full`}
						onClick={() => setMobileSlider((prev) => ++prev)}>
						<MdOutlineKeyboardArrowRight className={`text-3xl`} />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Roadmap;
