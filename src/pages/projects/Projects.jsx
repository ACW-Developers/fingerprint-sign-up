/* eslint-disable react/prop-types */
import Heading from "../Heading.jsx";
import ProjectBox from "./ProjectBox.jsx";


const Projects = ({ ProjectData }) => {
  return (
    <div className="h-full page-shadow bg-white p-3 sm:p-5">
      {/* heading */}
      <Heading
        title="Projects"
        subtitle="Some of my recent projects"
      />

      {/* Project section  */}
      <div className="mt-2">
        <ProjectBox ProjectData={ProjectData} />
      </div>
    </div>
  );
};

export default Projects;