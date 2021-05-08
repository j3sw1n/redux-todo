import "./App.css";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="app">
      <h1>Todo app</h1>
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
