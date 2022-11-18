import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

function Projects({ projects }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => {
        return (
          <div key={project.name} className="flex flex-col items-cener">
            <div className="h-[200px] w-full md:w-[250px] rounded-lg overflow-hidden">
              <div className="h-full w-full relative bg-white">
                <Image
                  alt={project.name}
                  src={project.banner}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="p-2">
              <Link
                scroll={false}
                href={
                  "/projects/" + project.name.replace(/\s+/g, "-").toLowerCase()
                }
              >
                <p className="py-1 text-lg font-semibold">{project.name}</p>
              </Link>
              <p className="py-2">{project.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
