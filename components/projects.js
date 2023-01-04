import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

function Projects({ projects }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => {
        return (
          <div key={project.name}>
            <Link
              scroll={false}
              href={
                "/projects/" + project.name.replace(/\s+/g, "-").toLowerCase()
              }
            >
              <div className="flex flex-col bg-beige-300 transition-all border border-transparent hover:border-black hover:cursor-pointer dark:hover:border-white dark:bg-dark-300 rounded py-3 px-4">
                {/* <div className="h-[200px] w-full md:w-[250px] rounded-lg overflow-hidden">
              <div className="h-full w-full relative">
                <Image
                  alt={project.name}
                  src={project.banner}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div> */}
                <div className="p-2">
                  <p className="py-1 text-lg font-semibold dark:text-gray-100">
                    {project.name}
                  </p>

                  <p className="py-2 dark:text-gray-300">
                    {project.description}
                  </p>
                  {/* <div className="flex">
                  {project.stack.slice(0,3).map((s) => (
                    <div className="text text-gray-700 mr-2 px-1 rounded">{s}</div>
                  ))}
                </div> */}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
