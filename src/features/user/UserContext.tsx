import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { supabase } from "@/lib/supabase";

// User shape
type User = {
  name: string;
};

// Context types
type UserContextType = {
  user: User | null;
  login: (name: string) => void;
  logout: () => void;
};

// Main context
const UserContext = createContext<UserContextType | null>(null);

// Provider wrapper
export function UserProvider({ children }: { children: ReactNode }) {
  // User state
  const [user, setUser] = useState<User | null>(null);

  // Login function
  const login = (name: string) => {
    setUser({ name });
  };

  // Logout function
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  // Session check
  useEffect(() => {
    // Check current session
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      // User exists
      if (data.session?.user) {
        setUser({
          name: data.session.user.user_metadata?.name ?? "Ivan",
        });
      } else {
        setUser(null);
      }
    };

    checkSession();
  }, []);

  // Provider return
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook
export function useUser() {
  const context = useContext(UserContext);

  // Provider safety
  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }

  return context;
}