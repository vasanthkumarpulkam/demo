import { createContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthState } from '../types/user';
import { storage, STORAGE_KEYS } from '../utils/localStorage';

interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string, role: 'customer' | 'provider') => Promise<void>;
  signOut: () => void;
  updateUser: (user: Partial<User>) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = storage.get<User>(STORAGE_KEYS.USER);
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

  const signIn = async (email: string, password: string) => {
    // TODO: Implement actual authentication with Firebase
    // Mock implementation for now
    const mockUser: User = {
      id: '1',
      email,
      name: 'John Doe',
      role: 'customer',
      joinedDate: new Date().toISOString()
    };

    storage.set(STORAGE_KEYS.USER, mockUser);
    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false
    });
  };

  const signUp = async (email: string, password: string, name: string, role: 'customer' | 'provider') => {
    // TODO: Implement actual registration with Firebase
    const mockUser: User = {
      id: Date.now().toString(),
      email,
      name,
      role,
      joinedDate: new Date().toISOString()
    };

    storage.set(STORAGE_KEYS.USER, mockUser);
    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false
    });
  };

  const signOut = () => {
    storage.remove(STORAGE_KEYS.USER);
    storage.remove(STORAGE_KEYS.AUTH_TOKEN);
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
  };

  const updateUser = (updates: Partial<User>) => {
    if (authState.user) {
      const updatedUser = { ...authState.user, ...updates };
      storage.set(STORAGE_KEYS.USER, updatedUser);
      setAuthState(prev => ({
        ...prev,
        user: updatedUser
      }));
    }
  };

  return (
    <AuthContext.Provider value={{ ...authState, signIn, signUp, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
