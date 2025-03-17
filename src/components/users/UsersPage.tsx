import React from "react";
import AdminLayout from "../layout/AdminLayout";
import UserManagement from "./UserManagement";

const UsersPage = () => {
  return (
    <AdminLayout defaultTitle="Users">
      <UserManagement />
    </AdminLayout>
  );
};

export default UsersPage;
