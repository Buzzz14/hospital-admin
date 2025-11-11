"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserList from "@/components/UserList";

const Admin = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <UserList />
      </div>
    </main>
  );
};

export default Admin;
