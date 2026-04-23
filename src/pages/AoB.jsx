// import React from 'react'

const AoB = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-white to-gray-100 p-5 space-y-3 text-center">
      <h2 className="text-base sm:text-lg font-extrabold text-gray-800">
        Thank You for Visiting
      </h2>
      <p className="text-xs text-gray-700">
        Excited to connect, collaborate, and create meaningful impact —
        <span className="text-blue-600 font-semibold"> let&apos;s talk!</span>
      </p>
      <p className="text-[11px] text-gray-600">
        Reach out via email, LinkedIn, or any of my social platforms.
      </p>
      <a
        href="mailto:amosclinton196@gmail.com"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded-full shadow-md text-xs"
      >
        Contact Me
      </a>
    </div>
  );
};

export default AoB;
