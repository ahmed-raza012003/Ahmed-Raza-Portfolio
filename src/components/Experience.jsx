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

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
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
        <h3 className='text-white text-[22px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
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

const ProjectCard = ({ experience }) => {
  return (
    <div className='bg-tertiary p-6 rounded-2xl w-full border-l-4 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.15)] mb-8'>
      <div className='flex items-center gap-4 mb-4'>
        <div className='w-12 h-12 flex justify-center items-center rounded-full' style={{ background: experience.iconBg }}>
          <img src={experience.icon} alt={experience.company_name} className='w-[70%] h-[70%] object-contain' />
        </div>
        <div>
          <h3 className='text-white text-[20px] font-bold'>{experience.title}</h3>
          <p className='text-secondary text-[14px] font-semibold'>{experience.company_name} • {experience.date}</p>
        </div>
      </div>
      <ul className='mt-2 list-disc ml-5 space-y-2 text-white-100 text-[13px] leading-relaxed'>
        {experience.points.map((point, index) => (
          <li key={`project-point-${index}`}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const fullTimeExperiences = experiences.filter((exp) => exp.type === "full-time");
  const remoteExperiences = experiences.filter((exp) => exp.type === "remote");

  return (
    <>
      <div>
        <h3 className={`${styles.sectionSubText} text-center`}>My Professional Journey</h3>
        <h2 className={`${styles.sectionHeadText} text-center`}>Experiences.</h2>
        <p className='mt-6 text-secondary text-[18px] max-w-4xl leading-[32px] text-center mx-auto bg-black-200/40 p-6 rounded-2xl border border-white/5'>
          My professional career is built on a foundation of technical leadership and independent innovation. 
          From architecting scalable enterprise systems to leading the development of creative remote products, 
          I focus on delivering high-performance, user-centric solutions in every role.
        </p>
      </div>

      <div className='mt-20 grid lg:grid-cols-2 grid-cols-1 gap-12 items-start'>
        {/* Full-Time Section */}
        <div className='flex flex-col'>
          <h3 className='text-white text-[26px] font-bold text-center mb-10 tracking-widest uppercase border-b-2 border-primary/20 pb-2'>
            Professional Core
          </h3>
          <VerticalTimeline layout="1-column-left">
            {fullTimeExperiences.map((experience, index) => (
              <ExperienceCard key={`full-time-${index}`} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>

        {/* Remote/Projects Section */}
        <div className='flex flex-col'>
          <h3 className='text-white text-[26px] font-bold text-center mb-10 tracking-widest uppercase border-b-2 border-cyan-500/20 pb-2'>
            Innovation Hub
          </h3>
          <div className='flex flex-col'>
            {remoteExperiences.map((experience, index) => (
              <ProjectCard key={`remote-${index}`} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
