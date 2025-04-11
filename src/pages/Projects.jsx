import React from "react";
import { Link, useLoaderData } from "react-router";

const getStatus = (status) => {
  switch (status) {
    case "Pending":
      return "bg-red-50 text-red-700 ring-red-600/10";
    case "In Progress":
      return "bg-yellow-50 text-yellow-800 ring-yellow-600/20";
    case "Completed":
      return "bg-green-50 text-green-700 ring-green-600/20";
    default:
      return "bg-gray-50 text-gray-600 ring-gray-500/10";
  }
};

const Projects = () => {
  const projectsData = useLoaderData();
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
        {projectsData.map((project) => {
          return (
            <Link
              to={project.id.toString()}
              key={project.id}
              className="bg-gray-100 p-3 space-y-1 flex flex-col"
            >
              <h3 className="text-lg font-medium">{project.name}</h3>
              <p className="text-sm/6 font-medium ">
                <span
                  className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${getStatus(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </p>
              <p className="text-sm/6 text-gray-600 ">{project.description}</p>
              <p className="text-sm/6 font-medium">{project.assignedTo}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Projects;

export const ProjectsLoader = async () => {
  const res = await fetch("http://localhost:5000/projects");
  return res.json();
};
