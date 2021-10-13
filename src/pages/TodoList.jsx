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
      text: "Belajar React Js",
      isCompleted: false,
    },
  ]);

  const addTodo = (value) => {
    const addedValueTodo = [...todos, { text: value }];

    setTodos(addedValueTodo);
  };

  // set Toggle Add Button
  const [showAddBtn, setShowAddBtn] = useState(false);

  const funcShowAddBtn = () => setShowAddBtn(!showAddBtn);

  //complete react course
  const completeTodo = (index) => {
    const addTodo = [...todos];

    addTodo[index].isCompleted = !addTodo[index].isCompleted;
    setTodos(addTodo);
  };

  return (
    <Paper>
      <Header showAddBtn={funcShowAddBtn} showAddState={showAddBtn} />
      <TodoForm addTodo={addTodo} showAddValue={showAddBtn} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
