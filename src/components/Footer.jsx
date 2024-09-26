import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-signature text-white">Abdul Raqeeb</h1>
            <p className="text-gray-500">
              Fullstack Developer & MERN Specialist
            </p>
          </div>

          {/* Links Section */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/raqeebclicks"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white duration-200"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/raqeebclicks/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white duration-200"
            >
              <FaLinkedin size={25} />
            </a>
            {/* <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white duration-200"
            >
              <FaTwitter size={25} />
            </a> */}
            <a
              href="mailto:raqeebclicks@gmail.com"
              className="hover:text-white duration-200"
            >
              <FaEnvelope size={25} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-gray-500">
            &copy; 2024 Abdul Raqeeb. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
