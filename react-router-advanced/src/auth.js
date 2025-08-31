
// Simple fake authentication (for demo)
// export const fakeAuth = {
//   isAuthenticated: false,
//   login(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // mimic async login
//   },
//   logout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100); // mimic async logout
//   },
// };
// src/hooks/useAuth.js
import { useState, useEffect } from "react";
import { fakeAuth } from "../components/fakeAuth"; // adjust path if needed

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(fakeAuth.isAuthenticated);

  // Keep state in sync if fakeAuth changes externally
  useEffect(() => {
    setIsAuthenticated(fakeAuth.isAuthenticated);
  }, []);

  const login = (cb) => fakeAuth.login(() => {
    setIsAuthenticated(true);
    cb && cb();
  });

  const logout = (cb) => fakeAuth.logout(() => {
    setIsAuthenticated(false);
    cb && cb();
  });

  return { isAuthenticated, login, logout };
};

export default useAuth;
