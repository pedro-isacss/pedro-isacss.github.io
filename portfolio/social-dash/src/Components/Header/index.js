import React, { useState } from "react";
import "./styles.css";

function Header(props) {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className="header-container">
      <div className="info-container">
        <h1>Social Media Dashboard</h1>
        <span>Total Followers: 23,450</span>
      </div>
      <div className="darkmode-container">
        <label>
          Dark Mode
          <input
            type="checkbox"
            onChange={(e) => {
              setDarkmode(!darkmode);
              props.darkChange(!darkmode);
            }}
          />
          <span></span>
        </label>
      </div>
    </div>
  );
}

export default Header;
