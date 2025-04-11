import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router";

const Dropdown = ({ label = "Account", className }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className={className}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span className="font-medium">{label}</span>
      </button>

      <div
        className={`absolute right-0 z-20 mt-2 w-48 bg-white dark:bg-gray-800 rounded shadow-lg overflow-hidden transition-all duration-200 ease-out
        ${
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <NavLink to={"/Profile"}>Profile</NavLink>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <NavLink to={"/Settings"}>Settings</NavLink>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <NavLink to={"/"}>Logout</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
