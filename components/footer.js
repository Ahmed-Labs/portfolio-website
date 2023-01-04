import React from "react";
import Link from "next/link";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";
import { CompressedArrayTexture } from "three";
function Footer() {
  function copyText(text) {
    navigator.clipboard.writeText(text)
  }
  return (
    <div className="absolute bottom-0 left-0 right-0 mt-10 mx-4">
      <div className=" border-t-2 border-t-gray-400 dark:border-t-gray-500 py-3 flex items-center flex-col md:flex-row">
        <div className="md:mr-auto flex flex-row">
          <div className="flex items-center m-3">
            <Link
              href="https://github.com/Ahmed-Labs"
              rel="noreferrer"
              target="_blank"
            >
              <BsGithub />
            </Link>
          </div>
        </div>
        <div className="md:mx-auto flex flex-col items-center">
          {/* <div onClick={()=>copyText("ahmedelhagjr@gmail.com")} className="cursor-pointer transition ease-in-ou hover:bg-beige-300 hover:rounded mb-1">
            <p className="flex py-1 px-2">
              ahmedelhagjr@gmail.com{" "}
              <span className="flex items-center">
                <BsArrowUpRight size={12} />
              </span>
            </p>
          </div> */}
          <div onClick={()=>copyText("ahmedk.mohamed@mail.utoronto.ca")} className="cursor-pointer transition ease-in-out hover:bg-beige-300 hover:rounded mb-1 dark:hover:bg-dark-300">
            <p className="flex py-1 px-2">
              ahmedk.mohamed@mail.utoronto.ca{" "}
              <span className="flex items-center">
                <BsArrowUpRight size={12} />
              </span>
            </p>
          </div>

        </div>
        <div className="md:ml-auto">
          <Link scroll={false} href="/resume">
            <div className="my-3 md:my-0 py-3 px-4 bg-indigo-500 rounded text-white">
              Resume
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
