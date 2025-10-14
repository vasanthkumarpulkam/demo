import React, { createContext, useState, useEffect, useContext } from "react";
import { User } from "../types/user";

interface AuthContextType {
  currentUser: User | null;
  signIn: (email: string, password: string) => void;
  signUp: (userData: Partial<User>) => void;
  signOut: () => void;
  updateUser: (userData: Partial<User>) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("serviceHub_user");
    if (stored) {
      try {
        setCurrentUser(JSON.parse(stored));
      } catch (error) {
        console.error("Error parsing stored user data:", error);
        localStorage.removeItem("serviceHub_user");
      }
    }
    setIsLoading(false);
  }, []);

  const signIn = (email: string, password: string) => {
    setIsLoading(true);
    try {
      const user: User = {
        uid: `user_${Date.now()}`,
        email,
        displayName: email.split("@")[0],
        role: "customer",
        language: "en",
        isVerified: true
      };
      setCurrentUser(user);
      localStorage.setItem("serviceHub_user", JSON.stringify(user));
    } catch (error) {
      console.error("Sign in error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = (userData: Partial<User>) => {
    setIsLoading(true);
    try {
      const user: User = {
        uid: `user_${Date.now()}`,
        email: userData.email || "",
        displayName: userData.displayName || "",
        role: userData.role || "customer",
        language: userData.language || "en",
        isVerified: false,
        ...userData
      };
      setCurrentUser(user);
      localStorage.setItem("serviceHub_user", JSON.stringify(user));
    } catch (error) {
      console.error("Sign up error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("serviceHub_user");
  };

  const updateUser = (userData: Partial<User>) => {
    if (currentUser) {
      const updatedUser = { ...currentUser, ...userData };
      setCurrentUser(updatedUser);
      localStorage.setItem("serviceHub_user", JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ 
      currentUser, 
      signIn, 
      signUp, 
      signOut, 
      updateUser, 
      isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
};