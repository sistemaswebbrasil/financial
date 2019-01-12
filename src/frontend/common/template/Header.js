import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <Link to="/" className="logo">
        <span className="logo-mini">
          <b>F</b>$
        </span>
        <span className="logo-lg">
          <i className="fa fa-money" />
          <b> Financial Teste</b> $
        </span>
      </Link>
      <nav className="navbar navbar-static-top">
        <a className="sidebar-toggle" data-toggle="offcanvas" />
      </nav>
    </header>
  );
};

export default Header;
