import React from "react";
import { LuUser } from "react-icons/lu";
import Dropdown from "./Dropdown";

const User = () => {
  return (
    <>
      <Dropdown
        label={<LuUser />}
        className="p-2 rounded-lg bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
      />
    </>
  );
};

export default User;
