// import components to page file
import Paper from "../component/paper";
import Header from "../component/header";
import TodoForm from "../component/todoform";
import Todos from "../component/todos";
import { useState } from "react";

const TodoList = () => {
  // set State untuk membuat data todo
  const [todos, setTodos] = useState([
    {
      text: "Belajar React 1",
    },
    {
      text: "Belajar Component React",
    },
    {
      text: "Belajar Layouting React",
    },
    {
      text: "Belajar State React",
    },
    {
      text: "Belajar Stateless React",
    }
  ]);
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
