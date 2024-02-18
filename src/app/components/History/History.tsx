import React, { FC } from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experiences } from "@/types/index";
import { experiences } from "../../constants/index";
import Image from "next/image";
import "./History.scss"

interface HistoryProps {}

interface ExperienceCardProps {
	experience: Experiences;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => (
	<VerticalTimelineElement
		date={experience.date}
		dateClassName="text-hope-500 !opacity-100 !text-[14pt] !font-bold"
		iconStyle={{ background: "#141414" }}
		icon={
			<div className="border-2 border-transparent rounded-full">
				<Image
            src={experience.icon}
            alt={experience.companyName}
            className='w-full'
            />
			</div>
		}
	>
		<section className="timelineElementCard text-ash">
			<h3 className="text-[16px] font-bold">{experience.title}</h3>
			<p className="!mt-0 !ml-2 !mb-2">{experience.companyName}</p>
			<ul className="mx-4 list-disc">
				{experience.points.map((point, key) => (
					<li key={`experience_point_${key}`} className="XPListElem">
						{point}
					</li>
				))}
			</ul>
		</section>
	</VerticalTimelineElement>
);

const History: FC<HistoryProps> = ({}) => {
	return (
		<>
			<h2 className="mb-4 text-hope-500 text-center text-[48px] sm:text-[56px] lg:text-[64px] xl:text-[72px] 2xl:text-[84px] textTransition">My History</h2>
			<VerticalTimeline lineColor="">
				{experiences.map((experience, key) => (
					<ExperienceCard key={key} experience={experience} />
				))}
			</VerticalTimeline>
		</>
	);
};

export default History;
