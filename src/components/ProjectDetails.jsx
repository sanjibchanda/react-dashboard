import React from "react";
import { useLoaderData } from "react-router";
const ProjectDetails = () => {
  const productDetails = useLoaderData();
  return (
    <>
      <div className="bg-gray-100 p-3 space-y-1 flex flex-col mt-5">
        <p className="text-sm/6 text-gray-600">
          <span className="font-medium text-black">Project name: </span>
          {productDetails.name}
        </p>
        <p className="text-sm/6 text-gray-600">
          <span className="font-medium text-black">status: </span>

          {productDetails.status}
        </p>
        <p className="text-sm/6 text-gray-600">
          <span className="font-medium text-black">Description: </span>
          {productDetails.description}
        </p>
        <p className="text-sm/6 text-gray-600 font-medium mb-5">
          <span className="font-medium text-black">assigned To: </span>
          {productDetails.assignedTo}
        </p>
      </div>
    </>
  );
};

export default ProjectDetails;

export const projectDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(
    "https://cheerful-brigadeiros-ee8987.netlify.app/data.json"
  );

  if (!res.ok) {
    throw new Error(`Couldn't fetch project data`);
  }

  const data = await res.json();
  const project = data.find((item) => item.id === id); // assuming id is a string

  if (!project) {
    throw new Error(`Project with id ${id} not found`);
  }

  return project;
};

// export const projectDetailsLoader = async ({ params }) => {
//   const { id } = params;
//   const res = await fetch("http://localhost:5000/projects/" + id);
//   if (!res.ok) {
//     throw new Error(`Couldn't connect to project: ${id}`);
//   }
//   return res.json();
// };
