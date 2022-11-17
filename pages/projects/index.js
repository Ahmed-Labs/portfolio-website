import Link from "next/link";
import React from "react";
import Project from "../../components/projects";
import { getProjects } from "../../data";

function AllProjects() {
  const AllProjects = getProjects();

  return (
    <div>
      <div className="mt-4 flex justify-center">
        <div className="flex flex-col items-center relative max-w-[600px] mx-5 px-2">
          <div className="w-full mt-5">
            <div className="mb-5">
              <h1 className="text-xl font-bold">All Projects</h1>
              <p className="text-gray-600">{AllProjects.length} projects</p>
            </div>
            <Project projects={AllProjects}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
