import Todo from "./todo";

const Todos = () => {
  const todo = [
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
    },
    {
      text: "Mapping React",
    },
    {
      text: "React is awesome",
    },
    {
      text: "Beautie of react",
    },
    {
      text: "Crawkkk crawkk",
    },
  ];
  return (
    <section className="todos">
      {todo.map((index) => {
        return <Todo text={index.text} />;
      })}
    </section>
  );
};



export default Todos;
