import React, { createContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
