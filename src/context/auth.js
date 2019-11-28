import { createContext, useContext } from 'react';

export const AuthContext = createContext(localStorage.getItem("tokens"));

export function useAuth() {
  return useContext(AuthContext);
}