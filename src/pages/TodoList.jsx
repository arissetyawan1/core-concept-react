// import components to page file
import Paper from "../component/paper";
import Header from "../component/header";
import TodoForm from "../component/todoform";
import Todos from "../component/todos";

const TodoList = () => {
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos />
    </Paper>
  );
};

export default TodoList;
