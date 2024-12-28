import React, { useState } from "react";
import { useCustomization } from "./context/CustomizationContext";
import { customizationData } from "../data/CustomizationData";
import '../App.css'

const CaseSelection = () => {
  const { customization, updateCustomization } = useCustomization();
  const [selectedCase, setSelectedCase] = useState(null);

  const selectedBrandData = customizationData.brands.find(
    (brand) => brand.name === customization.brand
  );

  if (!selectedBrandData) return null; // Return null instead of a message

  const handleCaseClick = (caseOption) => {
    const isSelected = selectedCase === caseOption.name;
    setSelectedCase(isSelected ? null : caseOption.name);
    updateCustomization("case", isSelected ? null : caseOption.name, caseOption.image);
  };

  return (
    <div className="section">
      <h2>Select Case</h2>
      <div className="options">
        {selectedBrandData.cases.map((caseOption) => (
          <div
            key={caseOption.id}
            className={`option ${customization.case === caseOption.name ? "selected" : ""}`}
          >
            <button onClick={() => handleCaseClick(caseOption)} className="btn-primary">
              {caseOption.name}
            </button>
            {selectedCase === caseOption.name && (
              <img src={caseOption.image} className="image" alt={caseOption.name} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseSelection;
