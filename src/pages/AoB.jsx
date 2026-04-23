// import React from 'react'

const AoB = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl shadow-2xl space-y-6 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-800">Thank You for Visiting My Profile</h2>
      <p className="text-lg text-gray-700 font-medium">
        I am always excited to connect, collaborate, and create meaningful impact.
        Whether you are interested in partnerships, tech projects, youth programs, or ministry work —
        <span className="text-blue-600 font-semibold"> let’s talk!</span>
      </p>
      <p className="text-gray-600">
        Feel free to reach out via email, LinkedIn, or any of my social platforms. Together, we can inspire change and make something extraordinary.
      </p>
      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300">
        Contact Me
      </button>
    </div>
  );
};

export default AoB;
