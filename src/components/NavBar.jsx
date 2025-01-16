import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* Logo */}
        <img src="/brand-logo.png" alt="Logo" className="h-10 sm:h-15" />

        {/* Hamburger Icon */}
        <div
          className="block md:hidden cursor-pointer text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>


        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-5 lg:gap-7 absolute md:static top-0 left-0 w-full md:w-auto bg-black md:bg-transparent bg-opacity-80 p-5 md:p-0 items-center`}
        >
          <li>
            <a
              href="#"
              className="cursor-pointer text-white hover:text-gray hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="cursor-pointer text-white hover:text-gray hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#"
              className="cursor-pointer text-white hover:text-gray hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
            >
              Academy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="cursor-pointer text-white hover:text-gray hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
              Contact
            </a>
          </li>
          <li className="md:hidden">
            <button
              className="bg-white px-6 py-2 text-sm rounded-full hover:drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]"
              // onClick={toggleMenu}
              >
              Recruitment
            </button>
          </li>
          <li className="md:hidden">
            <a
              href="#"
              className="cursor-pointer text-white hover:text-gray hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]" onClick={toggleMenu}>
              Close Navigation
            </a>
          </li>
        </ul>

        {/* Recruitment Button (Desktop only) */}
        <button className="hidden md:block bg-white px-6 py-2 text-sm rounded-full hover:drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
          Recruitment
        </button>
      </div>
    </div>
  );
};

export default NavBar;
