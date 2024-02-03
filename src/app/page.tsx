"use client";
import Image from "next/image";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";

export default function Home() {

  /* Initial check if user is using a touch device */
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0);
    };

    // Initial check when component mounts
    checkTouchDevice();

    // Check for touch device on resize
    window.addEventListener('resize', checkTouchDevice);

    // Unmount
    return () => {
      window.removeEventListener('resize', checkTouchDevice);
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
				outerY = 0;
			document.addEventListener("mousemove", (e) => {
				innerX = e.clientX;
				innerY = e.clientY;
				inner.style.top = `${innerY}px`;
				inner.style.left = `${innerX}px`;
				if (!opacity) {
					inner.style.opacity = outer.style.opacity = "1";
				}
			});

  document.body.addEventListener('mousedown', function() {
    inner.style.width = '18px';
    inner.style.height = '18px';
    outer.style.width = '48px';
    outer.style.height = '48px';
  });
  
  document.body.addEventListener('mouseup', function() {
    inner.style.width = '12px';
    inner.style.height = '12px';
    outer.style.width = '32px';
    outer.style.height = '32px';
  });

			const outerAnimation = () => {
				const parts = 6;
				outerX += (innerX - outerX) / parts;
				outerY += (innerY - outerY) / parts;
				outer.style.top = `${outerY}px`;
				outer.style.left = `${outerX}px`;
				window.requestAnimationFrame(outerAnimation);
			};
			window.requestAnimationFrame(outerAnimation);
		}
	});

  

	return (
		<div className="bg-creme h-full min-h-[100vh] focus:ring-poppy">
      
      {/* On desktop device */}
      {!isTouchDevice && (
        <div>
			<div id="cursor-outer" />
			<div id="cursor-inner" />
        </div>)}

			<div className="bg-creme bgCubes h-full min-h-[100vh]">
				<header className="text-ash mx-2 py-2 border-x-poppy border-y-transparent border-[0.5px] h-full min-h-[100vh]">
					<Header />
				</header>
			</div>
		</div>
	);
}
