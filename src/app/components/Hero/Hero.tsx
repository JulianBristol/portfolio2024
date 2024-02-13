"use client";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import bokeh from "../../assets/BokehBGProfile.webp";
import profileImg from "../../assets/JulianBristol.webp";
import github from "../../assets/github.svg";
import leetcode from "../../assets/leetcode.svg";
import portfolio from "../../assets/portfolio.svg";
import linkedIn from "../../assets/linkedIn.svg";
import "./Hero.scss";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
	const [currentTitle, setCurrentTitle] = useState<number>(0);

	const myTitles = [
		"DEVELOPER",
		"DESIGNER",
		"SCIENTIST",
		"STUDENT",
		"READER",
		"TEACHER",
		"ENGINEER",
		"ARTIST",
		"WRITER",
	];
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?";

	useEffect(() => {
		// Get the element with the id "titles"
		const title = document.getElementById("titles");

		// Function to refresh titles on mouseover or click event
		const refreshTitles = (event: MouseEvent) => {
			let iterations = 0;

			// Set interval to modify the text gradually
			const interval = setInterval(() => {
				if (event && event.target) {
					const target = event.target as HTMLElement;
					if (target.dataset.value) {
						const value = target.dataset.value;

						// Modify text character by character
						target.innerText = target.innerText
							.split("")
							.map((character, index) => {
								if (index < iterations && value) {
									return value[index];
								}
								return characters[Math.floor(Math.random() * 35)];
							})
							.join("");

						// Clear interval when iterations reach the length of dataset.value
						if (iterations >= target.dataset.value.length)
							clearInterval(interval);
						iterations += 1 / 3;
					}
				}
			}, 30);
		};

		// Attach event listeners if the title element exists
		if (title) {
			// Refresh titles on mouseover
			title.onmouseover = (event: MouseEvent) => {
				refreshTitles(event);
			};

			// Refresh titles on click
			title.onclick = (event: MouseEvent) => {
				refreshTitles(event);
			};
		}
	}, []);

	return (
		<>
		<section className="text-[18px] sm:text-[24px] lg:text-[32px] xl:text-[38px] 2xl:text-[48px] leading-5 sm:leading-tight textTransition">
			<h1 className=" my-4 text-center mx-6">
				Hey, it&apos;s me, <br />
				<span className="text-[24px] sm:text-[32px] lg:text-[38px] xl:text-[48px] 2xl:text-[58px] textTransition">Julian Bristol</span>
			</h1>
			<p className="mt-4 mx-6">
				I really enjoy turning ideas into reality. I have a passion for learning
				new skills and applying them in interesting projects.
			</p>
			</section>

			{/* Mobile View */}
			<div className="xs:hidden flex justify-center flex-col my-4">
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
								<span
									className="text-[12px] text-hope-500 leading-[18px] font-mono hover:cursor-pointer"
									onClick={() => {
										if (currentTitle >= myTitles.length - 1) {
											setCurrentTitle(0);
										} else {
											setCurrentTitle(currentTitle + 1);
										}
									}}
								>
									<span id="titles" data-value={myTitles[currentTitle]}>
										{myTitles[currentTitle]}
									</span>
									<span className="blinking">|</span>
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
				<section className="mx-4 my-2">
					<ol className="flex flex-row justify-evenly text-[12px] text-hope-500">
						<li>
							<figure>
								<a
									href="https://github.com/JulianBristol"
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-col items-center group"
								>
									<div className="transition-all p-[2px] bg-transparent border-transparent group-hover:bg-hope-100 group-hover:border-hope-500 border-[1px] rounded-md">
										<Image
											className="mix-blend-multiply"
											src={github}
											alt="Github Icon"
											aria-label="Julian's Github Account"
											width={27}
											height={27}
											priority
										/>
									</div>
									<div className="relative">
										<figcaption className="group-hover:font-bold transition-all absolute left-[50%] translate-x-[-50%]">
											Github
										</figcaption>
									</div>
								</a>
							</figure>
						</li>
						<li>
							<figure>
								<a
									href="https://leetcode.com/BristolJ/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-col items-center group"
								>
									<div className="transition-all p-[2px] bg-transparent border-transparent group-hover:bg-hope-100 group-hover:border-hope-500 border-[1px] rounded-md">
										<Image
											className="mix-blend-multiply"
											src={leetcode}
											alt="Leetcode icon"
											aria-label="Julian's Leetcode Account"
											width={27}
											height={27}
											priority
										/>
									</div>
									<div className="relative">
										<figcaption className="group-hover:font-bold transition-all absolute left-[50%] translate-x-[-50%]">
											Leetcode
										</figcaption>
									</div>
								</a>
							</figure>
						</li>
						<li>
							<figure>
								<a
									href="/resume.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-col items-center group"
								>
									<div className="transition-all p-[2px] bg-transparent border-transparent group-hover:bg-hope-100 group-hover:border-hope-500 border-[1px] rounded-md">
										<Image
											className="mix-blend-multiply"
											src={portfolio}
											alt="Portfolio Icon"
											aria-label="See Julian's résumé"
											width={27}
											height={27}
											priority
										/>
									</div>
									<div className="relative">
										<figcaption className="group-hover:font-bold transition-all absolute left-[50%] translate-x-[-50%]">
											Résumé
										</figcaption>
									</div>
								</a>
							</figure>
						</li>
						<li>
							<figure>
								<a
									href="https://www.linkedin.com/in/julianbristol/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-col items-center group"
								>
									<div className="transition-all p-[2px] bg-transparent border-transparent group-hover:bg-hope-100 group-hover:border-hope-500 border-[1px] rounded-md">
										<Image
											className="mix-blend-multiply"
											src={linkedIn}
											alt="LinkIn Icon"
											aria-label="Julian's LinkedIn Account"
											width={27}
											height={27}
											priority
										/>
									</div>
									<div className="relative">
										<figcaption className="group-hover:font-bold transition-all absolute left-[50%] translate-x-[-50%]">
											LinkedIn
										</figcaption>
									</div>
								</a>
							</figure>
						</li>
					</ol>
				</section>
			</div>
			
			{/* Desktop View */}
			<div className="hidden xs:flex flex-row justify-center mx-4 mt-12 sm:text-[24px] lg:text-[32px] xl:text-[38px] 2xl:text-[48px] textTransition">
				<section className="flex flex-col flex-1 mx-4">
					<section className="flex flex-col">
						<p>Learn more</p>
						<a
							href="#about"
							className="bg-morocco mt-4 mb-2 p-2 py-[2px] lg:py-2 rounded-md w-fit self-center transition active:btnClick hover:bg-gradient-to-b hover:from-marigold hover:to-morocco focus:bg-gradient-to-b focus:from-marigold focus:to-morocco"
						>
							About Me
						</a>
						<hr className="text-smoke my-2 w-[75%] self-center" />
					</section>
					<section className="flex flex-col mt-4 mb-6">
						<p>Check out my</p>
						<a
							href="#portfolio"
							className="bg-morocco my-4  px-2 py-[2px] rounded-md w-fit self-end transition active:btnClick hover:bg-gradient-to-b hover:from-marigold hover:to-morocco focus:bg-gradient-to-b focus:from-marigold focus:to-morocco"
						>
							Portfolio
						</a>
					</section>
					<section className="mx-4 my-2">
					<ol className="flex flex-row justify-evenly text-hope-500 gap-5">
						<li className="w-full">
							<figure className="flex justify-center">
								<a
									href="https://github.com/JulianBristol"
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-col items-center group w-[50%]"
								>
									<div className="transition-all p-[2px] bg-transparent border-transparent group-hover:bg-hope-100 group-hover:border-hope-500 border-[1px] rounded-md w-full">
										<Image
											className="mix-blend-multiply w-full"
											src={github}
											alt="Github Icon"
											aria-label="Julian's Github Account"
											priority
										/>
									</div>
									<div className="relative">
										<figcaption className="group-hover:font-bold transition-all absolute left-[50%] translate-x-[-50%]">
											Github
										</figcaption>
									</div>
								</a>
							</figure>
						</li>
						<li className="w-full">
							<figure className="flex justify-center">
								<a
									href="https://leetcode.com/BristolJ/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-col items-center group w-[50%]"
								>
									<div className="transition-all p-[2px] bg-transparent border-transparent group-hover:bg-hope-100 group-hover:border-hope-500 border-[1px] rounded-md w-full">
										<Image
											className="mix-blend-multiply w-full"
											src={leetcode}
											alt="Leetcode icon"
											aria-label="Julian's Leetcode Account"
											width={27}
											height={27}
											priority
										/>
									</div>
									<div className="relative">
										<figcaption className="group-hover:font-bold transition-all absolute left-[50%] translate-x-[-50%]">
											Leetcode
										</figcaption>
									</div>
								</a>
							</figure>
						</li>
						</ol>

					</section>
				</section>
				<div className="flex-1 bg-hope-500">1</div>
				<div className="flex-1 bg-shadow-25">1</div>
			</div>
		</>
	);
};

export default Hero;
