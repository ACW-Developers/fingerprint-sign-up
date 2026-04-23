/* eslint-disable react/prop-types */
//import React from "react";

import { AiFillGithub } from "react-icons/ai";

const ProjectBox = ({ ProjectData }) => {
  return (
    <div className="grid grid-cols-1 gap-3 mt-3">
      {ProjectData.map((project, index) => (
        <div key={index} className="rounded-lg border border-black/5 overflow-hidden flex gap-2 p-2">
          <img
            src={project.image}
            alt={project.name}
            className="w-20 h-20 object-cover rounded-md flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-xs sm:text-sm font-semibold leading-tight truncate">{project.name}</h3>
            <p className="line-clamp-2 text-gray-500 text-[10px] sm:text-xs leading-snug mt-0.5">
              {project.description}
            </p>
            <p className="text-black/70 text-[9px] sm:text-[10px] mt-0.5 italic truncate">
              {project.tools}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn !my-0 !py-1 !px-2 text-[10px]"
              >
                View
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
              >
                <AiFillGithub className="text-lg text-primary/80 hover:text-primary duration-200" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectBox;