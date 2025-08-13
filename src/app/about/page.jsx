"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaFileDownload } from "react-icons/fa"; // Import the icon

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  // Skills data organized by categories
  const skillsByCategory = {
    "Programming Languages": [
      "Java", "Python", "JavaScript", "Groovy", "C++", "C#", "SQL", "Scala", "HTML", "CSS"
    ],
    "Frameworks & Libraries": [
      "React.js", "Next.js", "Angular", "Node.js", "Express.js", "Spring Boot", "Grails",
      "Material-UI", "Tailwind CSS", "Passport.js", "Jest", "Axios", "Apollo Client",
      "Apache Spark", "Hive", "Hadoop", "MapReduce", "Kafka", "TensorFlow"
    ],
    "Cloud & DevOps": [
      "AWS", "GCP", "Docker", "Kubernetes", "Git", "GitHub", "GitLab", "Artifactory", "CI/CD"
    ],
    "Databases": [
      "MySQL", "Oracle Database", "MongoDB", "Postgres", "Redis", "Elasticsearch"
    ],
    "APIs & Protocols": [
      "REST", "GraphQL", "OpenAI Whisper API", "Xenova"
    ],
    "Developer Tools": [
      "VS Code", "PyCharm", "IntelliJ IDEA", "Linux", "SQS", "SDLC", "Data Structures & Algorithms"
    ]
  };  

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/bio1.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
            Hi, I'm Akhil S Nair, a Software Engineer and a master's student
  in Computer Science at UIC. I recently completed my Summer 2025
  internship with the Aurora Serverless v2 team
  at Amazon Web Services, where I worked on large-scale configuration
  management migration for Aurora. Born and raised in India, I've
  traded the vibrant spices of home for the challenges of cloud
  computing, distributed systems, and AI-driven solutions here in the US.
  Outside the digital realm, I'm either jamming on my guitar, engaging
  in tactical mayhem in Rainbow Six Siege (chaos, but make it strategic),
  or balancing cricket and gym sessions in my ongoing quest to be a
  fitness enthusiast. Here's to mixing passion with a dash of fun!
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic block mb-2">
            &quot;I am a human being with thoughts and feelings, just like you. And
            I&apos;m also a human being with a job to do.&quot;
            </span>
            <span className="bottom-0 left-0 italic text-sm">
              - Lord Michael Scott
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <img
                src="/signature.svg"
                alt="Example SVG"
                width="250"
                height="88"
              />
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="space-y-8"
            >
              {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
                <div key={categoryIndex} className="space-y-4">
                  {/* Category Heading */}
                  <h3 className="text-lg font-semibold text-gray-700 border-b-2 border-gray-300 pb-2">
                    {category}
                  </h3>
                  {/* Skills in this category */}
                  <div className="flex gap-3 flex-wrap">
                    {skills.map((skill, skillIndex) => (
                      <div
                        key={`${categoryIndex}-${skillIndex}`}
                        className="rounded-lg px-3 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-200 hover:scale-105 shadow-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-600 rounded"></div>
              
              {/* AWS Experience - Latest */}
              <div className="relative mb-16">
                <div className="flex items-center justify-between">
                  {/* LEFT SIDE - Content */}
                  <div className="w-5/12 pr-8 text-right">
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg shadow-sm">
                      Software Development Engineer Intern
                    </div>
                    {/* JOB DESC */}
                    <div className="p-3 text-sm italic">
                    Software Engineering Intern on the Aurora Serverless v2 – Placement Service team at AWS, migrating config management from DynamoDB to CreaMPuff (CMP), reducing manual updates by 90% and achieving 100% accuracy in rollout.
                    </div>
                    {/* JOB DATE */}
                    <div className="p-3 text-red-400 text-sm font-semibold">
                      May 2025 - Aug 2025
                    </div>
                    {/* JOB COMPANY */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit shadow-sm ml-auto">
                      Amazon Web Services (AWS)
                    </div>
                  </div>
                  
                  {/* CENTER - Timeline dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-5 h-5 rounded-full ring-4 ring-red-400 bg-white z-10 relative"></div>
                  </div>
                  
                  {/* RIGHT SIDE - Empty */}
                  <div className="w-5/12"></div>
                </div>
              </div>

              {/* RxLogix Associate Software Engineer II */}
              <div className="relative mb-16">
                <div className="flex items-center justify-between">
                  {/* LEFT SIDE - Empty */}
                  <div className="w-5/12"></div>
                  
                  {/* CENTER - Timeline dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-5 h-5 rounded-full ring-4 ring-red-400 bg-white z-10 relative"></div>
                  </div>
                  
                  {/* RIGHT SIDE - Content */}
                  <div className="w-5/12 pl-8">
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg shadow-sm">
                      Associate Software Engineer II
                    </div>
                    {/* JOB DESC */}
                    <div className="p-3 text-sm italic">
                      Implemented new features and fixed system bugs. Notably,
                      integrated WHO and KOREA MFDS Dictionaries, boosting
                      performance by 15% and reducing load times.
                    </div>
                    {/* JOB DATE */}
                    <div className="p-3 text-red-400 text-sm font-semibold">
                      Jan 2023 - May 2024
                    </div>
                    {/* JOB COMPANY */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit shadow-sm">
                      RxLogix Corporation
                    </div>
                  </div>
                </div>
              </div>

              {/* RxLogix Associate Software Engineer I */}
              <div className="relative mb-16">
                <div className="flex items-center justify-between">
                  {/* LEFT SIDE - Content */}
                  <div className="w-5/12 pr-8 text-right">
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg shadow-sm">
                      Associate Software Engineer I
                    </div>
                    {/* JOB DESC */}
                    <div className="p-3 text-sm italic">
                      Worked in the PVCM CE team, addressing client-reported bugs
                      with quick fixes. Implemented an automated email case intake
                      system.
                    </div>
                    {/* JOB DATE */}
                    <div className="p-3 text-red-400 text-sm font-semibold">
                      Nov 2021 - Jan 2023
                    </div>
                    {/* JOB COMPANY */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit shadow-sm ml-auto">
                      RxLogix Corporation
                    </div>
                  </div>
                  
                  {/* CENTER - Timeline dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-5 h-5 rounded-full ring-4 ring-red-400 bg-white z-10 relative"></div>
                  </div>
                  
                  {/* RIGHT SIDE - Empty */}
                  <div className="w-5/12"></div>
                </div>
              </div>

              {/* Cognetry Labs Intern */}
              <div className="relative mb-16">
                <div className="flex items-center justify-between">
                  {/* LEFT SIDE - Empty */}
                  <div className="w-5/12"></div>
                  
                  {/* CENTER - Timeline dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-5 h-5 rounded-full ring-4 ring-red-400 bg-white z-10 relative"></div>
                  </div>
                  
                  {/* RIGHT SIDE - Content */}
                  <div className="w-5/12 pl-8">
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg shadow-sm">
                      Software Engineer Intern
                    </div>
                    {/* JOB DESC */}
                    <div className="p-3 text-sm italic">
                      Used Python's Selenium and Beautiful Soup to scrape data,
                      increasing the product base by 40%. Implemented a ReactJS
                      demo request process to enhance user experience.
                    </div>
                    {/* JOB DATE */}
                    <div className="p-3 text-red-400 text-sm font-semibold">
                      Jan 2021 - Jul 2021
                    </div>
                    {/* JOB COMPANY */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit shadow-sm">
                      Cognetry Labs Inc.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="flex justify-center pt-8">
            <a
              href="/Akhil_Resume.pdf"
              download
              className="flex items-center hover:bg-slate-600 justify-center p-2 rounded-lg ring-1 ring-black bg-black text-white"
            >
              <FaFileDownload className="mr-2" /> My Resume
            </a>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
