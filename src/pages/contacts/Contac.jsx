import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaCopy, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactItems = [
    {
      icon: <FaUser className="text-2xl" />,
      label: "Full Name:",
      value: "Amos Clinton Wanyangu",
      field: "name"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email:",
      value: "amosclinton196@gmail.com",
      field: "email"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: "Phone:",
      value: "+254 114 290 760",
      field: "phone"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Location:",
      value: "Nairobi County, Nairobi, Kenya",
      field: "location"
    },
    {
      icon: <FaGraduationCap className="text-2xl" />,
      label: "Education:",
      value: "BSC Information Technology Graduate, Kisii University, Class of 2024",
      field: "education"
    }
  ];

  return (
    <div className="min-h-full flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-900 to-black text-white p-4">
      <div className="max-w-4xl w-full bg-white bg-opacity-5 rounded-2xl p-7 shadow-2xl backdrop-blur-lg border border-white border-opacity-10 hover:border-opacity-20 transition-all duration-300">
        <div className="text-center pb-2">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
            Contact Information
          </h1>
          <p className="text-gray-300 text-lg max-w-lg mx-auto">
            Here are my details, feel free to reach out or connect with me on professional networks!
          </p>
          
          <div className="flex justify-center gap-4 mt-2">
            <a 
              href="https://www.linkedin.com/in/amos-clinton-b65158222/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="https://github.com/Wanyangu1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>

        <div className="space-y-2">
          {contactItems.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-2 bg-white bg-opacity-5 rounded-xl hover:bg-opacity-10 transition-all duration-200"
            >
              <div className="text-cyan-400 flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-300">{item.label}</div>
                <div 
                  className={`text-white truncate ${item.field === 'education' ? 'sm:whitespace-normal' : ''}`}
                >
                  {item.value}
                </div>
              </div>
              {item.field !== 'name' && item.field !== 'education' && item.field !== 'id' && (
                <button 
                  onClick={() => handleCopy(item.value, item.field)}
                  className="p-2 bg-white bg-opacity-0 hover:bg-opacity-10 rounded-md transition-colors duration-200 flex items-center gap-2"
                  aria-label={`Copy ${item.label}`}
                >
                  <FaCopy className="text-gray-400" />
                  <span className="text-xs text-gray-400">
                    {copied === item.field ? 'Copied!' : 'Copy'}
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 text-center text-gray-400 text-sm">
          <p>I am open to new opportunities and collaborations. Let us connect!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;