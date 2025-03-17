import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface AdminLayoutProps {
  children?: React.ReactNode;
  defaultTitle?: string;
}

const AdminLayout = ({
  children,
  defaultTitle = "Dashboard",
}: AdminLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [pageTitle, setPageTitle] = useState(defaultTitle);

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar collapsed={sidebarCollapsed} onToggle={handleSidebarToggle} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header title={pageTitle} />

        <main className="flex-1 overflow-auto p-6">
          {children || <Outlet />}
        </main>

        <footer className="border-t bg-white p-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Admin Dashboard. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
