import React, { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="py-4 px-4 lg:px-12 w-full fixed top-0 left-0 h-16 z-10 ">
        <div className="md:flex items-center justify-center py-2 md:px-5 px-2">
          <p className="md:hidden text-lg font-semibold">Dev.SK</p>
          <div className="absolute right-4 top-6 md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6 " />
              )}
            </button>
          </div>
          <ul
            className={`md:flex items-center gap-x-5 absolute md:static left-0 md:w-auto w-full md:pl-0 pl-7 transition-all duration-500 ease-in sm:bg-[#0A0A0A] ${
              isOpen
                ? "top-[50px] opacity-100"
                : "top-[-490px] md:opacity-100 opacity-0"
            }`}
          >
            <li className="md:my-0 my-7 relative  cursor-pointer hover:underline hover:underline-offset-4">
              Featured Projects
            </li>
            <li className="md:my-0 my-7 relative hover:underline hover:underline-offset-4 cursor-pointer">
              About me
            </li>
            <li className="md:my-0 my-7 relative hover:underline hover:underline-offset-4 cursor-pointer">
              Testimonial
            </li>
            <li
              className="md:my-0 my-7 relative hover:underline hover:underline-offset-4
             cursor-pointer"
            >
              Skills
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
