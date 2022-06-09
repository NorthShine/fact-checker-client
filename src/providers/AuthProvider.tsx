import React, { createContext, useMemo } from 'react';
import { useAppSelector } from '../hooks/useAppSelector';

interface Context {
  isAuth: boolean;
  requesting: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const initialAuthContext: Context = {
  isAuth: false,
  requesting: false
};

export const AuthContext = createContext<Context>(initialAuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { token, requesting } = useAppSelector((state) => state.auth);

  const context = useMemo(() => ({
    isAuth: typeof token === 'string',
    requesting
  }), []);

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
