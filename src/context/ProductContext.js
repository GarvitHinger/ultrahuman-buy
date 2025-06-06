import React, { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();




export const ProductProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState("Aster Black");

  const [hasKit, setHasKit] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const [charger, setCharger] = useState("regular");

  const [tradeOption, setTradeOption] = useState("no-trade");
  const [selectedRing, setSelectedRing] = useState("");
  const [deduction, setDeduction] = useState(0);

  const [engraving, setEngraving] = useState("none");
  const [engravingText, setEngravingText] = useState("");

  const [powerPlug, setPowerPlug] = useState("none");

  const [protection, setProtection] = useState("none");

  useEffect(() => {
    console.log("Updated Product Options:");
    console.log({
      selectedColor,
      hasKit,
      selectedSize,
      charger,
      tradeOption,
      selectedRing,
      deduction,
      engraving,
      engravingText,
      powerPlug,
      protection,
    });
  }, [
    selectedColor,
    hasKit,
    selectedSize,
    charger,
    tradeOption,
    deduction,
    selectedRing,
    engraving,
    engravingText,
    powerPlug,
    protection,
  ]);


  return (
    <ProductContext.Provider
      value={{
        selectedColor, setSelectedColor,
        hasKit, setHasKit,
        selectedSize, setSelectedSize,
        charger, setCharger,
        tradeOption, setTradeOption,
        deduction,setDeduction,
        selectedRing, setSelectedRing,
        engraving, setEngraving,
        engravingText, setEngravingText,
        powerPlug, setPowerPlug,
        protection, setProtection,
        // calculateTotal
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);