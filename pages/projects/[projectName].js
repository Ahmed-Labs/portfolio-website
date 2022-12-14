import React from "react";
import { getProjects } from "../../data";
import { BsArrowUpRightSquare, BsBackspace } from "react-icons/bs";
import Image from "next/legacy/image";
import Link from "next/link";

function ProjectPage(props) {
  const projectInfo = props.projectInfo[0];
  return (
    <div className="mt-8 flex justify-center">
      <div className="flex flex-col max-w-[600px] mx-5 px-2">
        <div className="w-full  my-5">
          <div className="w-full mb-5 flex">
            <h1>
              {/* <Link href="/projects">
                <span className="text-indigo-500">Works </span>
              </Link>
              <span>{" / "}</span> */}
              <span className="text-xl font-bold">{projectInfo.name}</span>
              <span className="ml-2 rounded bg-beige-300 dark:bg-dark-300 px-2 py-1">
                Sept 2022
              </span>
            </h1>
            <div className="ml-auto flex items-center">
              <Link href="/projects">
                <BsBackspace size={22}/>
              </Link>
            </div>
          </div>
        </div>
        <p className="dark:text-gray-100">{projectInfo.description}</p>
        <div className="py-5">
          <span className="font-semibold">Website</span>
          <p className="text-blue-600 dark:text-blue-400">
            <a
              target="_blank"
              rel="noreferrer"
              href={projectInfo.website}
              className=""
            >
              <span className="inline-block">{projectInfo.website} </span>
              <span className="inline-block ml-1">
                <BsArrowUpRightSquare />
              </span>
            </a>
          </p>
        </div>
        <div className="pb-5">
          <span className="font-semibold">Repository</span>
          <p className="text-blue-600 dark:text-blue-400">
            <a
              target="_blank"
              rel="noreferrer"
              href={projectInfo.source}
              className=""
            >
              <span className="inline-block">{projectInfo.source} </span>
              <span className="inline-block ml-1">
                <BsArrowUpRightSquare />
              </span>
            </a>
          </p>
        </div>
        <div className="">
          <p className="font-semibold mr-4 mb-3">Stack</p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
            {projectInfo.stack.map((item) => {
              return (
                <p
                  key={item}
                  className="col-span-1 text-center px-2 py-1 rounded bg-beige-300 dark:bg-dark-300"
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
        <div className="my-7">
          {projectInfo.previews.map((preview, idx) => {
            return (
              <div key={idx} className="mb-4">
                <Image alt={idx} src={preview} height="400" width="600" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const projects = getProjects();
  const directories = projects.map((project) => ({
    params: { projectName: project.name.replace(/\s+/g, "-").toLowerCase() },
  }));
  return {
    paths: directories,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const curr = context.params.projectName;
  const projectInfo = getProjects().filter((project) => {
    return project.name.replace(/\s+/g, "-").toLowerCase() == curr;
  });

  if (!projectInfo) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      projectInfo,
    },
  };
}

export default ProjectPage;
