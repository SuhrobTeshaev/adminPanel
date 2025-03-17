import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
  handleLogout: () => void;
}

const Sidebar = ({
  collapsed = false,
  onToggle = () => {},
  handleLogout,
}: SidebarProps) => {
  const location = useLocation();
  const [expanded, setExpanded] = React.useState(!collapsed);

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setExpanded(!expanded);
    onToggle();
  };

  const navItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      path: "/dashboard",
    },
    { icon: <Users size={20} />, label: "Users", path: "/users" },
    { icon: <Building2 size={20} />, label: "Cities", path: "/cities" },
    { icon: <MessageSquare size={20} />, label: "Chat", path: "/chat" },
    { icon: <Star size={20} />, label: "Reviews", path: "/reviews" },
    { icon: <FileText size={20} />, label: "Listings", path: "/listings" },
    { icon: <Clock size={20} />, label: "Requests", path: "/requests" },
    { icon: <ListFilter size={20} />, label: "Filters", path: "/filters" },
    { icon: <Settings size={20} />, label: "Settings", path: "/settings" },
  ];

  function setIsAuthenticated(arg0: boolean) {
    throw new Error("Function not implemented.");
  }

  return (
    <aside
      className={cn(
        "h-full bg-slate-800 text-white transition-all duration-300 flex flex-col",
        expanded ? "w-64" : "w-16"
      )}
    >
      <div className="p-4 flex items-center justify-between border-b border-slate-700">
        {expanded && <h1 className="text-xl font-bold">Admin Panel</h1>}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="text-white hover:bg-slate-700 ml-auto"
        >
          {expanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </Button>
      </div>

      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link to={item.path}>
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-start text-white hover:bg-slate-700",
                            isActive ? "bg-slate-700" : "",
                            expanded ? "px-4" : "px-0 justify-center"
                          )}
                        >
                          <span className="mr-2">{item.icon}</span>
                          {expanded && <span>{item.label}</span>}
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    {!expanded && (
                      <TooltipContent side="right">{item.label}</TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-700 flex justify-center">
        <Button
          variant="outline"
          className="w-full justify-start text-black border-white hover:bg-slate-700"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-5 w-5" />
          {expanded && <span>Выход</span>}
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
