import React from "react";
import AdminLayout from "../layout/AdminLayout";

const FiltersPage = () => {
  return (
    <AdminLayout defaultTitle="Filters">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Filters Configuration
        </h2>
        <p className="text-muted-foreground">
          Manage system filters and search parameters.
        </p>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Filters Settings</h3>
          <p className="text-sm text-muted-foreground mb-4">
            This section will contain the filters configuration interface.
          </p>
          <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-md">
            <p className="text-gray-500">
              Filters configuration interface will be implemented here
            </p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default FiltersPage;
