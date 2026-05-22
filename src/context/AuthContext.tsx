import { createContext, useContext, useMemo, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  email: string | null;
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState<string | null>(null);

  const login = (nextEmail: string, _password: string) => {
    setEmail(nextEmail.trim());
  };

  const register = (nextEmail: string, _password: string) => {
    setEmail(nextEmail.trim());
  };

  const logout = () => setEmail(null);

  const value = useMemo(
    () => ({ isAuthenticated: Boolean(email), email, login, register, logout }),
    [email],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth должен использоваться внутри AuthProvider');
  return context;
}
