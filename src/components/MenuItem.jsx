import React from "react";
import { NavLink } from "react-router";
import { useSidebar } from "../contexts/SidebarContext";
import { LuChevronDown } from "react-icons/lu";

const MenuItem = ({ item }) => {
  const { isOpen, setIsOpen } = useSidebar();

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false); // Only auto-close on mobile
    }
  };

  return (
    <>
      {item.subMenu ? (
        <details className="group">
          <summary className="flex items-center py-2 px-3 rounded cursor-pointer transition-colors group text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-900">
            <item.icon className="w-5 h-5" />
            {isOpen && <span className="ml-2">{item.name}</span>}
            {isOpen && (
              <LuChevronDown className="group-open:rotate-180 transition-transform ml-auto" />
            )}
          </summary>
          <ul className={`pl-4 space-y-1 ${isOpen ? "block" : "hidden"}`}>
            {item.subMenu.map((sub, subIndex) => (
              <li key={subIndex}>
                <NavLink
                  to={sub.path}
                  onClick={handleClick}
                  className="flex items-center py-2 px-3 rounded cursor-pointer transition-colors group text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-900"
                >
                  <sub.icon className="w-5 h-5" />
                  {isOpen && <span className="ml-2">{sub.name}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </details>
      ) : (
        <NavLink
          to={item.path}
          onClick={handleClick}
          className="relative flex items-center py-2 px-3 rounded cursor-pointer transition-colors group text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-900"
        >
          <item.icon className="w-5 h-5" />
          {isOpen && <span className="ml-2">{item.name}</span>}
          {!isOpen && (
            <div
              className={`absolute left-full rounded-md px-2 py-1 ml-4 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
            >
              {item.name}
            </div>
          )}
        </NavLink>
      )}
    </>
  );
};

export default MenuItem;
