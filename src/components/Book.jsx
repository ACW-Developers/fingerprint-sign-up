import { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Cover from '../pages/Cover/Cover';
import FirstPage from '../pages/FirstPage';
import Skills from '../pages/Skills';
import Services from '../pages/Service/Services';
import About from '../pages/About';
import Projects from '../pages/projects/Projects';
import Contac from '../pages/contacts/Contac';
import Resume from '../pages/Resume';
import AoB from '../pages/AoB';

// Import assets
import coverImgs from '../assets/buk.jpg';
import EndImg from '../assets/last-page.png';
import waka from "../assets/waka.png";
import unashamed from "../assets/unashamed.jpg";
import attendance from "../assets/attendance.png";
import mite from "../assets/mite.jpg";
import aiaa from "../assets/aiaa.png";
import ronald from "../assets/ronald.png";
// Add placeholders for new projects (replace with actual images later)
import jikubali from "../assets/jikubali.png";
import kings from "../assets/kings.png";
import sme from "../assets/sme.png";
import surgery from "../assets/surgery.png";
import safina from "../assets/safina.png";
import fundi from "../assets/fundi1.png";
import futures from "../assets/5000futures.png";
import cango from "../assets/ecommerce.png";
import bm from "../assets/bm.png";
import smarticket from "../assets/smarticket.png";

function Book() {
  const [bookSize, setBookSize] = useState({
    width: 600,
    height: 700
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBookSize({ width: 700, height: 800 });
      } else if (window.innerWidth < 1024) {
        setBookSize({ width: 700, height: 800 });
      } else {
        setBookSize({ width: 600, height: 700 });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const ProjectData = [
    {
      name: "fundiplug.ke",
      description: "A dynamic webapp for Fundiplug, a marketplace platform for connecting clients to skilled fundis near them.",
      image: fundi,
      previewLink: "fundiplug.netlify.app",
      tools: 'React, Typescript, Supabase',
      githubLink: 'https://github.com/Wanyangu1?tab=repositories',
    },
    {
      name: "Safina Party Website",
      description: "A dynamic website for Safina Party, a political organization in Kenya, with features to allow users to check the latest news and view upcoming events.",
      image: safina,
      previewLink: "https://safina.ke",
      tools: 'Wordpress, PHP, MySQL',
      githubLink: 'https://github.com/Wanyangu1?tab=repositories',
    },
  ]; 

   const ProjectData1 = [
    {
      name: "2cango Ecommerce",
      description: "A dynamic e-commerce website for 2cango restaurant with features to allow users to order food online and make payments through mobile money.",
      image:  cango,
      previewLink: "https://2cangorestaurant.netlify.app/",
      tools: 'React, Typescript, Tailwind, Supabase',
      githubLink: 'https://github.com/Wanyangu1?tab=repositories',
    },
    {
      name: "5000Futures.us",
      description: "A dynamic website for 5000Futures, a non-profit organization focused on empowering youth through education and mentorship, with features to allow users to check the latest news and view upcoming events.",
      image: futures,
      previewLink: "https://5000Futures.us",
      tools: 'React, Typescript, Tailwind, Supabase',
      githubLink: 'https://github.com/AIIKS-KSU-TEAM/Ronald_Tombe_Frontend',
    },
  ];

  const ProjectData2 = [
    {
      name: "jikubaliafrica.org",
      description: "A professional website for Jikubali Africa, enhancing its online presence and engagement with community stakeholders.",
      image: jikubali,
      previewLink: "https://jikubaliafrica.org/",
      tools: 'React, Django, Tailwindcss, PostgreSQL',
      githubLink: 'https://github.com/Wanyangu1?tab=repositories',
    },
    {
      name: "Kings Online Learning Platform",
      description: "A custom e-learning solution to automate content delivery and enable personalized learner tracking.",
      image: kings,
      previewLink: "https://kolp.tranzend.co.ke/login",
      tools: 'Django, Vue.js, Tailwind, PostgreSQL',
      githubLink: 'https://github.com/Wanyangu1?tab=repositories',
    },
  ];

  // Extra new projects (SME & Surgery Tracking)
  const ProjectData3 = [
    {
      name: "SMEs Management System",
      description: "An integrated management system tailored for small and medium-sized enterprises to streamline operations, sales, and reporting.",
      image: sme,
      previewLink: "https://peakuniform.netlify.app/signin",
      tools: 'React, Springboot, PostgreSQL',
      githubLink: 'https://github.com/Wanyangu1?tab=repositories',
    },
    {
      name: "Surgery Tracking System",
      description: "A hospital-focused prototype solution for tracking surgical procedures, patient progress, and doctor assignments in real time.",
      image: surgery,
      previewLink: "https://surgerytracking.netlify.app/",
      tools: 'React, Supabase, Tailwind',
      githubLink: 'https://github.com/ACW-Developers/opera-dash-assist',
    },
  ];

  const ProjectData4 = [
    {
      name: "miteexplorers.com",
      description: "A dynamic website for Mite Explore a travel and tours company with a variety of features to allow users book tours and travel packages.",
      image: mite,
      previewLink: "http://miteexplorers.com/",
      tools: 'Vue.js, Django, Tailwindcss',
      githubLink: 'https://github.com/Wanyangu1?tab=repositories',
    },
    {
      name: "Attendance MIS",
      description: "A dynamic attendance management system for organizations with features to allow employees to manage their attendance.",
      image: attendance,
      previewLink: "https://mycityradiusattendance.com/",
      tools: 'Vue js, Django, Tailwind, Postgres',
      githubLink: 'https://github.com/Wanyangu1?tab=repositories',
    },
  ];

  const ProjectData5 = [
    {
      name: "Unashamed Website",
      description: "A dynamic website for Unashamed a Charity organization with a variety of features to allow users to check upcoming events and view the latest news.",
      image: unashamed,
      previewLink: "https://unashamedcharity.org/",
      tools: 'Django, Vue js, Postgres',
      githubLink: 'https://github.com/Wanyangu1?tab=repositories', 
    },
    {
      name: "Wakafreight Forwardersltd website",
      description: "A dynamic website for Wakafreight Forwardersltd with a variety of features to allow users to check the latest job adverts and view the latest events.",
      image: waka,
      previewLink: "http://wakafreightfowardersltd.co.ke/",
      tools: 'Vue js, Django, Tailwind, Postgres',
      githubLink: 'https://github.com/Wanyangu1?tab=repositories',
    },
  ];


  return (
    <div className="flex justify-center items-center w-full h-full p-4">
      <HTMLFlipBook 
        width={bookSize.width} 
        height={bookSize.height}
        showCover={true}
        className="shadow-2xl"
      >
        <Page number={0}>
          <Cover
            coverImg={coverImgs}
            title="Amos Wanyangu"
            subtitle="Click anywhere to open"
            className="mt-6"
          />
        </Page>

        <Page number={1}>
          <FirstPage />  
        </Page> 

        <Page number={2}>
          <Skills />  
        </Page>

        <Page number={3}>
          <Services />
        </Page>

        <Page number={4}>
          <About />  
        </Page>

        <Page number={5}>
          <Resume />
        </Page>

        <Page number={6}>
          <Projects ProjectData={ProjectData} />
        </Page>
        <Page number={7}>
          <Projects ProjectData={ProjectData1} />
        </Page>

        <Page number={8}>
          <Projects ProjectData={ProjectData2} />
        </Page>

        <Page number={9}>
          <Projects ProjectData={ProjectData3} />
        </Page>

        <Page number={10}>
          <Projects ProjectData={ProjectData4} />
        </Page>

        <Page number={11}>
          <Projects ProjectData={ProjectData5} />
        </Page>

        <Page number={12}>
          <Contac />
        </Page>

        <Page number={12}>
          <AoB />
        </Page>

        <Page number={13}>
          <Cover 
            coverImg={EndImg} 
            title="Clinton Wanyangu" 
            subtitle="Powered by ACW_Developers" 
          />
        </Page>
      </HTMLFlipBook>
    </div>
  );
}

export default Book;
