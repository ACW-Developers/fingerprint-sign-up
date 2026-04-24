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

      <div className="mt-4 sm:mt-6 text-slate-500 text-xs sm:text-sm leading-relaxed">
        {/* Mobile: concise summary */}
        <div className="md:hidden">
          <p className="mb-2">
            IT professional building full-stack solutions across logistics, travel, and agri-tech.
          </p>
          <p className="mb-2">
            BSc in IT (Kisii University). Currently leading AI-driven projects at the Artificial Intelligence Alliance in Agriculture.
          </p>
          <p className="mb-3">
            Open to new opportunities — let’s connect.
          </p>
        </div>

        {/* Desktop: full bio */}
        <div className="hidden md:block">
          <p className="mb-3">
            I'm a passionate IT professional with a strong technical foundation and a drive for solving real-world problems through software innovation. I specialize in building transformative digital solutions that deliver measurable impact.
          </p>
          <p className="mb-3">
            I hold a BSc in Information Technology (Second Class Upper) from Kisii University and have delivered full-stack applications across logistics, travel, and agri-tech domains.
          </p>
          <p className="mb-3">
            At the Artificial Intelligence Alliance in Agriculture, I lead AI-driven projects reshaping Kenya’s agricultural landscape. I thrive on merging technical excellence with purpose-driven innovation.
          </p>
          <p className="mb-4">
            I'm eager to bring my skills to visionary teams. Let’s connect — I’m just a click away.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-4 sm:mt-6">
          <a href="mailto:amosclinton196@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email me">
            <AiFillMessage className="text-3xl sm:text-4xl hover:text-red-500 duration-200 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/amosclinton7792/" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile">
            <AiFillInstagram className="text-3xl sm:text-4xl hover:text-pink-600 duration-200 cursor-pointer" />
          </a>
          <a href="https://github.com/Wanyangu1" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <AiFillGithub className="text-3xl sm:text-4xl hover:text-gray-800 duration-200 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/amos-clinton-b65158222/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <AiFillLinkedin className="text-3xl sm:text-4xl hover:text-blue-700 duration-200 cursor-pointer" />
          </a>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
          <a href={Resume} className="primary-btn bg-purple-400 hover:bg-opacity-90 transition-all text-xs sm:text-sm" download>
            Download Resume
          </a>
          <a href="https://github.com/Wanyangu1" target="_blank" rel="noopener noreferrer" className="outline-btn hover:bg-gray-100 transition-all text-xs sm:text-sm">
            Explore My GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
