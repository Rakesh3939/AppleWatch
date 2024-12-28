import React from "react";
import BrandSelection from "../components/BrandSelection";
import CaseSelection from "../components/CaseSelection";
import SizeSelection from "../components/SizeSelection";
import BandSelection from "../components/BandSelection";
import Preview from "../components/Preview";
import SaveAndShare from "../components/SaveAndShare";
import Cart from "../components/Cart"; // Add Cart component

const CustomizationPage = () => {
  return (
    <div>
      <BrandSelection />
      <CaseSelection />
      <SizeSelection />
      <BandSelection />
      <Preview />
      <Cart /> {/* Add Cart component */}
      <SaveAndShare />
    </div>
  );
};

export default CustomizationPage;
