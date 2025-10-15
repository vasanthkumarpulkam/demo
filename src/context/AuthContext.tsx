import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthState } from '../types/user';
import { storage, STORAGE_KEYS } from '../utils/localStorage';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string, role: 'customer' | 'provider') => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });

  useEffect(() => {
    // Load user from localStorage on mount
    const storedUser = storage.get<User>(STORAGE_KEYS.AUTH_USER);
    if (storedUser) {
      setAuthState({
        user: storedUser,
        isAuthenticated: true,
        isLoading: false
      });
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (email: string, _password: string) => {
    // Mock login - replace with actual API call
    const mockUser: User = {
      id: '1',
      email,
      name: 'Demo User',
      role: 'customer',
      joinedDate: new Date().toISOString(),
      verified: true
    };

    storage.set(STORAGE_KEYS.AUTH_USER, mockUser);
    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false
    });
  };

  const signup = async (email: string, _password: string, name: string, role: 'customer' | 'provider') => {
    // Mock signup - replace with actual API call
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      role,
      joinedDate: new Date().toISOString(),
      verified: false
    };

    storage.set(STORAGE_KEYS.AUTH_USER, mockUser);
    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false
    });
  };

  const logout = () => {
    storage.remove(STORAGE_KEYS.AUTH_USER);
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
  };

  const updateUser = (updates: Partial<User>) => {
    if (!authState.user) return;
    
    const updatedUser = { ...authState.user, ...updates };
    storage.set(STORAGE_KEYS.AUTH_USER, updatedUser);
    setAuthState(prev => ({
      ...prev,
      user: updatedUser
    }));
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, signup, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
