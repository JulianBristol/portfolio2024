import React, { FC } from "react";
import Image from "next/image";

const Header = ({}) => {
	return (
		<nav className="p-4 flex justify-between font-semibold border-poppy border-y-[0.5px] bg-ghost">
			<a href="/">
				<Image
					className="relative "
					src="/logo.svg"
					alt="Next.js Logo"
					width={27}
					height={27}
					priority
				/>
			</a>
			<ul className="text-[12px] font-bold">
				<li className="inline ml-2">
					<a href="#about" className="py-[5px] navOptionInteraction relative">
						<span className="text-[16px] leading-[0px] font-semibold fontTransition">a</span>BOUT
                        <span className='textReflection'>
                            <span className='firstLetter'>a</span>
                            BOUT
                        </span>
					</a>
				</li>
				<li className="inline ml-2">
					<a href="#history" className="py-[5px]">
						<span className="text-[16px] font-semibold">h</span>ISTORY
					</a>
				</li>
				<li className="inline ml-2">
					<a href="#portfolio" className="py-[5px]">
						<span className="text-[16px] font-semibold">p</span>ORTFOLIO
					</a>
				</li>
				<li className="inline ml-2">
					<a href="#contact" className="py-[5px]">
						<span className="text-[16px] font-semibold">c</span>ONTACT
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
