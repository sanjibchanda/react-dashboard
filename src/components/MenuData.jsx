import {
  LuHouse,
  LuLayoutDashboard,
  LuNotepadText,
  LuSettings,
  LuUser,
  LuBookOpen,
  LuComponent,
} from "react-icons/lu";

export const menuItems = [
  { name: "Home", path: "/", icon: LuHouse },
  {
    name: "Dashboard",
    path: "dashboard",
    icon: LuLayoutDashboard,
  },
  { name: "Projects", path: "projects", icon: LuNotepadText },
  { name: "Component", path: "component", icon: LuComponent },
  {
    name: "Settings",
    icon: LuSettings,
    subMenu: [{ name: "Profile", path: "Profile", icon: LuUser }],
  },
  { name: "Documentation", path: "documentation", icon: LuBookOpen },
];
