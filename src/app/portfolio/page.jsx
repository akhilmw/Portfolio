"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Project Card Component
const ProjectCard = ({ item, index }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2"
    >
      {/* Project Card */}
      <div className={`relative h-80 sm:h-96 bg-gradient-to-br ${item.color} p-4 sm:p-6 flex flex-col justify-between`}>
        {/* Project Image */}
        <div className="relative w-full h-32 sm:h-48 rounded-lg overflow-hidden mb-3 sm:mb-4">
          <Image 
            src={item.img} 
            alt={item.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300" />
        </div>

        {/* Project Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gray-100 transition-colors leading-tight">
            {item.title}
          </h3>
          
          <p className="text-white text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 line-clamp-3">
            {item.desc}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
            {item.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-white bg-opacity-20 text-white text-xs rounded-full backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="w-full px-3 sm:px-4 py-2 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm">
                <FaExternalLinkAlt className="text-xs" />
                Live Demo
              </button>
            </Link>
            
            {item.githubLink && (
              <Link
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="w-full px-3 sm:px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm">
                  <FaGithub className="text-xs sm:text-sm" />
                  Code
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const items = [
  {
    id: 1,
    color: "from-indigo-400 to-purple-500",
    title: "Distributed Word Embeddings with Hadoop and AWS EMR",
    desc: "Implemented a distributed system to generate word embeddings and compute semantic similarities using Hadoop MapReduce and ND4J. Processed large datasets on AWS EMR, showcasing the integration of distributed systems and NLP.",
    img: "/LLM_1.png",
    link: "https://www.youtube.com/watch?v=Oc87pyydd-0",
    githubLink: "https://github.com/akhilmw/CS441_Fall2024_Assignment",
    tech: ["Hadoop", "MapReduce", "Amazon Elastic MapReduce (EMR)" , "JTokkit" , "Scala" , "Distributed Systems" , "Natural Language Processing (NLP)"]
  },
  {
    id: 2,
    color: "from-emerald-400 to-teal-500",
    title: "Building a Large Language Model Encoder (Part-2) with Apache Spark & AWS EMR",
    desc: "Built a distributed training pipeline for neural network models using Apache Spark and Deeplearning4j (DL4J). Implemented a sliding window approach for token sequence processing, contextual embeddings, and positional encoding, deployed on AWS EMR.",
    img: "/LLM_2.png",
    link: "https://www.youtube.com/watch?v=te6ZUrHZflo",
    githubLink: "https://github.com/akhilmw/CS441_Fall2024_Assignment_2",
    tech: ["Apache Spark", "AWS EMR", "Scala" , "Amazon S3", "IntelliJ IDEA"]
  },
  {
    id: 3,
    color: "from-orange-400 to-red-500",
    title: "Implementing a Conversational Agent with Ollama, Amazon Bedrock, Akka, gRPC, Docker",
    desc: "Developed a hybrid conversational system integrating AWS Bedrock for cloud-based LLM queries and Ollama for local LLM interactions. The microservices architecture leverages gRPC, Akka HTTP, and AWS Lambda for secure, scalable communication.",
    img: "/Conversational.png",
    link: "https://www.youtube.com/watch?v=PKA09SNOq60",
    githubLink: "https://github.com/akhilmw/CS441_Fall2024_Assignment_3",
    tech: ["Amazon Bedrock", "ollama", "gRPC", "Akka", "API Gateway ", "AWS Lambda", "Docker", "Microservices"]
  },
  {
    id: 4,
    color: "from-blue-500 to-cyan-400",
    title: "Assignment Auditor",
    desc: "Assignment Auditor is an efficient platform where code reviewers and students can seamlessly collaborate. Students can submit their assignments via GitHub, and available code reviewers can claim them, provide detailed code reviews with video URLs, and update the status to 'completed' or 'needs review.' This ensures that both parties are always aware of the status of their assignments and work.",
    img: "/assignmentAuditor.png",
    link: "http://51.20.78.25:5173/",
    githubLink: "https://github.com/akhilmw/AssignmentAuditor",
    tech: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: 5,
    color: "from-violet-500 to-purple-600",
    title: "TrackerGQL",
    desc: "TrackerGQL is a smart expense management application that allows you to track and manage your expenses on the fly. The app provides a convenient way to add expenses, specifying details such as amount, type (saving, expense, investment), payment type, location, and date. An interactive chart displays the distribution of your expenses, giving you a clear overview of your spending. You can also edit or delete existing transactions, making it easy to keep your records up to date.",
    img: "/dashboard.png",
    link: "https://trackergql.onrender.com/",
    githubLink: "https://github.com/akhilmw/TrackerGQL",
    tech: ["React", "GraphQL", "Apollo", "MongoDB"]
  },
  {
    id: 6,
    color: "from-pink-400 to-rose-500",
    title: "Translingo",
    desc: "Translingo is an advanced app for real-time language translation and transcription. It allows users to translate text and speech, transcribe audio, copy transcriptions, and download them. You can also choose from a variety of languages for translation.",
    img: "/translingo.png",
    link: "https://main.d2jur9d8gyvg5.amplifyapp.com/",
    githubLink: "https://github.com/akhilmw/TransLingo",
    tech: ["React", "AWS", "AI/ML", "API Integration"]
  },
  {
    id: 7,
    color: "from-green-500 to-emerald-600",
    title: "HercuFit",
    desc: "HercuFit – the app designed for those who are serious about their fitness journey. Whether you're a seasoned bodybuilder or just starting your path to strength, HercuFit helps you track, plan, and elevate your workouts like never before. With a sleek interface and powerful features, HercuFit ensures your training is not just effective but Herculean!",
    img: "/hercufit.png",
    link: "https://hercufit.netlify.app/",
    githubLink: "https://github.com/akhilmw/HercuFit",
    tech: ["React", "Firebase", "Tailwind CSS", "JavaScript"]
  },
  {
    id: 8,
    color: "from-yellow-400 to-orange-500",
    title: "Apod Nasa",
    desc: "The NASA APOD project showcases a new astronomy picture every day. Users can view the latest image along with its description, date, and other details provided by NASA's APOD API.",
    img: "/apod.png",
    link: "https://react-nasa-apod-project.netlify.app/",
    githubLink: "https://github.com/akhilmw/apod-nasa-app",
    tech: ["React", "NASA API", "Netlify", "CSS3"]
  }
];

const PortfolioPage = () => {
  const containerRef = useRef();

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-8xl text-center bg-gradient-to-r from-blue-100 to-purple-100 relative px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight"
        >
          My Projects
        </motion.h1>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center mt-6 sm:mt-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-600 text-xs sm:text-sm font-medium mb-2"
          >
            Scroll to explore
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-1 sm:mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16" ref={containerRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <ProjectCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-screen py-16 sm:py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight"
          >
            Liked my work?
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative inline-block"
          >
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px]"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
                />
              </defs>
              <text fill="#ffffff" fontSize="12 sm:text-14" textLength="600">
                <textPath xlinkHref="#circlePath" lengthAdjust="spacingAndGlyphs">
                  Full-Stack Developer • Backend Engineer • Problem Solver
                </textPath>
              </text>
            </motion.svg>
            
            <Link
              href="/contact"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 font-semibold text-xs sm:text-sm md:text-base"
            >
              Hire Me
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
