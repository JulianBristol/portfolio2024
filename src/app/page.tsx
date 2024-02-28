"use client";
import anime from "animejs";
import Image from "next/image";
import Header from "./components/Header/Header";
import { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero/Hero";
import innerCircle from "./assets/innerCircle.svg";
import LetsMakeSomethingMagical from "./components/LetsMakeSomethingMagical/LetsMakeSomethingMagical";
import About from "./components/About/About";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import History from "./components/History/History";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";

export default function Home() {
	/* TODO: 
	* consider making another screen break for smaller than 320px for the hero section
	consider adding a onClick for the technology badges
	*/
	const [lastScroll, setLastScroll] = useState(0);
	const [isLenisActive, setIsLenisActive] = useState(true);

	/* Add Smooth Scrolling to links */
	useEffect(() => {
		document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
			const anchorElement = anchor as HTMLAnchorElement;

			anchorElement.addEventListener("click", (e: Event) => {
				e.preventDefault();

				const href = anchorElement.getAttribute("href");

				if (href) {
					const targetId = href.substring(1);
					const targetElement = document.getElementById(targetId);

					if (targetElement) {
						targetElement.scrollIntoView({
							behavior: "smooth",
						});
					}
				}
			});
		});
	}, []);

	useEffect(() => {
		const lenis = new Lenis();

		const handleLenisScroll = (time: number) => {
			if (isLenisActive) {
				lenis.raf(time * 1000);
				ScrollTrigger.update();
			}
		};

		gsap.ticker.add(handleLenisScroll);

		gsap.ticker.lagSmoothing(0);

		return () => {
			gsap.ticker.remove(handleLenisScroll);
		};
	}, [isLenisActive]);

	const toggleLenisScroll = (bool: boolean) => {
		setIsLenisActive(bool);
	};

	/* Toggle Lenis when User Clicks Links */
	useEffect(() => {
		const links = document.querySelectorAll("a");

		links.forEach((link) => {
			link.addEventListener("click", (e) => {
				toggleLenisScroll(false);
				setTimeout(() => {
					toggleLenisScroll(true);
				});
			});
		});
	}, []);

	/* Handle Header Display on Scroll Up */
	useEffect(() => {
		document.addEventListener("scroll", (e) => {
			const scrollPos = window.scrollY;
			setLastScroll((prev) => {
				const header = document.getElementById("header");

				if (scrollPos <= 60) {
					header?.classList.remove("scroll-down");
					header?.classList.add("scroll-up");
				}

				if (
					scrollPos > prev &&
					!header?.classList.contains("scroll-down") &&
					scrollPos > 60
				) {
					header?.classList.remove("scroll-up");
					header?.classList.add("scroll-down");
				}

				if (scrollPos < prev && header?.classList.contains("scroll-down")) {
					header?.classList.remove("scroll-down");
					header?.classList.add("scroll-up");
				}
				return scrollPos;
			});
		});
	}, []);

	return (
		<div>
			<div className="bg-creme h-full min-h-[100vh] focus:ring-poppy text-ash font-medium">
				<div className="bg-creme bgCubes h-full min-h-[100vh] px-2">
					<div className="mx-2 sm:mx-auto py-2 border-x-poppy border-y-transparent h-full min-h-[100vh] border-[0.5px] xs:border-[2px] md:border-[3px] redBorderTransition max-w-[1500px]">
						<header
							id="header"
							className="scroll-up sticky top-[0px] w-full z-50 transition-all"
						>
							<div className="w-full h-[15px] bg-creme"/>
							<Header />
						</header>
						<main className="mt-[80px] xs:mt-[90px] md:mt-[110px]">
							{/* hero section */}
							<section className="mb-20">
								<Hero />
							</section>

							{/* Let's make something magical */}
							<section className="mx-12">
								<LetsMakeSomethingMagical />
							</section>

							{/* about me section */}
							<section id="about" className="mt-[16vh]">
								<About toggleLenisScroll={toggleLenisScroll} />
							</section>

							{/* history section */}
							<section
								id="history"
								className="mt-[160px] md:mt-[180px] lg:mt-[220px]"
							>
								<History />
							</section>

							{/* Technologies section */}
							<section
								id="tech"
								className="mt-[40px] md:mt-[60px] lg:mt-[80px] mx-4 md:mx-6"
							>
								<Technologies />
							</section>

							{/* Portfolio items  */}
							<section
								id="portfolio"
								className="mt-[40px] md:mt-[60px] lg:mt-[80px] mx-2 md:mx-4 mb-20"
							>
								<Portfolio />
							</section>
						</main>
					</div>
				</div>
			</div>
			<div className="fadeB4Contact w-full h-[20px] absolute mt-[-20px]" />
			<section id="contact">
				<Contact />
			</section>
		</div>
	);
}
