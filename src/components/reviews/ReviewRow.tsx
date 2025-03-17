import React from "react";
import { TableRow, TableCell } from "@mui/material";
import ReviewActionMenu from "./ReviewActionMenu";

const ReviewRow = ({ review }) => {
  return (
    <TableRow>
      <TableCell>{review.id}</TableCell>
      <TableCell>{review.product}</TableCell>
      <TableCell>{review.rating}</TableCell>
      <TableCell>{review.text}</TableCell>
      <TableCell>{review.date}</TableCell>
      <TableCell>{review.user}</TableCell>
      <TableCell>
        <span
          className={`px-2 py-1 rounded ${
            review.status === "Опубликован"
              ? "bg-green-100 text-green-800"
              : review.status === "Ожидает модерации"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {review.status}
        </span>
      </TableCell>
      <TableCell>
        <ReviewActionMenu reviewId={review.id} />
      </TableCell>
    </TableRow>
  );
};

export default ReviewRow;
