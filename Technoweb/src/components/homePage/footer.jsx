import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#232325] text-gray-300 py-12 px-6 sm:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Company Name */}
          <div className="col-span-1 md:col-span-4 lg:col-span-2 flex items-center lg:mb-0">
            <div className="w-8 h-8 bg-blue-500 rounded-full mr-3"></div>
            <span className="text-3xl font-bold text-white">Company Name</span>
          </div>

          {/* Write to Us */}
          <div>
            <h5 className="uppercase tracking-wider text-sm font-semibold text-white mb-4">Write to Us</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <FaEnvelope className="text-white mr-3" />
                <a href="mailto:support@trickydot.com" className="hover:text-white">support@trickydot.com</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-white mr-3" />
                <a href="mailto:use@trickydot.com" className="hover:text-white">use@trickydot.com</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-white mr-3" />
                <a href="mailto:usa@trickydot.com" className="hover:text-white">usa@trickydot.com</a>
              </li>
            </ul>
          </div>

          {/* Speak to Us */}
          <div>
            <h5 className="uppercase tracking-wider text-sm font-semibold text-white mb-4">Speak to Us</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                🇮🇳
                <a href="tel:+919847505959" className="hover:text-white ml-2">+91 9847 50 59 59</a>
              </li>
              <li className="flex items-center">
                🇦🇪
                <a href="tel:+971563969621" className="hover:text-white ml-2">+971 563 96 96 21</a>
              </li>
              <li className="flex items-center">
                🇺🇸
                <a href="tel:+13464641975" className="hover:text-white ml-2">+1 346 464 1975</a>
              </li>
            </ul>
          </div>

          {/* Located at */}
          <div>
            <h5 className="uppercase tracking-wider text-sm font-semibold text-white mb-4">Located at</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-white mr-3 mt-1" />
                <span>
                  Puthanathani Malappuram, <br />
                  Kerala, India - 676552
                </span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-white mr-3 mt-1" />
                <span>
                  Sharjah Media City (Shams) <br />
                  Al Messaned, Al Bataeh Sharjah, <br />
                  United Arab Emirates
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Line and Navigation */}
        <hr className="border-t border-blue-400 my-8" />
        
        <nav className="flex flex-wrap justify-center md:justify-start space-x-4 sm:space-x-6 text-sm mb-8">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Company</a>
          <a href="#" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Careers</a>
          <a href="#" className="hover:text-white">Portfolio</a>
          <a href="#" className="hover:text-white">Insights</a>
          <a href="#" className="hover:text-white">Gallery</a>
          <a href="#" className="hover:text-white">Contact</a>
        </nav>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm border-t border-blue-400 pt-6">
          <div className="text-center md:text-left md:mb-0">
            © 2025 TrickyDot Technologies Pvt. Ltd. All rights reserved. <br />
            <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms and Conditions</a> | <a href="#" className="hover:text-white">Disclaimer</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white flex items-center"><FaLinkedin className="mr-1" />LinkedIn</a>
            <a href="#" className="hover:text-white flex items-center"><FaInstagram className="mr-1" />Instagram</a>
            <a href="#" className="hover:text-white flex items-center"><FaFacebook className="mr-1" />Facebook</a>
            <a href="#" className="hover:text-white flex items-center"><FaTwitter className="mr-1" />Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;