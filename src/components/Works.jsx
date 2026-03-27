import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { webIcon } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  live_link,
  badge,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    // ScrollTrigger for animating project cards with stagger
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100, // Start off-screen
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",  // Trigger when the top of the element hits the bottom of the viewport
          end: "top center",    // End when the top reaches the center of the viewport
          scrub: true,          // Smoothly sync scroll and animation
          markers: false,       // Set to `true` to see debug markers
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef}>
      <Tilt
        options={{
          max: 15,    // Reduced tilt for a more professional feel
          scale: 1.02,
          speed: 450,
        }}
        className="bg-tertiary p-8 rounded-3xl w-full border border-white/5 backdrop-blur-md bg-opacity-70 shadow-2xl relative group h-full flex flex-col"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-black/40 flex justify-center items-center shadow-inner border border-white/10 group-hover:border-blue-500/50 transition-colors duration-300">
              <img
                src={image}
                alt={name}
                className="w-8 h-8 object-contain brightness-110"
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-[20px] leading-tight group-hover:text-blue-400 transition-colors duration-300">{name}</h3>
              {badge && (
                <span className="mt-1 inline-block bg-blue-900/30 border border-blue-500/30 text-blue-200 text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                  {badge}
                </span>
              )}
            </div>
          </div>
          
          <div
            onClick={() => window.open(live_link, "_blank")}
            className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-white/10 transition-colors duration-300"
          >
            <img
              src={webIcon}
              alt="live link"
              className="w-5 h-5 object-contain opacity-50 hover:opacity-100 invert transition-opacity"
            />
          </div>
        </div>

        <div className="flex-1">
          <p className="text-secondary text-[14px] whitespace-pre-line leading-relaxed pb-4 border-b border-white/5 min-h-[120px]">
            {description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[11px] font-semibold px-2 py-1 bg-white/5 rounded-md ${tag.color} uppercase tracking-tight`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
        
        {/* Subtle accent line */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Tilt>
    </div>
  );
};

const Works = () => {
  useEffect(() => {
    // Stagger effect for project cards
    gsap.fromTo(
      ".project-card", // Select all project cards
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1, // Stagger delay of 0.3 seconds between each card
        scrollTrigger: {
          trigger: ".works-container",
          start: "top bottom",  // Trigger when the top of the container reaches the bottom
          end: "top center",
          scrub: true,
          markers: false, // Set to true to see debug markers
        },
      }
    );
  }, []);

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through real-world examples of my work. Contact me to know more about projects and to see live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
      </div>

      <div className="works-container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-7">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="project-card">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
