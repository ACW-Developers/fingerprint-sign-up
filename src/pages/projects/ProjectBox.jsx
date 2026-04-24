/* eslint-disable react/prop-types */
//import React from "react";

import { AiFillGithub } from "react-icons/ai";

const ProjectBox = ({ ProjectData }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 sm:mt-6">
        {ProjectData.map((project, index) => {
          return (
            <div key={index} className="rounded-xl">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-28 sm:h-32 object-cover rounded-xl"
              />
              {/* details section */}
              <div className="pt-2">
                <h3 className="text-sm sm:text-base font-semibold">{project.name}</h3>
                <p className="line-clamp-3 text-gray-500 text-xs sm:text-sm">
                  {project.description}
                </p>
                <p className="text-black text-[11px] sm:text-xs mt-1">
                  {project.tools}
                </p>

                <div className="flex items-center space-x-3 mt-2">
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-btn mt-1 text-xs"
                  >
                    View project
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                  >
                    <AiFillGithub className="text-2xl sm:text-3xl text-primary/80 hover:text-primary cursor-pointer duration-200" />
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