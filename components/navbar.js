import React, { useContext } from "react";
import { BsFillSunFill, BsGithub, BsGlobe } from "react-icons/bs";
import Link from "next/link";
import { ThemeContext } from "./themeContext";
function Navbar() {
  const {toggleFunction} = useContext(ThemeContext)
  return (
    <div className="sticky z-10 top-[10px] left-0 right-0 mx-4 rounded border border-gray-400 dark:border-gray-600 backdrop-blur-sm bg-white/30 dark:bg-none dark:bg-transparent">
      <div className="flex items-center px-1.5 py-1">
        <Link scroll={false} href="/">
          <div className="flex items-center">
      
            <div className="text-indigo-500 font-bold text-xl leading-[15px] ml-5">
              A
            </div>
          </div>
        </Link>

        <div className="ml-5">
          <ul className="flex text-gray-600 dark:text-gray-300">
            <li className="p-3">
              <Link scroll={false} href="/projects">
                Works
              </Link>
            </li>
            <li className="p-3">
              <Link
                href="https://github.com/Ahmed-Labs"
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center">
                  <BsGithub />
                  <span className="px-1">Github</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div
          onClick={() => {
            toggleFunction();
          }}
          className="text-white bg-indigo-500 p-3 text-xl font-bold rounded ml-auto cursor-pointer"
        >
          <BsFillSunFill />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
