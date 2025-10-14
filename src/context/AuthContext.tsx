import React, { createContext, useState, useEffect, useContext } from "react";
import { User } from "../types/user";

interface AuthContextType {
  currentUser: User | null;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("serviceHub_user");
    if (stored) setCurrentUser(JSON.parse(stored));
  }, []);

  const signIn = (email: string) => {
    const user: User = {
      uid: `user_${Date.now()}`,
      email,
      displayName: email.split("@")[0],
      role: "customer",
      language: "en"
    };
    setCurrentUser(user);
    localStorage.setItem("serviceHub_user", JSON.stringify(user));
  };

  const signOut = () => {
    localStorage.removeItem("serviceHub_user");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};