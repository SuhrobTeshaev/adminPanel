import React, { useState } from "react";
import { ArrowDown, ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ReviewRow from "./ReviewRow";

type SortDirection = "asc" | "desc" | null;

interface SortState {
  column: string | null;
  direction: SortDirection;
}

interface Review {
  id: string;
  product: string;
  rating: number;
  text: string;
  date: string;
  user: string;
  status: "Опубликован" | "Ожидает модерации" | "Отклонен";
}

interface ReviewTableProps {
  reviews?: Review[];
  onSort?: (column: string, direction: SortDirection) => void;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

const ReviewTable = ({
  reviews = [],
  onSort = () => {},
  currentPage = 1,
  totalPages = 5,
  onPageChange = () => {},
}: ReviewTableProps) => {
  const [sortState, setSortState] = useState<SortState>({
    column: null,
    direction: null,
  });

  const handleSort = (column: string) => {
    let direction: SortDirection = "asc";

    if (sortState.column === column) {
      if (sortState.direction === "asc") {
        direction = "desc";
      } else if (sortState.direction === "desc") {
        direction = null;
      }
    }

    setSortState({ column, direction });
    onSort(column, direction);
  };

  const renderSortIcon = (column: string) => {
    if (sortState.column !== column) {
      return null;
    }

    if (sortState.direction === "asc") {
      return <ArrowUp className="ml-1 h-4 w-4 inline" />;
    }

    if (sortState.direction === "desc") {
      return <ArrowDown className="ml-1 h-4 w-4 inline" />;
    }

    return null;
  };

  return (
    <div className="bg-white rounded-md ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("id")}
            >
              ID {renderSortIcon("id")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("product")}
            >
              Товар или услуга {renderSortIcon("product")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("rating")}
            >
              Оценка {renderSortIcon("rating")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("text")}
            >
              Текст отзыва {renderSortIcon("text")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("date")}
            >
              Дата регистрации {renderSortIcon("date")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("user")}
            >
              Пользователь {renderSortIcon("user")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("status")}
            >
              Статус {renderSortIcon("status")}
            </TableHead>
            <TableHead>Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.map((review) => (
            <ReviewRow key={review.id} review={review} />
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between px-4 py-3 border-t">
        <div className="text-sm text-gray-700">
          Показано: {currentPage * 20 - 19}-{currentPage * 20} из{" "}
          {totalPages * 20}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage <= 1}
            className="p-2 rounded-md border bg-white text-gray-700 disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage >= totalPages}
            className="p-2 rounded-md border bg-white text-gray-700 disabled:opacity-50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewTable;
