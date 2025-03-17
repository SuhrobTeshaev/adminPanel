import React, { useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import ReviewTable from "./ReviewTable";
import ReviewFilter from "./ReviewFilter";


const ReviewsPage = () => {
  const [filteredReviews, setFilteredReviews] = useState([
    {
      id: "0125136",
      product: "Беспроводные наушники",
      rating: 4,
      text: "Отличный продукт! Полностью доволен.",
      date: "04.03.2025",
      user: "Муродов Азиз Хабибович",
      status: "Опубликован" as "Опубликован" | "Ожидает модерации" | "Отклонен",
    },
    // Добавьте больше отзывов здесь
  ]);

  const handleSearch = (query: string) => {
    // Реализуйте логику поиска здесь
    console.log("Search query:", query);
  };

  return (
  
      <div className="space-y-6 bg-white rounded-2xl p-6">
        
        <ReviewFilter onSearch={handleSearch} />
        <ReviewTable reviews={filteredReviews} />
      </div>
   
  );
};

export default ReviewsPage;
