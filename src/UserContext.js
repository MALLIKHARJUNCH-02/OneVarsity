import React, { createContext, useState } from "react";

// create the user context
export const UserContext = createContext();

// provider component to wrap app and share user data
export function UserProvider({ children }) {
  // hold user info, starts with null (no user)
  const [user, setUser] = useState(null);

  // return provider with user state and updater
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
