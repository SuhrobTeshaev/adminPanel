import React, { useState } from "react";
import AdminLayout from "../layout/AdminLayout";

import ReviewFilter from "../reviews/ReviewFilter";
import ListingTable from "./ListingTable";

const ListingsPage = () => {
  const [filteredListings, setFilteredListings] = useState([
    {
      id: "0125136",
      product: "Беспроводные наушники",
      image: "path/to/image.jpg",
      category: "Мобильные аксессуары",
      price: 500,
      status: "Опубликован" as "Опубликован" | "Ожидает модерации" | "Отклонен",
      author: "Муродов Азиз Хабибович",
    },
    // Добавьте больше объявлений здесь
  ]);

  const handleSearch = (query: string) => {
    // Реализуйте логику поиска здесь
    console.log("Search query:", query);
  };

  return (
    
      <div className="space-y-6 bg-white rounded-2xl p-6">
        
        <ReviewFilter onSearch={handleSearch} />
        <ListingTable listings={filteredListings} />
      </div>
   
  );
};

export default ListingsPage;
