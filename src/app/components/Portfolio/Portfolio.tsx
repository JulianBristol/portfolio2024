import React, { FC, useEffect, useState } from "react";
import { Projects } from "@/types/index";
import { projects } from "../../constants/index";
import Image from "next/image";
import "./Portfolio.scss";

interface PortfolioProps {}

interface ProjectCardProps {
	project: Projects;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
	return (
		<div className="p-4 bg-hope-100 border-2 border-hope-500 rounded-xl min-h-[300px] hover:cursor-pointer hover:bg-hope-300">
			<Image
				className="rounded-xl object-cover mb-4 aspect-square"
				src={project.image[0]}
				alt={`Image of the ${project.name} project`}
			/>
			<h4 className="font-semibold text-[18px] sm:text-[24px] xl:text-[32px] truncate textTransition">
				{project.name}
			</h4>
			<p className="truncate font-light mb-4 text-[14px] sm:text-[18px] xl:text-[24px] textTransition">
				<i>
					{project.tags.map((tag, key) => {
						let tags = "";
						if (project.tags[key + 1]) {
							tags += tag + ", ";
						} else {
							tags += tag;
						}
						return tags;
					})}
				</i>
			</p>
			<p className="truncate-6 truncate-3 text-[14px] sm:text-[18px] xl:text-[24px] textTransition">
				{project.description}
			</p>
		</div>
	);
};

