import { FaUniversity, FaLaptopCode, FaUsers } from 'react-icons/fa';
import { MdWork, MdSchool } from 'react-icons/md';

const Resume = () => {
  return (
    <div className="h-full page-shadow p-6">
      {/* Education Section */}
      <section className="education mb-4">
        <div className="flex items-center mb-2">
          <MdSchool className="text-3xl text-primary mr-3" />
          <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start">
              <FaUniversity className="text-xl text-gray-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-700">Kisii University, Kenya</h3>
                <p className="text-sm text-gray-500"> Bachelor of Science in Information Technology <b><i>(Second Upper)</i></b>
                (2020 - 2024)</p>
                <p className="text-gray-600 mt-2">
                  Focused on software development, with a strong foundation in web technologies, software engineering, and system management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="work-experience">
        <div className="flex items-center mb-1">
          <MdWork className="text-3xl text-primary mr-3" />
          <h2 className="text-2xl font-semibold text-gray-800">Work Experience</h2>
        </div>
        <div className="space-y-">
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start">
              <FaLaptopCode className="text-xl text-gray-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-700">
                  Software Developer - <a href="#" className="text-primary hover:underline">Digimatt Solutions</a>
                </h3>
                <p className="text-sm text-gray-500">November 2025 - Till Date</p>
                <p className="text-gray-600 mt-2">
                Developed custom software solutions, integrating AI components into 
                enterprise systems.<br/>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start">
              <FaLaptopCode className="text-xl text-gray-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-700">
                  Software Developer - <a href="#" className="text-primary hover:underline">AIAA-NGO, Kenya</a>
                </h3>
                <p className="text-sm text-gray-500">May 2024 - Till Date</p>
                <p className="text-gray-600 mt-2">
                Development of custom web applications using modern frameworks.<br/>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start">
              <FaUsers className="text-xl text-gray-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-700">
                  ICT Support - <a href="#" className="text-primary hover:underline">County Government of Trans-Nzoia, Kenya</a>
                </h3>
                <p className="text-sm text-gray-500">2023 – 2023</p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;