import React, { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name,setName] = useState("")

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout,name,setName }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
