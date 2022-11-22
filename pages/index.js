import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import Technology from "../components/technology";
import Projects from "../components/projects";
import { getProjects } from "../data";

export default function Home() {
  const featuredProjects = getProjects().filter((project) => {
    return project.featured;
  });
  return (
    <div className="mt-4 flex justify-center">
      <div className="flex flex-col items-center max-w-[600px] mx-5 px-2">
        {/* Header */}
        
        <div className="w-full flex items-center my-5">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">Ahmed Mohamed</h1>
            <h2 className="md:text-lg text-gray-500 dark:text-gray-400">
              (Developer / Student / Tea enjoyer)
            </h2>
          </div>
          <div className="ml-auto rounded-full align-middle w-[64px] h-[64px] md:w-[100px] md:h-[100px] border-4 border-beige-300 dark:border-transparent overflow-hidden">
            <Image
              src="/unempfrog.jpg"
              alt="avatar"
              width="200"
              height="200"
            />
          </div>
        </div>
        {/* Hero */}
        <div className="relative overflow-hidden w-full my-3 px-5 py-5 rounded-lg bg-beige-300 dark:bg-dark-300">
          <div className="h-[200px] top-0 left-0 w-[12px] absolute bg-indigo-500 "></div>
          <p className="ml-2">
            Hello, I'm a computer engineering student and aspiring software
            developer based in Canada!
          </p>
        </div>
        {/* <div>
          <p className="w-full my-3 px-5 py-5 rounded bg-beige-300">
            Hello, I'm a computer engineering student and aspiring software
            developer based in Canada!
          </p>
        </div> */}
        {/* Projects */}
        <div className="w-full mt-5">
          <h1 className="text-xl font-bold mb-5">Profile</h1>
          <p className="w-full my-3 px-5 py-5 rounded bg-beige-300 dark:bg-dark-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            fugiat quaerat vero facere sapiente voluptatem, ullam explicabo
            modi, accusantium, quo quis aperiam illum beatae voluptas laboriosam
            porro cum reprehenderit esse. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Magni fugiat quaerat vero facere
            sapiente voluptatem, ullam explicabo modi, accusantium, quo quis
            aperiam illum beatae voluptas laboriosam porro cum reprehenderit
            esse.
          </p>
        </div>
        {/* Projects */}
        <div className="w-full mt-5">
          <h1 className="text-xl font-bold mb-5">Works</h1>
          <Projects projects={featuredProjects} />
          <div className="flex justify-center">
            <Link scroll={false} href="/projects">
              <div className="my-5 py-3 px-4 bg-indigo-500 rounded text-white">
                All Projects
              </div>
            </Link>
          </div>
        </div>
        {/* Technologies */}
        <div className="w-full mt-5">
          <h1 className="text-xl font-bold mb-5">Technologies</h1>
          <Technology />
        </div>
      </div>
    </div>
  );
}
