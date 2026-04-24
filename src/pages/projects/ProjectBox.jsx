/* eslint-disable react/prop-types */
//import React from "react";

import { AiFillGithub } from "react-icons/ai";

const ProjectBox = ({ ProjectData }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-6">
        {ProjectData.map((project, index) => {
          return (
            <div key={index} className="rounded-xl">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                decoding="async"
                className="w-full h-44 sm:h-32 md:h-32 object-cover rounded-xl"
              />
              {/* details section */}
              <div className="pt-1.5 sm:pt-2">
                <h3 className="text-xs sm:text-sm md:text-base font-semibold">{project.name}</h3>
                <p className="line-clamp-2 sm:line-clamp-3 text-gray-500 text-[11px] sm:text-xs md:text-sm">
                  {project.description}
                </p>
                <p className="text-black text-[10px] sm:text-[11px] md:text-xs mt-1">
                  {project.tools}
                </p>

                <div className="flex items-center space-x-2 sm:space-x-3 mt-1.5 sm:mt-2">
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-btn mt-1 text-[11px] sm:text-xs py-1 px-2 sm:py-1.5 sm:px-3"
                  >
                    View project
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                  >
                    <AiFillGithub className="text-xl sm:text-2xl md:text-3xl text-primary/80 hover:text-primary cursor-pointer duration-200" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectBox;