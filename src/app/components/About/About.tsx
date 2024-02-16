import React, { FC, useEffect } from "react";
import "./About.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
    /* Todo: bugfix. Saw and issue with where the extention originates from after switching form small mobile to large screen */
	/* Setup GSAP */
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

        /* Circle Distortion Timeline */
		let maskTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".gsapMarkerA",
                start: 'clamp(top bottom-=10%)',
                end: '+=40%',
				scrub: true,
				pin: false,
				toggleActions: "play none none reverse",
			},
		});

        /* Name Expansion Timeline */
		let nameTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".gsapMarkerA",
                start: 'clamp(top bottom-=10%)',
                end: '+=40%',
				scrub: true,
				pin: false,
				toggleActions: "play none none reverse",
			},
		});

        /* Expands and Contracts the circle mask */
		maskTl.fromTo(".displacement", {
            attr: {
				r: "0%",
			},
        },{
			attr: {
				r: "100%",
			},
			duration: 2,
		});

        /* Expands and Constracts the Name section */
		nameTl.set(".expandingText", {
			width: "0px",
			height: "0px",
		});
		nameTl.to(".expandingText", {
			width: "150%",
			height: "200%",
			duration: 2,
		});
    }, [])

	return (
		<div className="relative px-2 sm:px-4 lg:px-8">
            <div className="max-h-[80vh]">
                <svg
                height="80vh"
                width="100%"
				className="my-[10vh]"
				viewBox="0 0 896 1000"
				preserveAspectRatio="xMidYMin slice"
			>
				<defs>
                    {/* Distortion effect */}
					<filter id="displacementFilter">
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.03"
							numOctaves="3"
							result="noise"
						/>
						<feDisplacementMap
							in="SourceGraphic"
							in2="noise"
							scale="50"
							xChannelSelector="R"
							yChannelSelector="G"
						/>
					</filter>
                    {/* Circle mask that receives the distortion */}
					<mask id="circleMask">
						<circle
                        id="maskContent"
							cx="50%"
							cy="50%"
							r="0"
							data-value-final="820"
							fill="white"
							className="displacement"
						/>
					</mask>
				</defs>
                {/* Content within the SVG that is hidden by the distortion mask */}
				<foreignObject
					x="0"
					y="0"
					width="100%"
					height="100%"
					mask="url(#circleMask)"
				>
					<div className="bg-poppy h-full text-[24px]">
                        <p>Hey, Julian here!</p>
                        <p>As you can see, I really enjoy turning ideas into reality. My interest in web development started all the way back in 2006 where I was first introduced to MySpace&apos;s custom layouts. At the time, I didn&apos;t know what I was doing or even that I was using HTML and CSS. All I knew was &quot;this thingie does that thing &quot; 🤷🏿‍♂️<span>-Amazing, I know!</span></p>
                        <p>I think my time playing around in MySpace paid off. It seems that I&apos;ve passively absorbed many skills and tricks with CSS and HTML. When it came time to formally learn frontend development, the two languages came to me naturally. This allowed me to focus more on understanding JavaScript.</p>
                        <p>So far, I have had the privilege to collaborate with so many interesting and informative people across several companies and projects. I am happy to state that each interaction has taught me something not only about design, programming, and the development process, but also about myself. Now, I endeavor to find inspiration and learning from the unlikeliest of sources.</p>
                    </div>
				</foreignObject>
			</svg>
            </div>
			
            {/* Box that receives the expanding effect and moves the text */}
			<div className="expandingText w-0 h-0 max-w-[90%] max-h-[calc(100%+10vh)] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
				<p className="absolute top-[-10vw] left-0 text-[10vw]">Julian</p>
				<p className="absolute bottom-[-10vw] right-0 text-[10vw]">Bristol</p>
                {/* Marker for when to move the expanding text and circle distortion mask */}
                <div className="gsapMarkerA absolute top-[calc(50%+40px)] translate-y-[-50%] left-[50%] translate-x-[-50%]"></div>
			</div>
		</div>
	);
};

export default About;
