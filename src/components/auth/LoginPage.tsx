import React from "react";
import LoginForm from "./LoginForm";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface LoginPageProps {
  onLogin?: (username: string, password: string) => void;
  isLoading?: boolean;
  error?: string | null;
}

const LoginPage = ({
  onLogin = () => {},
  isLoading = false,
  error = null,
}: LoginPageProps = {}) => {
  return (
    <div className="flex h-screen bg-white">
      {/* Left side - Banner with Logo */}
      <div className="hidden md:flex md:w-1/2 bg-blue-800 flex-col justify-center items-center p-8">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <AspectRatio
              ratio={16 / 9}
              className="bg-blue-700 rounded-lg overflow-hidden w-48 h-48 mx-auto"
            >
              <div className="flex items-center justify-center h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-24 h-24 text-white"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
            </AspectRatio>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Admin Dashboard
          </h1>
          <p className="text-blue-100 mb-6">
            Manage your users, cities, listings, and more with our powerful
            admin dashboard.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-blue-700 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <span className="text-white">Comprehensive user management</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-700 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <span className="text-white">Advanced filtering and sorting</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-700 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <span className="text-white">Secure authentication system</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-slate-50">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-700">Admin Login</h2>
            <p className="text-gray-600 mt-2">
              Sign in to access the management system
            </p>
          </div>
          <LoginForm onLogin={onLogin} isLoading={isLoading} error={error} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
