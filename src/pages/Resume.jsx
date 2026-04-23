import { FaUniversity, FaLaptopCode, FaUsers } from 'react-icons/fa';
import { MdWork, MdSchool } from 'react-icons/md';

const Resume = () => {
  return (
    <div className="h-full page-shadow bg-white p-3 sm:p-5">
      <section className="mb-3">
        <div className="flex items-center mb-2">
          <MdSchool className="text-lg text-primary mr-2" />
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">Education</h2>
        </div>
        <div className="bg-gray-50 p-3 rounded-md shadow-sm">
          <div className="flex items-start gap-2">
            <FaUniversity className="text-sm text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-gray-700">Kisii University, Kenya</h3>
              <p className="text-[10px] sm:text-xs text-gray-500">
                BSc Information Technology <b>(Second Upper)</b> · 2020–2024
              </p>
              <p className="text-gray-600 mt-1 text-[10px] sm:text-xs leading-snug">
                Focused on software development, web technologies, and system management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center mb-2">
          <MdWork className="text-lg text-primary mr-2" />
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">Work Experience</h2>
        </div>
        <div className="space-y-2">
          <div className="bg-gray-50 p-3 rounded-md shadow-sm">
            <div className="flex items-start gap-2">
              <FaLaptopCode className="text-sm text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-700">
                  Software Developer · <span className="text-primary">AIAA-NGO, Kenya</span>
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-500">May 2024 – Present</p>
                <p className="text-gray-600 mt-1 text-[10px] sm:text-xs leading-snug">
                  Built custom software solutions, integrating AI components into enterprise systems.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-md shadow-sm">
            <div className="flex items-start gap-2">
              <FaUsers className="text-sm text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-700">
                  ICT Support · <span className="text-primary">County Govt. of Trans-Nzoia</span>
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-500">2023</p>
                <p className="text-gray-600 mt-1 text-[10px] sm:text-xs leading-snug">
                  Hardware/software maintenance, preventive procedures, and network maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;