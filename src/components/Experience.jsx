import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, isRemote = false }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isRemote ? "#050816" : "#1d1836", // darker for remote/innovation
        color: "#fff",
        boxShadow: isRemote ? "0 0 10px rgba(0, 212, 255, 0.2)" : "none", // subtle blue glow for remote
        border: isRemote ? "1px solid #111827" : "none",
      }}
      contentArrowStyle={{ borderRight: isRemote ? "7px solid #050816" : "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[90%] h-[90%] object-contain rounded-full"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/48";
            }}
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const fullTimeExperiences = experiences.filter(
    (exp) => exp.type === "full-time"
  );
  const remoteExperiences = experiences.filter(
    (exp) => exp.type === "remote"
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experiences.
        </h2>
      </motion.div>

      <div className='mt-20 grid lg:grid-cols-2 grid-cols-1 gap-10 items-start'>
        {/* Full-Time Section */}
        <div className='flex flex-col'>
          <h3 className='text-white text-[28px] font-bold text-center mb-10 tracking-widest uppercase'>
            Professional Core
          </h3>
          <VerticalTimeline layout="1-column-left">
            {fullTimeExperiences.map((experience, index) => (
              <ExperienceCard
                key={`full-time-experience-${index}`}
                experience={experience}
                isRemote={false}
              />
            ))}
          </VerticalTimeline>
        </div>

        {/* Remote/Projects Section */}
        <div className='flex flex-col'>
          <h3 className='text-white text-[28px] font-bold text-center mb-10 tracking-widest uppercase'>
            Innovation & Growth (Remote)
          </h3>
          <VerticalTimeline layout="1-column-left">
            {remoteExperiences.map((experience, index) => (
              <ExperienceCard
                key={`remote-experience-${index}`}
                experience={experience}
                isRemote={true}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
