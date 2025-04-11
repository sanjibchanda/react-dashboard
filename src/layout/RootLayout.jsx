import React from "react";
import { useSidebar } from "../contexts/SidebarContext";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  const { isOpen } = useSidebar();
  return (
    <>
      <div className="flex relative">
        <Sidebar />
        <main className="flex-1">
          <Navbar />
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
