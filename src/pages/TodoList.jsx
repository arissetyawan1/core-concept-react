// import components to page file
import Paper from "../component/paper";
import Header from "../component/header";
import TodoForm from "../component/todoform";
import Todos from "../component/todos";
import { useState } from "react";

const TodoList = () => {
  // set State untuk membuat data todo
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    const addedValueTodo = [...todos, { text: value }];

    setTodos(addedValueTodo);
  };
  return (
    <Paper>
      <Header />
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
