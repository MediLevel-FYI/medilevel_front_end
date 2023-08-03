"use client";

import { createContext, useReducer } from "react";

type MobileMenuStateType = {
  isOpen: boolean;
};

const initialMobileMenuState: MobileMenuStateType = {
  isOpen: false,
};

const mobileMenuReducer = (state: MobileMenuStateType) => {
  return { isOpen: !state.isOpen };
};

export const MobileMenuContext = createContext<{
  state: MobileMenuStateType;
  toggleMobileMenu: () => void;
}>({
  state: initialMobileMenuState,
  toggleMobileMenu: () => null,
});

export const MobileMenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(mobileMenuReducer, initialMobileMenuState);

  const toggleMobileMenu = () => {
    dispatch();
  };

  return (
    <MobileMenuContext.Provider value={{ state, toggleMobileMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};
