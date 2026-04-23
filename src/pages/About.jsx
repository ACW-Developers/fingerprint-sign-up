/* eslint-disable react/no-unescaped-entities */
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMessage } from "react-icons/ai";
import Heading from "./Heading";
import Resume from '../assets/AMOS CLINTON C.V.pdf';

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-4 sm:p-6">
      <Heading
        title="About"
        subtitle="Discover My Professional Journey"
      />

      <div className="mt-3 sm:mt-4 text-slate-600 text-[11px] sm:text-xs leading-snug space-y-2">
        <p>
          I&apos;m a passionate IT professional with a strong technical foundation
          and a drive for solving real-world problems through software innovation.
        </p>
        <p>
          I hold a BSc in Information Technology (Second Class Upper) from Kisii
          University and have delivered full-stack applications across logistics,
          travel, and agri-tech domains.
        </p>
        <p>
          At the Artificial Intelligence Alliance in Agriculture, I lead AI-driven
          projects reshaping Kenya&apos;s agricultural landscape.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <a href="mailto:amosclinton196@gmail.com" aria-label="Email me">
            <AiFillMessage className="text-2xl hover:text-red-500 duration-200" />
          </a>
          <a href="https://www.instagram.com/amosclinton7792/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <AiFillInstagram className="text-2xl hover:text-pink-600 duration-200" />
          </a>
          <a href="https://github.com/Wanyangu1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <AiFillGithub className="text-2xl hover:text-gray-800 duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/amos-clinton-b65158222/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <AiFillLinkedin className="text-2xl hover:text-blue-700 duration-200" />
          </a>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          <a href={Resume} className="primary-btn bg-purple-500" download>
            Download Resume
          </a>
          <a href="https://github.com/Wanyangu1" target="_blank" rel="noopener noreferrer" className="outline-btn">
            My GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
