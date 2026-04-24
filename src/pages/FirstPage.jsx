/* eslint-disable react/no-unescaped-entities */
//import React from 'react'
import myimg from "../assets/clinton.jpg"

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-tertiary page-shadow">
        <div className="px-5 sm:px-8 md:px-10 py-5 space-y-3">
          <div>
            <img
              src={myimg}
              alt="Amos Clinton"
              className="w-32 sm:w-44 md:w-[200px] mx-auto rounded shadow-md"
            />
          </div>
          <div className="space-y-2 text-left">
            <p className="uppercase tracking-wide text-xs">Hello,</p>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black/80">
              I&apos;m Amos Clinton
            </h1>
            <p className="text-black/75 font-semibold text-sm sm:text-base">A Fullstack Developer</p>
            <p className="text-black/75 text-xs sm:text-sm leading-relaxed">
              I am dedicated to crafting solutions that blend creativity with
              functionality. I bring user-focused designs to life through clean,
              responsive code ensuring a seamless experience for users across all
              devices. Let&apos;s build something amazing together!
            </p>
            <a
              className="inline-block bg-purple-400 primary-btn text-sm"
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