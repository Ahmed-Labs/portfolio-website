import React from "react";
import { BsFillSunFill, BsGithub, BsGlobe } from "react-icons/bs";
import Link from "next/link";

function Navbar() {
  return (
    <div className="sticky z-10 top-0 left-0 right-0 backdrop-blur-sm bg-white/30">
      <div className="flex items-center mx-4 py-1">
        <Link href="/">
          <div className="flex items-center">
            <div className="text-indigo-500"><BsGlobe size={25}/></div>
            <div className="font-bold text-sm leading-[15px] md:text-lg ml-2">Ahmed Mohamed</div>
          </div>
        </Link>

        <div className="ml-5">
          <ul className="flex text-gray-600">
            <li className="p-3">
              <Link href="/projects">Works</Link>
            </li>
            <li className="p-3">
              <Link href="https://github.com/Ahmed-Labs" rel="noreferrer" target="_blank">
                <div className="flex items-center">
                  <BsGithub />
                  <span className="px-1">Github</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white bg-indigo-500 p-3 text-xl font-bold rounded ml-auto">
          <BsFillSunFill />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
