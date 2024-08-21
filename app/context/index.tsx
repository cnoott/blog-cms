'use client';

import { createContext, useState, useEffect, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';
import { UserType } from '../models';
import { logoutUser } from '../(site)/auth/actions';
import { useRouter } from 'next/navigation';

const AuthContext = createContext<UserType>(null);

const LOCAL_STORAGE_KEY = 'auth-token';

export const AuthProvider = ({ children } : {
  children: React.ReactNode;
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserType | null>(null);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (token) {
      setToken(token);
      const decodedUser = jwtDecode(token);
      console.log('DECODED USER', decodedUser);
      setUser(decodedUser);
    }
  }, []);

  const login = (newToken: string) => {
    setToken(newToken);
    const { id, name } = jwtDecode(newToken);
    setUser({id, name});
    localStorage.setItem(LOCAL_STORAGE_KEY, newToken);
    router.push('/dashboard');
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    logoutUser();
    router.push('/auth/login');
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
