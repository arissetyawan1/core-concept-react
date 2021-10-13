const Todo = ({ text, completeTodo, index, isCompletedTodo }) => {
  return (
    <div className="todo" onClick={() => completeTodo(index)}>
      <span
        className="todo-text"
        style={{ textDecoration: isCompletedTodo ? "line-through" : "initial" }}
      >
        {text}
      </span>
    </div>
  );
};

export default Todo;
