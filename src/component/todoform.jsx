import { useState } from "react";

const TodoForm = ({ addTodo, showAddValue }) => {
  const [value, setValue] = useState("");

  const handlerFormInput = (e) => {
    e.preventDefault();
    if (!value) {
      alert("Please insert a value input!!!");
    } else {
      // addTodo merupakan sebuah function props yang akan menerima nilai dari inputan yang akan dimasukan ke dalam list todo
      addTodo(value);
      alert(value);
      setValue("");
    }
  };

  if (showAddValue) {
    return (
      <section className="add">
        <form action="" className="add-form" onSubmit={handlerFormInput}>
          <input
            type="text"
            className="add-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="add-btn black-color">Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

export default TodoForm;
