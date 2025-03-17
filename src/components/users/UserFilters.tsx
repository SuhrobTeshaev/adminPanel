import React from "react";
import { Search, X } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface UserFiltersProps {
  onSearch?: (query: string) => void;
  onDateRangeChange?: (range: {
    startDate: Date | null;
    endDate: Date | null;
  }) => void;
  onStatusChange?: (status: string) => void;
  onClear?: () => void;
}

const UserFilters = ({
  onSearch = () => {},
  onDateRangeChange = () => {},
  onStatusChange = () => {},
  onClear = () => {},
}: UserFiltersProps) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleClear = () => {
    setSearchQuery("");
    setStartDate(null);
    setEndDate(null);
    onClear();
  };

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onDateRangeChange({ startDate: start, endDate: end });
  };

  return (
    <div className="w-full bg-white p-4 rounded-md  mb-4">
      <div className="flex flex-col space-y-4 md:flex-row md:items-end md:space-y-0 md:space-x-4">
        {/* Search Input */}
        <div className="flex-1">
          <form onSubmit={handleSearch} className="relative">
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
        </div>

        {/* Date Range Picker */}
        <div className="md:w-auto flex space-x-2 items-center">
          <label className="text-gray-700">Период с</label>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsStart
            selectsRange
            placeholderText=" период"
            className="w-full md:w-auto px-2 py-[5px]  border rounded-md"
          />
          <label className="text-gray-700">по</label>
          <DatePicker
            selected={endDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsEnd
            selectsRange
            placeholderText="Выберите период"
            className="w-full md:w-auto px-3 py-[5px] border rounded-md"
          />
        </div>

        {/* Status Filter */}
        <div className="md:w-48">
          <Select onValueChange={onStatusChange}>
            <SelectTrigger>
              <SelectValue placeholder="Статус" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все статусы</SelectItem>
              <SelectItem value="confirmed">Подтвержденный</SelectItem>
              <SelectItem value="trusted">Доверенный</SelectItem>
              <SelectItem value="blocked">Заблокированный</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Filter Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="default"
            className="w-full md:w-auto bg-[#D6EDFF] text-[#0053E2]"
          >
            Применить фильтр
          </Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
            onClick={handleClear}
          >
            Сброс фильтра
          </Button>
          <Button
            variant="outline"
            className="w-full md:w-auto bg-[#0053E2] text-white"
            onClick={handleClear}
          >
            Добавить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserFilters;
