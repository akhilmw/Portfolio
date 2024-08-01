"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const items = [
  {
    id: 1,
    color: "from-blue-200 to-blue-300",
    title: "Assignment Auditor",
    desc: "Assignment Auditor is an efficient platform where code reviewers and students can seamlessly collaborate. Students can submit their assignments via GitHub, and available code reviewers can claim them, provide detailed code reviews with video URLs, and update the status to 'completed' or 'needs review.' This ensures that both parties are always aware of the status of their assignments and work.",
    img: "/assignmentAuditor.png",
    link: "http://51.20.78.25:5173/",
    githubLink: "https://github.com/akhilmw/AssignmentAuditor",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "TrackerGQL",
    desc: "TrackerGQL is a smart expense management application that allows you to track and manage your expenses on the fly. The app provides a convenient way to add expenses, specifying details such as amount, type (saving, expense, investment), payment type, location, and date. An interactive chart displays the distribution of your expenses, giving you a clear overview of your spending. You can also edit or delete existing transactions, making it easy to keep your records up to date.",
    img: "/dashboard.png",
    link: "https://trackergql.onrender.com/",
    githubLink: "https://github.com/akhilmw/TrackerGQL",
  },
  {
    id: 3,
    color: "from-violet-300 to-red-200",
    title: "Translingo",
    desc: "Translingo is an advanced app for real-time language translation and transcription. It allows users to translate text and speech, transcribe audio, copy transcriptions, and download them. You can also choose from a variety of languages for translation.",
    img: "/translingo.png",
    link: "https://main.d2jur9d8gyvg5.amplifyapp.com/",
    githubLink: "https://github.com/akhilmw/TransLingo",
  },
  {
    id: 4,
    color: "from-red-200 to-violet-400",
    title: "HercuFit",
    desc: "HercuFit – the app designed for those who are serious about their fitness journey. Whether you're a seasoned bodybuilder or just starting your path to strength, HercuFit helps you track, plan, and elevate your workouts like never before. With a sleek interface and powerful features, HercuFit ensures your training is not just effective but Herculean!",
    img: "/hercufit.png",
    link: "https://hercufit.netlify.app/",
    githubLink: "https://github.com/akhilmw/HercuFit",
  },
  {
    id: 5,
    color: "from-violet-400 to-yellow-200",
    title: "Apod Nasa",
    desc: "The NASA APOD project showcases a new astronomy picture every day. Users can view the latest image along with its description, date, and other details provided by NASA's APOD API.",
    img: "/apod.png",
    link: "https://react-nasa-apod-project.netlify.app/",
    githubLink: "https://github.com/akhilmw/apod-nasa-app",
  }
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Projects
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 text-white lg:w-[500px] lg:text-lg xl:w-[600px] font-bold">
                    {item.desc}
                  </p>
                  <div className="flex justify-end gap-4">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.link}
                    >
                      <button className="px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm lg:px-6 lg:py-3 lg:text-base bg-white text-gray-600 font-semibold rounded flex items-center gap-2 hover:bg-slate-100">
                        Live Link
                      </button>
                    </Link>
                    {item.githubLink && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.githubLink}
                      >
                        <button className="px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm lg:px-6 lg:py-3 lg:text-base bg-gray-800 text-white font-semibold rounded flex items-center gap-2 hover:bg-gray-700">
                          <span>GitHub</span>
                          <FaExternalLinkAlt />
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Liked my work?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
              />
            </defs>
            <text fill="#000" fontSize="16" textLength="600">
              <textPath xlinkHref="#circlePath" lengthAdjust="spacingAndGlyphs">
                Full-Stack Developer and Backend Engineer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center hover:bg-slate-400"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
