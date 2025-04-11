import React from "react";
import { useNavigate } from "react-router";

const Component = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="space-y-4">
        <ul className="flex md:flex-col gap-2.5 md:border-l border-gray-300 md:pl-4">
          <li onClick={() => navigate("/component")} className="cursor-pointer">
            Info
          </li>
          <li onClick={() => navigate("button")} className="cursor-pointer">
            Button
          </li>
          <li onClick={() => navigate("form")} className="cursor-pointer">
            Form
          </li>
          <li onClick={() => navigate("dynamic")} className="cursor-pointer">
            Dynamic
          </li>
        </ul>
      </div>
    </>
  );
};

export default Component;
