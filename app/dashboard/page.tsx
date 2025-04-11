"use client";

import { useAuth } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";
import Link from "next/link";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/dashboard" className="text-xl font-bold text-gray-800">
                  Dashboard
                </Link>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 mr-4">Welcome, {user?.name}</span>
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome to your Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg shadow border border-blue-100">
                <div className="text-blue-500 text-3xl mb-2">
                  <i className="fas fa-user-circle"></i>
                </div>
                <h2 className="text-xl font-semibold mb-2">Profile</h2>
                <p className="text-gray-600">View and edit your profile information</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg shadow border border-green-100">
                <div className="text-green-500 text-3xl mb-2">
                  <i className="fas fa-tasks"></i>
                </div>
                <h2 className="text-xl font-semibold mb-2">Tasks</h2>
                <p className="text-gray-600">Manage your tasks and projects</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg shadow border border-purple-100">
                <div className="text-purple-500 text-3xl mb-2">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h2 className="text-xl font-semibold mb-2">Analytics</h2>
                <p className="text-gray-600">View your activity and statistics</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Account Information</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Name:</span> {user?.name}</p>
                <p><span className="font-medium">Email:</span> {user?.email}</p>
                <p><span className="font-medium">Account ID:</span> {user?.id}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
} 