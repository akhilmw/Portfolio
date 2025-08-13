"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Let's Connect";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl px-2 sm:px-4">
          <div className="text-center lg:text-left">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <span className="inline-block ml-2">😊</span>
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-base sm:text-lg md:text-xl flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center p-6 sm:p-8 md:p-12 lg:p-16 xl:p-24"
        >
          <span className="font-medium">Dear Akhil,</span>
          <textarea
            rows={4}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none text-sm sm:text-base md:text-lg p-2"
            name="user_message"
            placeholder="Your message here..."
          />
          <span className="font-medium">My email address is:</span>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none text-sm sm:text-base md:text-lg p-2"
            placeholder="your.email@example.com"
          />
          <span className="font-medium">Regards</span>
          <button className="bg-blue-400 hover:bg-blue-300 rounded-lg font-bold text-white p-3 sm:p-4 text-sm sm:text-base transition-colors duration-200">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold text-sm sm:text-base">
              Hey! I&rsquo;ve received your email. Thanks!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold text-sm sm:text-base">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
