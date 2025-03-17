import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoginPage from "./auth/LoginPage";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import AdminLayout from "./layout/AdminLayout";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleLogin = (username: string, password: string) => {
    setIsLoading(true);
    setAuthError(null);

    // Simulate authentication process
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        setIsAuthenticated(true);
        setAuthError(null);
      } else {
        setAuthError("Invalid username or password");
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <LoginPage
        onLogin={handleLogin}
        isLoading={isLoading}
        error={authError}
      />
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminLayout handleLogout={handleLogout} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="container mx-auto py-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
