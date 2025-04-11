import React from "react";
import { useNavigate } from "react-router";

const Documentation = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-medium">Documentation</h2>
      <p className="text-gray-600 dark:text-gray-100">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
        quibusdam pariatur veritatis voluptatum assumenda aliquam minima hic.
      </p>
      <button
        onClick={() => navigate("/dashboard")}
        type="button"
        className="rounded px-5 py-2 text-sm/6 font-medium bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
      >
        Go to dashboard
      </button>
    </div>
  );
};

export default Documentation;
