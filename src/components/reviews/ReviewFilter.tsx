import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ReviewFilter = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleClear = () => {
    setSearchQuery("");
    onSearch("");
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <form onSubmit={handleSearch} className="relative flex-1 mr-4">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Поиск"
          className="pl-9 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-2.5"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>
        )}
      </form>
      <Button type="submit" onClick={handleSearch}>
        Найти
      </Button>
    </div>
  );
};

export default ReviewFilter;