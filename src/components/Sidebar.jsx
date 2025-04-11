import { useSidebar } from "../contexts/SidebarContext";
import MenuItem from "./MenuItem";
import { menuItems } from "./MenuData";
import { FaReact } from "react-icons/fa6";
import { LuEllipsisVertical } from "react-icons/lu";

const Sidebar = () => {
  const { isOpen } = useSidebar();
  return (
    <aside
      className={`fixed md:sticky top-0 left-0 flex flex-col h-screen bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out shadow-lg ${
        isOpen ? "w-70" : "w-0 md:w-17"
      }`}
    >
      <div className="flex items-center gap-2 font-medium text-lg p-3">
        <FaReact className="w-10 h-10" />
        {isOpen && <span>Dashboard</span>}
      </div>

      <nav className="p-3">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <MenuItem item={item} />
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-gray-300 dark:border-gray-700 flex pt-3 mt-auto p-3">
        <FaReact size={40} />
        <div
          className={`flex justify-between items-center overflow-hidden transition-all ${
            isOpen ? "w-52 ml-3" : "w-0"
          } `}
        >
          <div className="leading-4">
            <h4 className="font-semibold">Dashboard</h4>
            <span className="text-xs text-gray-500 dark:text-gray-500">
              Dashboard@gmail.com
            </span>
          </div>
          <LuEllipsisVertical size={20} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
