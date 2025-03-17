import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UsersIcon, UserPlusIcon } from "lucide-react";
import UserFilters from "./UserFilters";
import UsersTable from "./UsersTable";

interface UserManagementProps {
  title?: string;
  description?: string;
}

const UserManagement = ({
  title = "User Management",
  description = "Manage user accounts, view details, and modify user status.",
}: UserManagementProps) => {
  // State for filters and pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState<
    { from: Date | undefined; to: Date | undefined } | undefined
  >();
  const [statusFilter, setStatusFilter] = useState<string | undefined>();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null,
  );

  // Mock data for users
  const mockUsers = [
    {
      id: "USR001",
      name: "John Doe",
      phone: "+1 (555) 123-4567",
      email: "john.doe@example.com",
      accountType: "Customer",
      registrationDate: new Date(2023, 5, 15),
      status: "confirmed" as const,
    },
    {
      id: "USR002",
      name: "Jane Smith",
      phone: "+1 (555) 987-6543",
      email: "jane.smith@example.com",
      accountType: "Business",
      registrationDate: new Date(2023, 7, 22),
      status: "trusted" as const,
    },
    {
      id: "USR003",
      name: "Robert Johnson",
      phone: "+1 (555) 456-7890",
      email: "robert.j@example.com",
      accountType: "Customer",
      registrationDate: new Date(2023, 3, 10),
      status: "blocked" as const,
    },
    {
      id: "USR004",
      name: "Emily Wilson",
      phone: "+1 (555) 234-5678",
      email: "emily.w@example.com",
      accountType: "Business",
      registrationDate: new Date(2023, 9, 5),
      status: "confirmed" as const,
    },
    {
      id: "USR005",
      name: "Michael Brown",
      phone: "+1 (555) 876-5432",
      email: "michael.b@example.com",
      accountType: "Customer",
      registrationDate: new Date(2023, 2, 18),
      status: "trusted" as const,
    },
  ];

  // Handler functions
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleDateRangeChange = (range: any) => {
    setDateRange(range);
    setCurrentPage(1);
  };

  const handleStatusChange = (status: string) => {
    setStatusFilter(status === "all" ? undefined : status);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setDateRange(undefined);
    setStatusFilter(undefined);
    setCurrentPage(1);
  };

  const handleSort = (column: string, direction: "asc" | "desc" | null) => {
    setSortColumn(column);
    setSortDirection(direction);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full bg-gray-50 p-4 md:p-6">
      <Card className="w-full bg-white shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {title}
              </CardTitle>
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            </div>
            <Tabs defaultValue="all-users" className="mt-4 md:mt-0">
              <TabsList>
                <TabsTrigger value="all-users" className="flex items-center">
                  <UsersIcon className="mr-2 h-4 w-4" />
                  All Users
                </TabsTrigger>
                <TabsTrigger value="new-user" className="flex items-center">
                  <UserPlusIcon className="mr-2 h-4 w-4" />
                  New User
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <TabsContent value="all-users" className="mt-0">
            <div className="space-y-4">
              {/* Filters Section */}
              <UserFilters
                onSearch={handleSearch}
                onDateRangeChange={handleDateRangeChange}
                onStatusChange={handleStatusChange}
                onClear={handleClearFilters}
              />

              {/* Users Table */}
              <UsersTable
                users={mockUsers}
                onSort={handleSort}
                currentPage={currentPage}
                totalPages={5}
                onPageChange={handlePageChange}
              />
            </div>
          </TabsContent>

          <TabsContent value="new-user" className="mt-0">
            <div className="rounded-md border border-gray-200 p-6">
              <h3 className="text-lg font-medium">Add New User</h3>
              <p className="text-sm text-gray-500 mt-1 mb-4">
                This section will contain a form to add new users to the system.
              </p>
              {/* Placeholder for new user form */}
              <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-md">
                <p className="text-gray-500">
                  New user form will be implemented here
                </p>
              </div>
            </div>
          </TabsContent>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManagement;
