import { useContext, createContext, useState } from "react";

export const Contextuse = createContext();

export const ContextArea = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <Contextuse.Provider value={{ open, setOpen }}>
      {children}
    </Contextuse.Provider>
  );
};

export const useGlobalAreaContext = () => {
  return useContext(Contextuse);
};
