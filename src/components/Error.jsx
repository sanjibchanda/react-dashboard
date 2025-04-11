import React from "react";
import { useRouteError, useNavigate } from "react-router";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[50dvh] space-y-2 text-center">
        <h3 className="text-lg font-medium">A error occurred.</h3>
        <p className="text-sm/6 text-gray-600">{error.message}</p>
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

export default Error;
