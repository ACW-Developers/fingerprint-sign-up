/* eslint-disable react/prop-types */
//import React from "react";

import { AiFillGithub } from "react-icons/ai";

const ProjectBox = ({ ProjectData }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 sm:mt-10">
        {ProjectData.map((project, index) => {
          return (
            <div key={index} className="rounded-xl">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-36 sm:h-40 object-cover rounded-xl"
              />
              {/* details section */}
              <div className="pt-3">
                <h3 className="text-lg sm:text-xl font-semibold">{project.name}</h3>
                <p className="line-clamp-4 text-gray-500 text-sm sm:text-base">
                  {project.description}
                </p>
                <p className="text-black text-xs sm:text-sm mt-1">
                  {project.tools}
                </p>

                <div className="flex items-center space-x-4 mt-2">
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-btn mt-1 text-sm"
                  >
                    View project
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                  >
                    <AiFillGithub className="text-3xl sm:text-4xl text-primary/80 hover:text-primary cursor-pointer duration-200" />
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