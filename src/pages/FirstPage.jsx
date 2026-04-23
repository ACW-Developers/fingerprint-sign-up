/* eslint-disable react/no-unescaped-entities */
//import React from 'react'
import myimg from "../assets/clinton.jpg"

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-tertiary page-shadow">
        <div className="px-6 sm:px-10 md:px-12 py-6 space-y-4">
          <div>
            <img
              src={myimg}
              alt="Amos Clinton"
              className="w-40 sm:w-56 md:w-[260px] mx-auto rounded shadow-md"
            />
          </div>
          <div className="space-y-3 text-left">
            <p className="uppercase tracking-wide text-sm">Hello,</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black/80">
              I&apos;m Amos Clinton
            </h1>
            <p className="text-black/75 font-semibold">A Fullstack Developer</p>
            <p className="text-black/75 text-sm sm:text-base leading-relaxed">
              I am dedicated to crafting solutions that blend creativity with
              functionality. I bring user-focused designs to life through clean,
              responsive code ensuring a seamless experience for users across all
              devices. Let&apos;s build something amazing together!
            </p>
            <a
              className="inline-block bg-purple-400 primary-btn"
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