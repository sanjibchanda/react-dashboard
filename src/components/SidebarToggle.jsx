import { useSidebar } from "../contexts/SidebarContext";
import { LuPanelLeft } from "react-icons/lu";

const SidebarToggle = () => {
  const { isOpen, setIsOpen } = useSidebar();
  return (
    <button
      className={`p-2 rounded-lg bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition ${
        isOpen ? "ml-0" : "ml-0"
      }`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <LuPanelLeft />
    </button>
  );
};

export default SidebarToggle;
