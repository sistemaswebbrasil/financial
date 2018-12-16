import React from "react";
import ChangeSkin from "./ChangeSkin";

const CustomMenu = () => {
  return (
    <div className="navbar-custom-menu">
      <ul className="nav navbar-nav">
        <ChangeSkin />
      </ul>
    </div>
  );
};

export default CustomMenu;
