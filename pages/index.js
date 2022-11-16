import Head from "next/head";
import Image from "next/image";
import { BsFillSunFill } from 'react-icons/bs';

export default function Home() {
  return (
    <div className="font-Lato w-full h-full bg-beige-500">
      <div className="sticky z-10 top-0 left-0 right-0 backdrop-blur bg-white/30 flex justify-center items-center">
        <div className="flex items-center w-[700px] mx-2 py-1">
          <div className="font-bold text-lg mx-4">Ahmed Mohamed</div>
          <div className="ml-5">
            <ul className="flex text-gray-600">
              <li className="p-3 font-semibold">Works</li>
              <li className="p-3 font-semibold">Source</li>
            </ul>
          </div>
          <div className="text-white bg-indigo-500 p-3 text-xl font-bold rounded ml-auto">
            <BsFillSunFill />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center relative max-w-[600px] mx-5 px-2">
          {/* Header */}
          <div className="w-full flex items-center my-5">
            <div>
              <h1 className="text-2xl font-bold">Ahmed Mohamed</h1>
              <h2 className="text-lg font-semibold text-gray-500">
                (Developer / Student / Tea enjoyer)
              </h2>
            </div>
            <div className="ml-auto rounded-full align-middle w-[100px] h-[100px] border-4 border-white overflow-hidden">
              <Image src="/avatar.jpg" alt="avatar" width="200" height="200" />
            </div>
          </div>
          {/* Hero */}
          <div>
            <p className="w-full my-3 px-5 py-3 rounded bg-beige-300">
              Hello, I'm a computer engineering student and aspiring software
              developer based in Canada!
            </p>
          </div>
          {/* Technologies */}
          <div className="w-full h-[1000px] my-5">
            <h1 className="text-xl font-bold">Technologies</h1>
          </div>
          {/* Projects */}
          <div>
            <h1 className="pb-20">Projects</h1>
          </div>
          {/* Footer */}
          <div>
            <h1 className="pb-20">Footer</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
