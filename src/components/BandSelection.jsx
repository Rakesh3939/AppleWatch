import React, { useState } from "react";
import { useCustomization } from "./context/CustomizationContext";
import { customizationData } from "../data/CustomizationData"; // Ensure the correct import path

const BandSelection = () => {
  const { customization, updateCustomization } = useCustomization();
  const [selectedBand, setSelectedBand] = useState(null);

  const selectedBrandData = customizationData.brands.find(
    (brand) => brand.name === customization.brand
  );

  if (!selectedBrandData) return null; // Return null instead of a message

  const handleBandClick = (bandOption) => {
    setSelectedBand(bandOption);
    updateCustomization("band", bandOption.name, bandOption.image);
  };

  const handleAddToCart = () => {
    updateCustomization("cart", [...customization.cart, selectedBand]);
  };

  return (
    <div className="section">
      <h2>Select Band</h2>
      <div className="options">
        {selectedBrandData.bands.map((bandOption) => (
          <div key={bandOption.id} className="option">
            <button 
              onClick={() => handleBandClick(bandOption)} 
              className="btn-primary"
            >
              {bandOption.type} - ₹{bandOption.price}
            </button>
          </div>
        ))}
      </div>
      {selectedBand && (
        <div className="selected-band">
          <img src={selectedBand.image}  alt={selectedBand.name} />
          <p>Price: ₹{selectedBand.price}</p>
          <button onClick={handleAddToCart} className="btn-primary">Add to Cart</button>
        </div>
      )}
    </div>
  );
};

export default BandSelection;
