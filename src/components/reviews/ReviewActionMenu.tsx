import React from "react";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface ReviewActionMenuProps {
  reviewId?: string;
  onView?: (reviewId: string) => void;
  onEdit?: (reviewId: string) => void;
  onDelete?: (reviewId: string) => void;
}

const ReviewActionMenu = ({
  reviewId = "review-123",
  onView = () => console.log("View review", reviewId),
  onEdit = () => console.log("Edit review", reviewId),
  onDelete = () => console.log("Delete review", reviewId),
}: ReviewActionMenuProps) => {
  return (
    <div className="flex space-x-2">
      <IconButton onClick={() => onView(reviewId)} aria-label="view">
        <VisibilityIcon />
      </IconButton>
      <IconButton onClick={() => onEdit(reviewId)} aria-label="edit">
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => onDelete(reviewId)} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default ReviewActionMenu;
