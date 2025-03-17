import React from "react";
import {
  Search,
  Plus,
  Edit,
  Trash,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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
import AdminLayout from "../layout/AdminLayout";

const CitiesPage = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here
  };

  const handleClear = () => {
    setSearchQuery("");
    // Implement clear logic here
  };

  return (
    // <AdminLayout defaultTitle="Cities">
      <div className="p-4 bg-white rounded-2xl">
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
                <Trash className="h-4 w-4 text-gray-400" />
              </button>
            )}
          </form>
          <Button variant="default" className="flex items-center">
            <Plus className="mr-2 h-4 w-4" />
            Добавить
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Название города (RU)</TableHead>
              <TableHead>Номи шаҳр (TJ)</TableHead>
              <TableHead>City name (EN)</TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Mock data for demonstration */}
            {[
              { ru: "Душанбе", tj: "Душанбе", en: "Dushanbe" },
              { ru: "Худжанд", tj: "Хуҷанд", en: "Khujand" },
              { ru: "Курган-Тюбе", tj: "Қурғон-Тепа", en: "Kurgan-Tyube" },
              { ru: "Куляб", tj: "Кӯлоб", en: "Kulyab" },
              { ru: "Истаравшан", tj: "Истаравшан", en: "Istaravshan" },
              { ru: "Турсунзаде", tj: "Турсунзода", en: "Tursunzadeh" },
              { ru: "Вахдат", tj: "Ваҳдат", en: "Vahdat" },
              { ru: "Канибадам", tj: "Конибодом", en: "Kanibadam" },
              { ru: "Исфара", tj: "Исфара", en: "Isfara" },
            ].map((city, index) => (
              <TableRow key={index}>
                <TableCell>{city.ru}</TableCell>
                <TableCell>{city.tj}</TableCell>
                <TableCell>{city.en}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
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
    // </AdminLayout>
  );
};

export default CitiesPage;
