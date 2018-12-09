import React from "react";
import { Link } from "react-router-dom";

const MenuItem = props => {
  return (
    <li>
      <Link to={props.path.toString()} replace>
        <i className={`fa fa-${props.icon}`} /> {props.label}
      </Link>
    </li>
  );
};

export default MenuItem;
