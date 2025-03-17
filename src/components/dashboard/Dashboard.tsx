import React from "react";
import AdminLayout from "../layout/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout defaultTitle="Dashboard">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium">Total Users</p>
            </div>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium">Active Listings</p>
            </div>
            <div className="text-2xl font-bold">567</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium">New Reviews</p>
            </div>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">
              +18% from last month
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium">Support Requests</p>
            </div>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">-2% from last month</p>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <p className="text-sm">New user registered: John Doe</p>
              <span className="ml-auto text-xs text-muted-foreground">
                2 minutes ago
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
              <p className="text-sm">New listing created: Luxury Apartment</p>
              <span className="ml-auto text-xs text-muted-foreground">
                15 minutes ago
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
              <p className="text-sm">New review submitted for City Tour</p>
              <span className="ml-auto text-xs text-muted-foreground">
                1 hour ago
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
              <p className="text-sm">
                User account blocked: suspicious activity
              </p>
              <span className="ml-auto text-xs text-muted-foreground">
                3 hours ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
