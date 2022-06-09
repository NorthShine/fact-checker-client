import React, { createContext, useMemo } from 'react';
import { AuthRequestStatus } from 'types';
import { useAppSelector } from '../hooks/useAppSelector';

interface Context {
  isAuth: boolean;
  status: AuthRequestStatus;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const initialAuthContext: Context = {
  isAuth: false,
  status: 'idle'
};

export const AuthContext = createContext<Context>(initialAuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { token, status } = useAppSelector((state) => state.auth);

  const context = useMemo(() => ({
    isAuth: typeof token === 'string',
    status
  }), []);

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
