import Image from "next/image";
import React, { FC } from "react";
import bokeh from "../../assets/BokehBGProfile.webp";
import profileImg from "../../assets/JulianBristol.webp";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
	return (
		<>
			<div className="xs:hidden flex justify-center flex-col my-4">
				<h1 className="text-[18px] xs:hidden text-center mx-6">
					Hey, it&apos;s me, <br />
					<span className="text-[24px]">Julian Bristol</span>
				</h1>
				<p className="mt-4 mx-6">
					I really enjoy turning ideas into reality. I have a passion for
					learning new skills and applying them in interesting projects.
				</p>

				<div className="flex flex-row mt-6 mx-2 mb-4 gap-4">
					{/* image */}
					<div className="rounded-[50px] w-[120%] relative overflow-hidden border-ghost border-[1.5px] shadow-md shadow-shadow-25">
						<Image
							src={bokeh}
							alt="Personal Image background"
							fill
							objectFit="cover"
						/>
						<Image
							src={profileImg}
							alt="Image of Julian Bristol"
							fill
							objectFit="cover"
							className="!left-2 !top-2 scale-110"
						/>
					</div>

					{/* links */}
					<section className="text-[12px] w-full">
						<section className="flex flex-col">
							<p>Learn more</p>
							<button className="bg-morocco px-2 py-[2px] rounded-md w-fit self-end transition active:btnClick hover:bg-gradient-to-b hover:from-marigold hover:to-morocco focus:bg-gradient-to-b focus:from-marigold focus:to-morocco">
								About Me
							</button>
							<hr className="text-smoke my-2 w-[50%] self-center" />
						</section>
						<section className="flex flex-col">
							<div className="flex flex-row justify-around mb-[2px]">
								<p>I am a... </p>
								<span className="text-[16px] text-hope-500 leading-[18px] hover:cursor-pointer">
									Developer |
								</span>
							</div>
							<button className="bg-morocco px-2 py-[2px] rounded-md w-fit self-end transition active:btnClick hover:bg-gradient-to-b hover:from-marigold hover:to-morocco focus:bg-gradient-to-b focus:from-marigold focus:to-morocco">
								History
							</button>
							<hr className="text-smoke my-2 w-[50%] self-center" />
						</section>
						<section className="flex flex-col">
							<p>Check out my</p>
							<button className="bg-morocco px-2 py-[2px] rounded-md w-fit self-end transition active:btnClick hover:bg-gradient-to-b hover:from-marigold hover:to-morocco focus:bg-gradient-to-b focus:from-marigold focus:to-morocco">
								Portfolio
							</button>
							<hr className="text-smoke my-2 w-[50%] self-center" />
						</section>
						<section className="flex flex-col">
							<p>You can also</p>
							<button className="bg-morocco px-2 py-[2px] rounded-md w-fit self-end transition active:btnClick hover:bg-gradient-to-b hover:from-marigold hover:to-morocco focus:bg-gradient-to-b focus:from-marigold focus:to-morocco">
								Contact Me
							</button>
						</section>
					</section>
				</div>

				{/* Social Links */}
				<section className="mx-4 my-4">
					<ol className="flex flex-row justify-between">
						<li>link1</li>
						<li>link2</li>
						<li>link3</li>
						<li>link4</li>
					</ol>
				</section>
			</div>
		</>
	);
};

export default Hero;
