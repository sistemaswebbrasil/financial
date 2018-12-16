import React, { Component } from "react";
import { selectSkin } from "./Skin/skinActions";
import { NavDropdown, MenuItem } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ChangeSkin = props => {
  const { selected, availables } = props.skin;
  const { selectSkin } = props;
  return (
    <NavDropdown eventKey={3} title={selected} id="basic-nav-dropdown">
      {availables.map((item, index) => (
        <MenuItem key={index} eventKey={index} onClick={() => selectSkin(item)}>
          {item}
        </MenuItem>
      ))}
    </NavDropdown>
  );
};

const mapStateToProps = state => ({ skin: state.skin });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectSkin }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeSkin);
