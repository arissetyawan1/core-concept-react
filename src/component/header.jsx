import React from "react";

const Header = ({ showAddBtn }) => {
  return (
    <section className="header">
      <button className="header-btn black-color" onClick={showAddBtn}>
        Add
      </button>
      <h1 className="header-title">Todo List</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
};
export default Header;
