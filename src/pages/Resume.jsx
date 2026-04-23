import { FaUniversity, FaLaptopCode, FaUsers } from 'react-icons/fa';
import { MdWork, MdSchool } from 'react-icons/md';

const Resume = () => {
  return (
    <div className="h-full page-shadow bg-white p-4 sm:p-6">
      {/* Education Section */}
      <section className="education mb-4 sm:mb-6">
        <div className="flex items-center mb-2">
          <MdSchool className="text-2xl sm:text-3xl text-primary mr-2 sm:mr-3" />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Education</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start">
              <FaUniversity className="text-lg sm:text-xl text-gray-500 mt-1 mr-2 sm:mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-xl font-bold text-gray-700">Kisii University, Kenya</h3>
                <p className="text-xs sm:text-sm text-gray-500"> Bachelor of Science in Information Technology <b><i>(Second Upper)</i></b>
                (2020 - 2024)</p>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  Focused on software development, with a strong foundation in web technologies, software engineering, and system management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="work-experience">
        <div className="flex items-center mb-2">
          <MdWork className="text-2xl sm:text-3xl text-primary mr-2 sm:mr-3" />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Work Experience</h2>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start">
              <FaLaptopCode className="text-lg sm:text-xl text-gray-500 mt-1 mr-2 sm:mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-xl font-bold text-gray-700">
                  Software Developer - <a href="#" className="text-primary hover:underline">AIAA-NGO, Kenya</a>
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">May 2024 - Till Date</p>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Developed custom software solutions, integrating AI components into 
                enterprise systems.<br/>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start">
              <FaUsers className="text-lg sm:text-xl text-gray-500 mt-1 mr-2 sm:mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-xl font-bold text-gray-700">
                  ICT Support - <a href="#" className="text-primary hover:underline">County Government of Trans-Nzoia, Kenya</a>
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">2023 – 2023</p>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  Gained experience in hardware and software maintenance, including 
                  preventive procedures and network maintenance.
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