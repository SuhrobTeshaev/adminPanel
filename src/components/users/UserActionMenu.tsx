import React from "react";
import {
  MoreHorizontal,
  Eye,
  Edit,
  Trash,
  Shield,
  ShieldCheck,
  ShieldX,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface UserActionMenuProps {
  userId?: string;
  onView?: (userId: string) => void;
  onEdit?: (userId: string) => void;
  onDelete?: (userId: string) => void;
  onStatusChange?: (
    userId: string,
    status: "confirmed" | "trusted" | "blocked",
  ) => void;
}

const UserActionMenu = ({
  userId = "user-123",
  onView = () => console.log("View user", userId),
  onEdit = () => console.log("Edit user", userId),
  onDelete = () => console.log("Delete user", userId),
  onStatusChange = (id, status) =>
    console.log(`Change status to ${status}`, id),
}: UserActionMenuProps) => {
  return (
    <div className="bg-white">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onView(userId)}>
            <Eye className="mr-2 h-4 w-4" />
            <span>View</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onEdit(userId)}>
            <Edit className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onDelete(userId)}
            className="text-destructive focus:text-destructive"
          >
            <Trash className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Status</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onStatusChange(userId, "confirmed")}>
            <Shield className="mr-2 h-4 w-4 text-blue-500" />
            <span>Set as Confirmed</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onStatusChange(userId, "trusted")}>
            <ShieldCheck className="mr-2 h-4 w-4 text-green-500" />
            <span>Set as Trusted</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onStatusChange(userId, "blocked")}>
            <ShieldX className="mr-2 h-4 w-4 text-red-500" />
            <span>Set as Blocked</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserActionMenu;
