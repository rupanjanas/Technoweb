import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger & close icons

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="mx-10 mt-4 px-6 py-3 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">LOGO</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-regular font-poppins">
          <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#services" className="hover:text-blue-600 transition">Services</a></li>
          <li><a href="#portfolio" className="hover:text-blue-600 transition">Portfolio</a></li>
          <li><a href="#products" className="hover:text-blue-600 transition">Products</a></li>
          <li><a href="#careers" className="hover:text-blue-600 transition">Careers</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition">About Us</a></li>
          <li><a href="#insights" className="hover:text-blue-600 transition">Insights</a></li>
        </ul>

        {/* CTA Button */}
        <button className="ml-4 px-5 py-2 border-2 border-blue-600 text-blue-500 rounded-3xl bg-transparent hover:bg-blue-700 transition-colors duration-300 hidden md:block">
          Lets Talk →
        </button>

        {/* Hamburger Icon */}
        <div className="md:hidden text-gray-800 text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 bg-white/20 backdrop-blur-lg rounded-lg p-4 text-gray-800 font-poppins shadow-lg">
          <li><a href="#home" className="block hover:text-blue-600 transition">Home</a></li>
          <li><a href="#services" className="block hover:text-blue-600 transition">Services</a></li>
          <li><a href="#portfolio" className="block hover:text-blue-600 transition">Portfolio</a></li>
          <li><a href="#products" className="block hover:text-blue-600 transition">Products</a></li>
          <li><a href="#careers" className="block hover:text-blue-600 transition">Careers</a></li>
          <li><a href="#about" className="block hover:text-blue-600 transition">About Us</a></li>
          <li><a href="#insights" className="block hover:text-blue-600 transition">Insights</a></li>
          <li>
            <button className="w-full mt-2 px-5 py-2 border-2 border-blue-600 text-blue-500 rounded-3xl bg-transparent hover:bg-blue-700 transition-colors duration-300">
              Lets Talk →
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
