import React, { FC, useEffect } from "react";
import { Technologies } from "@/types/index";
import { technologies } from "../../constants/index";
import VanillaTilt from "vanilla-tilt";
import "./Technologies.scss";
import Image from "next/image";

interface TechnologiesProps {}

interface TechCardProps {
	technology: Technologies;
}

const TechCard: FC<TechCardProps> = ({ technology }) => {
	return (
		<div
						className="tilt techBadge w-[130px] md:w-[200px] rounded-2xl border-2 border-hope-500 bg-creme p-4">
						<div className="h-full flex flex-col">
							<Image
								src={technology.icon}
								alt={technology.name}
								className="w-full hidden sm:block"

							/>
							<p className="text-hope-500 text-center sm:mt-2 text-[16px] sm:text-[16px] md:text-[24px] font-bold">{technology.name}</p>
						</div>
					</div>
	)
}

const Technologies: FC<TechnologiesProps> = ({}) => {
	useEffect(() => {
		const tiltElements = document.querySelectorAll(".tilt");
		VanillaTilt.init(Array.from(tiltElements) as HTMLElement[], {
			max: 10,
			speed: 10,
			glare: true,
			"max-glare": 0.65,
		});
	}, []);

	return (
		<>
			<h2 className="mb-4 text-hope-500 text-center text-[48px] sm:text-[56px] lg:text-[64px] xl:text-[72px] 2xl:text-[84px] textTransition">
				Technologies
			</h2>
			<section className="flex flex-wrap gap-5 sm:gap-10 justify-center">
				{technologies.map((technology, key) => (
					<TechCard technology={technology} key={key} />
				))}
			</section>
		</>
	);
};

export default Technologies;
