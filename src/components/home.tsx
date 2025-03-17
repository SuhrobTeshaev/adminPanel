import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "./auth/LoginPage";
import UserManagement from "./users/UserManagement";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LayoutDashboard,
  Users,
  Building2,
  MessageSquare,
  Star,
  ListFilter,
  Settings,
  FileText,
  Clock,
  LogOut,
} from "lucide-react";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white flex flex-col">
        <div className="p-4 border-b border-blue-700">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-blue-700 hover:text-white"
              >
                <LayoutDashboard className="mr-2 h-5 w-5" />
                Dashboard
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start text-white bg-blue-700 hover:bg-blue-600"
              >
                <Users className="mr-2 h-5 w-5" />
                Users
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-blue-700 hover:text-white"
              >
                <Building2 className="mr-2 h-5 w-5" />
                Cities
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-blue-700 hover:text-white"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-blue-700 hover:text-white"
              >
                <Star className="mr-2 h-5 w-5" />
                Reviews
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-blue-700 hover:text-white"
              >
                <FileText className="mr-2 h-5 w-5" />
                Listings
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-blue-700 hover:text-white"
              >
                <Clock className="mr-2 h-5 w-5" />
                Requests
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-blue-700 hover:text-white"
              >
                <ListFilter className="mr-2 h-5 w-5" />
                Filters
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-blue-700 hover:text-white"
              >
                <Settings className="mr-2 h-5 w-5" />
                Settings
              </Button>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-blue-700">
          <Button
            variant="outline"
            className="w-full justify-start text-white border-white hover:bg-blue-700 hover:text-white"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              User Management
            </h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <span className="sr-only">Notifications</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                  A
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Admin User
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="container mx-auto py-6">
            <UserManagement />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
