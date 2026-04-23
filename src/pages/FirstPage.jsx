/* eslint-disable react/no-unescaped-entities */
//import React from 'react'
import myimg from "../assets/clinton.jpg"

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-tertiary page-shadow">
        <div className="px-4 sm:px-6 py-4 space-y-3">
          <img
            src={myimg}
            alt="Amos Clinton"
            className="w-28 sm:w-36 md:w-44 mx-auto rounded shadow-md"
          />
          <div className="space-y-1.5 text-left">
            <p className="uppercase tracking-wide text-[10px] sm:text-xs text-black/60">Hello,</p>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black/80 leading-tight">
              I&apos;m Amos Clinton
            </h1>
            <p className="text-black/75 font-semibold text-xs sm:text-sm">A Fullstack Developer</p>
            <p className="text-black/70 text-[11px] sm:text-xs leading-snug">
              I craft solutions that blend creativity with functionality —
              clean, responsive code delivering a seamless experience across
              all devices.
            </p>
            <a
              className="primary-btn bg-purple-500"
              href="mailto:amosclinton196@gmail.com"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage