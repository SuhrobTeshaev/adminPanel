import React, { useState } from "react";
import { ArrowDown, ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserStatusBadge from "./UserStatusBadge";
import UserActionMenu from "./UserActionMenu";

type SortDirection = "asc" | "desc" | null;

interface SortState {
  column: string | null;
  direction: SortDirection;
}

interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  accountType: string;
  registrationDate: Date;
  status: "confirmed" | "trusted" | "blocked";
}

interface UsersTableProps {
  users?: User[];
  onSort?: (column: string, direction: SortDirection) => void;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

const UsersTable = ({
  users = [
    {
      id: "USR001",
      name: "John Doe",
      phone: "+1 (555) 123-4567",
      email: "john.doe@example.com",
      accountType: "Customer",
      registrationDate: new Date(2023, 5, 15),
      status: "confirmed",
    },
    {
      id: "USR002",
      name: "Jane Smith",
      phone: "+1 (555) 987-6543",
      email: "jane.smith@example.com",
      accountType: "Business",
      registrationDate: new Date(2023, 7, 22),
      status: "trusted",
    },
    {
      id: "USR003",
      name: "Robert Johnson",
      phone: "+1 (555) 456-7890",
      email: "robert.j@example.com",
      accountType: "Customer",
      registrationDate: new Date(2023, 3, 10),
      status: "blocked",
    },
    {
      id: "USR004",
      name: "Emily Wilson",
      phone: "+1 (555) 234-5678",
      email: "emily.w@example.com",
      accountType: "Business",
      registrationDate: new Date(2023, 9, 5),
      status: "confirmed",
    },
    {
      id: "USR005",
      name: "Michael Brown",
      phone: "+1 (555) 876-5432",
      email: "michael.b@example.com",
      accountType: "Customer",
      registrationDate: new Date(2023, 2, 18),
      status: "trusted",
    },
  ],
  onSort = () => {},
  currentPage = 1,
  totalPages = 5,
  onPageChange = () => {},
}: UsersTableProps) => {
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
    <div className="bg-white rounded-md shadow">
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
              onClick={() => handleSort("name")}
            >
              Name {renderSortIcon("name")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("phone")}
            >
              Phone {renderSortIcon("phone")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("email")}
            >
              Email {renderSortIcon("email")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("accountType")}
            >
              Account Type {renderSortIcon("accountType")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("registrationDate")}
            >
              Registration Date {renderSortIcon("registrationDate")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("status")}
            >
              Status {renderSortIcon("status")}
            </TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.accountType}</TableCell>
              <TableCell>
                {format(user.registrationDate, "MMM d, yyyy")}
              </TableCell>
              <TableCell>
                <UserStatusBadge status={user.status} />
              </TableCell>
              <TableCell>
                <UserActionMenu userId={user.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between px-4 py-3 border-t">
        <div className="text-sm text-gray-700">
          Showing page {currentPage} of {totalPages}
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

export default UsersTable;
