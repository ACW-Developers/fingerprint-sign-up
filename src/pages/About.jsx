/* eslint-disable react/no-unescaped-entities */
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMessage } from "react-icons/ai";
import Heading from "./Heading";
import Resume from '../assets/AMOS CLINTON C.V.pdf';

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-5 sm:p-8 md:p-10">
      <Heading
        title="About"
        subtitle="Discover My Professional Journey"
      />

      <div className="mt-6 sm:mt-10 text-slate-500 text-sm sm:text-base">
        <p className="mb-3 sm:mb-4">
          I'm a passionate IT professional with a strong technical foundation and a drive for solving real-world problems through software innovation. I specialize in building transformative digital solutions that deliver measurable impact.
        </p>

        <p className="mb-3 sm:mb-4">
          I hold a BSc in Information Technology (Second Class Upper) from Kisii University and have delivered full-stack applications across logistics, travel, and agri-tech domains.
        </p>

        <p className="mb-3 sm:mb-4">
          At the Artificial Intelligence Alliance in Agriculture, I lead AI-driven projects reshaping Kenya’s agricultural landscape. I thrive on merging technical excellence with purpose-driven innovation.
        </p>

        <p className="mb-4 sm:mb-6">
          I'm eager to bring my skills to visionary teams. Let’s connect — I’m just a click away.
        </p>

        <div className="flex flex-wrap gap-4 mt-6 sm:mt-10">
          <a href="mailto:amosclinton196@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email me">
            <AiFillMessage className="text-4xl sm:text-5xl hover:text-red-500 duration-200 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/amosclinton7792/" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile">
            <AiFillInstagram className="text-4xl sm:text-5xl hover:text-pink-600 duration-200 cursor-pointer" />
          </a>
          <a href="https://github.com/Wanyangu1" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <AiFillGithub className="text-4xl sm:text-5xl hover:text-gray-800 duration-200 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/amos-clinton-b65158222/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <AiFillLinkedin className="text-4xl sm:text-5xl hover:text-blue-700 duration-200 cursor-pointer" />
          </a>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
          <a href={Resume} className="primary-btn bg-purple-400 hover:bg-opacity-90 transition-all text-sm sm:text-base" download>
            Download Resume
          </a>
          <a href="https://github.com/Wanyangu1" target="_blank" rel="noopener noreferrer" className="outline-btn hover:bg-gray-100 transition-all text-sm sm:text-base">
            Explore My GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
