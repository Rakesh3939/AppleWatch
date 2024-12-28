import React from "react";
import { useCustomization } from "./context/CustomizationContext";

const Preview = () => {
  const { customization } = useCustomization();

  return (
    <div className="section preview">
      <h2>Preview</h2>
      {customization.previewImage && <img src={customization.previewImage} alt="Preview" />}
      <div className="preview-details">
        <p><strong>Brand:</strong> {customization.brand || "None"}</p>
        <p><strong>Case:</strong> {customization.case || "None"}</p>
        <p><strong>Size:</strong> {customization.size || "None"}</p>
        <p><strong>Band:</strong> {customization.band || "None"}</p>
        <p><strong>Price:</strong> ${customization.price}</p>
      </div>
    </div>
  );
};

export default Preview;