const Portfolio: FC<PortfolioProps> = ({}) => {
	const [selectedPortfolioItem, setSelectedPortfolioItem] = useState(0);
	const [viewMore, setViewMore] = useState(false);

	/* used to set the positioning of the items in the image array */
	const [positioningArr, setPositioningArr] = useState<number[]>([0]);
	const [positioningProjects, setPositioningProjects] = useState<number[]>([0]);

	const projectsToDisplay = !viewMore
		? projects.slice(0, 5)
		: projects.slice(0, projects.length);

	useEffect(() => {
		setPositioningArr(
			Array.from(
				{ length: projects[selectedPortfolioItem].image.length },
				(_, index) => index
			)
		);
	}, [projectsToDisplay.length, selectedPortfolioItem]);
	useEffect(() => {
		setPositioningProjects(
			Array.from({ length: projectsToDisplay.length }, (_, index) => index)
		);
	}, [projectsToDisplay.length]);

	const handleViewAllProjects = () => {
		window.location.href = "#allProjects";
	};

	return (
		<div>
			<h2 className="text-hope-500 text-center text-[48px] sm:text-[56px] lg:text-[64px] xl:text-[72px] 2xl:text-[84px] textTransition">
				Portfolio
			</h2>
			<div className="mx-2 sm:mx-4">
				{/* Main card */}
				<section className="h-fit mb-12">
					<div className="mb-12 flex flex-row flex-wrap gap-5 items-center justify-center h-full">
						<div className="p-2 bg-hope-100 border-2 border-hope-500 rounded-xl w-full sm:w-[50%] xs:max-w-[430px] h-full my-6 flex justify-center">
							<Image
								className="rounded-xl object-cover aspect-square w-full"
								src={projects[selectedPortfolioItem].image[positioningArr[0]]}
								alt={`Image of the ${projects[selectedPortfolioItem].name} project`}
							/>
						</div>
						<div className="flex flex-wrap xs:flex-nowrap sm:flex-wrap h-fit justify-center items-center gap-5 w-[100%] sm:w-[45%]">
							{" "}
							{positioningArr.map((index, key) => {
								if (key > 0 && projects[selectedPortfolioItem].image.length-1 >= key) {
									return (
										<div
											key={key}
											className="p-[2px] bg-hope-100 border-2 border-hope-500 rounded-xl flex w-[40%] aspect-square hover:cursor-pointer hover:bg-hope-300"
											onClick={() => {
												const newArr = [...positioningArr];
												// Swap elements at key and 0
												const value = newArr[key];
												newArr[key] = newArr[0];
												newArr[0] = value;
												setPositioningArr(newArr);
											}}
										>
											<Image
												className="rounded-xl object-cover"
												src={
													projects[selectedPortfolioItem].image[
														positioningArr[key]
													]
												}
												alt={`Image of the ${projects[selectedPortfolioItem].name} project`}
											/>
										</div>
									);
								}
							})}
						</div>
					</div>
					<section>
						<h3 className="ml-4 text-[32px] sm:text-[48px] xl:text-[64px] textTransition">
							{projects[selectedPortfolioItem].name}
						</h3>
						<p className="mb-8 text-[16px] sm:text-[24px] xl:text-[36px] textTransition">
							<i>
								{projects[selectedPortfolioItem].tags.map((tag, key) => {
									let tags = "";
									if (projects[selectedPortfolioItem].tags[key + 1]) {
										tags += tag + ", ";
									} else {
										tags += tag;
									}
									return tags;
								})}
							</i>
						</p>
						<div className="flex justify-end gap-5 mb-8">
							{projects[selectedPortfolioItem].github ? (
								<a
									href={projects[selectedPortfolioItem].github}
									target="_blank"
									rel="noopener noreferrer"
									className="bg-morocco p-2 sm:px-3 lg:px-4 lg:py-2 text-[16px] sm:text-[24px] xl:text-[32px] rounded-md w-fit self-center transition active:btnClick hover:bg-gradient-to-b hover:from-marigold hover:to-morocco focus:bg-gradient-to-b focus:from-marigold focus:to-morocco text-ash"
								>
									Github
								</a>
							) : null}
							{projects[selectedPortfolioItem].website ? (
								<a
									href={projects[selectedPortfolioItem].website}
									target="_blank"
									rel="noopener noreferrer"
									className="bg-morocco p-2 sm:px-3 lg:px-4 lg:py-2 text-[16px] sm:text-[24px] xl:text-[32px] textTransition rounded-md w-fit self-center transition active:btnClick hover:bg-gradient-to-b hover:from-marigold hover:to-morocco focus:bg-gradient-to-b focus:from-marigold focus:to-morocco text-ash"
								>
									Visit Site
								</a>
							) : null}
						</div>
						<p className=" text-[16px] sm:text-[24px] xl:text-[32px] textTransition">
							{projects[selectedPortfolioItem].description}
						</p>
					</section>
				</section>
				<h3
					id="allProjects"
					className="ml-4 text-[24px] sm:text-[32px] xl:text-[48px] font-semibold mb-4 textTransition"
				>
					You may also like
				</h3>
				{/* Additional project cards */}
				<div className="mb-8 flex flex-row flex-wrap gap-5 justify-center">
					{positioningProjects.map((index, key) => {
						if (key > 0) {
							return (
								<a href="#portfolio"
									key={key}
									className="w-full sm:w-[45%] lg:w-[30%] xs:max-w-[430px] sm:max-w-full"
									onClick={() => {
										setPositioningProjects((prevPositioningProjects) => {
											const newArr = [...prevPositioningProjects];
											// Swap elements at key and 0
											const value = newArr[key];
											newArr[key] = newArr[0];
											newArr[0] = value;

											setSelectedPortfolioItem(newArr[0]);

											return newArr;
										});
									}}
								>
									
										<ProjectCard project={projects[index]} />
								</a>
							);
						}
					})}
				</div>
				<div className="flex justify-end">
					<button
						className="mr-4 text-[24px] sm:text-[32px] xl:text-[48px] font-semibold textTransition hover:text-hope-500"
						aria-label={
							viewMore
								? "See fewer projects and portfolio items"
								: "See additional projects and portfolio items"
						}
						onClick={() => {
							setViewMore(!viewMore);
							if (viewMore) {
								handleViewAllProjects();
							}
						}}
					>
						{viewMore ? "Collapse" : "View more..."}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
