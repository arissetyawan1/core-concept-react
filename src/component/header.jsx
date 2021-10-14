import React from "react";
import Button from "./button";
const Header = ({ showAddBtn, showAddState, clearTodos }) => {
  return (
    <section className="header">
      {/* baris di bawah ini merupakan implementasi dari atom komponen */}
      <Button text={showAddState ? "Finish" : "Add"} onClick={showAddBtn} />
      <h1 className="header-title">Todo List</h1>
      {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> */}

      {/* implementasi atom component */}
      <Button text="clear" onClick={clearTodos} color="red" />
    </section>
  );
};
export default Header;
