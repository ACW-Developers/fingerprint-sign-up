/* eslint-disable react/no-unescaped-entities */
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMessage } from "react-icons/ai";
import Heading from "./Heading";
import Resume from '../assets/AMOS CLINTON C.V.pdf';

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      <Heading
        title="About"
        subtitle="Discover My Professional Journey"
      />

      <div className="mt-10 text-slate-500">
        <p className="mb-4">
          I'm a passionate IT professional with a strong technical foundation and a drive for solving real-world problems through software innovation. I specialize in building transformative digital solutions that deliver measurable impact.
        </p>

        <p className="mb-4">
          I hold a BSc in Information Technology (Second Class Upper) from Kisii University and have delivered full-stack applications across logistics, travel, and agri-tech domains.
        </p>

        <p className="mb-4">
          At the Artificial Intelligence Alliance in Agriculture, I lead AI-driven projects reshaping Kenya’s agricultural landscape. I thrive on merging technical excellence with purpose-driven innovation.
        </p>

        <p className="mb-6">
          I'm eager to bring my skills to visionary teams. Let’s connect — I’m just a click away.
        </p>

        <div className="flex space-x-4 mt-10">
          <a href="mailto:amosclinton196@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email me">
            <AiFillMessage className="social-btn hover:text-red-500 transition-colors" />
          </a>
          <a href="https://www.instagram.com/amosclinton7792/" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile">
            <AiFillInstagram className="social-btn hover:text-pink-600 transition-colors" />
          </a>
          <a href="https://github.com/Wanyangu1" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <AiFillGithub className="social-btn hover:text-gray-800 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/amos-clinton-b65158222/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <AiFillLinkedin className="social-btn hover:text-blue-700 transition-colors" />
          </a>
        </div>

        <div className="flex space-x-4 mt-6">
          <a href={Resume} className="primary-btn bg-purple-400 hover:bg-opacity-90 transition-all" download>
            Download Resume
          </a>
          <a href="https://github.com/Wanyangu1" className="outline-btn hover:bg-gray-100 transition-all">
            Explore My GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
