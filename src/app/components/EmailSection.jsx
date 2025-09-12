"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      
      <div className="z-10">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white my-2 transition-colors duration-300">
          Let&apos;s Connect
        </h5>
        <p className="text-gray-700 dark:text-[#ADB7BE] mb-4 max-w-md transition-colors duration-300">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4 sm:gap-6 items-center justify-center sm:justify-start flex-wrap">
          {/* GitHub Link */}
          <Link
            href="https://github.com/Pawina85"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-gray-800 dark:hover:border-white hover:scale-110 hover:shadow-lg transition-all duration-300"
            aria-label="Visit GitHub Profile"
          >
            <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
          </Link>

          {/* LinkedIn Link */}
          <Link
            href="https://www.linkedin.com/in/pawina-chanthachon"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900 border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:scale-110 hover:shadow-lg transition-all duration-300"
            aria-label="Visit LinkedIn Profile"
          >
            <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
          </Link>

          {/* WhatsApp Link */}
          <Link
            href="https://wa.me/66610296940"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900 border-2 border-gray-200 dark:border-gray-600 hover:border-green-500 dark:hover:border-green-400 hover:scale-110 hover:shadow-lg transition-all duration-300"
            aria-label="Contact via WhatsApp"
          >
            <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-300" />
          </Link>

          {/* Email Link */}
          <Link
            href="mailto:pawinachanthachon@gmail.com"
            className="group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900 border-2 border-gray-200 dark:border-gray-600 hover:border-red-500 dark:hover:border-red-400 hover:scale-110 hover:shadow-lg transition-all duration-300"
            aria-label="Send Email"
          >
            <FaEnvelope className="w-6 h-6 sm:w-7 sm:h-7 text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors duration-300" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-gray-900 dark:text-white block mb-2 text-sm font-medium transition-colors duration-300"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-gray-50 dark:bg-[#18191E] border-2 border-gray-200 dark:border-[#33353F] placeholder-gray-400 dark:placeholder-[#9CA2A9] text-gray-900 dark:text-gray-100 text-sm rounded-xl block w-full p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 shadow-sm"
                placeholder="pawinachanthachon@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-gray-900 dark:text-white block text-sm mb-2 font-medium transition-colors duration-300"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-gray-50 dark:bg-[#18191E] border-2 border-gray-200 dark:border-[#33353F] placeholder-gray-400 dark:placeholder-[#9CA2A9] text-gray-900 dark:text-gray-100 text-sm rounded-xl block w-full p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 shadow-sm"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-gray-900 dark:text-white block text-sm mb-2 font-medium transition-colors duration-300"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-gray-50 dark:bg-[#18191E] border-2 border-gray-200 dark:border-[#33353F] placeholder-gray-400 dark:placeholder-[#9CA2A9] text-gray-900 dark:text-gray-100 text-sm rounded-xl block w-full p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 shadow-sm min-h-[120px]"
                placeholder="Let's talk about..."
              />
            </div>
                        <button
              type="submit"
              className="bg-gradient-to-br from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-semibold py-3 px-6 rounded-xl w-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
