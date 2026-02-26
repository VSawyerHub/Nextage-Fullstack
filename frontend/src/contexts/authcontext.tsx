"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
};

type AuthContextType = {
  auth: AuthState;
  setTokens: (accessToken: string | null, refreshToken?: string | null) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
  });

  // Initialize from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    setAuth({
      accessToken,
      refreshToken,
      isAuthenticated: !!accessToken,
    });
  }, []);

  const setTokens = (accessToken: string | null, refreshToken?: string | null) => {
    if (typeof window === "undefined") return;

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    } else {
      localStorage.removeItem("accessToken");
    }

    if (typeof refreshToken !== "undefined") {
      if (refreshToken) {
        localStorage.setItem("refreshToken", refreshToken);
      } else {
        localStorage.removeItem("refreshToken");
      }
    }

    setAuth({
      accessToken,
      refreshToken: refreshToken ?? auth.refreshToken,
      isAuthenticated: !!accessToken,
    });
  };

  const logout = () => {
    setTokens(null, null);
  };

  return (
    <AuthContext.Provider value={{ auth, setTokens, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
};
