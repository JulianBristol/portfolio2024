import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import "./Header.scss";

const Header = ({}) => {
	

	return (
		<nav className="px-2 xs:px-6 md:px-12 py-4 flex justify-between font-semibold bg-ghost border-poppy border-y-[0.5px] xs:border-y-[2px] md:border-y-[3px] redBorderTransition paddingTransition headerFadeIn">
			<a href="/" id="logo">
				<Image
					className="relative transition-all logoAnimation w-[27px] h-[27px] xs:w-[36px] xs:h-[36px] md:w-[50px] md:h-[50px]"
					src="/logo.svg"
					alt="Julian Bristol Logo"
                    aria-label="home"
                    width={27}
                    height={27}
					priority
				/>
			</a>
			<ul className="text-[12px] xs:text-[16px] md:text-[24px] font-bold flex items-center gap-[6px] xs:gap-2 md:gap-6 transition-all">
				<li className="inline ml-2">
					<a href="#about" className="py-[5px] navOptionInteraction relative">
						<span className="text-[16px] xs:text-[22px] md:text-[32px] leading-[0px] font-semibold lgFontTransition letterA">
							a
						</span>
						BOUT
					</a>
				</li>
				<li className="inline ml-2">
					<a href="#history" className="py-[5px] navOptionInteraction relative">
						<span className="text-[16px] xs:text-[22px] md:text-[32px] leading-[0px] font-semibold lgFontTransition letterH">
							h
						</span>
						ISTORY
					</a>
				</li>
				<li className="inline ml-2">
					<a
						href="#portfolio"
						className="py-[5px] navOptionInteraction relative"
					>
						<span className="text-[16px] xs:text-[22px] md:text-[32px] leading-[0px] font-semibold lgFontTransition letterP">
							p
						</span>
						ORTFOLIO
					</a>
				</li>
				<li className="inline ml-2">
					<a href="#contact" className="py-[5px] navOptionInteraction relative">
						<span className="text-[16px] xs:text-[22px] md:text-[32px] leading-[0px] font-semibold lgFontTransition letterC">
							c
						</span>
						ONTACT
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
