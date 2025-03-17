import React from "react";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";

interface UserActionMenuProps {
  userId?: string;
  onView?: (userId: string) => void;
  onEdit?: (userId: string) => void;
}

const UserActionMenu = ({
  userId = "user-123",
  onView = () => console.log("View user", userId),
  onEdit = () => console.log("Edit user", userId),
}: UserActionMenuProps) => {
  return (
    <div className="flex space-x-2">
      <IconButton onClick={() => onView(userId)} aria-label="view">
        <AccountCircleIcon />
      </IconButton>
      <IconButton onClick={() => onEdit(userId)} aria-label="edit">
        <EditIcon />
      </IconButton>
    </div>
  );
};

export default UserActionMenu;
