import Todo from "./todo";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
      {todos.map((todos, index) => {
        return (
          <Todo
            key={index}
            text={todos.text}
            isCompletedTodo={todos.isCompleted}
            completeTodo={completeTodo}
            index={index}
          />
        );
      })}
    </section>
  );
};

export default Todos;
