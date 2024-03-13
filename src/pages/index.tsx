import Image from "next/image";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Claim from "@/components/Claim";
import Presale from "@/components/Presale";
import Tokenomics from "@/components/Tokenomics";
import Partners from "@/components/Partners";

import WorksImage from "@/assets/works.jpg";

export default function Home() {
	return (
		<main className={`bg-bg w-full min-h-screen`}>
			<Header />
			<Hero />

			<section className="w-full h-auto py-24">
				<div className="w-full max-w-4xl mx-auto gap-6 flex items-center justify-between">
					<div className="w-1/2">
						<h3 className="text-2xl mb-6">How Does AEVO Work?</h3>
						<p className="leading-[30px]">
							Aevo is built on a custom L2 based on the OP stack, enabling high throughput and performance while inheriting the security of Ethereum. The ecosystem of Aevo products
							provides everything any trader needs. Trade options, perps, yield and structured products in a single place. Since its inception in 2020, Aevo has processed over $10
							billion of options trading volume and built up a reputation for trust and security. The Aevo team comes from companies such as Coinbase, Kraken and Goldman Sachs, and
							institutions such as Stanford, MIT and Cornell.
						</p>

						<button className="flex bg-blue rounded-full py-4 px-12 mt-8">
							<p className="text-white text-sm font-bold">Whitepaper</p>
						</button>
					</div>
					<div className="w-[40%] h-[350px] relative bg-[black]">
						<Image src={WorksImage} fill alt="Works"></Image>
					</div>
				</div>
			</section>

			<Claim />

			<Presale />

			<Tokenomics />
			<Partners />
		</main>
	);
}
