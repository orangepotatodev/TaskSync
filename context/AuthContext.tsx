"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user data exists in localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
    setIsLoading(false);
  }, []);

  // Simple mock database for demo purposes
  const mockUsers: Record<string, { id: string; name: string; email: string; password: string }> = {};

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Check if email exists in our mock database and password matches
    const userKeys = Object.keys(mockUsers);
    const userExists = userKeys.find(key => mockUsers[key].email === email);
    
    if (userExists && mockUsers[userExists].password === password) {
      const userData = {
        id: mockUsers[userExists].id,
        name: mockUsers[userExists].name,
        email: mockUsers[userExists].email
      };
      
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      setIsLoading(false);
      return true;
    }
    
    // Check if this is stored in localStorage (for persistence between refreshes)
    const storedUsers = localStorage.getItem("mockUsers");
    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      const userKeys = Object.keys(parsedUsers);
      const userExists = userKeys.find(key => parsedUsers[key].email === email);
      
      if (userExists && parsedUsers[userExists].password === password) {
        const userData = {
          id: parsedUsers[userExists].id,
          name: parsedUsers[userExists].name,
          email: parsedUsers[userExists].email
        };
        
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        setIsLoading(false);
        return true;
      }
    }
    
    setIsLoading(false);
    return false;
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Check if email already exists in our mock database
    const storedUsers = localStorage.getItem("mockUsers") || "{}";
    const parsedUsers = JSON.parse(storedUsers);
    const userKeys = Object.keys(parsedUsers);
    const userExists = userKeys.some(key => parsedUsers[key].email === email);
    
    if (userExists) {
      setIsLoading(false);
      return false;
    }
    
    // Create new user
    const userId = `user_${Date.now()}`;
    const newUser = {
      id: userId,
      name,
      email,
      password
    };
    
    // Add to mock database
    parsedUsers[userId] = newUser;
    localStorage.setItem("mockUsers", JSON.stringify(parsedUsers));
    
    // Log the user in
    const userData = {
      id: userId,
      name,
      email
    };
    
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}; 