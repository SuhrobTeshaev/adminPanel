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
        
          <h1 className="text-3xl font-bold text-white mb-4">
            Admin Dashboard
          </h1>
          
        
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-slate-50">
        <div className="w-full max-w-md">
          
          <LoginForm onLogin={onLogin} isLoading={isLoading} error={error} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
