import React from "react";
import { useCustomization } from "./context/CustomizationContext";
import { customizationData } from "../data/CustomizationData";

const BrandSelection = () => {
  const { customization, updateCustomization } = useCustomization();

  const handleBrandChange = (event) => {
    const selectedBrand = event.target.value;
    const selectedBrandData = customizationData.brands.find(brand => brand.name === selectedBrand);
    updateCustomization("brand", selectedBrand, selectedBrandData?.cases[0].image || "");
    updateCustomization("case", null);
    updateCustomization("size", null);
    updateCustomization("band", null);
  };

  return (
    <div className="section">
      <h2>Select Brand</h2>
      <select
        value={customization.brand || ""}
        onChange={handleBrandChange}
        className="dropdown"
      >
        <option value="" disabled>
          Collections
        </option>
        {customizationData.brands.map((brand) => (
          <option key={brand.name} value={brand.name}>
            {brand.name}
          </option>
        ))}
      </select>
      {customization.brand && (
        <div className="selected-brand">
          <h3>Selected Brand:</h3>
          <p>{customization.brand}</p>
        </div>
      )}
    </div>
  );
};

export default BrandSelection;
