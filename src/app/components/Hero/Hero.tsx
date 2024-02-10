import Image from "next/image";
import React, { FC } from "react";
import bokeh from "../../assets/BokehProfileBG.jpg"
import profileImg from "../../assets/Julian Bristol.png"

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
	return (
		<>
			<div className="xs:hidden flex justify-center flex-col my-4 mx-6">
				<h1 className="text-[18px] xs:hidden text-center">
					Hey, it&apos;s me, <br />
					<span className="text-[24px]">Julian Bristol</span>
				</h1>
				<p className="mt-4">
					I really enjoy turning ideas into reality. I have a passion for
					learning new skills and applying them in interesting projects.
				</p>

				<div className="flex flex-row my-4 gap-4">
					{/* image */}
					<div className="rounded-[50px] flex-1 relative overflow-hidden">
						<Image
							src={bokeh}
							alt="Personal Image background"
							layout="fill"
							objectFit="cover"
						/>
						<Image
							src={profileImg}
							alt="Image of Julian Bristol"
							layout="fill"
							objectFit="contain"
                            className="!left-2 scale-125"
                            
						/>
					</div>

					{/* links */}
					<section className="text-[12px] flex-1">
						<section>
							<p>Learn more</p>
							<button className="">About Me</button>
							<hr className="text-smoke" />
						</section>

						<section>
							<p>
								I am a{" "}
								<span className="text-[16px] text-hope-500">Developer|</span>
							</p>
							<button>History</button>
							<hr />
						</section>

						<section>
							<p>Check out my</p>
							<button>Portfolio</button>
							<hr />
						</section>

						<section>
							<p>You can also</p>
							<button>Contact Me</button>
							<hr />
						</section>
					</section>
				</div>

				{/* Social Links */}
				<section className="my-4">
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
