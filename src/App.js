import "./App.css";
// import compoents
import Paper from "./component/paper";
import Header from "./component/header";
function App() {
  return (
    <div className="App">
      <Paper>
        <Header/> 
        

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
