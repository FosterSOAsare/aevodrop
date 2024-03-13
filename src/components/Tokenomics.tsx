import React from "react";
import { PieChart, Pie, Tooltip, Cell, Text, Label } from "recharts";
import { ResponsiveContainer } from "recharts";

import tokenomics from "@/data/tokenomics";

const Tokenomics = () => {
	return (
		<section className="py-20 md:py-36 relative bg-[#191B28] px-4" id="tokenomics">
			<div className="absolute top-0 left-0 w-full h-full opacity-[0.08] z-[1] layout-sphere"></div>
			<div className="w-full max-w-5xl relative mx-auto z-[2] flex flex-col items-center justify-center opacity-[1]">
				<h3 className="text-3xl font-medium mb-6">AEVO Tokenomics</h3>
				<p className="text-center w-full md:w-[70%] text-lg">A total of 1,000,000,000 AEVO tokens that will be distributed. Here's a breakdown of the AEVO token:</p>
				<div className="flex flex-col md:flex-row w-full justify-center gap-4 mt-8 items-center">
					{/* Donut */}
					<div className="w-full md:w-[40%] lg:w-[30%] h-96">
						<div className="w-auto h-full relative flex items-center justify-center">
							<ResponsiveContainer width="100%" height="100%">
								<PieChart className="w-full h-full">
									<Pie data={tokenomics} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={100} outerRadius={130} strokeWidth={0} labelLine={false}>
										{tokenomics.map((entry, index) => (
											<Cell key={`cell-${index}`} fill={entry?.color} />
										))}

										<Label value={`Total Token Supply`} fontSize="16px" fontWeight={700} style={{ lineHeight: 2 }} fill="#5B7FEC" dy={-30} position="center" />
										<Label value={`1,000,000,000`} textAnchor="middle" fontSize="16px" fontWeight={700} style={{ lineHeight: 2 }} fill="#5B7FEC" dy={0} position="center" />
										<Label value={`AEVO`} textAnchor="middle" fontSize="16px" fontWeight={700} style={{ lineHeight: 2 }} fill="#5B7FEC" dy={30} position="center" />
									</Pie>

									<Pie data={[{ value: 1 }]} dataKey={"value"} cx="50%" cy="50%" innerRadius={130} outerRadius={140} fill="#141622" strokeWidth={0} />

									<Tooltip
										contentStyle={{
											backgroundColor: "#000",
											border: "1px solid #000000",
											borderRadius: "5px",
											padding: "5px",
											paddingInline: "20px",
											borderBottomRightRadius: "25px",
											borderTopLeftRadius: "25px",
											borderTopRightRadius: "25px",
											borderBottomLeftRadius: "25px",
										}}
										formatter={(value) => {
											return `${value}%`;
										}}
										labelStyle={{ fontWeight: "bold", color: "#000000" }}
										itemStyle={{ color: "#ffffff" }}
									/>
								</PieChart>
							</ResponsiveContainer>
							{/* <div className="w-40 h-40 border-8 border-[#141622] absolute rounded-full top-0 left-0 right-0 bottom-0 m-auto -z-[1] "></div> */}
						</div>
					</div>
					<div className="w-full md:w-[40%] lg:w-[30%] h-auto">
						{tokenomics?.map((token, index) => (
							<div className="flex items-center justify-between mb-3">
								<div className="flex items-center gap-2">
									<span className="block w-4 h-4 rounded-full" style={{ backgroundColor: token?.color }}></span>
									<p className="font-medium">{token?.name}</p>
								</div>
								<p>{token?.value}%</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tokenomics;
