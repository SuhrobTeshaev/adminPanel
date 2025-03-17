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
import ListingRow from "./ListingRow";


type SortDirection = "asc" | "desc" | null;

interface SortState {
  column: string | null;
  direction: SortDirection;
}

interface Listing {
  id: string;
  product: string;
  image: string;
  category: string;
  price: number;
  status: "Опубликован" | "Ожидает модерации" | "Отклонен";
  author: string;
}

interface ListingTableProps {
  listings?: Listing[];
  onSort?: (column: string, direction: SortDirection) => void;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

const ListingTable = ({
  listings = [],
  onSort = () => {},
  currentPage = 1,
  totalPages = 5,
  onPageChange = () => {},
}: ListingTableProps) => {
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
              onClick={() => handleSort("category")}
            >
              Категория {renderSortIcon("category")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("price")}
            >
              Цена (TJS) {renderSortIcon("price")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("status")}
            >
              Статус {renderSortIcon("status")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("author")}
            >
              Автор {renderSortIcon("author")}
            </TableHead>
            <TableHead>Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listings.map((listing) => (
            <ListingRow key={listing.id} listing={listing} />
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

export default ListingTable;