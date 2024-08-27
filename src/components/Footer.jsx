import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa"; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Email and Instagram */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left mb-4 sm:mb-0">
            <div className="flex items-center mb-2 sm:mb-0 sm:mr-6">
              <FaEnvelope className="mr-2" />
              <a href="mailto:nithinv365@gmail.com" className="hover:underline">
                nithinv365@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaInstagram className="mr-2" />
              <a
                href="https://instagram.com/nithin_tarak_23"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Nithin Tarak
              </a>
            </div>
          </div>

          {/* Info about soil with links */}
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p>
              Learn more about soil and its importance:
              <a
                href="https://www.soils.org/about-soils"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline ml-1"
              >
                Soil Science Society of America
              </a>
              ,
              <a
                href="https://www.fao.org/soils-portal/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline ml-1"
              >
                FAO Soils Portal
              </a>
              .
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p>© 2024 Nithin Tarak. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
