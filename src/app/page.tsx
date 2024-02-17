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

export default function Home() {
	const [isTouchDevice, setIsTouchDevice] = useState(false);
	const [toggleCursor, setToggleCursor] = useState(false);

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

	/* Setup Lenis - Smooth Scroll */
	useEffect(() => {
		const lenis = new Lenis();

		lenis.on("scroll", ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);
	}, []);

	/* Setup AnimeJS */
	useEffect(() => {
		const timeline = anime.timeline({
			duration: 150, //in milliseconds
			easing: "easeOutExpo",
		});
		timeline
			.add({
				/* Adds stroke-width change to the id outerCursorPath based on the toggleCursor useState */
				targets: "#outerCursorPath",
				strokeWidth: [{ value: `${toggleCursor ? "1" : "0.5"}` }],
			})
			.add({
				/* Adds viewbox change to the id cursor-outer based on the toggleCursor useState */
				targets: "#cursor-outer",
				viewBox: [
					{ value: `${toggleCursor ? "-0.5 -0.5 15 15" : "0 0 14 14"}` },
				],
			});
	}, [toggleCursor]);

	/* Use event delegation so that each link and button has the effect */
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const outer = document.getElementById("cursor-outer");

		const handleHover = (event: MouseEvent) => {
			/* Check if user is hovering over a button or link */
			if (event.target) {
				const hoverTarget = (event.target as HTMLElement).closest("button, a");

				/* run function to change cursor if the hoverTarget is true */
				if (hoverTarget) {
					setToggleCursor((prevToggleCursor) => {
						if (outer) {
							outer.style.width = "32px";
							outer.style.height = "32px";
							outer.style.mixBlendMode = "darken";
						}
						return true;
					});
				} else {
					if (toggleCursor) {
						setToggleCursor((prevToggleCursor) => {
							if (outer) {
								outer.style.width = "12px";
								outer.style.height = "12px";
								outer.style.mixBlendMode = "normal";
							}
							return false;
						});
					}
				}
			}
		};

		// Attach the event listener to the container
		const container = containerRef.current;
		if (container) {
			container.addEventListener("mouseover", handleHover);
		}

		// Cleanup: remove the event listener when the component is unmounted
		return () => {
			if (container) {
				container.removeEventListener("mouseover", handleHover);
			}
		};
	}, [toggleCursor]);

	/* Initial check if user is using a touch device */
	useEffect(() => {
		const checkTouchDevice = () => {
			setIsTouchDevice(
				"ontouchstart" in window ||
					navigator.maxTouchPoints > 0 ||
					navigator.maxTouchPoints > 0
			);
		};

		// Initial check when component mounts
		checkTouchDevice();

		// Check for touch device on resize
		window.addEventListener("resize", checkTouchDevice);

		// Unmount
		return () => {
			window.removeEventListener("resize", checkTouchDevice);
		};
	}, []);

	/* mouse chaser */
	useEffect(() => {
		const inner = document.getElementById("cursor-inner");
		const outer = document.getElementById("cursor-outer");

		if (inner && outer && !isTouchDevice) {
			const opacity = inner.style.opacity == "1" && outer.style.opacity == "1";

			let innerX = 0,
				innerY = 0,
				outerX = 0,
				outerY = 0,
				offsetX = 0,
				offsetY = 0;

			document.addEventListener("scroll", (e) => {
				offsetX = window.scrollX;
				offsetY = window.scrollY;
				inner.style.top = `${innerY + offsetY}px`;
				inner.style.left = `${innerX + offsetX}px`;
				if (!opacity) {
					inner.style.opacity = outer.style.opacity = "1";
				}
			});

			document.addEventListener("mousemove", (e) => {
				innerX = e.clientX;
				innerY = e.clientY;
				offsetX = window.scrollX;
				offsetY = window.scrollY;
				inner.style.top = `${innerY + offsetY}px`;
				inner.style.left = `${innerX + offsetX}px`;
				if (!opacity) {
					inner.style.opacity = outer.style.opacity = "1";
				}
			});

			document.body.addEventListener("mousedown", function () {
				setToggleCursor((prevToggleCursor) => {
					if (outer) {
						outer.style.width = "32px";
						outer.style.height = "32px";
						outer.style.mixBlendMode = "darken";
					}
					return true;
				});
			});

			document.body.addEventListener("mouseup", function () {
				setToggleCursor((prevToggleCursor) => {
					if (outer) {
						outer.style.width = "12px";
						outer.style.height = "12px";
						outer.style.mixBlendMode = "normal";
					}
					return true;
				});
			});

			const outerAnimation = () => {
				const parts = 6;
				outerX += (innerX - outerX + offsetX) / parts;
				outerY += (innerY - outerY + offsetY) / parts;
				outer.style.top = `${outerY}px`;
				outer.style.left = `${outerX}px`;
				window.requestAnimationFrame(outerAnimation);
			};
			window.requestAnimationFrame(outerAnimation);
		}
	}, [isTouchDevice]);

	return (
		<div
			className="bg-creme h-full min-h-[100vh] focus:ring-poppy text-ash font-medium"
			ref={containerRef}
		>
			{/* On desktop device */}
			{!isTouchDevice && (
				<div>
					<svg
						id="cursor-outer"
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							id="outerCursorPath"
							d="M13.75 7C13.75 10.7279 10.7279 13.75 7 13.75C3.27208 13.75 0.25 10.7279 0.25 7C0.25 3.27208 3.27208 0.25 7 0.25C10.7279 0.25 13.75 3.27208 13.75 7Z"
							fill="#D0D9C9"
							fillOpacity="0.55"
							stroke="#246036"
							strokeWidth="0.5"
						/>
					</svg>
					<Image id="cursor-inner" src={innerCircle} alt="" />
				</div>
			)}

			<div className="bg-creme bgCubes h-full min-h-[100vh]">
				<div className="mx-2 py-2 border-x-poppy border-y-transparent h-full min-h-[100vh] border-[0.5px] xs:border-[2px] md:border-[3px] redBorderTransition">
					<header>
						<Header />
					</header>
					<main>
						{/* hero section */}
						<section className="mb-20">
							<Hero />
						</section>

						{/* Let's make something magical */}
						<section>
							<LetsMakeSomethingMagical />
						</section>

						{/* about me section */}
						<section id="about" className="mt-[16vh]">
							<About />
						</section>

						{/* history section */}
						<section id="history">{/* h2 - History */}</section>

						<section id="tech">
							{/* technologies that I am skilled in section */}
							{/* h2 - Technologies */}
							<div className="my-[999px]" />
						</section>

						<section id="portfolio">
							{/* Portfolio items that I have created section */}
							{/* h2 - Portfolio */}
						</section>

						<section id="contact">
							{/* contact julian form section
            ps. don't forget the accessibility requirements for form elements
            */}
							{/* h2 - Contact me */}
						</section>
					</main>
					<footer>{/* if I have  one... */}</footer>
				</div>
			</div>
		</div>
	);
}
