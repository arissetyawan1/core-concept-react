import React from "react";
import "../index.css";
import propTypes from "prop-types";

const Header = () => {
  return (
    <div className="header">
      <section className="header">
        <button className="header-btn black-color">Add</button>
        <h1 className="header-title">Todo List</h1>
        <button className="header-btn main-red-color">Clear</button>
      </section>
    </div>
  );
};

Header.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};
export default Header;
