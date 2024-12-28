import React, { createContext, useContext, useState } from "react";

const CustomizationContext = createContext();

export const useCustomization = () => useContext(CustomizationContext);

export const CustomizationProvider = ({ children }) => {
  const [customization, setCustomization] = useState({
    brand: null,
    case: null,
    size: null,
    band: null,
    cart: [],
  });

  const updateCustomization = (key, value) => {
    setCustomization((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <CustomizationContext.Provider value={{ customization, updateCustomization }}>
      {children}
    </CustomizationContext.Provider>
  );
};
