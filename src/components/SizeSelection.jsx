import React, { useState } from "react";
import { useCustomization } from "./context/CustomizationContext";
import { customizationData } from "../data/CustomizationData";

const SizeSelection = () => {
  const { customization, updateCustomization } = useCustomization();
  const [selectedSize, setSelectedSize] = useState(null);

  const selectedBrandData = customizationData.brands.find(
    (brand) => brand.name === customization.brand
  );

  if (!selectedBrandData) return null; // Return null instead of a message

  const handleSizeClick = (sizeOption) => {
    const isSelected = selectedSize === sizeOption.name;
    setSelectedSize(isSelected ? null : sizeOption.name);
    updateCustomization("size", isSelected ? null : sizeOption.name, sizeOption.image);
  };

  return (
    <div className="section">
      <h2>Select Size</h2>
      <div className="options">
        {selectedBrandData.sizes.map((sizeOption) => (
          <div
            key={sizeOption.id}
            className={`option ${customization.size === sizeOption.name ? "selected" : ""}`}
          >
            <button onClick={() => handleSizeClick(sizeOption)} className="btn-primary">
              {sizeOption.name}
            </button>
            {selectedSize === sizeOption.name && (
              <img src={sizeOption.image} alt={sizeOption.name} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeSelection;
