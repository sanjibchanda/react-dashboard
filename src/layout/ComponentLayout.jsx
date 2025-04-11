import React from "react";
import { Outlet } from "react-router";
import Component from "../pages/Component";

const ComponentLayout = () => {
  return (
    <>
      <div className="p-4 space-y-4">
        <h3 className="text-xl font-medium">Components</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Component />
          <div className="col-span-2">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentLayout;
