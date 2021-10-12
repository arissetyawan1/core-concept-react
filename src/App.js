import "./App.css";
// import compoents
import Paper from "./component/paper";

function App() {
  return (
    <div className="App">
      <Paper>
        <section className="header">
          <button className="header-btn black-color">Add</button>
          <h1 className="header-title">Todo List</h1>
          <button className="header-btn main-red-color">Clear</button>
        </section>

        <section className="add">
          <form action="" className="add-form">
            <input type="text" className="add-input" />
            <button className="add-btn black-color">Add</button>
          </form>
        </section>

        <section className="todos">
          <div className="todo">
            <span className="todo-text">Learning React Js</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React Js</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React Js</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React Js</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React Js</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React Js</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React Js</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React Js</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React Js</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React Js</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React Js</span>
          </div>
        </section>
      </Paper>
    </div>
  );
}

export default App;
