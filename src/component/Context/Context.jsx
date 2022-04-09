import React, { useContext, useState } from "react";

const HamburgerContext = React.createContext();
const HamburgerToggleContext = React.createContext();

const DarkModeContext = React.createContext();
const DarkModeToggleContext = React.createContext();

export function useHamburger() {
  return useContext(HamburgerContext);
}

export function useToggleHamburger() {
  return useContext(HamburgerToggleContext);
}

export function useColor() {
  return useContext(DarkModeContext);
}

export function useToggleColor() {
  return useContext(DarkModeToggleContext);
}

export function HamburgerProvider({ children }) {
  const [openHamburger, setOpenHamburger] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleHamburger() {
    setOpenHamburger(!openHamburger);
  }

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <HamburgerContext.Provider value={openHamburger}>
      <HamburgerToggleContext.Provider value={toggleHamburger}>
        <DarkModeContext.Provider value={isDarkMode}>
          <DarkModeToggleContext.Provider value={toggleDarkMode}>
            {children}
          </DarkModeToggleContext.Provider>
        </DarkModeContext.Provider>
      </HamburgerToggleContext.Provider>
    </HamburgerContext.Provider>
  );
}
