import React from "react";
import { useCustomization } from "./context/CustomizationContext";

const SaveAndShare = () => {
  const { customization } = useCustomization();

  const handleSave = () => {
    // Logic to save customization
  };

  const handleShare = () => {
    const shareableLink = `${window.location.origin}/?customization=${encodeURIComponent(JSON.stringify(customization))}`;
    navigator.clipboard.writeText(shareableLink).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  return (
    <div className="section">
      <button onClick={handleSave}>Save</button>
      <button onClick={handleShare}>Share</button>
    </div>
  );
};

export default SaveAndShare;
