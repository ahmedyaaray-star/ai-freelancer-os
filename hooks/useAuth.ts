import { useAppStore } from "@/store";
import { User } from "@/types";

export const useAuth = () => {
  const { user, isAuthenticated, setUser, logout } = useAppStore();

  const login = async (email: string, password: string) => {
    // Mock login - replace with actual API call
    const mockUser: User = {
      id: "user_123",
      email,
      name: email.split("@")[0],
      role: "user",
      planId: "pro",
      createdAt: new Date(),
      updatedAt: new Date(),
      avatar: `https://avatar.vercel.sh/${email}`,
    };
    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));
  };

  const signup = async (email: string, password: string, name: string) => {
    // Mock signup - replace with actual API call
    const mockUser: User = {
      id: `user_${Date.now()}`,
      email,
      name,
      role: "user",
      planId: "free",
      createdAt: new Date(),
      updatedAt: new Date(),
      avatar: `https://avatar.vercel.sh/${email}`,
    };
    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("user");
  };

  return {
    user,
    isAuthenticated,
    login,
    signup,
    logout: handleLogout,
  };
};
