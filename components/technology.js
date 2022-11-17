import React from "react";
import Image from "next/legacy/image";

function Technology() {
  const technologies = {
    Core: [
      {
        name: "HTML5",
        logo: "/technologies/html5.png",
      },
      {
        name: "CSS3",
        logo: "/technologies/css.svg",
      },
      {
        name: "JavaScript",
        logo: "/technologies/js.svg",
      },
      {
        name: "Python",
        logo: "/technologies/python.png",
      },
      {
        name: "C",
        logo: "/technologies/c.svg",
      },
      {
        name: "C++",
        logo: "/technologies/c++.svg",
      },
    ],
    Frontend: [
      {
        name: "React.js",
        logo: "/technologies/react.png",
      },
      {
        name: "Next.js",
        logo: "/technologies/next.png",
      },
      {
        name: "Tailwind",
        logo: "/technologies/tailwind.png",
      },
    ],
    Backend: [
      {
        name: "Node.js",
        logo: "/technologies/node.svg",
      },
      {
        name: "Express.js",
        logo: "/technologies/express.svg",
      },
      {
        name: "Firebase",
        logo: "/technologies/firebase.svg",
      },
    ],
    "Databases / Tools": [
      {
        name: "MongoDB",
        logo: "/technologies/mongodb.svg",
      },
      {
        name: "FireStore",
        logo: "/technologies/firestore.png",
      },
      {
        name: "Git",
        logo: "/technologies/git.png",
      },
    ],
  };
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      {Object.keys(technologies).map((category) => {
        return (
          <div key={category} className="col-span-1 p-6 rounded-lg bg-beige-300 flex flex-col">
            <h1 className="text-center text-lg mb-2">{category}</h1>
            <div className="w-full grid grid-cols-3 gap-3">
              {technologies[category].map((tech) => {
                return (
                  <div key={tech.name} className="p-3 flex flex-col items-center">
                    <div className="h-[50px] w-[50px]">
                      <Image alt={tech.name} src={tech.logo} height="64" width="64" />
                    </div>
                    <span className="mt-auto pt-3">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Technology;
