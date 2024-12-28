import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Apple Watch Studio</h1>
      <Link to="/customize">
        <button className="start-button">Start Customizing</button>
      </Link>
    </div>
  );
};

export default LandingPage;
