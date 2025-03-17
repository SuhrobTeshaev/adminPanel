import React from "react";
import { Search, Filter, X } from "lucide-react";
import DatePickerWithRange from "@/components/ui/date-picker-with-range";
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
  onDateRangeChange?: (range: any) => void;
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleClear = () => {
    setSearchQuery("");
    onClear();
  };

  return (
    <div className="w-full bg-white p-4 rounded-md shadow-sm border border-gray-100">
      <div className="flex flex-col space-y-4 md:flex-row md:items-end md:space-y-0 md:space-x-4">
        {/* Search Input */}
        <div className="flex-1">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name, email, or phone..."
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
        <div className="md:w-auto">
          <DatePickerWithRange
            className="w-full md:w-auto"
            onChange={onDateRangeChange}
          />
        </div>

        {/* Status Filter */}
        <div className="md:w-48">
          <Select onValueChange={onStatusChange}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="trusted">Trusted</SelectItem>
              <SelectItem value="blocked">Blocked</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Filter Button */}
        <div>
          <Button variant="outline" className="w-full md:w-auto">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserFilters;
