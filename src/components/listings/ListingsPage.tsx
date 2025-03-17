import React from "react";
import AdminLayout from "../layout/AdminLayout";

const ListingsPage = () => {
  return (
    <AdminLayout defaultTitle="Listings">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Listings Management
        </h2>
        <p className="text-muted-foreground">
          Manage property and service listings.
        </p>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Listings List</h3>
          <p className="text-sm text-muted-foreground mb-4">
            This section will contain the listings management interface.
          </p>
          <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-md">
            <p className="text-gray-500">
              Listings management interface will be implemented here
            </p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ListingsPage;
