import { useTheme } from "../contexts/ThemeContext";
import { LuSun, LuMoon } from "react-icons/lu";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="p-2 rounded-lg bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <LuSun /> : <LuMoon />}
    </button>
  );
};

export default ThemeToggle;
