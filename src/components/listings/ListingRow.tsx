import React from "react";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ListingRow = ({ listing }) => {
  return (
    <tr className="border-b">
      <td className="p-4">{listing.id}</td>
      <td className="p-4 flex items-center">
        <img src={listing.image} alt={listing.product} className="w-10 h-10 mr-4" />
        {listing.product}
      </td>
      <td className="p-4">{listing.category}</td>
      <td className="p-4">{listing.price}</td>
      <td className="p-4">
        <span className={`px-2 py-1 rounded ${listing.status === "Опубликован" ? "bg-green-100 text-green-800" : listing.status === "Ожидает модерации" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>
          {listing.status}
        </span>
      </td>
      <td className="p-4">{listing.author}</td>
      <td className="p-4 flex space-x-2">
        <IconButton aria-label="view">
          <VisibilityIcon />
        </IconButton>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </td>
    </tr>
  );
};

export default ListingRow;