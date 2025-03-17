import React, { useState } from "react";
import { Search, X, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import UserFilters from "./UserFilters";

type UserStatus = "confirmed" | "pending" | "rejected";

const UsersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here
  };

  const handleClear = () => {
    setSearchQuery("");
    // Implement clear logic here
  };

  const mockUsers = [
    {
      id: "012648",
      name: "Муродов Азиз Хабибович",
      phone: "+992 934566565",
      email: "your@example.com",
      accountType: "Компания",
      registrationDate: "04.03.2025",
      status: "confirmed" as UserStatus,
    },
    // Add more mock users as needed
  ];

  return (
    <div className="p-4 bg-white rounded-2xl">
      {/* <div className="flex justify-between items-center mb-4">
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
        <div className="flex space-x-2">
          <Button variant="default">Применить фильтр</Button>
          <Button variant="outline">Сброс фильтра</Button>
          <Button variant="default" className="flex items-center">
            <Plus className="mr-2 h-4 w-4" />
            Добавить
          </Button>
        </div>
      </div> */}

      <UserFilters />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID пользователя</TableHead>
            <TableHead>ФИО</TableHead>
            <TableHead>Телефон</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Тип аккаунта</TableHead>
            <TableHead>Дата регистрации</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead>Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.accountType}</TableCell>
              <TableCell>{user.registrationDate}</TableCell>
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

      <div className="flex items-center justify-between px-4 py-3 border-t">
        <div className="text-sm text-gray-700">Показано: 1-20 из 354</div>
        <div className="flex space-x-2">
          <button className="p-2 rounded-md border bg-white text-gray-700 disabled:opacity-50">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="p-2 rounded-md border bg-white text-gray-700 disabled:opacity-50">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
