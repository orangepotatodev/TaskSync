"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useAuth } from "./context/AuthContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !isLoading) {
      router.push("/dashboard");
    }
  }, [user, isLoading, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">AuthApp</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/signin" className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                  Sign In
                </Link>
                <Link href="/signup" className="px-4 py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 transition-colors">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Welcome to</span>
              <span className="block text-indigo-600">Our Authentication App</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              A simple, fast and secure way to authenticate users in your application.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="rounded-md shadow">
                <Link href="/signup" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Get Started
                </Link>
              </div>
              <div className="ml-3 rounded-md shadow">
                <Link href="/signin" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Sign In
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-indigo-500 text-3xl mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Secure Authentication</h3>
                <p className="mt-2 text-base text-gray-500">
                  Our authentication system ensures your data remains secure and protected.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-indigo-500 text-3xl mb-4">
                  <i className="fas fa-bolt"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Fast & Reliable</h3>
                <p className="mt-2 text-base text-gray-500">
                  Experience quick login times and reliable authentication services.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-indigo-500 text-3xl mb-4">
                  <i className="fas fa-user-friends"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-900">User Friendly</h3>
                <p className="mt-2 text-base text-gray-500">
                  Simple and intuitive interface for a seamless user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2023 AuthApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 