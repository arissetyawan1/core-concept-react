import "./App.css";
// import compoents
import Paper from "./component/paper";
import Header from "./component/header";
import TodoForm from "./component/todoform";
import Todos from "./component/todos";
function App() {
  return (
    <div className="App">
      <Paper>
        <Header />
        <TodoForm />
        <Todos />
      </Paper>
    </div>
  );
}

export default App;
