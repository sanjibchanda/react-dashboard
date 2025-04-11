import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-4 space-y-4">
        <h2 className="text-2xl font-medium">404 | Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="rounded px-5 py-2 text-sm/6 font-medium bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-700"
        >
          Go to Home
        </button>
      </div>
    </>
  );
};

export default NotFound;
