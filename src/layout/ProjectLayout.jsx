import React from "react";
import { Outlet } from "react-router";

const ProjectLayout = () => {
  return (
    <>
      <div className="p-4 space-y-4">
        <h2 className="text-2xl font-medium">Projects</h2>
        <p className="text-sm/6 text-gray-600">List of current projects</p>
        <Outlet />
      </div>
    </>
  );
};

export default ProjectLayout;
