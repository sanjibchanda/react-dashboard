import React from "react";
import { Link, useNavigate } from "react-router";
import SidebarToggle from "./SidebarToggle";
import ThemeToggle from "./ThemeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import User from "./User";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="sticky top-0 z-1 flex justify-between bg-gray-200 dark:bg-gray-800 p-4 transition-all duration-300 ease-in-out">
        <div className="flex items-center justify-between w-full">
          <SidebarToggle />

          <ul className="flex items-center gap-3">
            <li>
              <Link to="https://github.com/sanjibchanda" target="_blank">
                <FaLinkedin className="w-5 h-5" />
              </Link>
            </li>
            <li>
              <Link to="https://github.com/sanjibchanda" target="_blank">
                <FaGithub className="w-5 h-5" />
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
            <li>
              <User />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
