"use client";
import Image from "next/image";
import React, { FC, useEffect } from "react";
import bokeh from "../../assets/BokehBGProfile.webp";
import profileImg from "../../assets/JulianBristol.webp";
import github from "../../assets/github.svg";
import leetcode from "../../assets/leetcode.svg";
import portfolio from "../../assets/portfolio.svg";
import linkedIn from "../../assets/linkedIn.svg";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
	/**
	 * todo: allow words to change, move word scramble into its own function, set up a timer for the cursor blink
	  */
	const myTitles = [
		"DEVELOPER" /* , 'DESIGNER', 'SCIENTIST', 'STUDENT', 'TEACHER' */,
	];
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?";

	useEffect(() => {
		const title = document.getElementById("titles");
		if (title) {
			title.onmouseover = (event: MouseEvent) => {
				let iterations = 0;

				const interval = setInterval(() => {
					if (event && event.target) {
						const target = event.target as HTMLElement;
						if (target.dataset.value) {
							const value = target.dataset.value;
							target.innerText = target.innerText
							  .split("")
							  .map((character, index) => {
								if (index < iterations && value) {
								  return value[index];
								}
								return characters[Math.floor(Math.random() * 35)];
							  })
							  .join("");

							if (iterations >= target.dataset.value.length) clearInterval(interval);
							iterations += 1/3;
					}
						  }
				}, 30);
			};
		}
	}, []);

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
					<div className="rounded-[50px] w-[120%] h-[250px] max-h-[250px] my-auto relative overflow-hidden border-ghost border-[1.5px] shadow-md shadow-shadow-25">
						<Image
							src={bokeh}
							alt="Personal Image background"
							priority
							fill
							sizes="(max-width: 320px) 45vw, 60vw"
							className="object-cover"
						/>
						<Image
							src={profileImg}
							alt="Image of Julian Bristol"
							priority
							fill
							sizes="(max-width: 320px) 45vw, 60vw"
							className="object-contain !top-5 scale-150"
						/>
					</div>

					{/* links */}
					<section className="text-[12px] w-full max-w-[150px]">
						<section className="flex flex-col">
							<p>Learn more</p>
							<a
								href="#about"
								className="bg-morocco px-2 py-[2px] rounded-md w-fit self-end transition active:btnClick hover:bg-gradient-to-b hover:from-marigold hover:to-morocco focus:bg-gradient-to-b focus:from-marigold focus:to-morocco"
							>
								About Me
							</a>
							<hr className="text-smoke my-2 w-[50%] self-center" />
						</section>
						<section className="flex flex-col">
							<div className="flex flex-row justify-around mb-[2px]">
								<p>I am a... </p>
								<span className="text-[12px] text-hope-500 leading-[18px] font-mono hover:cursor-pointer">
									<span id="titles" data-value={myTitles}>{myTitles}</span>
									|
								</span>
							</div>
							<a
								href="#history"
								className="bg-morocco px-2 py-[2px] rounded-md w-fit self-end transition active:btnClick hover:bg-gradient-to-b hover:from-marigold hover:to-morocco focus:bg-gradient-to-b focus:from-marigold focus:to-morocco"
							>
								History
							</a>
							<hr className="text-smoke my-2 w-[50%] self-center" />
						</section>
						<section className="flex flex-col">
							<p>Check out my</p>
							<a
								href="#portfolio"
								className="bg-morocco px-2 py-[2px] rounded-md w-fit self-end transition active:btnClick hover:bg-gradient-to-b hover:from-marigold hover:to-morocco focus:bg-gradient-to-b focus:from-marigold focus:to-morocco"
							>
								Portfolio
							</a>
							<hr className="text-smoke my-2 w-[50%] self-center" />
						</section>
						<section className="flex flex-col">
							<p>You can also</p>
							<a
								href="#contact"
								className="bg-morocco px-2 py-[2px] rounded-md w-fit self-end transition active:btnClick hover:bg-gradient-to-b hover:from-marigold hover:to-morocco focus:bg-gradient-to-b focus:from-marigold focus:to-morocco"
							>
								Contact Me
							</a>
						</section>
					</section>
				</div>

				{/* Social Links */}
				<section className="mx-4 my-4">
					<ol className="flex flex-row justify-evenly text-[12px] text-hope-500">
						<li>
							<figure>
								<a
									href="https://github.com/JulianBristol"
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-col items-center"
								>
									<Image
										src={github}
										alt="Github Icon"
										aria-label="Julian's Github Account"
										width={27}
										height={27}
										priority
									/>
									<figcaption>Github</figcaption>
								</a>
							</figure>
						</li>
						<li>
							<figure>
								<a
									href="https://leetcode.com/BristolJ/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-col items-center"
								>
									<Image
										src={leetcode}
										alt="Leetcode icon"
										aria-label="Julian's Leetcode Account"
										width={27}
										height={27}
										priority
									/>
									<figcaption>Leetcode</figcaption>
								</a>
							</figure>
						</li>
						<li>
							<figure>
								<a
									href="/resume.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-col items-center"
								>
									<Image
										src={portfolio}
										alt="Portfolio Icon"
										aria-label="See Julian's résumé"
										width={27}
										height={27}
										priority
									/>
									<figcaption>Résumé</figcaption>
								</a>
							</figure>
						</li>
						<li>
							<figure>
								<a
									href="https://www.linkedin.com/in/julianbristol/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-col items-center"
								>
									<Image
										src={linkedIn}
										alt="LinkIn Icon"
										aria-label="Julian's LinkedIn Account"
										width={27}
										height={27}
										priority
									/>
									<figcaption>LinkedIn</figcaption>
								</a>
							</figure>
						</li>
					</ol>
				</section>
			</div>
		</>
	);
};

export default Hero;
