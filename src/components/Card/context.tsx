"use client"

import { createContext, useContext, ReactNode } from "react";

interface CardContextType {
  textCentre: boolean;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider: React.FC<{ children: ReactNode; textCentre: boolean }> = ({ children, textCentre }) => {
  return (
    <CardContext.Provider value={{ textCentre }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error('useCardContext must be used within a CardProvider');
  }
  return context;
};